<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cacao to-raspberry text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-sunny/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Rejoindre FlexBeat
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Rejoignez une communauté passionnée par le sport et le bien-être. 
            Commencez votre transformation dès aujourd'hui !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="scrollToForm"
              class="bg-white text-cacao hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Remplir le formulaire
            </button>
            <a 
              href="https://wa.me/33763217791?text=Bonjour, je souhaite rejoindre FlexBeat"
              target="_blank"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Parler à un responsable
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- En 3 étapes (simplifié) -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="w-12 h-12 bg-gradient-to-br from-cacao to-indigo rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 class="font-semibold mb-1">Remplir le formulaire</h4>
              <p class="text-sm text-gray-600">Quelques minutes</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-gradient-to-br from-raspberry to-sunny rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 class="font-semibold mb-1">Validation</h4>
              <p class="text-sm text-gray-600">Contact sous 24-48h</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-gradient-to-br from-sunny to-cacao rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 class="font-semibold mb-1">Paiement & Accès</h4>
              <p class="text-sm text-gray-600">Commencez immédiatement</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Tarifs -->
    <section id="pricing-section" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Nos Tarifs d'Adhésion</h2>
            <p class="section-subtitle max-w-3xl mx-auto">
              Choisissez la formule qui vous convient le mieux
            </p>
            <p class="text-sm text-gray-600 mt-4 max-w-3xl mx-auto">
              Tous nos tarifs incluent un <strong>accompagnement personnalisé</strong> avec l’un de nos coachs
              et un <strong>suivi via notre application fitness</strong>.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Plan Mensuel -->
            <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-cacao mb-2">Mensuel</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold text-gray-900">8 000</span>
                  <span class="text-gray-600"> FCFA</span>
                  <div class="text-sm text-gray-500 mt-1">par mois</div>
                </div>
                <ul class="space-y-3 text-left mb-8">
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Coach dédié (accompagnement personnalisé)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Suivi des progrès sur l’application fitness</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Accès aux activités & événements FlexBeat</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Plan Annuel (Recommandé) -->
            <div class="bg-gradient-to-br from-cacao to-indigo rounded-2xl shadow-2xl border-4 border-sunny p-8 transform scale-105 relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sunny text-cacao px-4 py-1 rounded-full text-sm font-bold">
                Recommandé
              </div>
              <div class="text-center text-white">
                <h3 class="text-2xl font-bold mb-2">Annuel</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold">87 000</span>
                  <span class="text-white/80"> FCFA</span>
                  <div class="text-sm text-white/80 mt-1">par an</div>
                  <div class="mt-2 text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                    Économisez 9 000 FCFA
                  </div>
                </div>
                <ul class="space-y-3 text-left mb-8">
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-white/90">Coach dédié + plan personnalisé sur la durée</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-white/90">Suivi complet sur l’application fitness (objectifs & progrès)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-white/90">Paiement échelonné possible</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-white/90">Accès prioritaire aux activités & événements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Plan Étudiant -->
            <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-cacao mb-2">Étudiant</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold text-gray-900">6 000</span>
                  <span class="text-gray-600"> FCFA</span>
                  <div class="text-sm text-gray-500 mt-1">par mois</div>
                  <div class="mt-2 text-sm text-raspberry font-semibold">
                    Réduction de 33%
                  </div>
                </div>
                <ul class="space-y-3 text-left mb-8">
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Coach dédié (accompagnement personnalisé)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Carte étudiante requise</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-sunny flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-gray-600">Suivi sur l’application fitness + accès activités</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <p class="text-gray-600 mb-4">
              <strong>Ce que l'adhésion inclut :</strong>
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-sunny" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Accompagnement personnalisé (coach)
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-sunny" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Suivi sur l’application fitness
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-sunny" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Accès aux activités FlexBeat
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-sunny" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Communauté & événements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Formulaire (message WhatsApp) -->
    <section id="adhesion-form" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Préparer votre message WhatsApp</h2>
            <p class="section-subtitle">
              Remplissez les infos ci-dessous, puis envoyez le message sur WhatsApp
            </p>
          </div>
          
          <!-- Messages de feedback -->
          <div v-if="formMessage" :class="[
            'mb-6 p-4 rounded-lg',
            formMessage.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          ]">
            <div class="flex items-center gap-2">
              <svg v-if="formMessage.type === 'success'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <p class="font-medium">{{ formMessage.text }}</p>
            </div>
          </div>
          
          <form 
            ref="adhesionForm"
            class="space-y-6"
            @submit="handleFormSubmit"
          >
            <input type="hidden" name="type" value="adhesion_whatsapp">
            
            <!-- Informations personnelles -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Informations personnelles</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    autocomplete="given-name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  >
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    autocomplete="family-name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  >
                </div>
              </div>
              
              <div class="mt-4">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  autocomplete="tel"
                  @input="formatPhone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="+242 06 562 17 74"
                >
              </div>
              
              <div class="mt-4">
                <label for="city" class="block text-sm font-medium text-gray-700 mb-2">
                  Ville / Quartier *
                </label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  required
                  autocomplete="address-level2"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                  placeholder="Ex: Brazzaville, OCH"
                >
              </div>
            </div>
            
            <!-- Plan -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Plan choisi *</h3>
              <select
                name="plan"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="annuel" selected>Annuel - 87 000 FCFA/an (recommandé)</option>
                <option value="mensuel">Mensuel - 8 000 FCFA/mois</option>
                <option value="etudiant">Étudiant - 6 000 FCFA/mois</option>
              </select>
            </div>
            
            <!-- Disponibilités -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-cacao mb-4">Disponibilité principale</h3>
              <select
                name="availability"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="soir" selected>Soir (18h-21h)</option>
                <option value="matin">Matin (6h-12h)</option>
                <option value="apres-midi">Après-midi (12h-18h)</option>
                <option value="weekend">Weekend</option>
              </select>
            </div>
            
            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message (optionnel)
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cacao focus:border-transparent transition-all duration-200"
                placeholder="Informations supplémentaires, questions, etc."
              ></textarea>
            </div>
            
            <!-- Bouton d'envoi -->
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Ouverture de WhatsApp...</span>
              <span v-else">Envoyer votre demande</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    
    <!-- Bouton WhatsApp fixe (mobile) -->
    <a 
      href="https://wa.me/33763217791?text=Bonjour, je souhaite rejoindre FlexBeat"
      target="_blank"
      class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 md:hidden"
      aria-label="Contacter via WhatsApp"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const adhesionForm = ref(null)
