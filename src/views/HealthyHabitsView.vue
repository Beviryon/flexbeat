<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-br from-cacao to-indigo text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Habitudes de Vie Saines au Travail
          </h1>
          <p class="text-xl text-white/90 leading-relaxed">
            Des conseils pratiques adaptés à votre métier pour rester en forme toute la journée
          </p>
        </div>
      </div>
    </section>

    <!-- Conseils par profession -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">Conseils personnalisés par profession</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Découvrez des recommandations spécifiques pour votre environnement de travail
            </p>
          </div>

          <!-- Cards Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card Chauffeurs -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-cacao to-indigo flex items-center justify-center">
                <span class="text-6xl">🚗</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-3">Pour les Chauffeurs</h3>
                <p class="text-gray-600 mb-4">
                  La conduite prolongée peut causer des douleurs dorsales et des tensions. Découvrez comment maintenir une bonne posture...
                </p>
                <button @click="openModal('chauffeurs')" class="text-raspberry hover:text-indigo font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Agents Commerciaux -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-raspberry to-sunny flex items-center justify-center">
                <span class="text-6xl">💼</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-raspberry mb-3">Pour les Agents Commerciaux</h3>
                <p class="text-gray-600 mb-4">
                  Le travail de bureau peut engendrer des problèmes de posture et de fatigue oculaire. Apprenez à optimiser votre espace...
                </p>
                <button @click="openModal('commerciaux')" class="text-raspberry hover:text-sunny font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Agents de Bureau -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-sunny to-cacao flex items-center justify-center">
                <span class="text-6xl">🖥️</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-sunny mb-3">Pour les Agents de Bureau</h3>
                <p class="text-gray-600 mb-4">
                  Le travail sédentaire nécessite des pauses actives régulières. Découvrez comment intégrer du mouvement dans votre journée...
                </p>
                <button @click="openModal('bureau')" class="text-sunny hover:text-cacao font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Enseignants -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-indigo to-raspberry flex items-center justify-center">
                <span class="text-6xl">👩‍🏫</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-indigo mb-3">Pour les Enseignants</h3>
                <p class="text-gray-600 mb-4">
                  La station debout prolongée et le stress peuvent affecter votre santé. Apprenez des techniques de récupération...
                </p>
                <button @click="openModal('enseignants')" class="text-indigo hover:text-raspberry font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Personnel de Santé -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-cacao to-sunny flex items-center justify-center">
                <span class="text-6xl">⚕️</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-cacao mb-3">Pour le Personnel de Santé</h3>
                <p class="text-gray-600 mb-4">
                  Les longues gardes et le stress nécessitent une attention particulière. Découvrez comment préserver votre énergie...
                </p>
                <button @click="openModal('sante')" class="text-cacao hover:text-sunny font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Travailleurs Manuels -->
            <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div class="h-48 bg-gradient-to-br from-raspberry to-indigo flex items-center justify-center">
                <span class="text-6xl">🔨</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-raspberry mb-3">Pour les Travailleurs Manuels</h3>
                <p class="text-gray-600 mb-4">
                  Le travail physique intense demande une préparation et récupération adaptées. Apprenez à prévenir les blessures...
                </p>
                <button @click="openModal('manuels')" class="text-raspberry hover:text-indigo font-semibold flex items-center gap-2 group">
                  Lire la suite
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Vidéo de conseils généraux -->
          <div class="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-center mb-8">Vidéo : 10 Habitudes Saines pour Tous les Travailleurs</h3>
            <div class="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
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
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" @click.stop>
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-2xl font-bold text-cacao">{{ modalContent[selectedProfession]?.title }}</h2>
            <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="space-y-6">
            <div v-for="(conseil, index) in modalContent[selectedProfession]?.conseils" :key="index">
              <h3 class="font-bold text-lg mb-2 text-indigo">{{ conseil.titre }}</h3>
              <p class="text-gray-600 mb-4">{{ conseil.description }}</p>
              <div v-if="conseil.video" class="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  :src="conseil.video" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const selectedProfession = ref('')

