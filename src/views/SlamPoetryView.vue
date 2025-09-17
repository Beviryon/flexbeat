<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-raspberry to-sunny text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-raspberry/90 to-sunny/90"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Slam & Poésie FlexBeat
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Libérez votre voix, exprimez votre âme à travers les mots qui dansent
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
              Le Slam FlexBeat est un espace d'expression libre où la poésie rencontre la performance. 
              Ici, chaque voix compte, chaque histoire mérite d'être entendue. Que vous soyez débutant ou slameur confirmé, 
              notre scène est votre terrain de jeu créatif.
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🎤
              </div>
              <h3 class="font-bold mb-2">Scènes ouvertes</h3>
              <p class="text-sm text-gray-600">Tous les vendredis soir</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo to-cacao rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                ✍️
              </div>
              <h3 class="font-bold mb-2">Ateliers d'écriture</h3>
              <p class="text-sm text-gray-600">Techniques et créativité</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-raspberry rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                🏆
              </div>
              <h3 class="font-bold mb-2">Battles de slam</h3>
              <p class="text-sm text-gray-600">Compétitions mensuelles</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-cacao to-indigo rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3">
                👥
              </div>
              <h3 class="font-bold mb-2">Communauté</h3>
              <p class="text-sm text-gray-600">Réseau de poètes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Types d'événements -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Nos Événements Slam</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Des rendez-vous réguliers pour s'exprimer, partager et vibrer ensemble
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Scène ouverte -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-raspberry to-sunny p-8 flex items-center">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Scène Ouverte "Mic Drop"</h3>
                  <p class="text-white/90">Chaque vendredi à 19h30</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700 mb-4">
                  Notre scène ouverte hebdomadaire où chacun peut monter sur scène pour 3 minutes de pure expression. 
                  Pas de jugement, juste de l'amour pour les mots.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Inscription sur place dès 19h</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">3 minutes par performance</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Thème libre ou thème du mois</span>
                  </div>
                </div>
                <button @click="showVideo('open-mic')" class="mt-6 text-raspberry font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Voir un extrait vidéo
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Battle de slam -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-indigo to-cacao p-8 flex items-center">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Battle de Slam "Mots Croisés"</h3>
                  <p class="text-white/90">Premier samedi du mois</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700 mb-4">
                  Compétition amicale où les slameurs s'affrontent en duel poétique. 
                  Le public vote pour son favori dans une ambiance électrique.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">16 participants maximum</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Prix pour les 3 premiers</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-indigo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Inscription une semaine avant</span>
                  </div>
                </div>
                <button @click="showVideo('battle')" class="mt-6 text-indigo font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Voir un extrait vidéo
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Masterclass -->
          <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold text-cacao mb-4">Masterclass avec des artistes invités</h3>
                <p class="text-gray-700 mb-6">
                  Chaque trimestre, nous invitons des slameurs professionnels, des poètes reconnus et des artistes de la parole 
                  pour partager leur expérience et leurs techniques.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">🎓</span>
                    <div>
                      <h4 class="font-semibold">Techniques de performance</h4>
                      <p class="text-sm text-gray-600">Présence scénique, gestion du trac, projection vocale</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">📝</span>
                    <div>
                      <h4 class="font-semibold">Écriture créative</h4>
                      <p class="text-sm text-gray-600">Jeux de mots, métaphores, structure narrative</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">🎭</span>
                    <div>
                      <h4 class="font-semibold">Expression corporelle</h4>
                      <p class="text-sm text-gray-600">Gestuelle, occupation de l'espace, connexion avec le public</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-sunny/10 to-raspberry/10 rounded-xl p-8 text-center">
                <div class="text-6xl mb-4">🌟</div>
                <h4 class="font-bold text-lg mb-2">Prochaine Masterclass</h4>
                <p class="text-gray-700 mb-4">
                  "L'art de captiver son audience"<br>
                  avec <strong>Marie-Josée Tchissoukou</strong>
                </p>
                <p class="text-sm text-gray-600">15 décembre 2024 - 14h à 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ateliers d'écriture -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Ateliers d'Écriture Slam</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Développez votre plume et trouvez votre voix unique
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="workshop in workshops" 
              :key="workshop.id"
              class="group cursor-pointer"
              @click="openWorkshopModal(workshop)"
            >
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {{ workshop.emoji }}
                </div>
                <h3 class="font-bold text-lg mb-2">{{ workshop.title }}</h3>
                <p class="text-sm text-gray-600 mb-4">{{ workshop.description }}</p>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500">{{ workshop.level }}</span>
                  <span class="text-raspberry font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Détails
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Témoignages -->
          <div class="mt-16 bg-gradient-to-r from-indigo/5 to-cacao/5 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-center mb-8">Ce que disent nos slameurs</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-xl p-6">
                <p class="text-gray-700 italic mb-4">
                  "Le slam chez FlexBeat m'a permis de trouver ma voix et de partager mes histoires. 
                  C'est plus qu'un club, c'est une famille qui encourage et inspire."
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div>
                    <p class="font-semibold">Jean-Michel</p>
                    <p class="text-sm text-gray-500">Membre depuis 2 ans</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-xl p-6">
                <p class="text-gray-700 italic mb-4">
                  "Les ateliers d'écriture ont transformé ma façon de voir la poésie. 
                  J'ai gagné en confiance et j'ose maintenant monter sur scène régulièrement."
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo to-cacao rounded-full flex items-center justify-center text-white font-bold">
                    SA
                  </div>
                  <div>
                    <p class="font-semibold">Sarah</p>
                    <p class="text-sm text-gray-500">Membre depuis 6 mois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-br from-raspberry to-sunny text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Votre voix mérite d'être entendue
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Rejoignez notre communauté de slameurs et libérez le poète qui sommeille en vous
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/join" 
              class="bg-white text-raspberry hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              S'inscrire au club
            </router-link>
            <button 
              @click="showVideo('intro')"
              class="border-2 border-white text-white hover:bg-white hover:text-raspberry font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Voir notre vidéo
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Atelier -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
            <div class="flex justify-between items-start">
              <h2 class="text-2xl font-bold text-cacao">{{ selectedWorkshop?.title }}</h2>
              <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="mb-6">
              <p class="text-gray-700 mb-4">{{ selectedWorkshop?.fullDescription }}</p>
              
              <h3 class="font-bold text-lg mb-3 text-indigo">Programme de l'atelier</h3>
              <ul class="space-y-2 mb-6">
                <li v-for="item in selectedWorkshop?.program" :key="item" class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
              
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold mb-2">Informations pratiques</h4>
                <div class="space-y-1 text-sm text-gray-600">
                  <p><strong>Durée :</strong> {{ selectedWorkshop?.duration }}</p>
                  <p><strong>Fréquence :</strong> {{ selectedWorkshop?.frequency }}</p>
                  <p><strong>Participants :</strong> {{ selectedWorkshop?.participants }}</p>
                  <p><strong>Matériel :</strong> {{ selectedWorkshop?.material }}</p>
                </div>
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
              :src="currentVideoUrl" 
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
const selectedWorkshop = ref(null)
const currentVideoUrl = ref('')

