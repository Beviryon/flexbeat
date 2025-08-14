<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cacao to-raspberry text-white overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Personne faisant des exercices" 
          class="w-full h-full object-cover opacity-50"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-cacao/80 to-raspberry/80"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span class="text-sunny">flex</span><span class="text-white">Beat</span>
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
            Le mouvement, c'est notre musique
          </p>
          <p class="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Association sportive à Brazzaville spécialisée dans le fitness, les activités culturelles et le cardio plein air. Rejoignez notre communauté active et transformez votre vie !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join"
              class="bg-white text-cacao hover:bg-gray-100 font-bold py-3 px- rounded-2xl transition-all duration-300 text-base"
            >
              Rejoindre FlexBeat
            </router-link>
            <router-link 
              to="/activities"
              class="border-2 border-white text-white hover:bg-white hover:text-cacao font-bold py-3 px-6 rounded-2xl transition-all duration-300 text-base"
            >
              Voir nos activités
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Activités Sportives & Culturelles -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-cacao/10 to-raspberry/10 text-cacao px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span class="w-2 h-2 bg-raspberry rounded-full"></span>
            Nos Activités
          </div>
          <h2 class="section-title mb-4">Activités Sportives & Culturelles</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Découvrez notre gamme d'activités variées pour tous les niveaux. 
            Chaque activité est conçue pour vous faire progresser dans un environnement convivial.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Fitness -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/5 via-indigo/5 to-cacao/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/20 to-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-indigo transition-colors duration-300">
                Fitness & Musculation
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Renforcez votre corps avec nos séances de fitness en plein air. 
                Programmes personnalisés pour tous les niveaux.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Samedi 8h-10h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Plein air
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-indigo font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cacao to-indigo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <!-- Club de Slam & Lecture -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/5 via-sunny/5 to-raspberry/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/20 to-sunny/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎭
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-raspberry transition-colors duration-300">
                Club de Slam & Lecture
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Exprimez votre créativité à travers la poésie et la lecture. 
                Découvrez l'art du slam et enrichissez votre culture.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Dimanche 15h-17h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Intérieur
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-sunny font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-raspberry to-sunny transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <!-- Cardio Plein Air -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/5 via-cacao/5 to-sunny/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/20 to-cacao/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-cacao rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🏃‍♂️
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-sunny transition-colors duration-300">
                Cardio Plein Air
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Améliorez votre endurance avec nos sessions cardio dynamiques. 
                Entraînements variés dans un cadre naturel stimulant.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Samedi 16h-18h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Plein air
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-sunny font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunny to-cacao transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="text-center mt-16">
          <div class="inline-block bg-gradient-to-r from-cacao to-raspberry p-1 rounded-2xl">
            <router-link 
              to="/activities" 
              class="bg-white text-cacao hover:text-raspberry font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 group hover:shadow-lg"
            >
              <span>Voir toutes nos activités</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
          <p class="text-gray-500 mt-4 text-sm">
            Rejoignez-nous et transformez votre vie avec FlexBeat
          </p>
        </div>
      </div>
    </section>

    <!-- PWA Install Button -->
    <PWAInstallButton />
  </div>
</template>

<script setup>
import PWAInstallButton from '../components/PWAInstallButton.vue'
</script>

<style scoped>
/* Styles pour l'image de fond */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>