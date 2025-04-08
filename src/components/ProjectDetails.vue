<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import FadeIn from "./FadeIn.vue";
import langchain from "@/assets/images/Langchain.png";
import gsbProject from "@/assets/images/gsb-photo-project.png";
import portfolio from "@/assets/images/portfolio.png";
import flint from "@/assets/images/agile-method-concept-illustration_114360-9809.avif";
import sap from "@/assets/images/sap.png";
import metasploitable from "@/assets/images/metasploit.png";
import gradio from "@/assets/images/gradio-min.png";
import afip from "@/assets/images/AFIP.jpg";
import gsbMobile from "@/assets/images/app_mobile.png";
import Buttons from "@/components/common/buttons.vue";
import referentielPDF from "@/assets/images/cyril_cv.png";

const downloadRef = () => {
  const link = document.createElement('a');
  link.href = referentielPDF;
  link.download = 'Cyril_DUPONT_REFERENTIEL.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const projects = [
  {
    id: 1,
    title: 'LLM',
    description: 'Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ',
    tech: ['FastAPI', 'Gradio', 'Langchain', 'Langraph', 'Langfuse', 'Pydantic', 'Python'],
    image: langchain,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
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
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
  },
  {
    id: 4,
    title: 'Sap commerce Flint',
    description: 'Implémentation de pipes de traduction',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: flint,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
  },
  {
    id: 5,
    title: 'POC client Advini',
    description: 'Utilisation d\'un framework pour créer des chatbots',
    tech: ['Gradio', 'Langchain'],
    image: gradio,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
  },
  {
    id: 6,
    title: 'Sap commerce ADVEO',
    description: 'Ajout de fonctionnalités en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: sap,
  },
  {
    id: 7,
    title: 'Metasploitable',
    description: "Introduction aux tests d'intrusion (pentesting) au travers d'un TP en utilisant une machine virtuelle laissée vulnérable délibéremment",
    tech: ['Kali linux', 'NMAP','Brute Force','Protocoles','Identité Visuelle'],
    image: metasploitable,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
  },
  {
    id: 8,
    title: 'Analyse SEO',
    description: 'Compréhension des enjeux du référencement en ligne pour améliorer la visibilité des organisations',
    tech: ['Wappalyzer', 'gtmetrix', 'SEO','SEA','SMO','Wireshark'],
    image: afip,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
  },
  {
    id: 9,
    title: 'Application GSB Mobile',
    description: "Solution mobile réalisée dans le cadre du projet de fin d'étude permettant de laisser des avis sur les produits d'une entreprise fictive",
    tech: ['Python', 'SqlAlchemy','MySQL','Android Studio','Retrofit'],
    image: gsbMobile,
    competence: {
      first:[],
      second:[],
      third:[],
      fourth:[],
      fifth:[],
      sixth:[]
    }
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
        <div>
          <span>Compétences mises en oeuvres</span>
        </div>

        <div class="flex flex-col" v-if="project.seeMore">
          <a :href="project.seeMore.githubFront">{{project.seeMore.githubFront}}</a>
          <a :href="project.seeMore.githubFront">{{project.seeMore.githubBack}}</a>
        </div>
      </div>

      <div v-else class="text-center text-red-500">Projet introuvable 😢</div>
    </div>
    <div>
      <Buttons label="Télécharger le référentiel" v-on:click="downloadRef"></Buttons>
    </div>
    <router-link to="/" class="text-yellow-500 hover:underline">⬅ Retour aux projets</router-link>
  </FadeIn>
</template>
