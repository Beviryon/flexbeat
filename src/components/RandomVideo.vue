<template>
  <video
    :class="['w-full h-full', attrs.class]"
    :autoplay="autoplay"
    :controls="controls"
    :loop="loop"
    :muted="muted"
    playsinline
    preload="metadata"
    v-bind="restAttrs"
  >
    <source :src="srcUrl" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture vidéo.
  </video>
</template>

<script setup>
import { computed, useAttrs } from 'vue'
import { pickRandomFlexbeatVideoUrl } from '@/utils/randomVideo'

const props = defineProps({
  autoplay: { type: Boolean, default: false },
  controls: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  muted: { type: Boolean, default: false }
})

const attrs = useAttrs()

// One random choice per component instance
const srcUrl = pickRandomFlexbeatVideoUrl()

// We manage class ourselves to avoid duplication
const restAttrs = computed(() => {
  // eslint-disable-next-line no-unused-vars
  const { class: _class, ...rest } = attrs
  return rest
})

// keep props referenced so Vue doesn't tree-shake them in template compilation
const { autoplay, controls, loop, muted } = props
</script>

