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
                Fondée en 2023, FlexBeat est le fruit d'une collaboration entre deux passionnés 
                du sport et de l'éducation physique. Notre association est née du constat que 
                l'activité physique régulière était essentielle au bien-être de tous, 
                quel que soit l'âge ou le niveau.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Nous croyons fermement que le sport est un vecteur de cohésion sociale, 
                de développement personnel et de santé publique. C'est pourquoi nous nous 
                efforçons de rendre l'activité physique accessible, agréable et inclusive 
                pour tous les habitants de Brazzaville.
              </p>
            </div>
            
            <div class="relative">
              <div class="w-full h-80 bg-gradient-to-br from-cacao to-indigo rounded-2xl flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-4">🏃‍♂️</div>
                  <p class="text-xl font-semibold">Le mouvement, c'est notre musique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Co-fondateurs -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Nos Co-fondateurs</h2>
          <p class="section-subtitle">
            Découvrez les personnes qui ont donné vie à FlexBeat
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Beviryon -->
          <div class="card text-center p-8">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cacao to-indigo flex items-center justify-center text-white text-4xl font-bold">
              B
            </div>
            <h3 class="text-2xl font-bold text-cacao mb-4">Beviryon</h3>
            <p class="text-raspberry font-semibold mb-4">Co-fondateur & Président</p>
            <p class="text-gray-600 leading-relaxed">
              Passionné de fitness et de bien-être, Beviryon apporte son expertise 
              en gestion d'association et sa vision d'une communauté sportive inclusive. 
              Il supervise la stratégie globale et les partenariats.
            </p>
          </div>
          
          <!-- Professeur d'EPS -->
          <div class="card text-center p-8">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo to-raspberry flex items-center justify-center text-white text-4xl font-bold">
              P
            </div>
            <h3 class="text-2xl font-bold text-cacao mb-4">Professeur d'EPS</h3>
            <p class="text-raspberry font-semibold mb-4">Co-fondateur & Directeur Technique</p>
            <p class="text-gray-600 leading-relaxed">
              Expert en éducation physique et sportive, notre professeur d'EPS assure 
              la qualité technique des programmes et la formation des animateurs. 
              Il garantit la sécurité et l'efficacité de nos activités.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Mission -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Notre Mission</h2>
            <p class="section-subtitle">
              Promouvoir le sport et le bien-être pour tous à Brazzaville
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-cacao rounded-full flex items-center justify-center">
                <span class="text-3xl text-white">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-cacao mb-4">Accessibilité</h3>
              <p class="text-gray-600">
                Rendre l'activité physique accessible à tous, 
                quel que soit le niveau ou les moyens financiers
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-raspberry rounded-full flex items-center justify-center">
                <span class="text-3xl text-white">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-cacao mb-4">Inclusion</h3>
              <p class="text-gray-600">
                Créer une communauté accueillante et bienveillante 
                où chacun se sent valorisé et soutenu
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-sunny rounded-full flex items-center justify-center">
                <span class="text-3xl text-white">💪</span>
              </div>
              <h3 class="text-xl font-bold text-cacao mb-4">Excellence</h3>
              <p class="text-gray-600">
                Maintenir des standards de qualité élevés dans 
                tous nos programmes et activités
              </p>
            </div>
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