const formMessage = ref(null)

const scrollToForm = () => {
  document.getElementById('adhesion-form').scrollIntoView({ 
    behavior: 'smooth' 
  })
}

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section')
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Fallback: scroll to form section which is near pricing
    scrollToForm()
  }
}

const formatPhone = (event) => {
  // Keep only digits and a leading +
  const raw = event.target.value.trim()
  const hasPlus = raw.startsWith('+')
  const digits = raw.replace(/\D/g, '')
  event.target.value = (hasPlus ? '+' : '') + digits
}

const handleFormSubmit = (event) => {
  event.preventDefault()
  isSubmitting.value = true
  formMessage.value = null
  
  try {
    const formData = new FormData(event.target)

    const firstName = (formData.get('firstName') || '').toString().trim()
    const lastName = (formData.get('lastName') || '').toString().trim()
    const phone = (formData.get('phone') || '').toString().trim()
    const city = (formData.get('city') || '').toString().trim()
    const plan = (formData.get('plan') || '').toString().trim()
    const availability = (formData.get('availability') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    const text =
      `Bonjour, je souhaite rejoindre FlexBeat.\n\n` +
      `Nom: ${firstName} ${lastName}\n` +
      `Téléphone: ${phone}\n` +
      `Ville/Quartier: ${city}\n\n` +
      `Plan choisi: ${plan}\n` +
      (availability ? `Disponibilité: ${availability}\n` : '') +
      (message ? `\nMessage: ${message}\n` : '')

    const url = `https://wa.me/33763217791?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')

    formMessage.value = {
      type: 'success',
      text: 'WhatsApp a été ouvert avec votre message. Il ne reste plus qu’à cliquer sur “Envoyer”.'
    }
  } catch (error) {
    formMessage.value = {
      type: 'error',
      text: 'Impossible de préparer le message WhatsApp. Veuillez réessayer.'
    }
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 