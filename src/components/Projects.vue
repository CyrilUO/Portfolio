<script setup>
import FadeIn from './FadeIn.vue'
import gsbProject from "@/assets/images/gsb-photo-project.png"
import portfolio from "@/assets/images/portfolio.png"
import langchain from "@/assets/images/Langchain.png"
import del from "@/assets/images/delaware.jpg"
import {useRouter} from "vue-router";
import Buttons from "@/components/common/buttons.vue";

const projects = [
  {
    id: 1,
    title: 'LLM',
    description: 'Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ',
    tech: ['FastAPI', 'Gradio', 'Langchain', 'Langraph', 'Langfuse', 'Pydantic', 'Python'],
    image: langchain,
    seeMore: 'https://example-weather.com'
  },
  {
    id: 2,
    title: 'GSB ecommerce',
    description: 'Réplicat d\'une solution ecommerce dans le cadre du projet de fin d\'étude répondant à un besoin d\'une entreprise fictive',
    tech: ['Vue.JS3', 'Spring JDBC-Security-Web', 'Java', 'Javascript', 'MySQL', 'Docker', 'Axios'],
    image: gsbProject,
    seeMore: {githubFront: 'https://github', githubBack: 'https://github'},
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Portfolio réalisé en cours de deuxième année de formation.',
    tech: ['Vue', 'Tailwind CSS'],
    image: portfolio,
    seeMore: ''
  },
  {
    id: 4,
    title: 'Participation projet client ecommerce',
    description: 'Ajout de fonctionnalités en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: del,
    seeMore: 'https:'
  },
  {
    id: 5,
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

const router = useRouter();


const goToProject = (id) => {
  router.push(`/projects/${id}`);
};
</script>


<template>
  <section id="projects" class="bg-gray-600 py-24">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-yellow-400 mb-5">Réalisations</h2>
        <p class="mt-2 text-lg text-center text-white space-mono-regular-italic">
          Quelques projets professionnels - académiques - personnels
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div
              v-for="project in projects"
              :key="project.id"
              class="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center min-h-[450px]">
            <h3 class="text-xl font-semibold text-white space-mono-bold mb-2">
              {{ project.title }}
            </h3>
            <img
                :src="project.image"
                :alt="project.title"
                class="h-40 w-fit object-contain rounded-md mb-4 shadow-xl"
            />
            <p class="text-white space-mono-regular flex-grow">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap justify-start gap-2 mt-3">
              <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
              >
                {{ tech }}
              </span>
            </div>
            <div class="mt-4 flex justify-center py-2">
              <Buttons label="Voir le projet" @click="goToProject(project.id)"></Buttons>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>


<style scoped>


.container-custo {
  padding-inline: 1rem;
}

.my-selector {
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 42px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 8px 8px 16px #cacaca,
  -8px -8px 16px #f6f6f6;
}

.my-selector:hover {
  border-radius: 42px;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 12px #cacaca,
  inset -8px -8px 12px #f6f6f6;
}

.my-selector:active {
  border-radius: 42px;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 12px #cacaca,
  inset -8px -8px 12px #f6f6f6;
}
</style>