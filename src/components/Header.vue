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
          <template v-for="item in navigationItems" :key="item.name">
            <!-- Menu simple -->
            <router-link 
              v-if="!item.children"
              :to="item.path"
              class="text-gray-700 hover:text-cacao font-medium transition-colors duration-200 relative group"
            >
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cacao group-hover:w-full transition-all duration-300"></span>
            </router-link>
            
            <!-- Menu avec sous-menu -->
            <div v-else class="relative group">
              <button 
                class="text-gray-700 hover:text-cacao font-medium transition-colors duration-200 relative flex items-center gap-1"
              >
                {{ item.name }}
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
              <!-- Dropdown -->
              <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div class="py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-cacao transition-colors duration-200"
                  >
                    <div class="font-medium">{{ child.name }}</div>
                    <div class="text-sm text-gray-500">{{ child.description }}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </template>
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
        <div class="flex flex-col space-y-2 pt-4">
          <template v-for="item in navigationItems" :key="item.name">
            <!-- Menu simple mobile -->
            <router-link 
              v-if="!item.children"
              :to="item.path"
              @click="closeMobileMenu"
              class="text-gray-700 hover:text-cacao font-medium transition-colors duration-200 py-2 px-2"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Menu avec sous-menu mobile -->
            <div v-else>
              <button 
                @click="toggleMobileSubmenu(item.name)"
                class="w-full text-left text-gray-700 hover:text-cacao font-medium transition-colors duration-200 py-2 px-2 flex items-center justify-between"
              >
                {{ item.name }}
                <svg 
                  class="w-4 h-4 transition-transform" 
                  :class="{ 'rotate-180': mobileSubmenuOpen === item.name }"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
              <!-- Sous-menu mobile -->
              <div v-show="mobileSubmenuOpen === item.name" class="pl-4 space-y-1">
                <router-link
                  v-for="child in item.children"
                  :key="child.path"
                  :to="child.path"
                  @click="closeMobileMenu"
                  class="block py-2 px-2 text-gray-600 hover:text-cacao transition-colors"
                >
                  <div class="font-medium text-sm">{{ child.name }}</div>
                  <div class="text-xs text-gray-500">{{ child.description }}</div>
                </router-link>
              </div>
            </div>
          </template>
          
          <router-link 
            to="/join" 
            @click="closeMobileMenu"
            class="btn-primary text-center mt-4"
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
const mobileSubmenuOpen = ref(null)

const navigationItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Activités', path: '/activities' },
  { name: 'Événements', path: '/events' },
  { 
    name: 'Exercices',
    children: [
      { 
        name: 'Habitudes saines', 
        path: '/healthy-habits',
        description: 'Conseils adaptés à votre métier'
      },
      { 
        name: 'Exercices au bureau', 
        path: '/office-exercises',
        description: 'Mouvements simples au travail'
      },
      { 
        name: 'Exercices à la maison', 
        path: '/home-exercises',
        description: 'Programmes complets sans matériel'
      }
    ]
  },
  { 
    name: 'Culture',
    children: [
      { 
        name: 'Club de Lecture', 
        path: '/reading-club',
        description: 'Explorez la littérature ensemble'
      },
      { 
        name: 'Slam & Poésie', 
        path: '/slam-poetry',
        description: 'Exprimez-vous avec les mots.'
      },
      { 
        name: 'Théâtre & Expression', 
        path: '/theater',
        description: 'Vivez l\'art dramatique'
      }
    ]
  },
  { 
    name: 'Plus',
    children: [
      { 
        name: 'Galerie', 
        path: '/gallery',
        description: 'Photos & moments forts'
      },
      { 
        name: 'Partenaires', 
        path: '/partners',
        description: 'Nos collaborations'
      }
    ]
  },
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
  mobileSubmenuOpen.value = null
}

const toggleMobileSubmenu = (name) => {
  mobileSubmenuOpen.value = mobileSubmenuOpen.value === name ? null : name
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> 