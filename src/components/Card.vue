<template>
  <div class="card overflow-hidden group">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <!-- Badge optionnel -->
      <div v-if="badge" class="absolute top-4 right-4">
        <span class="px-3 py-1 text-xs font-semibold text-white rounded-full" :class="badgeClass">
          {{ badge }}
        </span>
      </div>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <!-- Titre -->
      <h3 class="text-xl font-bold text-cacao mb-2 group-hover:text-indigo transition-colors duration-300">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p v-if="description" class="text-gray-600 mb-4 line-clamp-2">
        {{ description }}
      </p>
      
      <!-- Métadonnées -->
      <div v-if="metadata" class="space-y-2 mb-4">
        <div v-for="(item, index) in metadata" :key="index" class="flex items-center text-sm text-gray-500">
          <component :is="item.icon" class="w-4 h-4 mr-2 text-cacao" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      
      <!-- Actions -->
      <div v-if="$slots.actions" class="pt-4 border-t border-gray-100">
        <slot name="actions"></slot>
      </div>
      
      <!-- Slot par défaut -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    default: ''
  },
  badgeType: {
    type: String,
    default: 'primary', // primary, secondary, accent
    validator: (value) => ['primary', 'secondary', 'accent'].includes(value)
  },
  metadata: {
    type: Array,
    default: () => []
  }
})

const badgeClass = computed(() => {
  const classes = {
    primary: 'bg-cacao',
    secondary: 'bg-raspberry',
    accent: 'bg-sunny text-cacao'
  }
  return classes[props.badgeType] || classes.primary
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 