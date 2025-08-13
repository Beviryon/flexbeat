<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-raspberry to-sunny text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-cacao/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nos Activités
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Découvrez nos programmes variés et adaptés à tous les niveaux
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-700 leading-relaxed">
            Chez FlexBeat, nous proposons une gamme complète d'activités sportives 
            conçues pour répondre aux besoins de chacun. Que vous soyez débutant 
            ou sportif confirmé, nous avons le programme qu'il vous faut !
          </p>
        </div>
      </div>
    </section>

    <!-- Liste des Activités -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="space-y-16">
          <div 
            v-for="(activity, index) in activities" 
            :key="activity.id"
            :id="`activity-${activity.id}`"
            class="animate-slide-up"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }">
              <!-- Image -->
              <div class="order-1" :class="{ 'lg:order-2': index % 2 === 1 }">
                <div class="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    :src="activity.image" 
                    :alt="activity.name"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="px-4 py-2 text-sm font-semibold text-white rounded-full" :class="getBadgeClass(activity.color)">
                      {{ activity.name }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Contenu -->
              <div class="order-2" :class="{ 'lg:order-1': index % 2 === 1 }">
                <div class="space-y-6">
                  <h2 class="text-3xl md:text-4xl font-bold text-cacao">
                    {{ activity.name }}
                  </h2>
                  
                  <p class="text-lg text-gray-700 leading-relaxed">
                    {{ activity.description }}
                  </p>
                  
                  <!-- Détails -->
                  <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-cacao rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-semibold text-cacao">Horaires</p>
                        <p class="text-gray-600">{{ activity.schedule }}</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-raspberry rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-semibold text-cacao">Lieu</p>
                        <p class="text-gray-600">{{ activity.location }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Avantages -->
                  <div class="bg-white p-6 rounded-xl shadow-lg">
                    <h4 class="font-semibold text-cacao mb-3">Avantages de cette activité :</h4>
                    <ul class="space-y-2">
                      <li v-for="advantage in getActivityAdvantages(activity.name)" :key="advantage" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-sunny flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-600">{{ advantage }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Planning Hebdomadaire -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Planning Hebdomadaire</h2>
          <p class="section-subtitle">
            Consultez nos horaires pour organiser votre semaine sportive
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div 
              v-for="day in weeklySchedule" 
              :key="day.name"
              class="text-center"
            >
              <div class="bg-cacao text-white py-3 rounded-t-lg font-semibold">
                {{ day.name }}
              </div>
              <div class="bg-gray-50 p-4 rounded-b-lg min-h-32">
                <div v-if="day.activities.length === 0" class="text-gray-400 text-sm">
                  Repos
                </div>
                <div v-else class="space-y-2">
                  <div 
                    v-for="activity in day.activities" 
                    :key="activity.name"
                    class="text-xs p-2 rounded bg-white shadow-sm"
                  >
                    <p class="font-semibold text-cacao">{{ activity.name }}</p>
                    <p class="text-gray-500">{{ activity.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Informations Pratiques -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Informations Pratiques</h2>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour participer à nos activités
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">👕</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Équipement</h3>
            <p class="text-white/80 text-sm">
              Tenue de sport confortable et chaussures adaptées. 
              L'équipement spécifique est fourni par l'association.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">💧</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Hydratation</h3>
            <p class="text-white/80 text-sm">
              Pensez à apporter votre bouteille d'eau. 
              Des fontaines sont disponibles sur place.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-2xl">⏰</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Ponctualité</h3>
            <p class="text-white/80 text-sm">
              Arrivez 10 minutes avant le début de la séance 
              pour vous échauffer et vous installer.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-cacao mb-6">
          Prêt à commencer ?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rejoignez-nous et découvrez la joie du mouvement avec FlexBeat
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/join" class="btn-primary text-lg px-8 py-4">
            Devenir membre
          </router-link>
          <router-link to="/events" class="btn-secondary text-lg px-8 py-4">
            Voir nos événements
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '../stores/main'

const store = useMainStore()

const activities = computed(() => store.activities)

const getBadgeClass = (color) => {
  const classes = {
    cacao: 'bg-cacao',
    raspberry: 'bg-raspberry',
    sunny: 'bg-sunny text-cacao'
  }
  return classes[color] || classes.cacao
}

const getActivityAdvantages = (activityName) => {
  const advantages = {
    'Fitness': [
      'Amélioration de la force musculaire',
      'Augmentation de l\'endurance cardiovasculaire',
      'Tonification du corps',
      'Adapté à tous les niveaux'
    ],
    'Danse': [
      'Développement de la coordination',
      'Amélioration de la souplesse',
      'Expression artistique',
      'Découverte de la culture africaine'
    ],
    'Cardio Plein Air': [
      'Connexion avec la nature',
      'Amélioration de la condition physique',
      'Libération d\'endorphines',
      'Activité sociale et motivante'
    ]
  }
  return advantages[activityName] || []
}

const weeklySchedule = computed(() => [
  {
    name: 'Lundi',
    activities: [
      { name: 'Fitness', time: '18h00-19h30' }
    ]
  },
  {
    name: 'Mardi',
    activities: [
      { name: 'Danse', time: '17h00-18h30' }
    ]
  },
  {
    name: 'Mercredi',
    activities: [
      { name: 'Fitness', time: '18h00-19h30' }
    ]
  },
  {
    name: 'Jeudi',
    activities: [
      { name: 'Danse', time: '17h00-18h30' }
    ]
  },
  {
    name: 'Vendredi',
    activities: [
      { name: 'Fitness', time: '18h00-19h30' }
    ]
  },
  {
    name: 'Samedi',
    activities: [
      { name: 'Cardio Plein Air', time: '7h00-8h30' }
    ]
  },
  {
    name: 'Dimanche',
    activities: []
  }
])
</script> 