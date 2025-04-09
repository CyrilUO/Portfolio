<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const isVisible = ref(false)

const setupObserver = () => {
  const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true
          stop()
        }
      },
      { threshold: 0.2 }
  )
}

onMounted(() => {
  setupObserver()

  const onResize = () => {
    if (!isVisible.value) {
      setupObserver() // Relance l'observateur si le contenu est invisible
    }
  }

  window.addEventListener('resize', onResize)

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
})
</script>

<template>
  <div ref="target" :class="[
    'transition-all duration-1000 transform',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  ]">
    <slot></slot>
  </div>
</template>
