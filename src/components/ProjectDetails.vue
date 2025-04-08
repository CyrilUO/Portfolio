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
    title: 'SAP commerce Flint',
    description: 'Participation ',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java', 'Spartacus'],
    image: del,
    seeMore: 'https:'
  },
  {
    id:5,
    title: 'Utilisation de SonarCube',
    description: "Implémentation du plug-in SonarQube pour l'analyse de la sécurité et la détection des vulnérabilités dans une application d'entreprise. Processus complet incluant la revue de l'application, des entretiens avec les parties prenantes concernées pour comprendre les exigences de sécurité, ainsi qu'une analyse approfondie des résultats pour identifier les axes d'amélioration et garantir la conformité aux normes de qualité et de sécurité.",
    tech: ['SonarCube'],
    image: del,
    seeMore: 'https'
  },
  {
    id: 6,
    title: 'Sap commerce ADVEO ',
    description: "Développement de nouvelles fonctionnalités pour le client ADVEO en suivant des spécifications techniques précises, tout en respectant les besoins clients identifiés lors de phases d'analyse approfondie. Travail réalisé selon une méthodologie Agile avec une organisation en sprints itératifs, incluant des réunions régulières de suivi (Daily Stand-Up, Sprint Review, Sprint Planning) pour assurer une progression cohérente, une amélioration continue et une adéquation avec les attentes du client.",
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
    <div class="max-w-5xl mx-auto p-8 bg-white text-black min-h-screen mt-20">
      <div v-if="project" class="mt-6 bg-black p-6 rounded-lg shadow-lg text-white">
        <h1 class="text-3xl text-white text-center mb-6 font-bold">{{ project.title }}</h1>
        <img :src="project.image" class="w-fit mx-auto h-64 object-fit my-4 rounded" />
        <p class="text-gray-300">{{ project.description }}</p>
      </div>
      <div v-if="project.seeMore">
        <a :href="project.seeMore.githubFront">{{project.seeMore.githubFront}}</a>
        <a :href="project.seeMore.githubFront">{{project.seeMore.githubBack}}</a>
      </div>
      <div v-else class="text-center text-red-500">Projet introuvable 😢</div>
    </div>
    <div>
      <a href="#" download="">Voir le férentiel de compétences</a>
    </div>
    <router-link to="/" class="text-yellow-500 hover:underline">⬅ Retour aux projets</router-link>
  </FadeIn>
</template>
