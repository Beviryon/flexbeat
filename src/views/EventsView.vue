<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-indigo to-cacao text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-raspberry/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nos Événements
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Découvrez et participez à nos événements sportifs exceptionnels
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            FlexBeat organise régulièrement des événements sportifs pour rassembler 
            notre communauté et créer des moments inoubliables. Découvrez nos 
            prochains événements et inscrivez-vous !
          </p>
        </div>
      </div>
    </section>

    <!-- Liste des Événements -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Événements à Venir</h2>
          <p class="section-subtitle">
            Marquez votre calendrier et rejoignez-nous pour ces moments sportifs exceptionnels
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="event in upcomingEvents" 
            :key="event.id"
            class="animate-slide-up"
          >
            <Card 
              :title="event.title"
              :description="event.description"
              :image="event.image"
              :badge="event.registrationRequired ? 'Inscription requise' : 'Gratuit'"
              :badge-type="event.registrationRequired ? 'secondary' : 'accent'"
              :metadata="[
                {
                  icon: 'CalendarIcon',
                  text: formatDate(event.date)
                },
                {
                  icon: 'ClockIcon',
                  text: event.time
                },
                {
                  icon: 'MapPinIcon',
                  text: event.location
                }
              ]"
            >
              <template #actions>
                <div class="flex flex-col space-y-2">
                  <button 
                    v-if="event.registrationRequired"
                    @click="openRegistrationModal(event)"
                    class="btn-primary w-full"
                  >
                    S'inscrire
                  </button>
                  <button 
                    v-else
                    @click="addToCalendar(event)"
                    class="btn-accent w-full"
                  >
                    Ajouter au calendrier
                  </button>
                </div>
              </template>
            </Card>
          </div>
        </div>
        
        <!-- Message si aucun événement -->
        <div v-if="upcomingEvents.length === 0" class="text-center py-16">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span class="text-4xl">📅</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-600 mb-4">Aucun événement à venir</h3>
          <p class="text-gray-500 mb-8">
            Nous préparons de nouveaux événements passionnants. 
            Revenez bientôt pour les découvrir !
          </p>
          <router-link to="/contact" class="btn-primary">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 bg-gradient-to-r from-raspberry to-sunny text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Organisez votre propre événement
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Vous avez une idée d'événement sportif ? Nous sommes là pour vous aider 
          à le concrétiser !
        </p>
        <router-link to="/contact" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
          Proposer un événement
        </router-link>
      </div>
    </section>

    <!-- Modal d'inscription -->
    <div 
      v-if="showRegistrationModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeRegistrationModal"
    >
      <div 
        class="bg-white rounded-2xl max-w-md w-full p-6 animate-fade-in"
        @click.stop
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-cacao">
            Inscription à {{ selectedEvent?.title }}
          </h3>
          <button 
            @click="closeRegistrationModal"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form 
          ref="registrationForm"
          action="https://formspree.io/f/xpzgwqjz"
          method="POST"
          class="space-y-4"
          @submit="handleFormSubmit"
        >
          <input type="hidden" name="event" :value="selectedEvent?.title">
          
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              placeholder="Votre nom complet"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              placeholder="votre@email.com"
            >
          </div>
          
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              placeholder="Votre numéro de téléphone"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message (optionnel)
            </label>
            <textarea 
              id="message" 
              name="message"
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              placeholder="Informations supplémentaires..."
            ></textarea>
          </div>
          
          <div class="flex space-x-3 pt-4">
            <button 
              type="button"
              @click="closeRegistrationModal"
              class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Annuler
            </button>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>S'inscrire</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main'
import Card from '../components/Card.vue'

const store = useMainStore()

const showRegistrationModal = ref(false)
const selectedEvent = ref(null)
const isSubmitting = ref(false)
const registrationForm = ref(null)

const upcomingEvents = computed(() => store.upcomingEvents)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const openRegistrationModal = (event) => {
  selectedEvent.value = event
  showRegistrationModal.value = true
}

const closeRegistrationModal = () => {
  showRegistrationModal.value = false
  selectedEvent.value = null
}

const addToCalendar = (event) => {
  const eventDate = new Date(event.date + ' ' + event.time)
  const calendarEvent = {
    title: event.title,
    start: eventDate.toISOString(),
    end: new Date(eventDate.getTime() + 2 * 60 * 60 * 1000).toISOString(), // +2h
    description: event.description,
    location: event.location
  }
  
  // Créer un lien pour ajouter à Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&dates=${calendarEvent.start.replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${calendarEvent.end.replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodeURIComponent(calendarEvent.location)}`
  
  window.open(googleCalendarUrl, '_blank')
}

const handleFormSubmit = async (event) => {
  event.preventDefault()
  isSubmitting.value = true
  
  try {
    const formData = new FormData(event.target)
    const response = await fetch('https://formspree.io/f/xpzgwqjz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      alert('Inscription envoyée avec succès ! Nous vous contacterons bientôt.')
      closeRegistrationModal()
      event.target.reset()
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    alert('Erreur lors de l\'envoi du formulaire. Veuillez réessayer.')
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 