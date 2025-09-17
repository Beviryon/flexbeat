<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-cacao to-indigo text-white overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Scène de théâtre" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-cacao/80 to-indigo/80"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Théâtre & Expression FlexBeat
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Explorez l'art dramatique, libérez votre créativité et vivez l'émotion sur scène
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-lg text-gray-700 leading-relaxed">
              Le théâtre chez FlexBeat est un laboratoire d'expression où chacun peut explorer ses émotions, 
              développer sa créativité et partager des histoires qui touchent. De l'improvisation au théâtre classique, 
              nous offrons un espace bienveillant pour tous les passionnés d'art dramatique.
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-cacao to-indigo rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🎭
              </div>
              <h3 class="font-bold mb-2">Cours hebdomadaires</h3>
              <p class="text-sm text-gray-600">Tous niveaux acceptés</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🎪
              </div>
              <h3 class="font-bold mb-2">Improvisation</h3>
              <p class="text-sm text-gray-600">Matchs et ateliers</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-cacao rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🎬
              </div>
              <h3 class="font-bold mb-2">Spectacles</h3>
              <p class="text-sm text-gray-600">4 productions par an</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo to-raspberry rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🌟
              </div>
              <h3 class="font-bold mb-2">Masterclass</h3>
              <p class="text-sm text-gray-600">Artistes invités</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes de formation -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Nos Programmes de Formation</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Des parcours adaptés à chaque niveau et chaque aspiration théâtrale
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Programme débutant -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-12 bg-gradient-to-r from-sunny to-raspberry"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-4">Initiation au Théâtre</h3>
                <p class="text-gray-600 mb-6">
                  Découvrez les bases du jeu théâtral dans une ambiance ludique et bienveillante. 
                  Parfait pour vaincre sa timidité et gagner en confiance.
                </p>
                
                <div class="space-y-4 mb-6">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Expression corporelle</h4>
                      <p class="text-xs text-gray-600">Conscience du corps et de l'espace</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Techniques vocales</h4>
                      <p class="text-xs text-gray-600">Projection et articulation</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Jeux d'improvisation</h4>
                      <p class="text-xs text-gray-600">Créativité et spontanéité</p>
                    </div>
                  </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Mardi 18h-20h</span>
                    <button class="text-raspberry font-semibold hover:text-indigo transition-colors">
                      S'inscrire →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Programme intermédiaire -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-12 bg-gradient-to-r from-indigo to-cacao"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-indigo mb-4">Perfectionnement</h3>
                <p class="text-gray-600 mb-6">
                  Approfondissez vos techniques et explorez différents styles théâtraux. 
                  Travail sur des scènes classiques et contemporaines.
                </p>
                
                <div class="space-y-4 mb-6">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Analyse de texte</h4>
                      <p class="text-xs text-gray-600">Comprendre les sous-textes</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Construction du personnage</h4>
                      <p class="text-xs text-gray-600">Méthode Stanislavski</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Travail d'ensemble</h4>
                      <p class="text-xs text-gray-600">Écoute et réactivité</p>
                    </div>
                  </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Jeudi 19h-21h30</span>
                    <button class="text-indigo font-semibold hover:text-cacao transition-colors">
                      S'inscrire →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Troupe FlexBeat -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-12 bg-gradient-to-r from-cacao to-raspberry"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-4">Troupe FlexBeat</h3>
                <p class="text-gray-600 mb-6">
                  Intégrez notre troupe permanente et participez à nos créations professionnelles. 
                  Sur audition uniquement.
                </p>
                
                <div class="space-y-4 mb-6">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-raspberry flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Créations originales</h4>
                      <p class="text-xs text-gray-600">4 spectacles par an</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-raspberry flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Tournées</h4>
                      <p class="text-xs text-gray-600">Festivals et événements</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-raspberry flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-sm">Formation continue</h4>
                      <p class="text-xs text-gray-600">Avec des pros du théâtre</p>
                    </div>
                  </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Auditions en janvier</span>
                    <button class="text-raspberry font-semibold hover:text-cacao transition-colors">
                      En savoir plus →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section Improvisation -->
          <div class="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold text-indigo mb-4">Club d'Improvisation Théâtrale</h3>
                <p class="text-gray-700 mb-6">
                  L'impro chez FlexBeat, c'est l'art de créer des histoires instantanées, 
                  de rebondir sur l'imprévu et de développer son écoute active. 
                  Nos matchs d'impro attirent un public fidèle et enthousiaste !
                </p>
                
                <div class="space-y-4">
                  <div class="bg-gradient-to-r from-sunny/10 to-raspberry/10 rounded-lg p-4">
                    <h4 class="font-semibold mb-2">Match d'impro mensuel</h4>
                    <p class="text-sm text-gray-600">
                      Deux équipes s'affrontent dans des joutes verbales hilarantes. 
                      Le public vote pour ses performances préférées !
                    </p>
                  </div>
                  
                  <div class="bg-gradient-to-r from-indigo/10 to-cacao/10 rounded-lg p-4">
                    <h4 class="font-semibold mb-2">Atelier hebdomadaire</h4>
                    <p class="text-sm text-gray-600">
                      Tous les lundis de 19h à 21h. Exercices, jeux et techniques 
                      pour développer spontanéité et créativité.
                    </p>
                  </div>
                </div>
                
                <button 
                  @click="showImprovVideo()"
                  class="mt-6 bg-gradient-to-r from-indigo to-raspberry text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                  Voir un match d'impro
                </button>
              </div>
              
              <div class="relative">
                <div class="bg-gradient-to-br from-indigo/20 to-raspberry/20 rounded-2xl p-12 text-center">
                  <div class="text-9xl mb-4">🎪</div>
                  <p class="text-lg font-semibold text-gray-800">
                    "L'improvisation, c'est l'art de dire OUI à l'instant présent"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spectacles à venir -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Spectacles à Venir</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Découvrez nos prochaines créations et réservez vos places
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div 
              v-for="show in upcomingShows" 
              :key="show.id"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              @click="openShowModal(show)"
            >
              <div class="h-64 bg-gradient-to-br from-cacao/10 to-indigo/10 relative overflow-hidden">
                <img 
                  :src="show.image" 
                  :alt="show.title"
                  class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-2xl font-bold text-white mb-2">{{ show.title }}</h3>
                  <p class="text-white/90">{{ show.type }}</p>
                </div>
              </div>
              
              <div class="p-6">
                <p class="text-gray-700 mb-4 line-clamp-2">{{ show.description }}</p>
                
                <div class="space-y-2 mb-4">
                  <div class="flex items-center gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ show.dates }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ show.venue }}</span>
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-lg font-bold text-cacao">{{ show.price }}</span>
                  <span class="text-indigo font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Réserver
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-br from-cacao to-indigo text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Montez sur scène avec nous
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Que vous rêviez de jouer Shakespeare ou d'improviser des comédies, 
            votre place est chez FlexBeat
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join" 
              class="bg-white text-cacao hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Rejoindre le théâtre
            </router-link>
            <a 
              href="#" 
              class="border-2 border-white text-white hover:bg-white hover:text-cacao font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Programme des cours
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Spectacle -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
            <div class="flex justify-between items-start">
              <h2 class="text-2xl font-bold text-cacao">{{ selectedShow?.title }}</h2>
              <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <img 
              :src="selectedShow?.image" 
              :alt="selectedShow?.title"
              class="w-full h-64 object-cover rounded-xl mb-6"
            >
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 text-indigo">Synopsis</h3>
                <p class="text-gray-700 mb-6">{{ selectedShow?.fullDescription }}</p>
                
                <h3 class="font-bold text-lg mb-4 text-raspberry">Distribution</h3>
                <ul class="space-y-2">
                  <li v-for="actor in selectedShow?.cast" :key="actor.name" class="flex justify-between">
                    <span class="text-gray-700">{{ actor.role }}</span>
                    <span class="text-gray-600 text-sm">{{ actor.name }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 text-sunny">Informations pratiques</h3>
                <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <h4 class="font-semibold text-sm">Dates et horaires</h4>
                    <p class="text-gray-600">{{ selectedShow?.dates }}</p>
                    <p class="text-gray-600">{{ selectedShow?.times }}</p>
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">Lieu</h4>
                    <p class="text-gray-600">{{ selectedShow?.venue }}</p>
                    <p class="text-gray-600">{{ selectedShow?.address }}</p>
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">Tarifs</h4>
                    <p class="text-gray-600">{{ selectedShow?.price }}</p>
                    <p class="text-gray-600">{{ selectedShow?.priceDetails }}</p>
                  </div>
                </div>
                
                <button class="w-full mt-6 bg-gradient-to-r from-cacao to-indigo text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  Réserver mes places
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Modal Vidéo -->
    <Teleport to="body">
      <div v-if="videoModalOpen" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" @click="closeVideoModal">
        <div class="relative max-w-4xl w-full" @click.stop>
          <button @click="closeVideoModal" class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div class="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const videoModalOpen = ref(false)
const selectedShow = ref(null)

const upcomingShows = [
  {
    id: 1,
    title: "Les Rêveurs de Brazza",
    type: "Création originale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Une fresque poétique sur la jeunesse congolaise, entre traditions et modernité.",
    fullDescription: "Les Rêveurs de Brazza raconte l'histoire de trois jeunes Brazzavillois qui naviguent entre leurs rêves d'avenir et les réalités de leur quotidien. Une pièce qui mélange théâtre, danse et musique live pour créer une expérience immersive unique.",
    dates: "15-17 décembre 2024",
    times: "20h30 (16h le dimanche)",
    venue: "Théâtre Municipal",
    address: "Avenue de l'Indépendance, Brazzaville",
    price: "5000 FCFA",
    priceDetails: "3000 FCFA étudiants, 2000 FCFA membres FlexBeat",
    cast: [
      { role: "Mwana", name: "Jean-Baptiste M." },
      { role: "Nzinga", name: "Sarah K." },
      { role: "Toko", name: "Emmanuel N." },
      { role: "Mama Pauline", name: "Marie-Josée T." }
    ]
  },
  {
    id: 2,
    title: "Impro Battle Championship",
    type: "Compétition d'improvisation",
    image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Le grand tournoi annuel d'improvisation théâtrale avec les meilleures équipes du Congo.",
    fullDescription: "8 équipes s'affrontent dans des joutes verbales épiques. Humour, créativité et spontanéité seront au rendez-vous pour cette 5ème édition du championnat. Le public vote pour ses performances préférées !",
    dates: "28-29 décembre 2024",
    times: "19h00",
    venue: "Espace Culturel FlexBeat",
    address: "Quartier OCH, Brazzaville",
    price: "3000 FCFA",
    priceDetails: "Pass 2 jours : 5000 FCFA",
    cast: [
      { role: "Arbitre", name: "MC Dieudonné" },
      { role: "Équipe FlexBeat", name: "6 improvisateurs" },
      { role: "Invités spéciaux", name: "Surprises !" }
    ]
  }
]

const openShowModal = (show) => {
  selectedShow.value = show
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedShow.value = null
}

const showImprovVideo = () => {
  videoModalOpen.value = true
}

const closeVideoModal = () => {
  videoModalOpen.value = false
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
