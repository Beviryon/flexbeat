<template>
  <div class="pwa-install-container">
    <!-- Bouton PWA ultra-visible -->
    <button class="pwa-simple-button" @click="showPopup = true">
      <div class="pwa-button-content">
        <div class="pwa-icon">📱</div>
        <span>Installer FlexBeat</span>
      </div>
    </button>
    
    <!-- Modal PWA moderne et réactif -->
    <Transition name="modal">
      <div v-if="showPopup" class="pwa-modal-overlay" @click="closePopup">
        <div class="pwa-modal" @click.stop>
          <!-- Header avec logo et fermeture -->
          <div class="pwa-modal-header">
            <div class="pwa-logo-container">
              <div class="pwa-logo">🏃‍♂️</div>
              <div class="pwa-logo-text">
                <h3>FlexBeat</h3>
                <span>PWA</span>
              </div>
            </div>
            <button @click="closePopup" class="pwa-close-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <!-- Contenu principal -->
          <div class="pwa-modal-content">
            <h2 class="pwa-title">Installer FlexBeat</h2>
            <p class="pwa-description">
              Transformez votre site en application mobile et accédez à FlexBeat depuis votre écran d'accueil !
            </p>
            
            <!-- Fonctionnalités avec icônes -->
            <div class="pwa-features">
              <div class="pwa-feature">
                <div class="feature-icon">🚀</div>
                <div class="feature-text">
                  <h4>Accès rapide</h4>
                  <p>Depuis votre écran d'accueil</p>
                </div>
              </div>
              
              <div class="pwa-feature">
                <div class="feature-icon">📱</div>
                <div class="feature-text">
                  <h4>App native</h4>
                  <p>Comme une vraie application</p>
                </div>
              </div>
              
              <div class="pwa-feature">
                <div class="feature-icon">⚡</div>
                <div class="feature-text">
                  <h4>Hors ligne</h4>
                  <p>Fonctionne sans internet</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Actions avec animations -->
          <div class="pwa-modal-actions">
            <button @click="installPWA" class="pwa-install-btn" :class="{ 'loading': isInstalling }">
              <span v-if="!isInstalling" class="btn-content">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Installer maintenant
              </span>
              <span v-else class="loading-spinner">
                <div class="spinner"></div>
                Installation...
              </span>
            </button>
            
            <button @click="closePopup" class="pwa-cancel-btn">
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showPopup = ref(false)
const deferredPrompt = ref(null)
const isInstalling = ref(false)

