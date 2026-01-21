<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-indigo to-cacao text-white overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Bibliothèque" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-indigo/80 to-cacao/80"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Club de Lecture FlexBeat
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Cultivez votre esprit à travers la découverte littéraire et les échanges enrichissants
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Le Club de Lecture FlexBeat est un espace de partage où les passionnés de littérature se rencontrent pour explorer ensemble des œuvres variées. 
            Chaque mois, nous découvrons de nouveaux horizons littéraires dans une ambiance conviviale et stimulante.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                📚
              </div>
              <h3 class="font-bold mb-2">Diversité littéraire</h3>
              <p class="text-sm text-gray-600">Romans, essais, poésie, BD...</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo to-cacao rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                💬
              </div>
              <h3 class="font-bold mb-2">Échanges riches</h3>
              <p class="text-sm text-gray-600">Débats et analyses en groupe</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-raspberry rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🌍
              </div>
              <h3 class="font-bold mb-2">Ouverture culturelle</h3>
              <p class="text-sm text-gray-600">Auteurs locaux et internationaux</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme mensuel -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Programme de Lecture</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Découvrez nos sélections mensuelles et les événements à venir
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Livre du mois en cours -->
            <div 
              v-for="book in currentBooks" 
              :key="book.id"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              @click="openBookModal(book)"
            >
              <div class="relative h-64 bg-gradient-to-br from-indigo/10 to-cacao/10 p-8 flex items-center justify-center">
                <div class="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {{ book.emoji }}
                </div>
                <div class="absolute top-4 right-4 bg-raspberry text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ book.status }}
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-2">{{ book.title }}</h3>
                <p class="text-gray-600 mb-4">par {{ book.author }}</p>
                <p class="text-sm text-gray-700 line-clamp-3 mb-4">{{ book.description }}</p>
                
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clip-rule="evenodd" />
                      </svg>
                      {{ book.meetingDate }}
                    </span>
                  </div>
                  <span class="text-raspberry font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sessions de discussion -->
          <div class="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-cacao mb-6">Sessions de Discussion</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-bold text-lg mb-4 text-indigo">Sessions hebdomadaires</h4>
                <div class="space-y-4">
                  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="w-12 h-12 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h5 class="font-semibold mb-1">Cercle de lecture classique</h5>
                      <p class="text-sm text-gray-600 mb-2">Chaque dimanche à 15h - Analyse approfondie du livre du mois</p>
                      <p class="text-xs text-gray-500">📍 Bibliothèque municipale ou en ligne</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo to-cacao rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h5 class="font-semibold mb-1">Café littéraire</h5>
                      <p class="text-sm text-gray-600 mb-2">Mercredi soir à 18h30 - Discussion libre autour d'un thème</p>
                      <p class="text-xs text-gray-500">📍 Café partenaire du quartier</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-bold text-lg mb-4 text-sunny">Événements spéciaux</h4>
                <div class="space-y-4">
                  <div class="p-4 border-2 border-sunny/20 rounded-lg hover:border-sunny/40 transition-colors">
                    <h5 class="font-semibold mb-2">Rencontres d'auteurs</h5>
                    <p class="text-sm text-gray-600">Sessions Q&A avec des écrivains locaux et internationaux</p>
                  </div>
                  <div class="p-4 border-2 border-raspberry/20 rounded-lg hover:border-raspberry/40 transition-colors">
                    <h5 class="font-semibold mb-2">Ateliers d'écriture</h5>
                    <p class="text-sm text-gray-600">Développez vos compétences d'écriture créative</p>
                  </div>
                  <div class="p-4 border-2 border-indigo/20 rounded-lg hover:border-indigo/40 transition-colors">
                    <h5 class="font-semibold mb-2">Marathon lecture</h5>
                    <p class="text-sm text-gray-600">24h de lecture continue pour une cause caritative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Genres littéraires -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Explorez tous les genres</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Notre club embrasse la diversité littéraire sous toutes ses formes
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="genre in genres" 
              :key="genre.name"
              class="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              :class="[genre.gradient]"
            >
              <div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                {{ genre.emoji }}
              </div>
              <h3 class="font-bold text-gray-800">{{ genre.name }}</h3>
              <p class="text-xs text-gray-600 mt-1">{{ genre.count }} livres lus</p>
            </div>
          </div>

          <!-- Bouton Voir plus -->
          <div class="text-center mt-12" v-if="visibleBooksCount < allBooks.length">
            <button 
              @click="loadMoreBooks"
              class="bg-gradient-to-r from-indigo to-cacao text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              Voir plus de livres ({{ allBooks.length - visibleBooksCount }} restants)
            </button>
          </div>

          <!-- Message quand tous les livres sont affichés -->
          <div class="text-center mt-12" v-else-if="allBooks.length > 3">
            <div class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo/10 to-cacao/10 text-indigo px-6 py-3 rounded-full">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Tous nos livres sont affichés !
            </div>
            <button 
              @click="showLessBooks"
              class="mt-4 text-indigo hover:text-cacao font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              <svg class="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              Voir moins
            </button>
          </div>

          <!-- Vidéo de présentation -->
          <div class="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-center mb-8">Comment fonctionne notre club ?</h3>
            <div class="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
              <RandomVideo class="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-indigo to-cacao text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez notre communauté de lecteurs passionnés
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Partagez vos coups de cœur, découvrez de nouveaux auteurs et enrichissez votre culture littéraire
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join" 
              class="bg-white text-indigo hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Devenir membre
            </router-link>
            <a 
              href="#" 
              class="border-2 border-white text-white hover:bg-white hover:text-indigo font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Voir le calendrier
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Livre -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
            <div class="flex justify-between items-start">
              <h2 class="text-2xl font-bold text-cacao">{{ selectedBook?.title }}</h2>
              <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="bg-gradient-to-br from-indigo/10 to-cacao/10 rounded-xl p-12 flex items-center justify-center mb-6">
                  <div class="text-9xl">{{ selectedBook?.emoji }}</div>
                </div>
                <div class="space-y-2 text-sm">
                  <p><span class="font-semibold">Auteur :</span> {{ selectedBook?.author }}</p>
                  <p><span class="font-semibold">Genre :</span> {{ selectedBook?.genre }}</p>
                  <p><span class="font-semibold">Pages :</span> {{ selectedBook?.pages }}</p>
                  <p><span class="font-semibold">Année :</span> {{ selectedBook?.year }}</p>
                </div>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 text-indigo">Résumé</h3>
                <p class="text-gray-700 mb-6">{{ selectedBook?.fullDescription }}</p>
                
                <h3 class="font-bold text-lg mb-4 text-raspberry">Points de discussion</h3>
                <ul class="space-y-2 mb-6">
                  <li v-for="point in selectedBook?.discussionPoints" :key="point" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ point }}</span>
                  </li>
                </ul>
                
                <div class="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 class="font-semibold mb-2">Prochaine session</h4>
                  <p class="text-sm text-gray-600">{{ selectedBook?.meetingDate }} à 15h</p>
                  <p class="text-sm text-gray-500">Lieu : {{ selectedBook?.location }}</p>
                </div>

                <!-- Livre audio -->
                <div class="bg-indigo/5 rounded-lg p-4">
                  <h4 class="font-semibold mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-indigo" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M13.828 7.172a1 1 0 011.414 0A5.983 5.983 0 0117 12a5.983 5.983 0 01-1.758 4.828 1 1 0 11-1.414-1.414A3.987 3.987 0 0015 12a3.987 3.987 0 00-1.172-2.828 1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    Livre audio disponible
                  </h4>
                  <button 
                    @click="playAudioBook"
                    class="w-full bg-indigo text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo/80 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    Écouter la version audio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import RandomVideo from '@/components/RandomVideo.vue'
