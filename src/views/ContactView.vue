<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-sunny to-cacao text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-raspberry/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contactez-nous
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            Vous avez des questions sur nos activités, souhaitez nous rejoindre ou 
            simplement échanger ? N'hésitez pas à nous contacter ! Notre équipe 
            est là pour vous accompagner.
          </p>
        </div>
      </div>
    </section>

    <!-- Informations de contact -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Informations -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-cacao mb-6">
                Parlons de votre projet
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                Que vous soyez intéressé par nos activités, que vous ayez des questions 
                ou que vous souhaitiez organiser un événement, nous sommes là pour vous aider.
              </p>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-cacao rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-cacao mb-2">Notre adresse</h3>
                  <p class="text-gray-600">
                    Centre Culturel de Brazzaville<br>
                    Avenue de la Paix<br>
                    Brazzaville, Congo
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-raspberry rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-cacao mb-2">Téléphone</h3>
                  <p class="text-gray-600">
                    +242 06 XXX XX XX<br>
                    +242 05 XXX XX XX
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-sunny rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-cacao" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-cacao mb-2">Email</h3>
                  <p class="text-gray-600">
                    contact@flexbeat-congo.com<br>
                    info@flexbeat-congo.com
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-indigo rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-cacao mb-2">Horaires d'ouverture</h3>
                  <p class="text-gray-600">
                    Lundi - Vendredi : 8h00 - 20h00<br>
                    Samedi : 7h00 - 18h00<br>
                    Dimanche : 9h00 - 16h00
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carte -->
          <div class="relative">
            <div class="w-full h-96 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">🗺️</div>
                <p class="text-xl font-semibold">Carte interactive</p>
                <p class="text-white/80 mt-2">Intégration Google Maps</p>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4">
              <a 
                href="https://maps.google.com/?q=Brazzaville,Congo" 
                target="_blank"
                class="bg-white text-cacao px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire de contact -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Envoyez-nous un message</h2>
            <p class="section-subtitle">
              Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
            </p>
          </div>
          
          <form 
            ref="contactForm"
            action="https://formspree.io/f/xpzgwqjz"
            method="POST"
            class="space-y-6"
            @submit="handleFormSubmit"
          >
            <input type="hidden" name="type" value="contact">
            
            <!-- Informations personnelles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="Votre prénom"
                >
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="Votre nom"
                >
              </div>
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
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <select 
                id="subject" 
                name="subject" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
              >
                <option value="">Choisissez un sujet</option>
                <option value="information">Demande d'information</option>
                <option value="adhesion">Adhésion à l'association</option>
                <option value="evenement">Organisation d'événement</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                placeholder="Décrivez votre demande..."
              ></textarea>
            </div>
            
            <!-- Bouton d'envoi -->
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else">Envoyer le message</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Réseaux sociaux -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Suivez-nous sur les réseaux sociaux
        </h2>
        <p class="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
          Restez connecté avec FlexBeat et découvrez nos dernières actualités, 
          photos et événements en temps réel
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="#" 
            class="group bg-white/10 hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
          >
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Facebook</h3>
            <p class="text-white/80">
              Suivez nos actualités et événements en temps réel
            </p>
          </a>
          
          <a 
            href="#" 
            class="group bg-white/10 hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
          >
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">WhatsApp</h3>
            <p class="text-white/80">
              Contactez-nous directement pour des informations rapides
            </p>
          </a>
          
          <a 
            href="#" 
            class="group bg-white/10 hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
          >
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">TikTok</h3>
            <p class="text-white/80">
              Découvrez nos vidéos et challenges sportifs
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ rapide -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Questions fréquentes</h2>
          <p class="section-subtitle">
            Trouvez rapidement des réponses aux questions les plus courantes
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="card p-6">
            <h3 class="text-lg font-semibold text-cacao mb-3">
              Comment rejoindre FlexBeat ?
            </h3>
            <p class="text-gray-600">
              Remplissez simplement notre formulaire d'adhésion en ligne ou contactez-nous 
              directement. Nous vous accompagnerons dans toutes les étapes.
            </p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-lg font-semibold text-cacao mb-3">
              Quels sont les horaires des activités ?
            </h3>
            <p class="text-gray-600">
              Nos activités ont lieu du lundi au samedi à différents horaires. 
              Consultez notre page "Activités" pour tous les détails.
            </p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-lg font-semibold text-cacao mb-3">
              L'équipement est-il fourni ?
            </h3>
            <p class="text-gray-600">
              Oui, l'équipement spécifique est fourni par l'association. 
              Vous devez juste apporter votre tenue de sport et vos chaussures.
            </p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-lg font-semibold text-cacao mb-3">
              Puis-je essayer avant de m'engager ?
            </h3>
            <p class="text-gray-600">
              Absolument ! Nous proposons une séance d'essai gratuite. 
              Contactez-nous pour organiser votre première visite.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const contactForm = ref(null)

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
      alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
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