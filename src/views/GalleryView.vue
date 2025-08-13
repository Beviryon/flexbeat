<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-sunny to-raspberry text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-cacao/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Notre Galerie
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Découvrez les moments forts de FlexBeat en images et en vidéos
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            Plongez dans l'ambiance de FlexBeat à travers notre galerie photo et vidéo. 
            Chaque image raconte une histoire, chaque moment capture l'énergie 
            et la passion de notre communauté sportive.
          </p>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            class="px-6 py-3 rounded-full font-medium transition-all duration-200"
            :class="activeFilter === filter.value 
              ? 'bg-cacao text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Galerie Photos -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div 
            v-for="(item, index) in filteredGallery" 
            :key="item.id"
            class="group cursor-pointer animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="openLightbox(item)"
          >
            <div class="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <!-- Image ou vidéo -->
              <img 
                v-if="item.type === 'image'"
                :src="item.thumbnail" 
                :alt="item.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div 
                v-else
                class="w-full h-64 bg-gradient-to-br from-cacao to-indigo flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500"
              >
                <img 
                  :src="item.thumbnail" 
                  :alt="item.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-cacao" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
                  <p class="text-sm text-white/90">{{ item.description }}</p>
                  <div class="flex items-center space-x-2 mt-2">
                    <span class="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {{ item.category }}
                    </span>
                    <span class="text-xs text-white/70">{{ formatDate(item.date) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Message si aucun contenu -->
        <div v-if="filteredGallery.length === 0" class="text-center py-16">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span class="text-4xl">📷</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-600 mb-4">Aucun contenu trouvé</h3>
          <p class="text-gray-500">
            Aucun contenu ne correspond à ce filtre. Essayez de changer de catégorie.
          </p>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Partagez vos moments FlexBeat
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Vous avez des photos ou vidéos de nos activités ? 
          Partagez-les avec la communauté !
        </p>
        <router-link to="/contact" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
          Nous envoyer vos photos
        </router-link>
      </div>
    </section>

    <!-- Lightbox -->
    <div 
      v-if="showLightbox"
      class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl w-full max-h-full animate-fade-in">
        <!-- Bouton fermer -->
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Navigation -->
        <div class="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button 
            @click="previousItem"
            class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
        
        <div class="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button 
            @click="nextItem"
            class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- Contenu -->
        <div class="bg-white rounded-2xl overflow-hidden">
          <div class="relative">
            <img 
              v-if="currentItem.type === 'image'"
              :src="currentItem.image" 
              :alt="currentItem.title"
              class="w-full h-auto max-h-96 object-cover"
            />
            <video 
              v-else
              :src="currentItem.video" 
              controls
              class="w-full h-auto max-h-96 object-cover"
            />
          </div>
          
          <div class="p-6">
            <h3 class="text-2xl font-bold text-cacao mb-2">{{ currentItem.title }}</h3>
            <p class="text-gray-600 mb-4">{{ currentItem.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ currentItem.category }}</span>
              <span>{{ formatDate(currentItem.date) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Indicateurs -->
        <div class="flex justify-center space-x-2 mt-4">
          <button 
            v-for="(item, index) in filteredGallery" 
            :key="item.id"
            @click="goToItem(index)"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentItemIndex === index ? 'bg-white' : 'bg-white/30'"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeFilter = ref('all')
const showLightbox = ref(false)
const currentItemIndex = ref(0)

const filters = [
  { label: 'Tout', value: 'all' },
  { label: 'Fitness', value: 'fitness' },
  { label: 'Danse', value: 'danse' },
  { label: 'Cardio', value: 'cardio' },
  { label: 'Événements', value: 'evenements' }
]

const gallery = [
  {
    id: 1,
    title: 'Séance de Fitness',
    description: 'Entraînement intensif en groupe',
    category: 'Fitness',
    date: '2024-11-15',
    type: 'image',
    image: '/images/gallery/fitness-1.jpg',
    thumbnail: '/images/gallery/fitness-1-thumb.jpg'
  },
  {
    id: 2,
    title: 'Cours de Danse',
    description: 'Danse traditionnelle africaine',
    category: 'Danse',
    date: '2024-11-14',
    type: 'image',
    image: '/images/gallery/dance-1.jpg',
    thumbnail: '/images/gallery/dance-1-thumb.jpg'
  },
  {
    id: 3,
    title: 'Cardio Plein Air',
    description: 'Course matinale au Parc de la Révolution',
    category: 'Cardio',
    date: '2024-11-13',
    type: 'image',
    image: '/images/gallery/cardio-1.jpg',
    thumbnail: '/images/gallery/cardio-1-thumb.jpg'
  },
  {
    id: 4,
    title: 'Marathon de Brazzaville',
    description: 'Préparation et départ de la course',
    category: 'Événements',
    date: '2024-11-10',
    type: 'video',
    video: '/videos/marathon-prep.mp4',
    thumbnail: '/images/gallery/marathon-thumb.jpg'
  },
  {
    id: 5,
    title: 'Séance de Stretching',
    description: 'Récupération et étirements post-entraînement',
    category: 'Fitness',
    date: '2024-11-12',
    type: 'image',
    image: '/images/gallery/stretching-1.jpg',
    thumbnail: '/images/gallery/stretching-1-thumb.jpg'
  },
  {
    id: 6,
    title: 'Festival du Sport',
    description: 'Démonstrations et initiations',
    category: 'Événements',
    date: '2024-11-08',
    type: 'image',
    image: '/images/gallery/festival-1.jpg',
    thumbnail: '/images/gallery/festival-1-thumb.jpg'
  }
]

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') return gallery
  return gallery.filter(item => 
    item.category.toLowerCase().includes(activeFilter.value.toLowerCase())
  )
})

const currentItem = computed(() => filteredGallery.value[currentItemIndex.value])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const openLightbox = (item) => {
  const index = filteredGallery.value.findIndex(g => g.id === item.id)
  currentItemIndex.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}

const nextItem = () => {
  currentItemIndex.value = (currentItemIndex.value + 1) % filteredGallery.value.length
}

const previousItem = () => {
  currentItemIndex.value = currentItemIndex.value === 0 
    ? filteredGallery.value.length - 1 
    : currentItemIndex.value - 1
}

const goToItem = (index) => {
  currentItemIndex.value = index
}

// Navigation au clavier
const handleKeydown = (event) => {
  if (!showLightbox.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousItem()
      break
    case 'ArrowRight':
      nextItem()
      break
  }
}

// Écouter les touches du clavier
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script> 