import { pickRandomFlexbeatVideoUrl } from '@/utils/randomVideo'

const modalOpen = ref(false)
const selectedBook = ref(null)

const allBooks = [
  {
    id: 1,
    title: "L'Étranger",
    author: "Albert Camus",
    emoji: "📖",
    status: "En cours",
    description: "Un roman philosophique explorant l'absurdité de la condition humaine à travers l'histoire de Meursault.",
    fullDescription: "L'Étranger d'Albert Camus raconte l'histoire de Meursault, un homme indifférent aux conventions sociales. Après avoir commis un meurtre, il est jugé moins pour son crime que pour son comportement jugé amoral. Ce roman explore les thèmes de l'absurde, de la liberté et de la condition humaine.",
    genre: "Roman philosophique",
    pages: 185,
    year: 1942,
    meetingDate: "Dimanche 24 novembre",
    location: "Bibliothèque municipale",
    audioBookUrl: true,
    discussionPoints: [
      "Le concept de l'absurde chez Camus",
      "L'indifférence de Meursault face aux conventions sociales",
      "La symbolique du soleil dans le roman",
      "La question de la justice et du jugement moral"
    ]
  },
  {
    id: 2,
    title: "Une si longue lettre",
    author: "Mariama Bâ",
    emoji: "✉️",
    status: "Prochain",
    description: "Un roman épistolaire puissant sur la condition féminine en Afrique, l'amitié et la résilience.",
    fullDescription: "Dans ce roman épistolaire, Ramatoulaye écrit à son amie Aïssatou après la mort de son mari. Elle raconte sa vie, ses luttes en tant que femme dans la société sénégalaise, et les défis de la polygamie. Un témoignage poignant sur la force des femmes africaines.",
    genre: "Roman épistolaire",
    pages: 165,
    year: 1979,
    meetingDate: "Dimanche 1er décembre",
    location: "Café littéraire du centre",
    audioBookUrl: true,
    discussionPoints: [
      "La condition féminine en Afrique",
      "La tradition vs la modernité",
      "L'importance de l'éducation",
      "La solidarité féminine"
    ]
  },
  {
    id: 3,
    title: "Les Soleils des Indépendances",
    author: "Ahmadou Kourouma",
    emoji: "☀️",
    status: "À venir",
    description: "Une fresque épique sur les désillusions post-coloniales en Afrique de l'Ouest.",
    fullDescription: "Fama, prince malinké déchu, vit difficilement la transition vers les indépendances. Kourouma mélange français et malinké pour créer une langue unique qui traduit la complexité de l'Afrique post-coloniale. Un roman à la fois tragique et plein d'humour.",
    genre: "Roman africain",
    pages: 196,
    year: 1968,
    meetingDate: "Dimanche 8 décembre",
    location: "Espace culturel FlexBeat",
    audioBookUrl: true,
    discussionPoints: [
      "Le style linguistique unique de Kourouma",
      "Les désillusions des indépendances",
      "La figure du griot dans le récit",
      "Tradition et modernité en conflit"
    ]
  },
  {
    id: 4,
    title: "Ville Cruelle",
    author: "Eza Boto (Mongo Beti)",
    emoji: "🏙️",
    status: "Archives",
    description: "Premier roman de Mongo Beti, une critique sociale de la colonisation à travers l'histoire de Banda.",
    fullDescription: "Ville Cruelle dépeint la vie difficile dans une ville coloniale camerounaise. Banda, jeune homme ambitieux, découvre les réalités brutales de l'exploitation coloniale et de la corruption urbaine. Un roman précurseur de la littérature africaine engagée.",
    genre: "Roman social",
    pages: 220,
    year: 1954,
    meetingDate: "Lu en octobre",
    location: "Session passée",
    audioBookUrl: true,
    discussionPoints: [
      "La critique du système colonial",
      "L'urbanisation et ses défis en Afrique",
      "Le parcours initiatique de Banda",
      "L'émergence de la conscience politique"
    ]
  },
  {
    id: 5,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    emoji: "👑",
    status: "Archives",
    description: "Un conte philosophique intemporel sur l'enfance, l'amitié et la nature humaine.",
    fullDescription: "L'histoire d'un petit prince qui voyage de planète en planète et rencontre un aviateur dans le désert. À travers des rencontres symboliques, Saint-Exupéry livre une méditation sur l'amour, l'amitié et le sens de la vie.",
    genre: "Conte philosophique",
    pages: 96,
    year: 1943,
    meetingDate: "Lu en septembre",
    location: "Session passée",
    audioBookUrl: true,
    discussionPoints: [
      "La vision du monde des adultes vs celle des enfants",
      "Les symboles dans le récit (rose, renard, serpent)",
      "L'importance de l'invisible et de l'essentiel",
      "La solitude et la quête de sens"
    ]
  },
  {
    id: 6,
    title: "Cahier d'un retour au pays natal",
    author: "Aimé Césaire",
    emoji: "🌊",
    status: "Archives",
    description: "Poème fondateur de la négritude, cri de révolte et de fierté identitaire.",
    fullDescription: "Ce long poème en prose marque la naissance du mouvement de la négritude. Césaire y exprime sa révolte contre l'aliénation coloniale et revendique la beauté de l'identité noire et antillaise. Une œuvre majeure de la littérature francophone.",
    genre: "Poésie",
    pages: 128,
    year: 1939,
    meetingDate: "Lu en août",
    location: "Session passée",
    audioBookUrl: true,
    discussionPoints: [
      "Le concept de négritude",
      "La poésie comme arme de libération",
      "L'identité antillaise et africaine",
      "La langue française détournée et réappropriée"
    ]
  }
]

