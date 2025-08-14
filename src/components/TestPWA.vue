<template>
  <div class="test-pwa-component">
    <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm">
            <strong>Test PWA Component :</strong> Ce composant de test fonctionne ! 
            Le bouton PWA devrait être visible en bas à droite.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Bouton de test simple -->
    <div class="text-center m-4">
      <button 
        @click="testClick"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Click PWA
      </button>
      <p class="text-sm text-gray-600 mt-2">Cliquez pour tester</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const testClick = () => {
  alert('Test PWA Component fonctionne !')
  console.log('Test PWA Component - Click détecté')
}
</script>

<style scoped>
.test-pwa-component {
  border: 2px dashed #10b981;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
}
</style> 