<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-indigo to-cacao text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-raspberry/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Règlement intérieur & Mentions légales
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Informations importantes sur le fonctionnement de FlexBeat
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation des sections -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="scrollToSection('reglement')"
            class="px-6 py-3 bg-cacao text-white rounded-lg hover:bg-cacao/90 transition-colors duration-300"
          >
            Règlement intérieur
          </button>
          <button 
            @click="scrollToSection('mentions')"
            class="px-6 py-3 bg-indigo text-white rounded-lg hover:bg-indigo/90 transition-colors duration-300"
          >
            Mentions légales
          </button>
          <button 
            @click="scrollToSection('statuts')"
            class="px-6 py-3 bg-raspberry text-white rounded-lg hover:bg-raspberry/90 transition-colors duration-300"
          >
            Statuts
          </button>
        </div>
      </div>
    </section>

    <!-- Règlement intérieur -->
    <section id="reglement" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Règlement intérieur</h2>
            <p class="section-subtitle">
              Règles de fonctionnement et d'adhésion de l'association FlexBeat
            </p>
          </div>
          
          <div class="prose prose-lg max-w-none">
            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 1 - Objet</h3>
              <p class="text-gray-700 leading-relaxed">
                Le présent règlement intérieur a pour objet de définir les règles de fonctionnement 
                de l'association FlexBeat, conformément à ses statuts et à la législation en vigueur.
              </p>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 2 - Adhésion</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>2.1 - Conditions d'adhésion :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Être âgé d'au moins 10 ans</li>
                  <li>Adhérer aux valeurs et objectifs de l'association</li>
                  <li>Remplir le formulaire d'adhésion</li>
                  <li>Accepter le présent règlement intérieur</li>
                </ul>
                
                <p><strong>2.2 - Procédure d'adhésion :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Soumission du formulaire d'adhésion</li>
                  <li>Validation par le bureau de l'association</li>
                  <li>Paiement de la cotisation annuelle</li>
                  <li>Remise de la carte de membre</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 3 - Cotisations</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>3.1 - Montant des cotisations :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Membre actif : 0 FCFA/an</li>
                  <li>Étudiant : 0 FCFA/an (sur présentation de la carte d'étudiant)</li>
                  <li>Membre bienfaiteur : 0 FCFA/an</li>
                </ul>
                
                <p><strong>3.2 - Modalités de paiement :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Paiement annuel à l'adhésion</li>
                  <li>Paiement en 3 fois possible sur demande</li>
                  <li>Réduction de 30% pour l'adhésion annuelle</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 4 - Droits et obligations des membres</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>4.1 - Droits des membres :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Participer à toutes les activités de l'association</li>
                  <li>Assister aux assemblées générales</li>
                  <li>Voter lors des élections</li>
                  <li>Bénéficier des équipements de l'association</li>
                </ul>
                
                <p><strong>4.2 - Obligations des membres :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Respecter le règlement intérieur</li>
                  <li>Participer activement aux activités</li>
                  <li>Respecter les autres membres et l'équipement</li>
                  <li>Payer régulièrement sa cotisation</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 5 - Activités et horaires</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>5.1 - Activités proposées :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Fitness et musculation (plein air)</li>
                  <li>Club de Slam et Lecture</li>
                  <li>Cardio plein air</li>
                  <li>Événements sportifs et culturels</li>
                </ul>
                
                <p><strong>5.2 - Horaires :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Activités uniquement les weekends (samedi et dimanche)</li>
                  <li>Horaires variables selon les saisons</li>
                  <li>Rendez-vous 15 minutes avant le début des activités</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Article 6 - Discipline et exclusion</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>6.1 - Sanctions :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Avertissement verbal</li>
                  <li>Avertissement écrit</li>
                  <li>Suspension temporaire</li>
                  <li>Exclusion définitive</li>
                </ul>
                
                <p><strong>6.2 - Motifs d'exclusion :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Non-respect répété du règlement</li>
                  <li>Comportement violent ou dangereux</li>
                  <li>Non-paiement de la cotisation</li>
                  <li>Atteinte à l'image de l'association</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mentions légales -->
    <section id="mentions" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Mentions légales</h2>
            <p class="section-subtitle">
              Informations légales et administratives de l'association FlexBeat
            </p>
          </div>
          
          <div class="prose prose-lg max-w-none">
            <div class="bg-white p-8 rounded-2xl mb-8 shadow-lg">
              <h3 class="text-2xl font-bold text-cacao mb-4">Identité de l'association</h3>
              <div class="space-y-3 text-gray-700">
                <p><strong>Nom :</strong> FlexBeat</p>
                <p><strong>Forme juridique :</strong> Association à but non lucratif</p>
                <p><strong>Adresse :</strong> Brazzaville, République du Congo</p>
                <p><strong>Date de création :</strong> Août 2025</p>
                <p><strong>Référence légale :</strong> Loi n° 17-2000 du 30 décembre 2000 sur les associations</p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl mb-8 shadow-lg">
              <h3 class="text-2xl font-bold text-cacao mb-4">Bureau de l'association</h3>
              <div class="space-y-4 text-gray-700">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <p><strong>Vice-Président :</strong></p>
                    <p>Beviryon ISSANGE NGOULOU</p>
                    <p class="text-sm text-gray-500">Étudiant/freelance en développement full stack</p>
                  </div>
                  <div>
                    <p><strong>Président :</strong></p>
                    <p>MOUKOKO Meron Exaucé</p>
                    <p class="text-sm text-gray-500">Professeur certifié de lycée en EPS</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl mb-8 shadow-lg">
              <h3 class="text-2xl font-bold text-cacao mb-4">Objectifs et missions</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Mission principale :</strong></p>
                <p>Promouvoir le sport et la culture auprès de la jeunesse congolaise, 
                en favorisant l'inclusion sociale et le développement personnel.</p>
                
                <p><strong>Objectifs :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Développer la pratique sportive en plein air</li>
                  <li>Encourager l'expression culturelle et artistique</li>
                  <li>Créer des liens sociaux et communautaires</li>
                  <li>Promouvoir un mode de vie sain et équilibré</li>
                </ul>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl mb-8 shadow-lg">
              <h3 class="text-2xl font-bold text-cacao mb-4">Activités et services</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Activités sportives :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Fitness et musculation en plein air</li>
                  <li>Cardio et endurance</li>
                  <li>Stretching et mobilité</li>
                </ul>
                
                <p><strong>Activités culturelles :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Club de Slam et Lecture</li>
                  <li>Ateliers d'écriture et de poésie</li>
                  <li>Événements culturels</li>
                </ul>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl mb-8 shadow-lg">
              <h3 class="text-2xl font-bold text-cacao mb-4">Responsabilité et sécurité</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Engagement de l'association :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Assurer la sécurité des participants</li>
                  <li>Fournir un encadrement qualifié</li>
                  <li>Respecter les normes de sécurité</li>
                  <li>Maintenir les équipements en bon état</li>
                </ul>
                
                <p><strong>Responsabilité des membres :</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Participer aux activités à leurs propres risques</li>
                  <li>Signaler tout incident ou accident</li>
                  <li>Respecter les consignes de sécurité</li>
                  <li>Être couvert par une assurance personnelle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statuts -->
    <section id="statuts" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Statuts de l'association</h2>
            <p class="section-subtitle">
              Document fondateur définissant l'organisation et le fonctionnement de FlexBeat
            </p>
          </div>
          
          <div class="prose prose-lg max-w-none">
            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Titre I - Constitution et dénomination</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Article 1 :</strong></p>
                <p>Il est fondé entre les adhérents aux présents statuts une association régie par 
                la loi n° 17-2000 du 30 décembre 2000 sur les associations, ayant pour titre : FlexBeat</p>
                
                <p><strong>Article 2 :</strong></p>
                <p>L'association a pour objet de promouvoir le sport et la culture auprès de la jeunesse congolaise, 
                en favorisant l'inclusion sociale et le développement personnel.</p>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Titre II - Siège et durée</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Article 3 :</strong></p>
                <p>Le siège social est fixé à Brazzaville, République du Congo. 
                Il pourra être transféré par simple décision du conseil d'administration.</p>
                
                <p><strong>Article 4 :</strong></p>
                <p>L'association est créée pour une durée illimitée.</p>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Titre III - Composition</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Article 5 :</strong></p>
                <p>L'association se compose de :</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Membres fondateurs</li>
                  <li>Membres actifs</li>
                  <li>Membres bienfaiteurs</li>
                  <li>Membres d'honneur</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold text-cacao mb-4">Titre IV - Administration et fonctionnement</h3>
              <div class="space-y-4 text-gray-700">
                <p><strong>Article 6 :</strong></p>
                <p>L'association est administrée par un conseil d'administration composé de 3 à 7 membres, 
                élus par l'assemblée générale pour une durée de 2 ans.</p>
                
                <p><strong>Article 7 :</strong></p>
                <p>Le conseil d'administration élit en son sein un bureau composé de :</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Un président</li>
                  <li>Un vice-président</li>
                  <li>Un secrétaire</li>
                  <li>Un trésorier</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-cacao to-indigo text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Prêt à rejoindre FlexBeat ?
        </h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Maintenant que vous connaissez nos règles et notre fonctionnement, 
          rejoignez notre communauté sportive et culturelle !
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/join"
            class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
          >
            <span>Devenir membre</span>
          </router-link>
          <router-link 
            to="/contact"
            class="btn-accent text-lg px-8 py-4"
          >
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script> 