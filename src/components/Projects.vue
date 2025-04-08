<script setup>
import FadeIn from './FadeIn.vue'
import gsbProject from "@/assets/images/gsb-photo-project.png"
import portfolio from "@/assets/images/portfolio.png"
import langchain from "@/assets/images/Langchain.png"
import flint from "@/assets/images/agile-method-concept-illustration_114360-9809.avif"
import {useRouter} from "vue-router";
import Buttons from "@/components/common/buttons.vue";
import sonarQube from "@/assets/images/sonarqube.png"
import sap from "@/assets/images/sap.png"
import afip from "@/assets/images/AFIP.jpg"
import gsbMobile from "@/assets/images/app_mobile.png"
import metasploitable from "@/assets/images/metasploit.png"
import gradio from "@/assets/images/gradio-min.png"
import cvImage from "@/assets/images/cyril_cv.png";

import boardSkills from "@/assets/Tableau-de-synthese-E4-BTS-SIO-2024-DUPONT-CYRIL.pdf"

const downloadSkills = () => {
  const link = document.createElement('a');
  link.href = boardSkills;
  link.download = 'Cyril_DUPONT_REFERENTIELS.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const projects = [
  {
    id: 1,
    title: 'Agentic IA',
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
  },
  {
    id: 4,
    title: 'Sap commerce Flint',
    description: 'Implémentation de pipes de traduction',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: flint,
  },
  {
    id: 5,
    title: 'Sap commerce ADVEO',
    description: 'Ajout de fonctionnalités en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: sap,
  },
  {
    id: 6,
    title: 'Metasploitable',
    description: "Introduction aux tests d'intrusion (pentesting) au travers d'un TP en utilisant une machine virtuelle laissée vulnérable délibéremment",
    tech: ['Kali linux', 'NMAP', 'Brute Force', 'Protocoles', 'Identité Visuelle'],
    image: metasploitable,
  },
  {
    id: 7,
    title: 'Analyse SEO',
    description: 'Compréhension des enjeux du référencement en ligne pour améliorer la visibilité des organisations',
    tech: ['Wappalyzer', 'gtmetrix', 'SEO', 'SEA', 'SMO', 'Wireshark'],
    image: afip,
  },
  {
    id: 8,
    title: 'Application GSB Mobile',
    description: "Solution mobile réalisée dans le cadre du projet de fin d'étude permettant de laisser des avis sur les produits d'une entreprise fictive",
    tech: ['Python', 'SqlAlchemy', 'MySQL', 'Android Studio', 'Retrofit'],
    image: gsbMobile,
  },
  {
    id: 9,
    title: 'Automatisation des commandes',
    description:'Participation à la création d\'un chatbot automatisant la prise de commandes' ,
    tech: ['FastAPI', 'Gradio', 'Langchain', 'Python'],
    image: langchain,
    seeMore: 'https://example-weather.com'
  },
]

const router = useRouter();



const goToProject = (id) => {
  router.push(`/projects/${id}`);
};
</script>


<template>
  <div class="bg-white py-1"></div>

  <section id="projects" class="bg-black pt-24 pb-12 mx-4">
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
              class="bg-black p-6 rounded-xl shadow-lg flex flex-col items-center min-h-[450px] border border-white">
            <h3 class="text-xl font-semibold text-white mb-2">
              {{ project.title }}
            </h3>
            <img
                :src="project.image"
                :alt="project.title"
                class="h-40 w-fit object-contain rounded-md mb-4 shadow-xl"
            />
            <p class="text-white text-center flex-grow">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap justify-center gap-2 mt-3">
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
        <div>
          <div class="flex justify-center mt-5 pt-5">
            <Buttons label="Télécharger le référentiel" v-on:click="downloadSkills"></Buttons>
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