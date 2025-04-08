<script setup>
import { ref, watch } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

// Navigation links
const navigation = [
  { name: "Accueil", href: "/#home" },
  { name: "Qui suis-je ?", href: "/#about" },
  { name: "Parcours", href: "/#education" },
  { name: "Réalisations", href: "/#projects" },
  { name: "Compétences", href: "/#skills" },
  { name: "Veille Technologique", href: "/#tech-watch" },
  { name: "Contact", href: "/#contact" },
];


// Menu state
const isMenuOpen = ref(false);

// Close menu on link click
const closeMenu = () => {
  console.log('Closing menu');
  isMenuOpen.value = false;
};

// Toggle menu state
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log('Menu toggled. Current state:', isMenuOpen.value);
};

// Watch for state changes
watch(isMenuOpen, (newValue) => {
  console.log('Menu state changed:', newValue);
});
</script>
<template>
  <nav class="shadow-md fixed w-full bg-white top-0 z-50 transition-all py-2 duration-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex-shrink-0">
          <img
              src="../assets/images/Logo-removebg-preview.png"
              alt="UO-LOGO"
              class="object-fit"
          />
        </div>

        <div class="hidden lg:flex flex-grow justify-end space-x-6">
          <!-- Utilisation de router-link avec hash pour scrolling interne -->
          <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="font-custo hover:text-yellow-400 transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile Hamburger Menu -->
        <div class="lg:hidden">
          <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-100 transition-transform duration-300"
              @click="toggleMenu"
          >
            <span class="sr-only">Toggle menu</span>
            <Bars3Icon v-if="!isMenuOpen" class="block h-6 w-6 text-yellow-500" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6 text-yellow-500" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="lg:hidden bg-white shadow-md transition-all duration-300">
      <div class="space-y-1 pb-3 pt-2">
        <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-custo text-gray-500 hover:bg-gray-50 hover:text-primary-700 transition-all duration-300"
            @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>


<style scoped>
/* Adjust logo size */
img {
  max-height: 3rem; /* Dynamic maximum size */
}

/* Navbar transition */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 99999;
}

nav:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Icon hover effect */
button {
  transition: transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}

.font-custo{
  font-family: "Space Mono", serif;
}


</style>
