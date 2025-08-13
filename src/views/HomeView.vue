<template>
  <div class="min-h-screen">
    <!-- Hero Section Sportif -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background avec image sportive -->
      <div class="absolute inset-0 bg-gradient-to-br from-cacao/90 via-indigo/90 to-raspberry/90"></div>
      
      <!-- Image de fond sportive -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style="background-image: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop')"></div>
      
      <!-- Contenu principal -->
      <div class="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div class="animate-fade-in">
          <!-- Titre principal -->
          <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            <span class="text-sunny">flex</span><span class="text-white">Beat</span>
          </h1>
          
          <!-- Slogan -->
          <p class="text-2xl md:text-3xl mb-8 text-white/95 font-light tracking-wide">
            Le mouvement, c'est notre musique
          </p>
          
          <!-- Description sportive -->
          <p class="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Association sportive à Brazzaville spécialisée dans le fitness, le cardio plein air et les activités culturelles. 
            Rejoignez notre communauté active et transformez votre vie !
          </p>
          
          <!-- Boutons CTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <router-link to="/join" class="bg-white text-cacao font-bold text-lg px-8 py-4 rounded-full hover:bg-sunny hover:text-white transition-all duration-300 transform hover:scale-105">
              Rejoindre FlexBeat
            </router-link>
            <router-link to="/activities" class="border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-cacao transition-all duration-300">
              Voir nos activités
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Activités Sportives -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-indigo mb-6">Nos Activités Sportives & Culturelles</h2>
          <p class="text-xl text-cacao max-w-3xl mx-auto">
            Trois disciplines sportives et une activité culturelle pour un weekend complet et varié en plein air
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Fitness -->
          <div class="bg-gradient-to-br from-cacao to-cacao/80 rounded-2xl p-8 text-white text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Fitness & Musculation</h3>
            <p class="text-white/90 mb-6 leading-relaxed">
              Renforcement musculaire et exercices fonctionnels en plein air. 
              Utilisez votre poids corporel et des équipements portables.
            </p>
          </div>
          
          <!-- Club de Slam & Lecture -->
          <div class="bg-gradient-to-br from-raspberry to-raspberry/80 rounded-2xl p-8 text-white text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Club de Slam & Lecture</h3>
            <p class="text-white/90 mb-6 leading-relaxed">
              Découvrez la poésie orale, partagez vos lectures et développez votre expression. 
              Une activité culturelle pour enrichir l'esprit et la créativité.
            </p>
          </div>
          
          <!-- Cardio -->
          <div class="bg-gradient-to-br from-sunny to-sunny/80 rounded-2xl p-8 text-white text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Cardio Plein Air</h3>
            <p class="text-white/90 mb-6 leading-relaxed">
              Course à pied, exercices cardio et entraînement en extérieur. 
              Profitez du climat de Brazzaville et de la nature.
            </p>
          </div>
        </div>
        
        <!-- Bouton Voir plus d'activités -->
        <div class="text-center mt-12">
          <router-link to="/activities" class="inline-flex items-center px-8 py-4 bg-indigo text-white font-semibold text-lg rounded-full hover:bg-indigo/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Voir plus d'activités</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Équipements -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-indigo mb-6">Nos Équipements</h2>
          <p class="text-xl text-cacao">Tout le matériel portable pour vos entraînements en plein air</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-cacao/10 rounded-full flex items-center justify-center">
              <span class="text-2xl">🏋️</span>
            </div>
            <h3 class="font-bold text-cacao mb-2">Matériel Fitness</h3>
            <p class="text-sm text-gray-600">Élastiques, haltères portables, tapis de sol</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-raspberry/10 rounded-full flex items-center justify-center">
              <span class="text-2xl">📚</span>
            </div>
            <h3 class="font-bold text-raspberry mb-2">Matériel Culturel</h3>
            <p class="text-sm text-gray-600">Livres, micro, système audio portable</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-sunny/10 rounded-full flex items-center justify-center">
              <span class="text-2xl">⏱️</span>
            </div>
            <h3 class="font-bold text-sunny mb-2">Équipement Cardio</h3>
            <p class="text-sm text-gray-600">Chronomètres, cônes, gilets réfléchissants</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-indigo/10 rounded-full flex items-center justify-center">
              <span class="text-2xl">🧘‍♀️</span>
            </div>
            <h3 class="font-bold text-indigo mb-2">Bien-être</h3>
            <p class="text-sm text-gray-600">Tapis de yoga, coussins méditation, bouteilles d'eau</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA Sportive -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">Prêt à commencer ?</h2>
        <p class="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
          Rejoignez FlexBeat et commencez votre transformation physique dès cette semaine !
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <router-link to="/join" class="bg-white text-cacao font-bold text-xl px-10 py-5 rounded-full hover:bg-sunny hover:text-white transition-all duration-300 transform hover:scale-105">
            Commencer l'entraînement
          </router-link>
          <router-link to="/contact" class="border-2 border-white text-white font-semibold text-xl py-5 px-10 rounded-full hover:bg-white hover:text-cacao transition-all duration-300">
            Demander des infos
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pas besoin de composants complexes pour une page sportive authentique
</script>