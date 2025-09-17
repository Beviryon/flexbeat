<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cacao to-raspberry text-white overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Personne faisant des exercices" 
          class="w-full h-full object-cover opacity-50"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-cacao/80 to-raspberry/80"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span class="text-sunny">flex</span><span class="text-white">Beat</span>
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
            Le mouvement, c'est notre musique
          </p>
          <p class="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Association sportive à Brazzaville spécialisée dans le fitness, les activités culturelles et le cardio plein air. Rejoignez notre communauté active et transformez votre vie !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join"
              class="bg-white text-cacao hover:bg-gray-100 font-bold py-3 px-6 rounded-2xl transition-all duration-300 text-base"
            >
              Rejoindre FlexBeat
            </router-link>
            <router-link 
              to="/healthy-habits"
              class="relative border-2 border-white text-white hover:bg-white hover:text-cacao font-bold py-3 px-6 rounded-2xl transition-all duration-300 text-base group"
            >
              <span class="absolute -top-2 -right-2 bg-sunny text-cacao text-xs font-bold px-2 py-1 rounded-full animate-bounce">NOUVEAU</span>
              Découvrir les exercices
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Flèche animée pour inviter au scroll -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Section Exercices & Bien-être (Mise en avant) -->
    <section class="py-20 bg-gradient-to-br from-indigo/5 via-raspberry/5 to-sunny/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-raspberry/20 to-sunny/20 text-raspberry px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse">
            <span class="w-2 h-2 bg-raspberry rounded-full"></span>
            NOUVEAU
            <span class="w-2 h-2 bg-sunny rounded-full"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-raspberry to-sunny bg-clip-text text-transparent">
            Exercices & Bien-être au Quotidien
          </h2>
          <p class="section-subtitle max-w-3xl mx-auto text-lg">
            Découvrez nos programmes d'exercices adaptés à votre style de vie. 
            Des conseils personnalisés et des mouvements simples pour rester en forme, que vous soyez au bureau ou à la maison.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <!-- Habitudes saines -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 bg-gradient-to-bl from-raspberry to-transparent w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-raspberry to-sunny rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                💼
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Habitudes Saines au Travail
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Conseils personnalisés selon votre métier : chauffeurs, agents commerciaux, enseignants... 
                Découvrez comment rester en forme pendant vos heures de travail.
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Postures ergonomiques
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Pauses actives
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Vidéos de démonstration
                </li>
              </ul>
              
              <router-link 
                to="/healthy-habits" 
                class="w-full bg-gradient-to-r from-raspberry to-sunny text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Découvrir les conseils
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Exercices au bureau -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 bg-gradient-to-bl from-indigo to-transparent w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-indigo to-cacao rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                🪑
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Exercices au Bureau
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Mouvements simples et discrets à réaliser sur votre lieu de travail. 
                Gardez la forme même pendant vos longues journées au bureau.
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Sans matériel
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  5-10 minutes
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Exercices discrets
                </li>
              </ul>
              
              <router-link 
                to="/office-exercises" 
                class="w-full bg-gradient-to-r from-indigo to-cacao text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Voir les exercices
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Exercices à la maison -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 bg-gradient-to-bl from-sunny to-transparent w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-sunny to-raspberry rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                🏠
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Exercices à la Maison
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Programmes complets pour transformer votre salon en salle de sport. 
                Du débutant à l'expert, trouvez votre routine idéale.
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Tous niveaux
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  15-60 minutes
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  HIIT, Yoga, Force
                </li>
              </ul>
              
              <router-link 
                to="/home-exercises" 
                class="w-full bg-gradient-to-r from-sunny to-raspberry text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Explorer les programmes
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Statistiques ou témoignage -->
        <div class="bg-gradient-to-r from-cacao to-raspberry rounded-3xl p-8 md:p-12 text-white text-center">
          <div class="max-w-4xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-bold mb-6">
              Rejoignez des centaines de membres qui ont transformé leur quotidien
            </h3>
            <div class="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div class="text-4xl font-bold mb-2">500+</div>
                <div class="text-white/80">Exercices en vidéo</div>
              </div>
              <div>
                <div class="text-4xl font-bold mb-2">6</div>
                <div class="text-white/80">Professions couvertes</div>
              </div>
              <div>
                <div class="text-4xl font-bold mb-2">15min</div>
                <div class="text-white/80">Par jour suffisent</div>
              </div>
            </div>
            <router-link 
              to="/join" 
              class="inline-block bg-white text-cacao hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Commencer maintenant
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Activités Culturelles -->
    <section class="py-20 bg-gradient-to-br from-cacao/5 via-indigo/5 to-raspberry/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo/20 to-cacao/20 text-indigo px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse">
            <span class="w-2 h-2 bg-indigo rounded-full"></span>
            CULTURE & ARTS
            <span class="w-2 h-2 bg-cacao rounded-full"></span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo to-cacao bg-clip-text text-transparent">
            Éveillez l'Artiste en Vous
          </h2>
          <p class="section-subtitle max-w-3xl mx-auto text-lg">
            FlexBeat, c'est aussi un espace d'expression culturelle et artistique. 
            Développez votre créativité à travers la lecture, le slam et le théâtre.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <!-- Club de Lecture -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo/20 to-transparent rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-indigo to-cacao rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                📚
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Club de Lecture
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Explorez des œuvres littéraires variées, participez à des débats enrichissants et rencontrez des auteurs. 
                Un voyage à travers les mots et les cultures.
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Sessions hebdomadaires
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Rencontres d'auteurs
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Bibliothèque partagée
                </li>
              </ul>
              
              <router-link 
                to="/reading-club" 
                class="w-full bg-gradient-to-r from-indigo to-cacao text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Rejoindre le club
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Slam & Poésie -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-raspberry/20 to-transparent rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-raspberry to-sunny rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                🎤
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Slam & Poésie
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Libérez votre voix sur scène ! Ateliers d'écriture, scènes ouvertes et battles de slam. 
                L'art de la parole vivante vous attend.
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Scènes ouvertes
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Battles mensuelles
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-raspberry flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Ateliers d'écriture
                </li>
              </ul>
              
              <router-link 
                to="/slam-poetry" 
                class="w-full bg-gradient-to-r from-raspberry to-sunny text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Monter sur scène
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Théâtre -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cacao/20 to-transparent rounded-full -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div class="p-8 relative">
              <div class="w-20 h-20 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                🎭
              </div>
              
              <h3 class="text-2xl font-bold text-center mb-4 text-cacao">
                Théâtre & Expression
              </h3>
              
              <p class="text-gray-600 text-center mb-6 leading-relaxed">
                Explorez l'art dramatique sous toutes ses formes. Cours, improvisation, spectacles... 
                Révélez l'acteur qui sommeille en vous !
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-cacao flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Cours tous niveaux
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-cacao flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  4 spectacles/an
                </li>
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-5 h-5 text-cacao flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Troupe permanente
                </li>
              </ul>
              
              <router-link 
                to="/theater" 
                class="w-full bg-gradient-to-r from-cacao to-indigo text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Découvrir le théâtre
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Témoignage ou citation -->
        <div class="bg-gradient-to-r from-indigo to-cacao rounded-3xl p-8 md:p-12 text-white text-center">
          <div class="max-w-4xl mx-auto">
            <div class="text-6xl mb-6">✨</div>
            <blockquote class="text-2xl md:text-3xl font-bold mb-6 italic">
              "Un esprit sain dans un corps sain : FlexBeat cultive les deux !"
            </blockquote>
            <p class="text-white/80 text-lg">
              Rejoignez une communauté où le sport et la culture se rencontrent pour créer une expérience unique d'épanouissement personnel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Activités Sportives & Culturelles -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-cacao/10 to-raspberry/10 text-cacao px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span class="w-2 h-2 bg-raspberry rounded-full"></span>
            Nos Activités
          </div>
          <h2 class="section-title mb-4">Activités Sportives & Culturelles</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Découvrez notre gamme d'activités variées pour tous les niveaux. 
            Chaque activité est conçue pour vous faire progresser dans un environnement convivial.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Fitness -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/5 via-indigo/5 to-cacao/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-cacao/20 to-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-indigo transition-colors duration-300">
                Fitness & Musculation
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Renforcez votre corps avec nos séances de fitness en plein air. 
                Programmes personnalisés pour tous les niveaux.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Samedi 8h-10h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Plein air
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-indigo font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cacao to-indigo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <!-- Club de Slam & Lecture -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/5 via-sunny/5 to-raspberry/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-raspberry/20 to-sunny/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎭
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-raspberry transition-colors duration-300">
                Club de Slam & Lecture
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Exprimez votre créativité à travers la poésie et la lecture. 
                Découvrez l'art du slam et enrichissez votre culture.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Dimanche 15h-17h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Intérieur
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-sunny font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-raspberry to-sunny transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <!-- Cardio Plein Air -->
          <div class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <!-- Fond dégradé -->
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/5 via-cacao/5 to-sunny/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Image de fond -->
            <div class="absolute inset-0 bg-gradient-to-br from-sunny/20 to-cacao/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Contenu -->
            <div class="relative p-8">
              <!-- Icône avec fond -->
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-cacao rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🏃‍♂️
              </div>
              
              <h3 class="text-xl font-bold text-cacao mb-3 group-hover:text-sunny transition-colors duration-300">
                Cardio Plein Air
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Améliorez votre endurance avec nos sessions cardio dynamiques. 
                Entraînements variés dans un cadre naturel stimulant.
              </p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Samedi 16h-18h
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Plein air
                </span>
              </div>
              
              <router-link 
                to="/activities" 
                class="inline-flex items-center gap-2 text-raspberry hover:text-sunny font-semibold transition-colors duration-300 group-hover:gap-3"
              >
                En savoir plus
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
            
            <!-- Bordure colorée -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunny to-cacao transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="text-center mt-16">
          <div class="inline-block bg-gradient-to-r from-cacao to-raspberry p-1 rounded-2xl">
            <router-link 
              to="/activities" 
              class="bg-white text-cacao hover:text-raspberry font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 group hover:shadow-lg"
            >
              <span>Voir toutes nos activités</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
          <p class="text-gray-500 mt-4 text-sm">
            Rejoignez-nous et transformez votre vie avec FlexBeat
          </p>
        </div>
      </div>
    </section>

    <!-- PWA Install Button -->
    <PWAInstallButton />
  </div>
</template>

<script setup>
import PWAInstallButton from '../components/PWAInstallButton.vue'
</script>

<style scoped>
/* Styles pour l'image de fond */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