const workshops = [
  {
    id: 1,
    title: "Les bases du slam",
    emoji: "🎯",
    level: "Débutant",
    description: "Apprenez les fondamentaux de l'écriture slam et trouvez votre style unique.",
    fullDescription: "Cet atelier est conçu pour les débutants qui souhaitent découvrir l'art du slam. Nous explorerons les techniques de base de l'écriture poétique moderne, le rythme, les jeux de mots et la construction d'un texte percutant.",
    duration: "2 heures",
    frequency: "Tous les mercredis",
    participants: "12 maximum",
    material: "Carnet et stylo fournis",
    program: [
      "Introduction au slam : histoire et principes",
      "Exercices d'écriture automatique",
      "Jeux de mots et sonorités",
      "Construction d'un premier texte",
      "Lecture collective et feedback bienveillant"
    ]
  },
  {
    id: 2,
    title: "Performance scénique",
    emoji: "🎭",
    level: "Intermédiaire",
    description: "Maîtrisez l'art de la performance et captivez votre audience.",
    fullDescription: "Pour ceux qui ont déjà des textes mais veulent améliorer leur présence scénique. Nous travaillons sur la projection vocale, la gestuelle, le rythme et la connexion avec le public.",
    duration: "3 heures",
    frequency: "Samedis bi-mensuels",
    participants: "8 maximum",
    material: "Vos textes personnels",
    program: [
      "Échauffement vocal et corporel",
      "Techniques de respiration",
      "Gestion du trac et de l'émotion",
      "Occupation de l'espace scénique",
      "Mise en pratique avec feedback vidéo"
    ]
  },
  {
    id: 3,
    title: "Écriture engagée",
    emoji: "✊",
    level: "Tous niveaux",
    description: "Transformez vos convictions en poésie puissante et percutante.",
    fullDescription: "Le slam est souvent un art engagé. Dans cet atelier, nous explorons comment transformer nos colères, nos espoirs et nos combats en textes poétiques forts qui touchent et mobilisent.",
    duration: "2h30",
    frequency: "Mensuel",
    participants: "15 maximum",
    material: "Thème annoncé à l'avance",
    program: [
      "Le slam comme outil de changement social",
      "Techniques d'écriture militante",
      "Métaphores et images fortes",
      "L'équilibre entre message et poésie",
      "Création collective sur un thème d'actualité"
    ]
  }
]

const openWorkshopModal = (workshop) => {
  selectedWorkshop.value = workshop
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedWorkshop.value = null
}

const showVideo = (type) => {
  // Ici vous mettriez les vraies URLs de vos vidéos
  const videos = {
    'open-mic': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'battle': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'intro': 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
  currentVideoUrl.value = videos[type] || videos['intro']
  videoModalOpen.value = true
}

const closeVideoModal = () => {
  videoModalOpen.value = false
  currentVideoUrl.value = ''
}
</script>

<style scoped>
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
