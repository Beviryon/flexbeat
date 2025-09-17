<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-raspberry to-sunny text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Exercices Physiques au Bureau
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Des mouvements simples et efficaces à réaliser sur votre lieu de travail
          </p>
        </div>
      </div>
    </section>

    <!-- Catégories d'exercices -->
    <section class="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              selectedCategory === category.id 
                ? 'bg-gradient-to-r from-raspberry to-sunny text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:shadow-md'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Grid d'exercices -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="exercise in filteredExercises" 
              :key="exercise.id"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              @click="openExerciseModal(exercise)"
            >
              <!-- Thumbnail -->
              <div class="h-48 bg-gradient-to-br from-raspberry/10 to-sunny/10 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-raspberry/20 to-sunny/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="text-6xl z-10">{{ exercise.emoji }}</span>
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-raspberry">
                  {{ exercise.duration }}
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-2">{{ exercise.name }}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">{{ exercise.shortDescription }}</p>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {{ exercise.difficulty }}
                  </span>
                  <span class="text-xs bg-sunny/10 text-sunny px-3 py-1 rounded-full">
                    {{ exercise.targetArea }}
                  </span>
                </div>
                
                <!-- CTA -->
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">
                    {{ exercise.equipment }}
                  </span>
                  <span class="text-raspberry font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir la vidéo
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Programme Complet -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Programme Quotidien Recommandé</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Une routine de 15 minutes pour rester actif tout au long de la journée
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-cacao to-indigo rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🌅
                </div>
                <h3 class="font-bold text-lg mb-2">Matin (5 min)</h3>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Rotations du cou</li>
                  <li>• Étirements des épaules</li>
                  <li>• Respiration profonde</li>
                </ul>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  ☀️
                </div>
                <h3 class="font-bold text-lg mb-2">Midi (5 min)</h3>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Extensions de jambes</li>
                  <li>• Étirements du dos</li>
                  <li>• Marche rapide</li>
                </ul>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-sunny to-cacao rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🌙
                </div>
                <h3 class="font-bold text-lg mb-2">Après-midi (5 min)</h3>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Étirements des poignets</li>
                  <li>• Squats de bureau</li>
                  <li>• Exercices oculaires</li>
                </ul>
              </div>
            </div>

            <div class="mt-8 text-center">
              <button @click="downloadPDF" class="bg-gradient-to-r from-raspberry to-sunny text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300">
                Télécharger le Guide PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Exercice -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
            <div class="flex justify-between items-start">
              <h2 class="text-2xl font-bold text-cacao">{{ selectedExercise?.name }}</h2>
              <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Vidéo -->
            <div class="aspect-w-16 aspect-h-9 mb-8">
              <iframe 
                :src="selectedExercise?.videoUrl" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-full h-full rounded-xl"
              ></iframe>
            </div>
            
            <!-- Instructions détaillées -->
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 text-indigo">Instructions</h3>
                <ol class="space-y-3">
                  <li v-for="(step, index) in selectedExercise?.steps" :key="index" class="flex gap-3">
                    <span class="flex-shrink-0 w-8 h-8 bg-raspberry text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {{ index + 1 }}
                    </span>
                    <span class="text-gray-700">{{ step }}</span>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 text-sunny">Bénéfices</h3>
                <ul class="space-y-2">
                  <li v-for="benefit in selectedExercise?.benefits" :key="benefit" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ benefit }}</span>
                  </li>
                </ul>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 class="font-semibold mb-2">Précautions</h4>
                  <p class="text-sm text-gray-600">{{ selectedExercise?.precautions }}</p>
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

const selectedCategory = ref('tous')
const modalOpen = ref(false)
const selectedExercise = ref(null)

const categories = [
  { id: 'tous', name: 'Tous les exercices' },
  { id: 'cou-epaules', name: 'Cou & Épaules' },
  { id: 'dos', name: 'Dos' },
  { id: 'jambes', name: 'Jambes' },
  { id: 'bras-mains', name: 'Bras & Mains' },
  { id: 'yeux', name: 'Yeux' },
  { id: 'cardio', name: 'Cardio léger' }
]

