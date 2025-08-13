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
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Twitter</h3>
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
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">LinkedIn</h3>
            <p class="text-white/80">
              Découvrez nos partenariats et opportunités professionnelles
            </p>
          </a>
          
          <a 
            href="#" 
            class="group bg-white/10 hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
          >
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Pinterest</h3>
            <p class="text-white/80">
              Explorez notre galerie photo et nos inspirations sportives
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