onMounted(() => {
  console.log('PWA: Composant monté - recherche du prompt d\'installation...')
  
  // Écouter l'événement beforeinstallprompt
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  
  // Vérifier si l'app est déjà installée
  if (window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true) {
    console.log('PWA: Application déjà installée')
  } else {
    console.log('PWA: Application non installée - en attente du prompt')
  }
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

const handleBeforeInstallPrompt = (e) => {
  console.log('PWA: Prompt d\'installation détecté !')
  
  // Empêcher l'affichage automatique du prompt
  e.preventDefault()
  
  // Stocker l'événement pour l'utiliser plus tard
  deferredPrompt.value = e
  
  console.log('PWA: Prompt stocké et prêt à être utilisé')
}

const installPWA = async () => {
  console.log('PWA: Tentative d\'installation...')
  isInstalling.value = true
  
  if (!deferredPrompt.value) {
    console.log('PWA: Aucun prompt disponible - l\'installation PWA n\'est pas possible')
    setTimeout(() => {
      alert('L\'installation PWA n\'est pas disponible sur ce navigateur ou cette page. Assurez-vous que :\n\n1. Vous utilisez HTTPS ou localhost\n2. Votre navigateur supporte les PWA\n3. La page respecte les critères d\'installation')
      isInstalling.value = false
      showPopup.value = false
    }, 500)
    return
  }
  
  try {
    console.log('PWA: Déclenchement du prompt d\'installation...')
    
    // Afficher le prompt d'installation natif du navigateur
    deferredPrompt.value.prompt()
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.value.userChoice
    
    if (outcome === 'accepted') {
      console.log('PWA: Installation acceptée par l\'utilisateur !')
      setTimeout(() => {
        alert('🎉 FlexBeat a été installé avec succès ! Vous pouvez maintenant l\'ouvrir depuis votre écran d\'accueil.')
        showPopup.value = false
      }, 1000)
    } else {
      console.log('PWA: Installation refusée par l\'utilisateur')
      setTimeout(() => {
        alert('Installation annulée. Vous pouvez réessayer plus tard.')
        showPopup.value = false
      }, 500)
    }
    
    // Réinitialiser le prompt
    deferredPrompt.value = null
    
  } catch (error) {
    console.error('PWA: Erreur lors de l\'installation:', error)
    setTimeout(() => {
      alert('Erreur lors de l\'installation : ' + error.message)
      showPopup.value = false
    }, 500)
  }
  
  isInstalling.value = false
}

const closePopup = () => {
  showPopup.value = false
}
</script>

<style scoped>
/* Bouton PWA moderne */
.pwa-simple-button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background: linear-gradient(135deg, #FF3B6A, #FFDD00);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  z-index: 9999;
  box-shadow: 0 8px 25px rgba(255, 59, 106, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: float 3s ease-in-out infinite;
}

.pwa-simple-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(255, 59, 106, 0.6);
}

.pwa-button-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pwa-icon {
  font-size: 20px;
  animation: pulse 2s ease-in-out infinite;
}

/* Modal PWA moderne */
.pwa-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.pwa-modal {
  background: white;
  border-radius: 24px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
}

/* Header du modal */
.pwa-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
  margin-bottom: 20px;
}

.pwa-logo-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pwa-logo {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #FF3B6A, #FFDD00);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  animation: logoFloat 3s ease-in-out infinite;
}

.pwa-logo-text h3 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #5D3A00;
}

.pwa-logo-text span {
  font-size: 12px;
  color: #FF3B6A;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pwa-close-btn {
  background: #f8f9fa;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: #6c757d;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pwa-close-btn:hover {
  background: #e9ecef;
  color: #495057;
  transform: scale(1.1);
}

/* Contenu du modal */
.pwa-modal-content {
  padding: 0 24px 24px 24px;
}

.pwa-title {
  font-size: 28px;
  font-weight: bold;
  color: #5D3A00;
  margin-bottom: 12px;
  text-align: center;
}

.pwa-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 32px;
  text-align: center;
  font-size: 16px;
}

/* Fonctionnalités */
.pwa-features {
  display: grid;
  gap: 20px;
  margin-bottom: 32px;
}

.pwa-feature {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 16px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.pwa-feature:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #FF3B6A;
}

.feature-icon {
  font-size: 32px;
  flex-shrink: 0;
  animation: featureBounce 2s ease-in-out infinite;
}

.feature-text h4 {
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: #5D3A00;
}

.feature-text p {
  margin: 0;
  color: #6c757d;
  font-size: 14px;
}

/* Actions du modal */
.pwa-modal-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px 24px 24px;
}

.pwa-install-btn {
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
  position: relative;
  overflow: hidden;
}

.pwa-install-btn:hover:not(.loading) {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(93, 58, 0, 0.4);
}

.pwa-install-btn.loading {
  background: linear-gradient(135deg, #6c757d, #495057);
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.pwa-cancel-btn {
  background: #f8f9fa;
  color: #6c757d;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pwa-cancel-btn:hover {
  background: #e9ecef;
  color: #495057;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(5deg); }
}

@keyframes featureBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Transitions Vue */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

/* Responsive */
@media (max-width: 768px) {
  .pwa-simple-button {
    bottom: 30px;
    right: 30px;
    padding: 14px 20px;
    font-size: 14px;
  }
  
  .pwa-modal {
    margin: 20px;
    max-height: calc(100vh - 40px);
  }
  
  .pwa-modal-header {
    padding: 20px 20px 0 20px;
  }
  
  .pwa-modal-content {
    padding: 0 20px 20px 20px;
  }
  
  .pwa-modal-actions {
    padding: 0 20px 20px 20px;
  }
  
  .pwa-title {
    font-size: 24px;
  }
  
  .pwa-feature {
    padding: 16px;
  }
  
  .feature-icon {
    font-size: 24px;
  }
}
</style> 