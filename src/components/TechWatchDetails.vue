<script setup>
import { useRoute } from 'vue-router';
import FadeIn from "@/components/FadeIn.vue";

const route = useRoute();
const pdfUrl = '/articles/react-angular-vue.pdf'; // Assure-toi que ton fichier est bien là
</script>

<template>
  <FadeIn>
    <div class="max-w-7xl mx-auto p-8 bg-black text-white min-h-screen mt-20">
      <router-link to="/" class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
                    rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
                    transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
                    hover:shadow-none hover:translate-x-1 hover:translate-y-1">⬅ Retour aux articles</router-link>

      <div class="mt-6 p-6 rounded-lg shadow-lg text-white text-center">
        <h1 class="text-3xl font-bold mb-4 text-yellow-400">Comparatif : Vue.js, React, et Angular</h1>
        <p class="text-gray-300 mb-4 italic text-center">Quel framework frontend choisir en 2024 ?</p>
        <p class="text-white px-2" >Cliquez sur le lien de l'url pour ouvrir </p>
        <iframe
            :src="pdfUrl"
            class="w-full h-[80vh] rounded-lg shadow-lg border-2 border-yellow-400 mt-4"
        ></iframe>
      </div>
    </div>
  </FadeIn>
</template>
