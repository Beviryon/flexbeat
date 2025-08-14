<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cacao to-indigo text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-raspberry/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            À propos de FlexBeat
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Découvrez l'histoire, la mission et les valeurs qui animent notre association sportive
          </p>
        </div>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Notre Histoire</h2>
            <p class="section-subtitle">
              FlexBeat est née d'une vision partagée de promouvoir le sport et le bien-être 
              dans la communauté de Brazzaville
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                Fondée en août 2025, FlexBeat est le fruit d'une collaboration entre deux passionnés 
                du sport et de l'éducation physique. Notre association est née du constat que 
                l'activité physique régulière était essentielle au bien-être de tous, 
                quel que soit l'âge ou le niveau.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Nous croyons fermement que le sport est un vecteur de cohésion sociale, 
                de développement personnel et de santé publique. C'est pourquoi nous nous 
                efforçons de rendre l'activité physique accessible, agréable et inclusive 
                pour tous les habitants de Brazzaville. Nos activités incluent le fitness, 
                le cardio plein air et le Club de Slam & Lecture pour enrichir l'esprit et la créativité.
              </p>
            </div>
            
            <div class="relative">
              <div class="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" 
                  alt="Deux amis faisant du sport ensemble" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-xl font-semibold">Le mouvement, c'est notre musique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Co-fondateurs -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-72 h-72 bg-cacao/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-raspberry/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-20">
          <h2 class="section-title">Nos Co-fondateurs</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Découvrez les visionnaires qui ont transformé leur passion en réalité
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <!-- Beviryon -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/20 to-indigo/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div class="flex items-start space-x-6">
                <div class="relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    B
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-sunny rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">⭐</span>
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-3">
                    <h3 class="text-2xl font-bold text-cacao">Beviryon ISSANGE NGOULOU</h3>
                    <span class="px-3 py-1 bg-cacao/10 text-cacao text-sm font-semibold rounded-full">V.Précident</span>
                  </div>
                  <p class="text-raspberry font-semibold mb-4 text-lg">Co-fondateur & Développeur Full Stack</p>
                  <p class="text-gray-600 leading-relaxed text-base">
                    Étudiant et freelance en développement full stack, Beviryon apporte son expertise 
                    technologique et sa vision innovante pour créer une communauté sportive moderne. 
                    Il supervise la stratégie digitale et les partenariats.
                  </p>
                  
                  <!-- Skills/Tags -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span class="px-3 py-1 bg-indigo/10 text-indigo text-xs font-medium rounded-full">Développement</span>
                    <span class="px-3 py-1 bg-sunny/10 text-sunny text-xs font-medium rounded-full">Innovation</span>
                    <span class="px-3 py-1 bg-raspberry/10 text-raspberry text-xs font-medium rounded-full">Stratégie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- MOUKOKO Meron Exaucé -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo/20 to-raspberry/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div class="flex items-start space-x-6">
                <div class="relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-indigo to-raspberry rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    M
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-cacao rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">🎯</span>
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-3">
                    <h3 class="text-2xl font-bold text-cacao">MOUKOKO Meron Exaucé</h3>
                    <span class="px-3 py-1 bg-indigo/10 text-indigo text-sm font-semibold rounded-full">Président</span>
                  </div>
                  <p class="text-raspberry font-semibold mb-4 text-lg">Co-fondateur & Professeur Certifié EPS</p>
                  <p class="text-gray-600 leading-relaxed text-base">
                    Professeur certifié de lycée en EPS (sport et activité sportive), Meron Exaucé assure 
                    la qualité technique des programmes et la formation des animateurs. 
                    Il garantit la sécurité et l'excellence de toutes nos activités sportives.
                  </p>
                  
                  <!-- Skills/Tags -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span class="px-3 py-1 bg-cacao/10 text-cacao text-xs font-medium rounded-full">Certification</span>
                    <span class="px-3 py-1 bg-sunny/10 text-sunny text-xs font-medium rounded-full">Formation</span>
                    <span class="px-3 py-1 bg-raspberry/10 text-raspberry text-xs font-medium rounded-full">Expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Connection Line -->
        <div class="hidden lg:block relative mt-16">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-cacao to-transparent"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cacao rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Notre Mission -->
    <section class="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-64 h-64 bg-cacao/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-sunny/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-20">
          <h2 class="section-title">Notre Mission</h2>
          <p class="section-subtitle max-w-3xl mx-auto">
            Promouvoir le sport et le bien-être pour tous à Brazzaville, 
            en créant une communauté inclusive et motivante
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <!-- Accessibilité -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/10 to-indigo/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Illustration -->
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
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-indigo transition-colors duration-300">Accessibilité</h3>
                <p class="text-gray-600 leading-relaxed text-base">
                  Rendre l'activité physique accessible à tous, 
                  quel que soit le niveau ou les moyens financiers. 
                  Notre mission est d'éliminer les barrières.
                </p>
                
                <!-- Progress Bar -->
                <div class="mt-6">
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-cacao to-indigo h-2 rounded-full transition-all duration-1000" style="width: 95%"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">95% d'accessibilité</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Inclusion -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/10 to-sunny/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Illustration -->
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
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-raspberry transition-colors duration-300">Inclusion</h3>
                <p class="text-gray-600 leading-relaxed text-base">
                  Créer une communauté accueillante et bienveillante 
                  où chacun se sent valorisé et soutenu, 
                  peu importe son origine ou ses capacités.
                </p>
                
                <!-- Stats -->
                <div class="mt-6 flex justify-center space-x-4">
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
          
          <!-- Excellence -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/10 to-cacao/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="text-center">
                <!-- SVG Illustration -->
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
                
                <h3 class="text-2xl font-bold text-cacao mb-4 group-hover:text-sunny transition-colors duration-300">Excellence</h3>
                <p class="text-gray-600 leading-relaxed text-base">
                  Maintenir des standards de qualité élevés dans 
                  tous nos programmes et activités, 
                  en visant toujours l'excellence.
                </p>
                
                <!-- Rating -->
                <div class="mt-6">
                  <div class="flex justify-center space-x-1">
                    <div class="w-4 h-4 bg-sunny rounded-full"></div>
                    <div class="w-4 h-4 bg-sunny rounded-full"></div>
                    <div class="w-4 h-4 bg-sunny rounded-full"></div>
                    <div class="w-4 h-4 bg-sunny rounded-full"></div>
                    <div class="w-4 h-4 bg-sunny rounded-full"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">5/5 - Qualité Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mission Statement -->
        <div class="mt-20 text-center">
          <div class="max-w-4xl mx-auto bg-gradient-to-r from-cacao/10 to-indigo/10 rounded-3xl p-8 border border-cacao/20">
            <h3 class="text-2xl font-bold text-cacao mb-4">Notre Engagement</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
              "Chez FlexBeat, nous nous engageons à transformer la vie de chaque membre 
              à travers le sport, la culture et la communauté. Notre mission est de créer 
              un environnement où chacun peut s'épanouir, se dépasser et trouver sa place."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Nos Valeurs</h2>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Les principes qui guident chacune de nos actions et décisions
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">❤️</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Bienveillance</h3>
            <p class="text-white/80 text-sm">
              Accueillir chacun avec respect et empathie
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">🌟</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Motivation</h3>
            <p class="text-white/80 text-sm">
              Encourager et soutenir la progression de chacun
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">🌍</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Durabilité</h3>
            <p class="text-white/80 text-sm">
              Promouvoir des pratiques respectueuses de l'environnement
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">🎵</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Passion</h3>
            <p class="text-white/80 text-sm">
              Partager notre amour du sport et du mouvement
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-cacao mb-6">
          Envie de nous rejoindre ?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Devenez membre de FlexBeat et participez à l'aventure du sport à Brazzaville
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/join" class="btn-primary text-lg px-8 py-4">
            Devenir membre
          </router-link>
          <router-link to="/contact" class="btn-secondary text-lg px-8 py-4">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pas de logique complexe nécessaire pour cette page
</script> 