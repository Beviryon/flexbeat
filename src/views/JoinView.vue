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
            Rejoindre FlexBeat
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Devenez membre de notre communauté sportive et commencez votre aventure
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            Rejoindre FlexBeat, c'est intégrer une communauté passionnée par le sport et le bien-être. 
            Découvrez nos avantages et commencez votre parcours avec nous !
          </p>
        </div>
      </div>
    </section>

    <!-- Avantages de l'adhésion -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-72 h-72 bg-cacao/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-raspberry/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sunny/5 rounded-full blur-2xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-20">
          <div class="inline-flex items-center space-x-2 bg-cacao/10 text-cacao px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-cacao rounded-full"></span>
            <span class="text-sm font-semibold">Avantages FlexBeat</span>
          </div>
          <h2 class="section-title">Pourquoi rejoindre FlexBeat ?</h2>
          <p class="section-subtitle max-w-3xl mx-auto">
            Découvrez tous les avantages de faire partie de notre association 
            et transformez votre vie avec nous
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Activités variées -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-cacao to-indigo rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Fitness Icon -->
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#5D3A00"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#2C2D5B"/>
                      <circle cx="12" cy="12" r="2" fill="#FFDD00"/>
                      <path d="M7 7l3 3" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M17 7l-3 3" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M7 17l3-3" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M17 17l-3-3" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 5V19" stroke="#FF3B6A" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M5 12H19" stroke="#FF3B6A" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-indigo transition-colors duration-300">Activités Variées</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Accès à tous nos cours : fitness, slam & lecture, cardio plein air et plus encore
                </p>
                
                <!-- Feature List -->
                <div class="space-y-2 text-left">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-cacao rounded-full"></div>
                    <span class="text-sm text-gray-600">Fitness & Musculation</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-indigo rounded-full"></div>
                    <span class="text-sm text-gray-600">Club de Slam & Lecture</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-sunny rounded-full"></div>
                    <span class="text-sm text-gray-600">Cardio Plein Air</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Communauté bienveillante -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/10 to-sunny/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-raspberry to-sunny rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Community Icon -->
                      <circle cx="12" cy="8" r="4" fill="#FF3B6A"/>
                      <circle cx="6" cy="16" r="3" fill="#FFDD00"/>
                      <circle cx="18" cy="16" r="3" fill="#FF3B6A"/>
                      <path d="M12 12c-2.21 0-4 1.79-4 4" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 12c2.21 0 4 1.79 4 4" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M8 16c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#FFDD00"/>
                      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="#FFDD00" stroke-width="1" stroke-dasharray="2 2"/>
                      <path d="M12 8v4" stroke="#FF3B6A" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M10 10h4" stroke="#FF3B6A" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-raspberry transition-colors duration-300">Communauté Bienveillante</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Rejoignez une communauté motivante et soutenante où chacun se sent valorisé
                </p>
                
                <!-- Stats -->
                <div class="flex justify-center space-x-4">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-raspberry">100%</div>
                    <div class="text-xs text-gray-500">Accueillant</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-sunny">24/7</div>
                    <div class="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Progression garantie -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/10 to-cacao/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-sunny to-cacao rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Progress Icon -->
                      <path d="M3 21h18" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M3 7h18" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M3 14h18" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M7 3v18" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 3v18" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M17 3v18" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <circle cx="7" cy="7" r="2" fill="#FFDD00"/>
                      <circle cx="12" cy="14" r="2" fill="#5D3A00"/>
                      <circle cx="17" cy="21" r="2" fill="#FFDD00"/>
                      <path d="M7 7L12 14L17 21" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M7 7L12 14L17 21" stroke="#FF3B6A" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 2"/>
                      <path d="M3 3L21 21" stroke="#FFDD00" stroke-width="1" stroke-linecap="round" stroke-dasharray="1 1"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-sunny transition-colors duration-300">Progression Garantie</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Programmes adaptés à tous les niveaux avec suivi personnalisé et objectifs clairs
                </p>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div class="bg-gradient-to-r from-sunny to-cacao h-2 rounded-full transition-all duration-1000" style="width: 95%"></div>
                </div>
                <p class="text-xs text-gray-500">95% de réussite</p>
              </div>
            </div>
          </div>
          
          <!-- Événements exclusifs -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo/10 to-raspberry/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-indigo to-raspberry rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Events Icon -->
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="#2C2D5B"/>
                      <path d="M16 2v4" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M8 2v4" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M3 10h18" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <circle cx="8" cy="14" r="1" fill="#FFDD00"/>
                      <circle cx="12" cy="14" r="1" fill="#FFDD00"/>
                      <circle cx="16" cy="14" r="1" fill="#FFDD00"/>
                      <circle cx="8" cy="18" r="1" fill="#FFDD00"/>
                      <circle cx="12" cy="18" r="1" fill="#FFDD00"/>
                      <circle cx="16" cy="18" r="1" fill="#FFDD00"/>
                      <path d="M12 6h.01" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M16 6h.01" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FFDD00" opacity="0.3"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#FF3B6A" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-indigo transition-colors duration-300">Événements Exclusifs</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Participation prioritaire à nos événements et compétitions avec accès VIP
                </p>
                
                <!-- Event Count -->
                <div class="text-center">
                  <div class="text-3xl font-bold text-indigo mb-1">12+</div>
                  <div class="text-sm text-gray-500">Événements par an</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tarifs avantageux -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/10 to-sunny/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-cacao to-sunny rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Pricing Icon -->
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#5D3A00"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#FFDD00"/>
                      <circle cx="12" cy="12" r="2" fill="#5D3A00"/>
                      <path d="M8 8l8 8" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M16 8l-8 8" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M6 6l2 2" stroke="#FF3B6A" stroke-width="1" stroke-linecap="round"/>
                      <path d="M18 18l-2-2" stroke="#FF3B6A" stroke-width="1" stroke-linecap="round"/>
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FF3B6A" opacity="0.2"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#FFDD00" opacity="0.2"/>
                      <circle cx="12" cy="12" r="3" stroke="#FF3B6A" stroke-width="1" fill="none" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-sunny transition-colors duration-300">Tarifs Avantageux</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Adhésion annuelle à prix réduit avec paiement échelonné possible
                </p>
                
                <!-- Price Highlight -->
                <div class="bg-gradient-to-r from-cacao/10 to-sunny/10 rounded-2xl p-4">
                  <div class="text-2xl font-bold text-cacao">-30%</div>
                  <div class="text-sm text-gray-600">Réduction annuelle</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Récompenses -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/10 to-indigo/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Icon -->
                <div class="w-24 h-24 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-raspberry to-indigo rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  <div class="relative bg-white rounded-2xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Detailed Rewards Icon -->
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FF3B6A"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#2C2D5B"/>
                      <circle cx="12" cy="12" r="2" fill="#FFDD00"/>
                      <path d="M8 20h8" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M10 20v-2" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M14 20v-2" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M6 22h12" stroke="#2C2D5B" stroke-width="2" stroke-linecap="round"/>
                      <path d="M9 22v-1" stroke="#2C2D5B" stroke-width="2" stroke-linecap="round"/>
                      <path d="M15 22v-1" stroke="#2C2D5B" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FFDD00" opacity="0.2"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#FF3B6A" opacity="0.2"/>
                      <circle cx="12" cy="12" r="3" stroke="#FFDD00" stroke-width="1" fill="none" opacity="0.3"/>
                      <path d="M12 18L13.09 24.26L20 25L13.09 25.74L12 32L10.91 25.74L4 25L10.91 24.26L12 18Z" fill="#FFDD00" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-raspberry transition-colors duration-300">Récompenses</h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  Système de points et récompenses pour les membres actifs et motivés
                </p>
                
                <!-- Rating -->
                <div class="flex justify-center space-x-1">
                  <div class="w-4 h-4 bg-sunny rounded-full"></div>
                  <div class="w-4 h-4 bg-sunny rounded-full"></div>
                  <div class="w-4 h-4 bg-sunny rounded-full"></div>
                  <div class="w-4 h-4 bg-sunny rounded-full"></div>
                  <div class="w-4 h-4 bg-sunny rounded-full"></div>
                </div>
                <p class="text-xs text-gray-500 mt-2">5/5 - Système Premium</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="mt-20 text-center">
          <div class="max-w-4xl mx-auto bg-gradient-to-r from-cacao/10 to-indigo/10 rounded-3xl p-8 border border-cacao/20">
            <h3 class="text-2xl font-bold text-cacao mb-4">Prêt à nous rejoindre ?</h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              "Rejoignez FlexBeat et transformez votre vie avec une communauté sportive 
              exceptionnelle. Nos membres témoignent d'une amélioration significative 
              de leur bien-être et de leur forme physique."
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn-primary text-lg px-8 py-4">
                Devenir membre maintenant
              </button>
              <button class="btn-secondary text-lg px-8 py-4">
                Voir nos tarifs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Règlement intérieur -->
    <section class="py-20 bg-gradient-to-r from-indigo to-cacao text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Règlement intérieur
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Consultez notre règlement intérieur pour connaître tous les détails 
          de l'adhésion et du fonctionnement de l'association
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/legal"
            class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span>Consulter le règlement</span>
          </router-link>
          <button 
            @click="scrollToForm"
            class="btn-accent text-lg px-8 py-4"
          >
            Devenir membre maintenant
          </button>
        </div>
      </div>
    </section>

    <!-- Formulaire d'adhésion -->
    <section id="adhesion-form" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Formulaire d'adhésion</h2>
            <p class="section-subtitle">
              Remplissez ce formulaire pour rejoindre FlexBeat
            </p>
          </div>
          
          <form 
            ref="adhesionForm"
            action="https://formspree.io/f/xpzgwqjz"
            method="POST"
            class="space-y-6"
            @submit="handleFormSubmit"
          >
            <input type="hidden" name="type" value="adhesion">
            
            <!-- Informations personnelles -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Informations personnelles</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  >
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  >
                </div>
              </div>
              
              <div class="mt-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                >
              </div>
              
              <div class="mt-4">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="Votre numéro de téléphone"
                >
              </div>
            </div>
            
            <!-- Plan d'adhésion -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Plan d'adhésion</h3>
              <div class="space-y-3">
                <label class="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="plan" 
                    value="mensuel" 
                    class="w-4 h-4 text-cacao focus:ring-cacao"
                  >
                  <span class="text-gray-700">Mensuel - 15 000 FCFA/mois</span>
                </label>
                
                <label class="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="plan" 
                    value="annuel" 
                    class="w-4 h-4 text-cacao focus:ring-cacao"
                    checked
                  >
                  <span class="text-gray-700">Annuel - 150 000 FCFA/an (recommandé)</span>
                </label>
                
                <label class="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="plan" 
                    value="etudiant" 
                    class="w-4 h-4 text-cacao focus:ring-cacao"
                  >
                  <span class="text-gray-700">Étudiant - 10 000 FCFA/mois</span>
                </label>
              </div>
            </div>
            
            <!-- Activités d'intérêt -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Activités d'intérêt</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="activities" 
                    value="fitness" 
                    class="w-4 h-4 text-cacao focus:ring-cacao rounded"
                  >
                  <span class="text-gray-700">Fitness</span>
                </label>
                
                <label class="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="activities" 
                    value="danse" 
                    class="w-4 h-4 text-cacao focus:ring-cacao rounded"
                  >
                  <span class="text-gray-700">Danse</span>
                </label>
                
                <label class="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="activities" 
                    value="cardio" 
                    class="w-4 h-4 text-cacao focus:ring-cacao rounded"
                  >
                  <span class="text-gray-700">Cardio Plein Air</span>
                </label>
                
                <label class="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="activities" 
                    value="evenements" 
                    class="w-4 h-4 text-cacao focus:ring-cacao rounded"
                  >
                  <span class="text-gray-700">Événements</span>
                </label>
              </div>
            </div>
            
            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message (optionnel)
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                placeholder="Informations supplémentaires, questions, etc."
              ></textarea>
            </div>
            
            <!-- Conditions -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="conditions" 
                name="conditions" 
                required
                class="w-4 h-4 text-cacao focus:ring-cacao rounded mt-1"
              >
              <label for="conditions" class="text-sm text-gray-600">
                J'accepte les <router-link to="/legal" class="text-cacao hover:underline">conditions générales</router-link> 
                et le <router-link to="/legal" class="text-cacao hover:underline">règlement intérieur</router-link> de FlexBeat *
              </label>
            </div>
            
            <!-- Bouton d'envoi -->
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else">Envoyer ma demande d'adhésion</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const adhesionForm = ref(null)

const scrollToForm = () => {
  document.getElementById('adhesion-form').scrollIntoView({ 
    behavior: 'smooth' 
  })
}

const handleFormSubmit = async (event) => {
  event.preventDefault()
  isSubmitting.value = true
  
  try {
    const formData = new FormData(event.target)
    
    // Ajouter les activités sélectionnées
    const activities = formData.getAll('activities')
    formData.set('activities', activities.join(', '))
    
    const response = await fetch('https://formspree.io/f/xpzgwqjz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      alert('Demande d\'adhésion envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.')
      event.target.reset()
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    alert('Erreur lors de l\'envoi du formulaire. Veuillez réessayer.')
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 