<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-sunny via-raspberry to-cacao text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cacao/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Notre Galerie
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Découvrez les moments forts de FlexBeat en images et en vidéos
          </p>
          
          <!-- Stats Hero -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">{{ gallery.length }}</div>
              <div class="text-white/80">Photos & Vidéos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">4</div>
              <div class="text-white/80">Catégories</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div class="text-white/80">Plein Air</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div class="text-white/80">Vues</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center space-x-2 bg-sunny/10 text-sunny px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-sunny rounded-full"></span>
            <span class="text-sm font-semibold">Galerie FlexBeat</span>
          </div>
          <p class="text-xl text-gray-700 leading-relaxed">
            Plongez dans l'ambiance de FlexBeat à travers notre galerie photo et vidéo. 
            Chaque image raconte une histoire, chaque moment capture l'énergie 
            et la passion de notre communauté sportive et culturelle.
          </p>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <section class="py-8 bg-gradient-to-r from-gray-50 to-white sticky top-20 z-30">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            class="group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105"
            :class="activeFilter === filter.value 
              ? 'bg-cacao text-white shadow-lg shadow-cacao/25' 
              : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'"
          >
            <span class="relative z-10">{{ filter.label }}</span>
            <div 
              v-if="activeFilter === filter.value"
              class="absolute inset-0 bg-gradient-to-r from-cacao to-indigo rounded-2xl opacity-90"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Galerie Photos -->
    <section class="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-72 h-72 bg-sunny/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-raspberry/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Masonry Grid -->
        <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">
          <div 
            v-for="(item, index) in filteredGallery" 
            :key="item.id"
            class="group cursor-pointer break-inside-avoid animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="openLightbox(item)"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <!-- Image -->
              <img 
                :src="item.thumbnail" 
                :alt="item.title"
                class="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <h3 class="font-bold text-lg mb-2 group-hover:text-sunny transition-colors duration-300">{{ item.title }}</h3>
                  <p class="text-sm text-white/90 mb-3">{{ item.description }}</p>
                  
                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                      {{ item.category }}
                    </span>
                    <span class="px-2 py-1 bg-sunny/20 text-sunny rounded-full text-xs backdrop-blur-sm">
                      {{ formatDate(item.date) }}
                    </span>
                  </div>
                  
                  <!-- Stats -->
                  <div class="flex items-center justify-between text-xs text-white/70">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>{{ item.likes }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      <span>{{ item.views }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Play Button for Videos -->
                <div v-if="item.type === 'video'" class="absolute top-4 right-4">
                  <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-sunny transition-colors duration-300">
                    <svg class="w-6 h-6 text-cacao group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Message si aucun contenu -->
        <div v-if="filteredGallery.length === 0" class="text-center py-20">
          <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-sunny/10 to-raspberry/10 rounded-full flex items-center justify-center">
            <svg class="w-16 h-16 text-sunny" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-600 mb-4">Aucun contenu trouvé</h3>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">
            Aucun contenu ne correspond à ce filtre. Essayez de changer de catégorie.
          </p>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 bg-gradient-to-r from-raspberry via-sunny to-cacao text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Partagez vos moments FlexBeat
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
          Vous avez des photos ou vidéos de nos activités ? 
          Partagez-les avec la communauté et inspirez d'autres membres !
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
            Nous envoyer vos photos
          </router-link>
          <router-link to="/activities" class="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30">
            Voir nos activités
          </router-link>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div 
      v-if="showLightbox"
      class="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-5xl w-full max-h-full animate-fade-in">
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
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div class="relative">
            <img 
              :src="currentItem.image" 
              :alt="currentItem.title"
              class="w-full h-auto max-h-96 object-cover"
            />
          </div>
          
          <div class="p-8">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-3xl font-bold text-cacao mb-2">{{ currentItem.title }}</h3>
                <p class="text-gray-600 text-lg leading-relaxed">{{ currentItem.description }}</p>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500 mb-1">Photographe</div>
                <div class="font-semibold text-cacao">{{ currentItem.photographer }}</div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <div class="text-sm text-gray-500">Lieu</div>
                <div class="font-semibold">{{ currentItem.location }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">Date</div>
                <div class="font-semibold">{{ formatDate(currentItem.date) }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">Participants</div>
                <div class="font-semibold">{{ currentItem.participants }}</div>
              </div>
              <div>
                <div class="text-sm text-gray-500">Durée</div>
                <div class="font-semibold">{{ currentItem.duration }}</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in currentItem.tags" 
                :key="tag"
                class="px-3 py-1 bg-cacao/10 text-cacao text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Indicateurs -->
        <div class="flex justify-center space-x-2 mt-6">
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
import { useMainStore } from '../stores/main'

const store = useMainStore()

const activeFilter = ref('all')
const showLightbox = ref(false)
const currentItemIndex = ref(0)

const filters = [
  { label: 'Tout', value: 'all' },
  { label: 'Fitness', value: 'fitness' },
  { label: 'Slam & Lecture', value: 'slam' },
  { label: 'Cardio', value: 'cardio' },
  { label: 'Événements', value: 'evenements' }
]

const gallery = computed(() => store.gallery)

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') return gallery.value
  return gallery.value.filter(item => 
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