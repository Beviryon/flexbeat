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
            Nos Partenaires
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            FlexBeat travaille avec des partenaires de confiance pour offrir 
            la meilleure expérience à nos membres
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            Nos partenaires partagent nos valeurs et nous aident à développer 
            une communauté sportive et culturelle dynamique à Brazzaville. 
            Ensemble, nous créons des opportunités et des expériences uniques pour nos membres.
          </p>
        </div>
      </div>
    </section>

    <!-- Partenaires par catégorie -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Sponsors -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <div class="inline-flex items-center space-x-2 bg-cacao/10 text-cacao px-4 py-2 rounded-full mb-4">
                <span class="w-2 h-2 bg-cacao rounded-full"></span>
                <span class="text-sm font-semibold">Sponsors</span>
              </div>
              <h2 class="section-title">Nos Sponsors</h2>
              <p class="section-subtitle max-w-2xl mx-auto">
                Des entreprises qui croient en notre mission et nous soutiennent
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="partner in sponsors" 
                :key="partner.id"
                class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="w-32 h-32 bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      v-if="partner.logo" 
                      :src="partner.logo" 
                      :alt="partner.name"
                      class="max-w-full max-h-full object-contain"
                    >
                    <div v-else class="text-4xl font-bold text-cacao">
                      {{ partner.name.charAt(0) }}
                    </div>
                  </div>
                  <h3 class="text-xl font-bold text-cacao mb-2">{{ partner.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ partner.description }}</p>
                  <a 
                    v-if="partner.website"
                    :href="partner.website" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-raspberry hover:text-sunny font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    Visiter le site
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Partenaires techniques -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <div class="inline-flex items-center space-x-2 bg-raspberry/10 text-raspberry px-4 py-2 rounded-full mb-4">
                <span class="w-2 h-2 bg-raspberry rounded-full"></span>
                <span class="text-sm font-semibold">Partenaires techniques</span>
              </div>
              <h2 class="section-title">Partenaires Techniques</h2>
              <p class="section-subtitle max-w-2xl mx-auto">
                Des solutions et services qui nous permettent d'offrir une expérience optimale
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                v-for="partner in technicalPartners" 
                :key="partner.id"
                class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="w-24 h-24 bg-gradient-to-br from-raspberry/10 to-sunny/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      v-if="partner.logo" 
                      :src="partner.logo" 
                      :alt="partner.name"
                      class="max-w-full max-h-full object-contain"
                    >
                    <div v-else class="text-3xl font-bold text-raspberry">
                      {{ partner.name.charAt(0) }}
                    </div>
                  </div>
                  <h3 class="text-lg font-semibold text-cacao mb-2">{{ partner.name }}</h3>
                  <p class="text-gray-600 text-xs mb-3">{{ partner.description }}</p>
                  <a 
                    v-if="partner.website"
                    :href="partner.website" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-raspberry hover:text-sunny text-xs font-medium"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Partenaires médias -->
          <div class="mb-16">
            <div class="text-center mb-12">
              <div class="inline-flex items-center space-x-2 bg-sunny/20 text-cacao px-4 py-2 rounded-full mb-4">
                <span class="w-2 h-2 bg-sunny rounded-full"></span>
                <span class="text-sm font-semibold">Partenaires médias</span>
              </div>
              <h2 class="section-title">Partenaires Médias</h2>
              <p class="section-subtitle max-w-2xl mx-auto">
                Des médias qui nous aident à partager nos valeurs et nos événements
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="partner in mediaPartners" 
                :key="partner.id"
                class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="w-28 h-28 bg-gradient-to-br from-sunny/20 to-cacao/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      v-if="partner.logo" 
                      :src="partner.logo" 
                      :alt="partner.name"
                      class="max-w-full max-h-full object-contain"
                    >
                    <div v-else class="text-4xl font-bold text-sunny">
                      {{ partner.name.charAt(0) }}
                    </div>
                  </div>
                  <h3 class="text-xl font-bold text-cacao mb-2">{{ partner.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ partner.description }}</p>
                  <a 
                    v-if="partner.website"
                    :href="partner.website" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sunny hover:text-cacao font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    Visiter le site
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Devenir partenaire -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Devenir Partenaire de FlexBeat
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Vous souhaitez soutenir notre mission et rejoindre notre réseau de partenaires ? 
          Contactez-nous pour discuter des opportunités de partenariat.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact"
            class="bg-white text-cacao hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nous contacter
          </router-link>
          <a 
            href="https://wa.me/33763217791?text=Bonjour, je souhaite devenir partenaire de FlexBeat"
            target="_blank"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Données des partenaires
const sponsors = ref([
  // À compléter avec vos sponsors principaux
])

const technicalPartners = ref([
  {
    id: 1,
    name: 'Trevixia',
    description: 'Plateforme de formation en ligne',
    logo: null,
    website: 'https://formation-trevixia-7wye.vercel.app/login'
  },
  {
    id: 2,
    name: 'BeCandidature',
    description: 'Suivi de candidatures professionnel',
    logo: null,
    website: 'https://be-candidature-viryon.vercel.app/login'
  },
  {
    id: 3,
    name: 'RYONVA',
    description: 'E-commerce premium Congo-Brazzaville',
    logo: null,
    website: 'https://ryonva-shop.vercel.app/'
  },
  {
    id: 4,
    name: 'AmBeLyfe',
    description: 'Gestion de vie de couple',
    logo: null,
    website: 'https://am-be-lyfe.vercel.app/login'
  }
])

const mediaPartners = ref([
  // À compléter avec vos partenaires médias
])
</script>

<style scoped>
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
