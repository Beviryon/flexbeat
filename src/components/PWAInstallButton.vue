<template>
  <div class="pwa-install-container">
    <!-- Bouton flottant principal - TOUJOURS VISIBLE EN DEV -->
    <div class="pwa-float-button" @click="showPopup = true">
      <div class="pwa-float-icon">📱</div>
      <span class="pwa-float-text">Installer FlexBeat</span>
    </div>
    
    <!-- Popup d'installation -->
    <div v-if="showPopup" class="pwa-popup-overlay" @click="closePopup">
      <div class="pwa-popup" @click.stop>
        <div class="pwa-popup-header">
          <div class="pwa-popup-logo">
            <div class="pwa-logo-placeholder">🏃‍♂️</div>
          </div>
          <button @click="closePopup" class="pwa-close-btn">✕</button>
        </div>
        
        <div class="pwa-popup-content">
          <h3 class="pwa-popup-title">Installer FlexBeat</h3>
          <p class="pwa-popup-description">
            Transformez votre site en application mobile ! Accédez à FlexBeat depuis votre écran d'accueil.
          </p>
          
          <div class="pwa-features">
            <div class="pwa-feature">
              <span class="pwa-feature-icon">🚀</span>
              <span>Accès rapide depuis l'écran d'accueil</span>
            </div>
            <div class="pwa-feature">
              <span class="pwa-feature-icon">📱</span>
              <span>Apparence comme une vraie application</span>
            </div>
            <div class="pwa-feature">
              <span class="pwa-feature-icon">⚡</span>
              <span>Fonctionne même hors ligne</span>
            </div>
          </div>
        </div>
        
        <div class="pwa-popup-actions">
          <button @click="installPWA" class="pwa-install-btn">
            <span class="pwa-install-icon">📲</span>
            Installer maintenant
          </button>
          <button @click="closePopup" class="pwa-cancel-btn">
            Plus tard
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showPopup = ref(false)
const deferredPrompt = ref(null)

onMounted(() => {
  console.log('PWA: Composant monté')
  
  // Écouter l'événement beforeinstallprompt
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  
  // Vérifier si l'app est déjà installée
  if (window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true) {
    console.log('PWA: Application déjà installée')
  } else {
    console.log('PWA: Application non installée - bouton visible')
  }
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

const handleBeforeInstallPrompt = (e) => {
  // Empêcher l'affichage automatique du prompt
  e.preventDefault()
  
  // Stocker l'événement pour l'utiliser plus tard
  deferredPrompt.value = e
  
  console.log('PWA: Prompt d\'installation disponible')
}

const installPWA = async () => {
  console.log('PWA: Tentative d\'installation...')
  
  if (!deferredPrompt.value) {
    console.log('PWA: Aucun prompt disponible - simulation en dev')
    showSuccessMessage()
    showPopup.value = false
    return
  }
  
  try {
    console.log('PWA: Déclenchement du prompt...')
    
    // Afficher le prompt d'installation
    deferredPrompt.value.prompt()
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.value.userChoice
    
    if (outcome === 'accepted') {
      console.log('PWA: Installation acceptée')
      showSuccessMessage()
    } else {
      console.log('PWA: Installation refusée')
    }
    
    // Réinitialiser le prompt
    deferredPrompt.value = null
    
  } catch (error) {
    console.error('PWA: Erreur lors de l\'installation:', error)
    showSuccessMessage()
  }
  
  showPopup.value = false
}

const closePopup = () => {
  showPopup.value = false
}

const showSuccessMessage = () => {
  const successNotification = document.createElement('div')
  successNotification.className = 'pwa-success-notification'
  successNotification.innerHTML = `
    <div class="pwa-success-content">
      <span class="pwa-success-icon">🎉</span>
      <span>FlexBeat installé avec succès !</span>
    </div>
  `
  
  document.body.appendChild(successNotification)
  
  setTimeout(() => {
    if (successNotification.parentNode) {
      successNotification.parentNode.removeChild(successNotification)
    }
  }, 3000)
}
</script>

<style scoped>
/* Bouton flottant principal */
.pwa-float-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #FF3B6A, #FFDD00);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 59, 106, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  font-size: 16px;
  animation: bounce 2s infinite;
}

.pwa-float-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(255, 59, 106, 0.6);
}

.pwa-float-icon {
  font-size: 24px;
  animation: pulse 2s infinite;
}

.pwa-float-text {
  white-space: nowrap;
}

/* Popup d'installation */
.pwa-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease-out;
}

.pwa-popup {
  background: white;
  border-radius: 24px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
}

.pwa-popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
  margin-bottom: 20px;
}

.pwa-logo-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(45deg, #FF3B6A, #FFDD00);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
}

.pwa-close-btn {
  background: #f3f4f6;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: #6b7280;
  transition: all 0.2s ease;
}

.pwa-close-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

.pwa-popup-content {
  padding: 0 24px 24px 24px;
}

.pwa-popup-title {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 12px;
  text-align: center;
}

.pwa-popup-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;
  text-align: center;
}

.pwa-features {
  display: grid;
  gap: 12px;
  margin-bottom: 24px;
}

.pwa-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f9fafb;
  border-radius: 12px;
  font-size: 14px;
  color: #374151;
}

.pwa-feature-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.pwa-popup-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 24px 24px 24px;
}

.pwa-install-btn {
  background: linear-gradient(135deg, #5D3A00, #2C2D5B);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pwa-install-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(93, 58, 0, 0.3);
}

.pwa-install-icon {
  font-size: 20px;
}

.pwa-cancel-btn {
  background: #f3f4f6;
  color: #6b7280;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pwa-cancel-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

/* Notification de succès */
.pwa-success-notification {
  position: fixed;
  top: 30px;
  right: 30px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
  z-index: 1002;
  animation: slideInRight 0.3s ease-out;
}

.pwa-success-content {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.pwa-success-icon {
  font-size: 20px;
}

/* Animations */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .pwa-float-button {
    bottom: 20px;
    right: 20px;
    padding: 14px 20px;
    font-size: 14px;
  }
  
  .pwa-float-icon {
    font-size: 20px;
  }
  
  .pwa-popup {
    margin: 20px;
    max-height: calc(100vh - 40px);
  }
  
  .pwa-popup-header {
    padding: 20px 20px 0 20px;
  }
  
  .pwa-popup-content {
    padding: 0 20px 20px 20px;
  }
  
  .pwa-popup-actions {
    padding: 0 20px 20px 20px;
  }
}
</style> 