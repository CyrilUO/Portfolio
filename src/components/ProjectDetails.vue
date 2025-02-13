<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import FadeIn from "./FadeIn.vue";
import langchain from "@/assets/images/Langchain.png";
import gsbProject from "@/assets/images/gsb-photo-project.png";
import portfolio from "@/assets/images/portfolio.png";
import del from "@/assets/images/delaware.jpg";


const projects = [
  {
    id:1,
    title: 'MVP LLM',
    description: 'Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ',
    tech: ['FastAPI', 'Gradio', 'Langchain', 'Langraph', 'Langfuse', 'Pydantic', 'Python'],
    image: langchain,
    seeMore: 'https://example-weather.com'
  },
  {
    id:2,
    title: 'GSB ecommerce',
    description: 'Réplicat d\'une solution ecommerce dans le cadre du projet de fin d\'étude répondant à un besoin d\'une entreprise fictive',
    tech: ['Vue.JS3', 'Spring JDBC-Security-Web', 'Java', 'Javascript', 'MySQL', 'Docker', 'Axios'],
    image: gsbProject,
    seeMore: {githubFront: 'https://github', githubBack: 'https://github'},
  },
  {
    id:3,
    title: 'Portfolio Website',
    description: 'Portfolio réalisé en cours de deuxième année de formation.',
    tech: ['Vue', 'Tailwind CSS'],
    image: portfolio,
    seeMore: ''
  },
  {
    id:4,
    title: 'Projet SAP e-commerce',
    description: 'Ajout de fonctionnalités dans un tunnel de commande en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: del,
    seeMore: 'https:'
  },
  {
    id:5,
    title: 'Utilisation de SonarCube',
    description: 'Implémentation du plug-in SonarCube pour tester les vulénrabilités dans un projet entreprise',
    tech: ['SonarCube'],
    image: del,
    seeMore: 'https'
  },
  {
    id: 6,
    title: 'Visualisation ',
    description: 'Ajout de fonctionnalités en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: del,
    seeMore: 'https'
  }
]

const route = useRoute();
const projectId = computed(() => {
  const id = route.params.id;
  return parseInt(Array.isArray(id) ? id[0] : id, 10);
});


const project = computed(() => projects.find((p) => p.id === projectId.value));
</script>

<template>
  <FadeIn>
    <div class="max-w-4xl mx-auto p-8 bg-white text-black min-h-screen mt-20">
      <router-link to="/" class="text-yellow-500 hover:underline">⬅ Retour aux projets</router-link>
      <div v-if="project" class="mt-6 bg-black p-6 rounded-lg shadow-lg text-white">
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <img :src="project.image" class="w-full h-64 object-cover my-4 rounded" />
        <p class="text-gray-300">{{ project.description }}</p>
      </div>
      <div v-else class="text-center text-red-500">Projet introuvable 😢</div>
    </div>
  </FadeIn>
</template>