const visibleBooksCount = ref(3)
const currentBooks = computed(() => allBooks.slice(0, visibleBooksCount.value))

const genres = [
  { name: "Fiction", emoji: "📚", count: 42, gradient: "hover:from-raspberry/10 hover:to-sunny/10" },
  { name: "Poésie", emoji: "🎭", count: 18, gradient: "hover:from-indigo/10 hover:to-cacao/10" },
  { name: "Essais", emoji: "📝", count: 25, gradient: "hover:from-sunny/10 hover:to-raspberry/10" },
  { name: "BD", emoji: "💭", count: 15, gradient: "hover:from-cacao/10 hover:to-indigo/10" },
  { name: "Théâtre", emoji: "🎬", count: 12, gradient: "hover:from-raspberry/10 hover:to-indigo/10" },
  { name: "Biographies", emoji: "👤", count: 20, gradient: "hover:from-indigo/10 hover:to-sunny/10" },
  { name: "SF/Fantasy", emoji: "🚀", count: 30, gradient: "hover:from-sunny/10 hover:to-cacao/10" },
  { name: "Jeunesse", emoji: "🌈", count: 22, gradient: "hover:from-cacao/10 hover:to-raspberry/10" }
]

const openBookModal = (book) => {
  selectedBook.value = book
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedBook.value = null
}

const loadMoreBooks = () => {
  visibleBooksCount.value = Math.min(visibleBooksCount.value + 3, allBooks.length)
}

const showLessBooks = () => {
  visibleBooksCount.value = 3
}

const playAudioBook = () => {
  if (selectedBook.value?.audioBookUrl) {
    window.open(pickRandomFlexbeatVideoUrl(), '_blank')
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
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
