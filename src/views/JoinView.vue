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
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#5D3A00"/>
                      <circle cx="12" cy="12" r="3" stroke="#5D3A00" stroke-width="2"/>
                      <path d="M12 5V19" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M5 12H19" stroke="#5D3A00" stroke-width="2" stroke-linecap="round"/>
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
                      <circle cx="12" cy="12" r="10" stroke="#FF3B6A" stroke-width="2"/>
                      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M9 9H9.01" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M15 9H15.01" stroke="#FF3B6A" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="#FFDD00" stroke-width="1" stroke-dasharray="2 2"/>
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
                      <path d="M12 2L15.09 8.26L22 9L16.91 13.74L18.18 20.02L12 16.77L5.82 20.02L7.09 13.74L2 9L8.91 8.26L12 2Z" fill="#FFDD00"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#5D3A00"/>
                      <circle cx="12" cy="12" r="2" fill="#FFDD00"/>
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
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#2C2D5B"/>
                      <path d="M12 5L13.5 9.5L18 10L14.5 13.5L15.5 18L12 15.5L8.5 18L9.5 13.5L6 10L10.5 9.5L12 5Z" fill="#FF3B6A"/>
                      <circle cx="12" cy="12" r="2" fill="#2C2D5B"/>
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
                      <circle cx="12" cy="12" r="10" fill="#5D3A00"/>
                      <path d="M12 6V18" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M6 12H18" stroke="#FFDD00" stroke-width="2" stroke-linecap="round"/>
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FFDD00"/>
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
                      <path d="M12 2L15.09 8.26L22 9L16.91 13.74L18.18 20.02L12 16.77L5.82 20.02L7.09 13.74L2 9L8.91 8.26L12 2Z" fill="#FF3B6A"/>
                      <path d="M12 6L13.5 10.5L18 11L14.5 14.5L15.5 19L12 16.5L8.5 19L9.5 14.5L6 11L10.5 10.5L12 6Z" fill="#2C2D5B"/>
                      <circle cx="12" cy="12" r="2" fill="#FF3B6A"/>
                      <path d="M12 18L13.09 24.26L20 25L13.09 25.74L12 32L10.91 25.74L4 25L10.91 24.26L12 18Z" fill="#FFDD00"/>
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

    <!-- Tarifs -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Nos Tarifs</h2>
          <p class="section-subtitle">
            Des tarifs accessibles pour tous les budgets
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="card p-8 text-center border-2 border-gray-200">
            <h3 class="text-2xl font-bold text-cacao mb-4">Mensuel</h3>
            <div class="text-4xl font-bold text-raspberry mb-6">
              15 000 FCFA
              <span class="text-lg text-gray-500 font-normal">/mois</span>
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Accès à toutes les activités</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Équipement fourni</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Support communautaire</span>
              </li>
            </ul>
            <button @click="scrollToForm" class="btn-primary w-full">
              Choisir ce plan
            </button>
          </div>
          
          <div class="card p-8 text-center border-2 border-cacao relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-cacao text-white px-4 py-2 rounded-full text-sm font-semibold">
                Recommandé
              </span>
            </div>
            <h3 class="text-2xl font-bold text-cacao mb-4">Annuel</h3>
            <div class="text-4xl font-bold text-raspberry mb-6">
              150 000 FCFA
              <span class="text-lg text-gray-500 font-normal">/an</span>
            </div>
            <div class="text-sm text-sunny font-semibold mb-4">
              Économisez 30 000 FCFA !
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Tous les avantages du plan mensuel</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">T-shirt FlexBeat offert</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Paiement en 3 fois possible</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Priorité aux événements</span>
              </li>
            </ul>
            <button @click="scrollToForm" class="btn-primary w-full">
              Choisir ce plan
            </button>
          </div>
          
          <div class="card p-8 text-center border-2 border-gray-200">
            <h3 class="text-2xl font-bold text-cacao mb-4">Étudiant</h3>
            <div class="text-4xl font-bold text-raspberry mb-6">
              10 000 FCFA
              <span class="text-lg text-gray-500 font-normal">/mois</span>
            </div>
            <div class="text-sm text-sunny font-semibold mb-4">
              -33% sur le tarif normal
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Mêmes avantages que le plan mensuel</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Carte d'étudiant requise</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">Validité limitée à 1 an</span>
              </li>
            </ul>
            <button @click="scrollToForm" class="btn-primary w-full">
              Choisir ce plan
            </button>
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
          <a 
            href="/documents/reglement-interieur.pdf" 
            target="_blank"
            class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span>Télécharger le règlement</span>
          </a>
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
                J'accepte les <a href="/documents/reglement-interieur.pdf" target="_blank" class="text-cacao hover:underline">conditions générales</a> 
                et le <a href="/documents/reglement-interieur.pdf" target="_blank" class="text-cacao hover:underline">règlement intérieur</a> de FlexBeat *
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