<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300" :class="{ 'bg-white shadow-xl': isScrolled }">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <!-- Logo FlexBeat -->
          <div class="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img src="/logo.jpg" alt="FlexBeat Logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold">
              <span class="text-indigo">flex</span><span class="text-cacao">Beat</span>
            </span>
            <span class="text-xs text-cacao -mt-1">Le mouvement, c'est notre musique</span>
          </div>
        </router-link>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-cacao font-medium transition-colors duration-200 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cacao group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link to="/join" class="btn-primary">
            Rejoindre
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200"
      >
        <div class="flex flex-col space-y-4 pt-4">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-cacao font-medium transition-colors duration-200 py-2"
          >
            {{ item.name }}
          </router-link>
          <router-link 
            to="/join" 
            @click="closeMobileMenu"
            class="btn-primary text-center"
          >
            Rejoindre
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Activités', path: '/activities' },
  { name: 'Événements', path: '/events' },
  { name: 'Galerie', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> 