<template>
  <footer class="bg-cacao text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo et description -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-cacao to-indigo rounded-full"></div>
            </div>
            <span class="text-xl font-bold">
              <span class="text-white">flex</span><span class="text-sunny">Beat</span>
            </span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Association sportive basée à Brazzaville, Congo. Nous promouvons le sport et le bien-être à travers des activités variées et inclusives.
          </p>
          <p class="text-sunny font-medium">"Le mouvement, c'est notre musique"</p>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-sunny">Liens rapides</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white transition-colors duration-200">
                À propos
              </router-link>
            </li>
            <li>
              <router-link to="/activities" class="text-gray-300 hover:text-white transition-colors duration-200">
                Activités
              </router-link>
            </li>
            <li>
              <router-link to="/events" class="text-gray-300 hover:text-white transition-colors duration-200">
                Événements
              </router-link>
            </li>
            <li>
              <router-link to="/gallery" class="text-gray-300 hover:text-white transition-colors duration-200">
                Galerie
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact et légal -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-sunny">Contact & Légal</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/join" class="text-gray-300 hover:text-white transition-colors duration-200">
                Adhésion
              </router-link>
            </li>
            <li>
              <router-link to="/legal" class="text-gray-300 hover:text-white transition-colors duration-200">
                Règlement intérieur
              </router-link>
            </li>
            <li>
              <router-link to="/legal" class="text-gray-300 hover:text-white transition-colors duration-200">
                Mentions légales
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-gray-600 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} FlexBeat. Tous droits réservés.
          </p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-sunny transition-colors duration-200" title="Facebook">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-sunny transition-colors duration-200" title="WhatsApp">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-sunny transition-colors duration-200" title="TikTok">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script> 