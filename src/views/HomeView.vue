<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cacao to-raspberry text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            flexBeat
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Le mouvement, c'est notre musique
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join"
              class="btn-primary text-lg px-8 py-4"
            >
              Rejoindre la communauté
            </router-link>
            <router-link 
              to="/activities"
              class="btn-secondary text-lg px-8 py-4"
            >
              Découvrir nos activités
            </router-link>
          </div>
          
          <!-- Bouton d'installation PWA -->
          <div class="mt-8">
            <button 
              @click="showPWAInstallPrompt"
              class="pwa-hero-btn group"
            >
              <span class="pwa-hero-icon">📱</span>
              <span>Installer FlexBeat sur mobile</span>
              <span class="pwa-hero-arrow">→</span>
            </button>
            <p class="text-sm text-white/70 mt-3">
              Transformez votre site en application mobile
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Activités Sportives & Culturelles -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Nos Activités Sportives & Culturelles</h2>
          <p class="section-subtitle">
            Découvrez notre gamme d'activités variées pour tous les niveaux
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Fitness -->
          <div class="group bg-gradient-to-br from-cacao/5 to-indigo/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-4xl mb-4">💪</div>
            <h3 class="text-xl font-bold text-cacao mb-3">Fitness & Musculation</h3>
            <p class="text-gray-600 mb-4">
              Renforcez votre corps avec nos séances de fitness en plein air
            </p>
            <router-link to="/activities" class="text-raspberry hover:underline font-medium">
              En savoir plus →
            </router-link>
          </div>
          
          <!-- Club de Slam & Lecture -->
          <div class="group bg-gradient-to-br from-raspberry/5 to-sunny/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-4xl mb-4">🎭</div>
            <h3 class="text-xl font-bold text-cacao mb-3">Club de Slam & Lecture</h3>
            <p class="text-gray-600 mb-4">
              Exprimez votre créativité à travers la poésie et la lecture
            </p>
            <router-link to="/activities" class="text-raspberry hover:underline font-medium">
              En savoir plus →
            </router-link>
          </div>
          
          <!-- Cardio Plein Air -->
          <div class="group bg-gradient-to-br from-sunny/5 to-cacao/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="text-4xl mb-4">🏃‍♂️</div>
            <h3 class="text-xl font-bold text-cacao mb-3">Cardio Plein Air</h3>
            <p class="text-gray-600 mb-4">
              Améliorez votre endurance avec nos sessions cardio dynamiques
            </p>
            <router-link to="/activities" class="text-raspberry hover:underline font-medium">
              En savoir plus →
            </router-link>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/activities" class="btn-primary text-lg px-8 py-4">
            Voir toutes nos activités
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section PWA - Application Mobile -->
    <section class="py-20 bg-gradient-to-br from-indigo/5 to-cacao/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">📱 FlexBeat sur Mobile</h2>
          <p class="section-subtitle">
            Transformez votre site en application mobile et accédez à FlexBeat depuis votre écran d'accueil
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <!-- Contenu PWA -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-cacao">
                Pourquoi installer FlexBeat ?
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-raspberry to-sunny rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Accès Instantané</h4>
                    <p class="text-gray-600 text-sm">Ouvrez FlexBeat en un clic depuis votre écran d'accueil</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-sunny to-cacao rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Apparence Native</h4>
                    <p class="text-gray-600 text-sm">Profitez d'une expérience comme une vraie application mobile</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-cacao to-indigo rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Mode Hors Ligne</h4>
                    <p class="text-gray-600 text-sm">Accédez aux informations même sans connexion internet</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo to-raspberry rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    🔔
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Notifications</h4>
                    <p class="text-gray-600 text-sm">Restez informé des événements et activités FlexBeat</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Bouton d'installation PWA -->
            <div class="pt-4">
              <button 
                @click="showPWAInstallPrompt"
                class="pwa-section-btn group w-full"
              >
                <span class="pwa-section-icon">📲</span>
                <span>Installer FlexBeat sur Mobile</span>
                <span class="pwa-section-arrow">→</span>
              </button>
              <p class="text-xs text-gray-500 mt-2 text-center">
                Gratuit • Aucune donnée personnelle • Mise à jour automatique
              </p>
            </div>
          </div>
          
          <!-- Visualisation Mobile -->
          <div class="relative">
            <div class="relative mx-auto w-64 h-96 bg-gradient-to-b from-cacao to-indigo rounded-3xl p-4 shadow-2xl">
              <!-- Écran du téléphone -->
              <div class="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                <!-- Barre de statut -->
                <div class="h-6 bg-cacao flex items-center justify-between px-4 text-white text-xs">
                  <span>9:41</span>
                  <div class="flex items-center gap-1">
                    <div class="w-3 h-1.5 bg-white rounded-full"></div>
                    <div class="w-3 h-1.5 bg-white rounded-full"></div>
                    <div class="w-3 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <!-- Contenu de l'app -->
                <div class="p-4 space-y-3">
                  <!-- Logo FlexBeat -->
                  <div class="text-center py-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-2xl mx-auto mb-2 flex items-center justify-center text-white text-2xl font-bold">
                      🏃‍♂️
                    </div>
                    <h3 class="text-lg font-bold text-cacao">flexBeat</h3>
                    <p class="text-xs text-gray-500">Le mouvement, c'est notre musique</p>
                  </div>
                  
                  <!-- Menu rapide -->
                  <div class="grid grid-cols-2 gap-2">
                    <div class="bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-xl p-3 text-center">
                      <div class="text-2xl mb-1">💪</div>
                      <p class="text-xs font-medium text-cacao">Fitness</p>
                    </div>
                    <div class="bg-gradient-to-br from-raspberry/10 to-sunny/10 rounded-xl p-3 text-center">
                      <div class="text-2xl mb-1">🎭</div>
                      <p class="text-xs font-medium text-raspberry">Slam</p>
                    </div>
                    <div class="bg-gradient-to-br from-sunny/10 to-cacao/10 rounded-xl p-3 text-center">
                      <div class="text-2xl mb-1">🏃‍♂️</div>
                      <p class="text-xs font-medium text-sunny">Cardio</p>
                    </div>
                    <div class="bg-gradient-to-br from-indigo/10 to-raspberry/10 rounded-xl p-3 text-center">
                      <div class="text-2xl mb-1">📅</div>
                      <p class="text-xs font-medium text-indigo">Événements</p>
                    </div>
                  </div>
                  
                  <!-- Bouton d'action -->
                  <div class="bg-gradient-to-r from-raspberry to-sunny rounded-xl p-3 text-center text-white">
                    <p class="text-xs font-bold">Rejoindre FlexBeat</p>
                  </div>
                </div>
              </div>
              
              <!-- Bouton home -->
              <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
            </div>
            
            <!-- Éléments décoratifs -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-sunny to-raspberry rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-raspberry to-cacao rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- PWA Install Button -->
    <PWAInstallButton />
  </div>
