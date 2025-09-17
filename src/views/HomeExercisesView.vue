<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-sunny to-cacao text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Exercices Physiques à la Maison
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Programme complet pour transformer votre salon en salle de sport
          </p>
        </div>
      </div>
    </section>

    <!-- Filtres de niveau et durée -->
    <section class="py-8 bg-gray-50 sticky top-20 z-10 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <select 
            v-model="selectedLevel" 
            class="px-6 py-3 rounded-full bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <option value="tous">Tous les niveaux</option>
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="avance">Avancé</option>
          </select>
          
          <select 
            v-model="selectedDuration" 
            class="px-6 py-3 rounded-full bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <option value="tous">Toutes les durées</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
          
          <select 
            v-model="selectedType" 
            class="px-6 py-3 rounded-full bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <option value="tous">Tous les types</option>
            <option value="cardio">Cardio</option>
            <option value="force">Force</option>
            <option value="flexibilite">Flexibilité</option>
            <option value="hiit">HIIT</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Programmes d'entraînement -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="workout in filteredWorkouts" 
              :key="workout.id"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              @click="openWorkoutModal(workout)"
            >
              <!-- Header avec gradient -->
              <div :class="`h-56 relative bg-gradient-to-br ${workout.gradient} flex flex-col justify-between p-6`">
                <div class="flex justify-between items-start">
                  <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {{ workout.type }}
                  </span>
                  <span class="text-white text-4xl">{{ workout.emoji }}</span>
                </div>
                
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ workout.name }}</h3>
                  <div class="flex items-center gap-4 text-white/90 text-sm">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                      </svg>
                      {{ workout.duration }} min
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {{ workout.level }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <p class="text-gray-600 mb-4 line-clamp-2">{{ workout.description }}</p>
                
                <!-- Équipement nécessaire -->
                <div class="mb-4">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">Équipement :</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="item in workout.equipment" 
                      :key="item"
                      class="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div>
                
                <!-- CTA avec animation -->
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">
                    {{ workout.exercises.length }} exercices
                  </span>
                  <span class="text-raspberry font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Commencer
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
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

    <!-- Section conseils -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Conseils pour s'entraîner à la maison</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Maximisez vos résultats avec ces recommandations essentielles
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-cacao to-indigo rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🏠
              </div>
              <h3 class="font-bold mb-2">Espace dédié</h3>
              <p class="text-sm text-gray-600">
                Créez un coin fitness dans votre maison, même petit, pour rester motivé
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⏰
              </div>
              <h3 class="font-bold mb-2">Horaire fixe</h3>
              <p class="text-sm text-gray-600">
                Entraînez-vous à la même heure chaque jour pour créer une habitude
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-sunny to-cacao rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💧
              </div>
              <h3 class="font-bold mb-2">Hydratation</h3>
              <p class="text-sm text-gray-600">
                Gardez une bouteille d'eau à proximité et buvez régulièrement
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo to-raspberry rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📱
              </div>
              <h3 class="font-bold mb-2">Suivi progrès</h3>
              <p class="text-sm text-gray-600">
                Notez vos séances pour visualiser votre évolution et rester motivé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Programme -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <!-- Header fixe -->
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-2xl font-bold text-cacao mb-2">{{ selectedWorkout?.name }}</h2>
                <div class="flex items-center gap-4 text-sm text-gray-600">
                  <span>⏱️ {{ selectedWorkout?.duration }} minutes</span>
                  <span>💪 {{ selectedWorkout?.level }}</span>
                  <span>🎯 {{ selectedWorkout?.type }}</span>
                </div>
              </div>
              <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Vidéo d'introduction -->
            <div class="mb-8">
              <h3 class="font-bold text-lg mb-4">Vidéo de démonstration</h3>
              <div class="aspect-w-16 aspect-h-9">
                <iframe 
                  :src="selectedWorkout?.introVideo" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
            
            <!-- Liste des exercices -->
            <div class="mb-8">
              <h3 class="font-bold text-lg mb-6">Programme détaillé</h3>
              <div class="space-y-4">
                <div 
                  v-for="(exercise, index) in selectedWorkout?.exercises" 
                  :key="index"
                  class="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white font-bold">
                    {{ index + 1 }}
                  </div>
                  <div class="flex-grow">
                    <div class="flex items-start justify-between mb-2">
                      <h4 class="font-semibold text-gray-800">{{ exercise.name }}</h4>
                      <button 
                        @click="playExerciseVideo(exercise.video)"
                        class="text-raspberry hover:text-indigo transition-colors"
                      >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center gap-4 text-sm text-gray-600">
                      <span>{{ exercise.duration }}</span>
                      <span>{{ exercise.reps }}</span>
                      <span class="text-xs bg-gray-200 px-2 py-1 rounded">{{ exercise.difficulty }}</span>
                    </div>
                    <p class="text-sm text-gray-700 mt-2">{{ exercise.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Conseils d'échauffement et récupération -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-sunny/10 rounded-xl p-6">
                <h4 class="font-bold text-sunny mb-3">Échauffement (5 min)</h4>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li>• Marche sur place - 1 minute</li>
                  <li>• Rotation des articulations - 2 minutes</li>
                  <li>• Étirements dynamiques - 2 minutes</li>
                </ul>
              </div>
              
              <div class="bg-indigo/10 rounded-xl p-6">
                <h4 class="font-bold text-indigo mb-3">Récupération (5 min)</h4>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li>• Marche lente - 1 minute</li>
                  <li>• Étirements statiques - 3 minutes</li>
                  <li>• Respiration profonde - 1 minute</li>
                </ul>
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

const selectedLevel = ref('tous')
const selectedDuration = ref('tous')
const selectedType = ref('tous')
const modalOpen = ref(false)
const selectedWorkout = ref(null)

const workouts = [
  {
    id: 1,
    name: 'Cardio Débutant Express',
    type: 'cardio',
    level: 'Débutant',
    duration: 15,
    emoji: '🏃',
    gradient: 'from-raspberry to-sunny',
    description: 'Programme cardio parfait pour commencer en douceur et améliorer votre endurance.',
    equipment: ['Aucun matériel'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Marche sur place',
        duration: '2 minutes',
        reps: 'Continu',
        difficulty: 'Facile',
        description: 'Échauffement en douceur pour préparer le corps',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Jumping jacks',
        duration: '30 secondes',
        reps: '3 séries',
        difficulty: 'Facile',
        description: 'Exercice cardio complet pour tout le corps',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Montées de genoux',
        duration: '30 secondes',
        reps: '3 séries',
        difficulty: 'Facile',
        description: 'Travail cardio ciblé sur les jambes',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Pas chassés',
        duration: '30 secondes',
        reps: '3 séries',
        difficulty: 'Facile',
        description: 'Exercice latéral pour l\'agilité',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 2,
    name: 'HIIT Brûle-Graisses',
    type: 'hiit',
    level: 'Intermédiaire',
    duration: 30,
    emoji: '🔥',
    gradient: 'from-cacao to-raspberry',
    description: 'Entraînement haute intensité pour maximiser la combustion des graisses.',
    equipment: ['Aucun matériel', 'Tapis'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Burpees',
        duration: '45 secondes',
        reps: '4 séries',
        difficulty: 'Difficile',
        description: 'Exercice complet pour tout le corps',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Mountain climbers',
        duration: '45 secondes',
        reps: '4 séries',
        difficulty: 'Moyen',
        description: 'Cardio intense ciblant les abdominaux',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Squats sautés',
        duration: '45 secondes',
        reps: '4 séries',
        difficulty: 'Moyen',
        description: 'Renforcement des jambes avec cardio',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Planche dynamique',
        duration: '45 secondes',
        reps: '4 séries',
        difficulty: 'Difficile',
        description: 'Core et stabilité',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 3,
    name: 'Force Sans Matériel',
    type: 'force',
    level: 'Intermédiaire',
    duration: 45,
    emoji: '💪',
    gradient: 'from-indigo to-cacao',
    description: 'Développez votre force musculaire uniquement avec le poids du corps.',
    equipment: ['Aucun matériel'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Pompes variées',
        duration: '3 minutes',
        reps: '3x15',
        difficulty: 'Moyen',
        description: 'Standard, large, diamant',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Squats pistol',
        duration: '3 minutes',
        reps: '3x10 par jambe',
        difficulty: 'Difficile',
        description: 'Squat sur une jambe',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Dips triceps',
        duration: '3 minutes',
        reps: '3x12',
        difficulty: 'Moyen',
        description: 'Sur une chaise ou un canapé',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Superman',
        duration: '3 minutes',
        reps: '3x15',
        difficulty: 'Facile',
        description: 'Renforcement du dos',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Planche latérale',
        duration: '3 minutes',
        reps: '3x30s par côté',
        difficulty: 'Moyen',
        description: 'Obliques et stabilité',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 4,
    name: 'Yoga Flexibilité',
    type: 'flexibilite',
    level: 'Débutant',
    duration: 30,
    emoji: '🧘',
    gradient: 'from-sunny to-indigo',
    description: 'Séance de yoga douce pour améliorer la flexibilité et réduire le stress.',
    equipment: ['Tapis', 'Coussin (optionnel)'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Salutation au soleil',
        duration: '5 minutes',
        reps: '3 cycles',
        difficulty: 'Facile',
        description: 'Échauffement complet du corps',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Posture du guerrier',
        duration: '3 minutes',
        reps: '1 min par côté',
        difficulty: 'Facile',
        description: 'Force et équilibre',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Chien tête en bas',
        duration: '2 minutes',
        reps: 'Maintenir',
        difficulty: 'Facile',
        description: 'Étirement global',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Posture de l\'enfant',
        duration: '3 minutes',
        reps: 'Relaxation',
        difficulty: 'Facile',
        description: 'Détente et récupération',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 5,
    name: 'Circuit Training Avancé',
    type: 'hiit',
    level: 'Avancé',
    duration: 60,
    emoji: '⚡',
    gradient: 'from-raspberry to-indigo',
    description: 'Programme intensif pour les sportifs confirmés cherchant à repousser leurs limites.',
    equipment: ['Haltères', 'Élastiques', 'Tapis'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Box jumps',
        duration: '1 minute',
        reps: '5 séries',
        difficulty: 'Difficile',
        description: 'Sauts explosifs sur une surface surélevée',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Thruster avec haltères',
        duration: '1 minute',
        reps: '5 séries',
        difficulty: 'Difficile',
        description: 'Squat + développé épaules',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Pull-ups / Tractions',
        duration: '1 minute',
        reps: '5 séries',
        difficulty: 'Difficile',
        description: 'Si pas de barre, utiliser élastiques',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Battle ropes',
        duration: '1 minute',
        reps: '5 séries',
        difficulty: 'Difficile',
        description: 'Ou mouvements rapides avec élastiques',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: 6,
    name: 'Stretching Récupération',
    type: 'flexibilite',
    level: 'Débutant',
    duration: 15,
    emoji: '🌿',
    gradient: 'from-cacao to-sunny',
    description: 'Session d\'étirements pour la récupération musculaire et la détente.',
    equipment: ['Tapis'],
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    exercises: [
      {
        name: 'Étirement des ischio-jambiers',
        duration: '2 minutes',
        reps: '30s par jambe',
        difficulty: 'Facile',
        description: 'Allongé sur le dos, jambe tendue',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Étirement du piriforme',
        duration: '2 minutes',
        reps: '30s par côté',
        difficulty: 'Facile',
        description: 'Figure 4 allongé',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Torsion vertébrale',
        duration: '2 minutes',
        reps: '30s par côté',
        difficulty: 'Facile',
        description: 'Allongé, genoux sur le côté',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        name: 'Chat-vache',
        duration: '2 minutes',
        reps: '10 répétitions',
        difficulty: 'Facile',
        description: 'Mobilité de la colonne',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
]

const filteredWorkouts = computed(() => {
  return workouts.filter(workout => {
    const levelMatch = selectedLevel.value === 'tous' || workout.level.toLowerCase() === selectedLevel.value
    const durationMatch = selectedDuration.value === 'tous' || workout.duration === parseInt(selectedDuration.value)
    const typeMatch = selectedType.value === 'tous' || workout.type === selectedType.value
    
    return levelMatch && durationMatch && typeMatch
  })
})

const openWorkoutModal = (workout) => {
  selectedWorkout.value = workout
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedWorkout.value = null
}

const playExerciseVideo = (videoUrl) => {
  // Ici vous pourriez ouvrir la vidéo dans un nouveau modal ou une nouvelle fenêtre
  window.open(videoUrl, '_blank')
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

/* Animation au survol des cartes */
.transform {
  transition: transform 0.3s ease;
}
</style>
