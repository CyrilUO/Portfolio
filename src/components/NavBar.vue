<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'Qui suis-je ?', href: '#about' },
  { name: 'Réalisations', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Veille Tecnologique', href: '#tech-watch' },
  { name: 'Contact', href: '#contact' },
]

const activeSection = ref('#home')

const updateActiveSection = () => {
  const sections = document.querySelectorAll('section[id]')
  const scrollY = window.scrollY

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100 // Adjust for navbar height
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      activeSection.value = `#${sectionId}`
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img
              src="../assets/images/Logo-removebg-preview.png"
              alt="UO-LOGO"
              class="h-10 w-auto"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex flex-grow justify-end space-x-6">
          <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
              'text-sm font-medium hover:text-primary-400 transition-colors duration-200',
              activeSection === item.href ? 'text-primary-400 underline underline-offset-4' : 'text-gray-900'
            ]"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Hamburger Menu -->
        <div class="md:hidden">
          <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-transform duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
                class="block h-6 w-6 transform transition-transform duration-300"
                :class="{ hidden: open }"
                aria-hidden="true"
            />
            <XMarkIcon
                class="block h-6 w-6 transform transition-transform duration-300"
                :class="{ hidden: !open }"
                aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <DisclosurePanel
        class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
/* Modern transitions for the navbar */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

nav:hover {
  //background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
