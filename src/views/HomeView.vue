<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background avec gradient moderne -->
      <div class="absolute inset-0 bg-gradient-to-br from-cacao via-indigo to-raspberry"></div>
      
      <!-- Motifs décoratifs subtils -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 right-20 w-72 h-72 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-72 h-72 bg-raspberry/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Contenu principal -->
      <div class="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div class="animate-fade-in">
          <!-- Logo simplifié -->
          <div class="mb-12 flex justify-center">
            <div class="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <!-- Logo FlexBeat -->
              <img src="/logo.jpg" alt="FlexBeat Logo" class="w-32 h-32 object-contain" />
            </div>
          </div>
          
          <!-- Titre principal -->
          <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            <span class="text-sunny">flex</span><span class="text-white">Beat</span>
          </h1>
          
          <!-- Slogan -->
          <p class="text-2xl md:text-3xl mb-12 text-white/95 font-light tracking-wide">
            Le mouvement, c'est notre musique
          </p>
          
          <!-- Bouton CTA principal -->
          <div class="mb-16">
            <router-link to="/join" class="inline-block bg-white text-cacao font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 transform">
              Rejoindre la communauté
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Section Activités simplifiée -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-indigo mb-6">Nos Activités</h2>
          <p class="text-xl text-cacao max-w-2xl mx-auto">
            Trois programmes essentiels pour tous les niveaux
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div 
            v-for="activity in featuredActivities" 
            :key="activity.id"
            class="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div class="relative">
              <!-- Carte avec effet de profondeur -->
              <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <!-- Icône moderne -->
                <div class="w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" :class="activity.bgColor">
                  <div class="w-16 h-16 text-white">
                    <component :is="activity.icon" />
                  </div>
                </div>
                
                <!-- Contenu -->
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-cacao mb-4">{{ activity.name }}</h3>
                  <p class="text-gray-600 leading-relaxed mb-6">{{ activity.description }}</p>
                  
                  <!-- Badge de niveau -->
                  <div class="inline-block px-4 py-2 rounded-full text-sm font-medium" :class="activity.badgeColor">
                    {{ activity.level }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-16">
          <router-link to="/activities" class="inline-block bg-gradient-to-r from-cacao to-indigo text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cacao/25 transition-all duration-300 transform hover:scale-105">
            Découvrir plus
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section CTA finale simplifiée -->
    <section class="py-24 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          Prêt à commencer ?
        </h2>
        <p class="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
          Rejoignez FlexBeat et transformez votre vie
        </p>
        <router-link to="/join" class="inline-block bg-white text-cacao font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 transform">
          Commencer maintenant
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Composants d'icônes SVG modernes
const FitnessIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M6 2h12v2H6V2zm0 4h12v2H6V6zm0 4h12v2H6v-2zm0 4h12v2H6v-2zm0 4h12v2H6v-2z"/>
      <path d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"/>
    </svg>
  `
}

const DanceIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <circle cx="12" cy="8" r="3"/>
      <path d="M12 12c-2.5 0-4.5 2-4.5 4.5V20h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
      <path d="M8 16l2-2 2 2"/>
      <path d="M16 16l-2-2-2 2"/>
    </svg>
  `
}

const CardioIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 24h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2.2.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
    </svg>
  `
}

const featuredActivities = computed(() => [
  {
    id: 1,
    name: 'Fitness',
    description: 'Renforcement musculaire et cardio pour tous les niveaux',
    icon: FitnessIcon,
    bgColor: 'bg-gradient-to-br from-cacao to-cacao/80',
    level: 'Tous niveaux',
    badgeColor: 'bg-cacao/10 text-cacao'
  },
  {
    id: 2,
    name: 'Danse',
    description: 'Danse africaine traditionnelle et moderne',
    icon: DanceIcon,
    bgColor: 'bg-gradient-to-br from-raspberry to-raspberry/80',
    level: 'Débutant à avancé',
    badgeColor: 'bg-raspberry/10 text-raspberry'
  },
  {
    id: 3,
    name: 'Cardio',
    description: 'Exercices en plein air dans la nature',
    icon: CardioIcon,
    bgColor: 'bg-gradient-to-br from-sunny to-sunny/80',
    level: 'Tous niveaux',
    badgeColor: 'bg-sunny/10 text-sunny'
  }
])
</script> 