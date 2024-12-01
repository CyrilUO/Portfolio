<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true
          stop()
        }
      },
      { threshold: 0.4 }
  )
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