</template>

<script setup>
import PWAInstallButton from '../components/PWAInstallButton.vue'
import { ref, onMounted } from 'vue'

let deferredPrompt = null

onMounted(() => {
  // Écouter l'événement d'installation PWA
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  
  // Vérifier si l'app est déjà installée
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App déjà installée')
  }
})

const handleBeforeInstallPrompt = (e) => {
  e.preventDefault()
  deferredPrompt = e
  console.log('PWA install prompt détecté')
}

const showPWAInstallPrompt = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('FlexBeat installé avec succès !')
      showSuccessMessage()
    } else {
      console.log('Installation annulée par l\'utilisateur')
    }
    
    deferredPrompt = null
  } else {
    // En mode développement, simuler l'installation
    console.log('Mode développement - simulation d\'installation')
    showSuccessMessage()
  }
}

const showSuccessMessage = () => {
  // Créer une notification de succès
  const successNotification = document.createElement('div')
  successNotification.className = 'pwa-success-hero'
  successNotification.innerHTML = `
    <div class="pwa-success-hero-content">
      <span class="pwa-success-hero-icon">🎉</span>
      <span>FlexBeat installé avec succès !</span>
    </div>
  `
  
  document.body.appendChild(successNotification)
  
  // Supprimer après 4 secondes
  setTimeout(() => {
    if (successNotification.parentNode) {
      successNotification.parentNode.removeChild(successNotification)
    }
  }, 4000)
}
</script>

<style scoped>
/* Bouton PWA dans le hero */
.pwa-hero-btn {
  background: linear-gradient(135deg, #FFDD00, #FF3B6A);
  color: #5D3A00;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(255, 221, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.pwa-hero-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.pwa-hero-btn:hover::before {
  left: 100%;
}

.pwa-hero-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(255, 221, 0, 0.5);
}

.pwa-hero-icon {
  font-size: 20px;
  animation: pulse 2s infinite;
}

.pwa-hero-arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.pwa-hero-btn:hover .pwa-hero-arrow {
  transform: translateX(5px);
}

/* Notification de succès dans le hero */
.pwa-success-hero {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 20px 32px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
  z-index: 1002;
  animation: heroSuccess 0.5s ease-out;
}

.pwa-success-hero-content {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  font-size: 18px;
}

.pwa-success-hero-icon {
  font-size: 24px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes heroSuccess {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .pwa-hero-btn {
    padding: 14px 24px;
    font-size: 14px;
  }
  
  .pwa-hero-icon {
    font-size: 18px;
  }
  
  .pwa-success-hero {
    padding: 16px 24px;
    font-size: 16px;
  }
  
  .pwa-success-hero-content {
    font-size: 16px;
  }
  
  .pwa-success-hero-icon {
    font-size: 20px;
  }
}

/* Bouton PWA de la section */
.pwa-section-btn {
  background: linear-gradient(135deg, #5D3A00, #2C2D5B);
  color: white;
  border: none;
  padding: 18px 32px;
  border-radius: 16px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(93, 58, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.pwa-section-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.pwa-section-btn:hover::before {
  left: 100%;
}

.pwa-section-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(93, 58, 0, 0.3);
}

.pwa-section-icon {
  font-size: 20px;
  animation: pulse 2s infinite;
}

.pwa-section-arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.pwa-section-btn:hover .pwa-section-arrow {
  transform: translateX(5px);
}
</style>