const modalContent = {
  chauffeurs: {
    title: 'Conseils pour les Chauffeurs',
    conseils: [
      {
        titre: 'Posture de conduite optimale',
        description: 'Ajustez votre siège pour que vos genoux soient légèrement fléchis, le dos bien appuyé contre le dossier. Vos coudes doivent être légèrement pliés lorsque vous tenez le volant. Utilisez un coussin lombaire si nécessaire.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Exercices aux feux rouges',
        description: 'Profitez des arrêts pour faire des rotations du cou, des haussements d\'épaules et des étirements des poignets. Ces micro-exercices préviennent les tensions musculaires.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Hydratation et alimentation',
        description: 'Gardez une bouteille d\'eau réutilisable à portée de main. Privilégiez les collations saines comme les fruits secs, les noix et évitez les fast-foods qui causent de la somnolence.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Gestion de la fatigue',
        description: 'Faites une pause de 15 minutes toutes les 2 heures. Sortez du véhicule, marchez et étirez-vous. La micro-sieste de 20 minutes peut considérablement améliorer votre vigilance.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  commerciaux: {
    title: 'Conseils pour les Agents Commerciaux',
    conseils: [
      {
        titre: 'Ergonomie du poste de travail',
        description: 'Placez votre écran à hauteur des yeux et à une distance d\'un bras. Vos pieds doivent être à plat sur le sol, les cuisses parallèles au sol. Utilisez un support pour ordinateur portable si nécessaire.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Pauses actives',
        description: 'Toutes les heures, levez-vous et marchez pendant 5 minutes. Faites des étirements du dos, des épaules et du cou. Utilisez les escaliers plutôt que l\'ascenseur.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Protection des yeux',
        description: 'Appliquez la règle 20-20-20 : toutes les 20 minutes, regardez un objet à 20 pieds (6 mètres) pendant 20 secondes. Ajustez la luminosité de votre écran et utilisez un filtre anti-lumière bleue.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Gestion du stress',
        description: 'Entre les appels clients, pratiquez la respiration profonde : inspirez pendant 4 secondes, retenez pendant 4 secondes, expirez pendant 6 secondes. Créez un espace de travail agréable avec des plantes.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  bureau: {
    title: 'Conseils pour les Agents de Bureau',
    conseils: [
      {
        titre: 'Station de travail debout',
        description: 'Alternez entre position assise et debout toutes les 30 minutes. Si possible, utilisez un bureau ajustable ou un convertisseur de bureau debout. Gardez une bonne posture même debout.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Exercices discrets au bureau',
        description: 'Faites des extensions de jambes sous le bureau, des rotations de chevilles, et des contractions abdominales. Ces exercices maintiennent la circulation sanguine active.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Organisation du temps',
        description: 'Utilisez la technique Pomodoro : 25 minutes de travail concentré suivies de 5 minutes de pause active. Planifiez vos tâches les plus exigeantes aux moments où vous êtes le plus énergique.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  enseignants: {
    title: 'Conseils pour les Enseignants',
    conseils: [
      {
        titre: 'Prévention des douleurs aux jambes',
        description: 'Portez des chaussures confortables avec un bon support. Alternez entre station debout et assise pendant les cours. Utilisez un tapis anti-fatigue si vous restez debout longtemps.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Protection de la voix',
        description: 'Hydratez-vous régulièrement avec de l\'eau tiède. Évitez de crier, utilisez un microphone si nécessaire. Faites des exercices de relaxation vocale entre les cours.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Gestion du stress en classe',
        description: 'Pratiquez la respiration consciente avant chaque cours. Créez des routines qui vous permettent de prendre des micro-pauses. Déléguez certaines tâches aux élèves pour réduire votre charge.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  sante: {
    title: 'Conseils pour le Personnel de Santé',
    conseils: [
      {
        titre: 'Prévention lors des gardes',
        description: 'Portez des chaussures orthopédiques et des bas de compression. Faites des étirements des mollets et du dos toutes les 2 heures. Utilisez les techniques de transfert appropriées pour éviter les blessures.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Nutrition pendant les gardes',
        description: 'Préparez des repas équilibrés à l\'avance. Gardez des collations saines (fruits, noix, barres protéinées). Évitez la caféine excessive, préférez l\'eau et les tisanes.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Récupération post-garde',
        description: 'Respectez un rituel de sommeil même après une garde de nuit. Faites 20 minutes d\'exercice léger avant de dormir. Utilisez des techniques de relaxation pour faciliter l\'endormissement.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  manuels: {
    title: 'Conseils pour les Travailleurs Manuels',
    conseils: [
      {
        titre: 'Échauffement avant le travail',
        description: 'Commencez par 5-10 minutes d\'échauffement : rotations articulaires, étirements dynamiques, marche rapide. Cela prépare vos muscles et réduit le risque de blessures.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Techniques de levage sécuritaire',
        description: 'Pliez les genoux, gardez le dos droit, rapprochez la charge de votre corps. Pivotez avec vos pieds, pas votre dos. Demandez de l\'aide pour les charges lourdes.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Récupération musculaire',
        description: 'Étirez-vous après le travail, en ciblant les muscles sollicités. Utilisez des rouleaux de massage pour détendre les tensions. Prenez des bains chauds avec du sel d\'Epsom.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        titre: 'Protection et équipement',
        description: 'Portez toujours l\'équipement de protection approprié. Utilisez des genouillères pour les travaux au sol, des ceintures lombaires pour les charges lourdes. Remplacez régulièrement vos équipements usés.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
}

const openModal = (profession) => {
  selectedProfession.value = profession
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  selectedProfession.value = ''
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
