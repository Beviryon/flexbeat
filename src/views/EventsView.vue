<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-indigo via-cacao to-raspberry text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cacao/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Nos Événements
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Découvrez et participez à nos événements sportifs exceptionnels
          </p>
          
          <!-- Stats Hero -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">{{ upcomingEvents.length }}</div>
              <div class="text-white/80">Événements à venir</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div class="text-white/80">Participants</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div class="text-white/80">Plein air</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center space-x-2 bg-cacao/10 text-cacao px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-cacao rounded-full"></span>
            <span class="text-sm font-semibold">Événements FlexBeat</span>
          </div>
          <p class="text-xl text-gray-700 leading-relaxed">
            FlexBeat organise régulièrement des événements sportifs pour rassembler 
            notre communauté et créer des moments inoubliables. Découvrez nos 
            prochains événements et inscrivez-vous !
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline des Événements -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-72 h-72 bg-cacao/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-raspberry/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-20">
          <h2 class="section-title">Événements à Venir</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Marquez votre calendrier et rejoignez-nous pour ces moments sportifs exceptionnels
          </p>
        </div>
        
        <!-- Timeline -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cacao via-raspberry to-sunny"></div>
          
          <div class="space-y-16">
            <div 
              v-for="(event, index) in upcomingEvents" 
              :key="event.id"
              class="relative animate-slide-up"
              :style="{ animationDelay: `${index * 200}ms` }"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-cacao rounded-full shadow-lg z-10"></div>
              
              <!-- Event Card -->
              <div class="relative" :class="index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'">
                <div class="group relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div class="p-8">
                      <!-- Event Header -->
                      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div class="flex-1">
                          <div class="flex items-center space-x-3 mb-3">
                            <span 
                              :class="[
                                'px-3 py-1 text-xs font-semibold rounded-full',
                                event.registrationRequired 
                                  ? 'bg-raspberry/10 text-raspberry' 
                                  : 'bg-sunny/10 text-sunny'
                              ]"
                            >
                              {{ event.registrationRequired ? 'Inscription requise' : 'Gratuit' }}
                            </span>
                            <span class="px-3 py-1 bg-cacao/10 text-cacao text-xs font-semibold rounded-full">
                              {{ event.category }}
                            </span>
                          </div>
                          <h3 class="text-2xl font-bold text-cacao mb-2 group-hover:text-indigo transition-colors duration-300">
                            {{ event.title }}
                          </h3>
                          <p class="text-gray-600 leading-relaxed">
                            {{ event.description }}
                          </p>
                        </div>
                        
                        <!-- Event Image -->
                        <div class="mt-4 lg:mt-0 lg:ml-6">
                          <div class="w-32 h-24 rounded-2xl overflow-hidden shadow-lg">
                            <img 
                              :src="event.image" 
                              :alt="event.title"
                              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            >
                          </div>
                        </div>
                      </div>
                      
                      <!-- Event Details -->
                      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-cacao/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-cacao" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <div class="text-sm text-gray-500">Date</div>
                            <div class="font-semibold text-gray-900">{{ formatDate(event.date) }}</div>
                          </div>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-raspberry/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-raspberry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <div class="text-sm text-gray-500">Heure</div>
                            <div class="font-semibold text-gray-900">{{ event.time }}</div>
                          </div>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-sunny/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-sunny" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <div class="text-sm text-gray-500">Lieu</div>
                            <div class="font-semibold text-gray-900">{{ event.location }}</div>
                          </div>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <div class="text-sm text-gray-500">Participants</div>
                            <div class="font-semibold text-gray-900">{{ event.maxParticipants }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Event Actions -->
                      <div class="flex flex-col sm:flex-row gap-3">
                        <button 
                          v-if="event.registrationRequired"
                          @click="openRegistrationModal(event)"
                          class="btn-primary flex-1 group-hover:bg-indigo group-hover:border-indigo transition-all duration-300"
                        >
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                          S'inscrire maintenant
                        </button>
                        <button 
                          v-else
                          @click="addToCalendar(event)"
                          class="btn-accent flex-1 group-hover:bg-sunny group-hover:border-sunny transition-all duration-300"
                        >
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          Ajouter au calendrier
                        </button>
                        
                        <button 
                          @click="showEventDetails(event)"
                          class="btn-secondary flex-1 group-hover:bg-gray-100 transition-all duration-300"
                        >
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Plus d'infos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Message si aucun événement -->
        <div v-if="upcomingEvents.length === 0" class="text-center py-20">
          <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-full flex items-center justify-center">
            <svg class="w-16 h-16 text-cacao" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-600 mb-4">Aucun événement à venir</h3>
          <p class="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Nous préparons de nouveaux événements passionnants. 
            Revenez bientôt pour les découvrir !
          </p>
          <router-link to="/contact" class="btn-primary text-lg px-8 py-4">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 bg-gradient-to-r from-raspberry via-cacao to-indigo text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Organisez votre propre événement
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
          Vous avez une idée d'événement sportif ? Nous sommes là pour vous aider 
          à le concrétiser et créer des moments inoubliables !
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
            Proposer un événement
          </router-link>
          <router-link to="/activities" class="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30">
            Voir nos activités
          </router-link>
        </div>
      </div>
    </section>

    <!-- Modal d'inscription -->
    <div 
      v-if="showRegistrationModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeRegistrationModal"
    >
      <div 
        class="bg-white rounded-3xl max-w-lg w-full p-8 animate-fade-in shadow-2xl"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              placeholder="Informations supplémentaires..."
            ></textarea>
          </div>
          
          <div class="flex space-x-3 pt-4">
            <button 
              type="button"
              @click="closeRegistrationModal"
              class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Annuler
            </button>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
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

const showEventDetails = (event) => {
  // Ici vous pouvez implémenter une modal ou une page détaillée pour l'événement
  console.log('Détails de l\'événement:', event)
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