const exercises = [
  {
    id: 1,
    name: 'Rotation des épaules',
    category: 'cou-epaules',
    emoji: '🔄',
    duration: '2 min',
    difficulty: 'Facile',
    targetArea: 'Épaules',
    equipment: 'Aucun matériel',
    shortDescription: 'Relâchez les tensions accumulées dans vos épaules avec ces rotations simples.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Asseyez-vous droit sur votre chaise, pieds à plat sur le sol',
      'Inspirez et montez vos épaules vers vos oreilles',
      'Faites rouler vos épaules vers l\'arrière en expirant',
      'Continuez le mouvement circulaire 10 fois',
      'Inversez le sens pour 10 rotations supplémentaires'
    ],
    benefits: [
      'Réduit les tensions musculaires du haut du dos',
      'Améliore la circulation sanguine',
      'Prévient les douleurs cervicales',
      'Favorise la relaxation'
    ],
    precautions: 'Effectuez des mouvements lents et contrôlés. Arrêtez si vous ressentez une douleur.'
  },
  {
    id: 2,
    name: 'Extensions de jambes',
    category: 'jambes',
    emoji: '🦵',
    duration: '3 min',
    difficulty: 'Facile',
    targetArea: 'Quadriceps',
    equipment: 'Chaise',
    shortDescription: 'Activez la circulation sanguine dans vos jambes tout en restant assis.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Asseyez-vous au bord de votre chaise, dos droit',
      'Tendez une jambe parallèle au sol',
      'Maintenez la position pendant 5 secondes',
      'Redescendez lentement sans toucher le sol',
      'Répétez 10 fois puis changez de jambe'
    ],
    benefits: [
      'Active la circulation sanguine',
      'Renforce les quadriceps',
      'Prévient les jambes lourdes',
      'Améliore la mobilité articulaire'
    ],
    precautions: 'Gardez le dos droit pendant l\'exercice. Ne forcez pas si vous avez des problèmes de genoux.'
  },
  {
    id: 3,
    name: 'Étirement du cou latéral',
    category: 'cou-epaules',
    emoji: '🙆',
    duration: '2 min',
    difficulty: 'Facile',
    targetArea: 'Cou',
    equipment: 'Aucun matériel',
    shortDescription: 'Soulagez les tensions cervicales avec cet étirement doux et efficace.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Asseyez-vous droit, épaules détendues',
      'Inclinez doucement la tête vers l\'épaule droite',
      'Placez votre main droite sur la tempe gauche pour un léger appui',
      'Maintenez 20 secondes en respirant profondément',
      'Revenez au centre et répétez de l\'autre côté'
    ],
    benefits: [
      'Soulage les tensions cervicales',
      'Améliore la flexibilité du cou',
      'Réduit les maux de tête',
      'Détend les muscles trapèzes'
    ],
    precautions: 'N\'exercez jamais de pression forte. L\'étirement doit être doux et agréable.'
  },
  {
    id: 4,
    name: 'Pompes murales',
    category: 'bras-mains',
    emoji: '🤸',
    duration: '3 min',
    difficulty: 'Moyen',
    targetArea: 'Pectoraux',
    equipment: 'Mur',
    shortDescription: 'Renforcez le haut du corps discrètement avec cet exercice contre le mur.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Placez-vous face à un mur, à une longueur de bras',
      'Posez vos mains à plat contre le mur, largeur des épaules',
      'Penchez-vous vers le mur en pliant les coudes',
      'Poussez pour revenir à la position initiale',
      'Effectuez 15-20 répétitions'
    ],
    benefits: [
      'Renforce les pectoraux et les triceps',
      'Améliore la posture',
      'Augmente la force du haut du corps',
      'Exercice discret au bureau'
    ],
    precautions: 'Gardez le corps aligné pendant tout le mouvement. Adaptez la distance au mur selon votre niveau.'
  },
  {
    id: 5,
    name: 'Flexions des poignets',
    category: 'bras-mains',
    emoji: '👐',
    duration: '2 min',
    difficulty: 'Facile',
    targetArea: 'Poignets',
    equipment: 'Aucun matériel',
    shortDescription: 'Prévenez le syndrome du canal carpien avec ces étirements essentiels.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Tendez votre bras devant vous, paume vers le haut',
      'Avec l\'autre main, tirez doucement vos doigts vers l\'arrière',
      'Maintenez 15 secondes',
      'Tournez la paume vers le bas et répétez',
      'Faites de même avec l\'autre poignet'
    ],
    benefits: [
      'Prévient le syndrome du canal carpien',
      'Améliore la flexibilité des poignets',
      'Réduit les tensions liées à la frappe',
      'Favorise la circulation sanguine'
    ],
    precautions: 'L\'étirement doit être ressenti mais jamais douloureux. Particulièrement important pour les utilisateurs intensifs d\'ordinateur.'
  },
  {
    id: 6,
    name: 'Exercice des yeux 20-20-20',
    category: 'yeux',
    emoji: '👁️',
    duration: '1 min',
    difficulty: 'Facile',
    targetArea: 'Yeux',
    equipment: 'Aucun matériel',
    shortDescription: 'Reposez vos yeux fatigués par les écrans avec cette technique simple.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Toutes les 20 minutes de travail sur écran',
      'Regardez un objet situé à 20 pieds (6 mètres)',
      'Maintenez votre regard pendant 20 secondes',
      'Clignez plusieurs fois des yeux',
      'Reprenez votre travail'
    ],
    benefits: [
      'Réduit la fatigue oculaire',
      'Prévient la sécheresse oculaire',
      'Améliore la concentration',
      'Diminue les maux de tête'
    ],
    precautions: 'Programmez des rappels pour ne pas oublier. Consultez un ophtalmologue si la fatigue persiste.'
  },
  {
    id: 7,
    name: 'Torsion assise',
    category: 'dos',
    emoji: '🔄',
    duration: '2 min',
    difficulty: 'Facile',
    targetArea: 'Dos',
    equipment: 'Chaise',
    shortDescription: 'Mobilisez votre colonne vertébrale et soulagez les tensions dorsales.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Asseyez-vous droit, pieds à plat sur le sol',
      'Placez votre main droite sur le dossier de la chaise',
      'Tournez votre torse vers la droite en expirant',
      'Maintenez 20 secondes en respirant normalement',
      'Revenez au centre et répétez de l\'autre côté'
    ],
    benefits: [
      'Améliore la mobilité de la colonne',
      'Soulage les tensions du dos',
      'Stimule la digestion',
      'Augmente la flexibilité'
    ],
    precautions: 'Effectuez le mouvement lentement. Ne forcez jamais la rotation.'
  },
  {
    id: 8,
    name: 'Marche sur place',
    category: 'cardio',
    emoji: '🚶',
    duration: '5 min',
    difficulty: 'Facile',
    targetArea: 'Corps entier',
    equipment: 'Aucun matériel',
    shortDescription: 'Activez votre circulation et réveillez votre corps avec cette marche dynamique.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Levez-vous de votre chaise',
      'Marchez sur place en levant bien les genoux',
      'Balancez vos bras naturellement',
      'Accélérez progressivement le rythme',
      'Continuez pendant 3-5 minutes'
    ],
    benefits: [
      'Active la circulation sanguine',
      'Augmente le rythme cardiaque',
      'Brûle des calories',
      'Améliore l\'humeur et l\'énergie'
    ],
    precautions: 'Commencez doucement si vous êtes resté assis longtemps. Portez des chaussures confortables.'
  },
  {
    id: 9,
    name: 'Étirement du chat assis',
    category: 'dos',
    emoji: '🐱',
    duration: '2 min',
    difficulty: 'Facile',
    targetArea: 'Colonne vertébrale',
    equipment: 'Chaise',
    shortDescription: 'Inspiré du yoga, cet étirement soulage instantanément votre dos.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Asseyez-vous au bord de votre chaise',
      'Placez vos mains sur vos genoux',
      'Arrondissez votre dos en expirant, menton vers la poitrine',
      'Cambrez ensuite le dos en inspirant, regard vers le haut',
      'Alternez ces mouvements 10 fois'
    ],
    benefits: [
      'Mobilise toute la colonne vertébrale',
      'Soulage les tensions dorsales',
      'Améliore la posture',
      'Détend le système nerveux'
    ],
    precautions: 'Mouvements doux et fluides. Synchronisez avec votre respiration.'
  }
]

const filteredExercises = computed(() => {
  if (selectedCategory.value === 'tous') {
    return exercises
  }
  return exercises.filter(ex => ex.category === selectedCategory.value)
})

const openExerciseModal = (exercise) => {
  selectedExercise.value = exercise
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedExercise.value = null
}

const downloadPDF = () => {
  // Ici vous pourriez implémenter le téléchargement d'un vrai PDF
  alert('Le guide PDF sera bientôt disponible !')
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
