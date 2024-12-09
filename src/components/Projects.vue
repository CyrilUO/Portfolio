<script setup>
import FadeIn from './FadeIn.vue'
import gsbProject from "@/assets/images/gsb-photo-project.png"
import portfolio from "@/assets/images/portfolio.png"

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecast app showing real-time weather updates for any location.',
    tech: ['Vue', 'TailwindCSS', 'API'],
    image: '/assets/weather-app.jpg',
    link: 'https://example-weather.com'
  },
  {
    title: 'GSB ecommerce',
    description: 'Réplicat d\'une solution ecommerce pour de la vente de produits en ligne',
    tech: ['Vue.JS', 'Spring JDBC-Security-Web', 'Node.js', 'MySQL'],
    image: gsbProject,
    link: { githubFront : 'https://github', githubBack : 'https://github' },
  },
  {
    title: 'Portfolio Website',
    description: 'Portfolio réalisé en cours de deuxième année de formation.',
    tech: ['Vue', 'Tailwind CSS'],
    image: portfolio,
    link: 'https://my-portfolio.com'
  }
]
</script>

<template>
  <section id="projects" class="bg-gray-100 py-24 min-h-screen">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800">Réalisations</h2>
        <p class="mt-2 text-lg text-center text-gray-600">
          Quelques projets professionnels - académiques - personnels
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
              v-for="project in projects"
              :key="project.title"
              class="test bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-transform bg-primary-700 transform place-items-center flex flex-col"
          >
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <img
                :src="project.image"
                :alt="project.title"
                class="h-40 w-fit object-contain rounded-md mb-4 "
            />
            <p class="text-gray-600 flex-grow">
              {{ project.description }}
            </p>
            <a
                :href="project.link"
                target="_blank"
                class="mt-4 inline-block py-1 px-5 border-white border-l-2 rounded-t-full rounded-b-full text-white hover:text-primary-700 hover:bg-white hover:border-primary-700 hover:opacity-90 border bg-primary-700"
            >
              Télécharger au format PDF
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
.test {
  box-shadow: 5px 10px 10px 0 rgba(183, 183, 183, 0.7);
  //border: px solid rgba( 255, 255, 255, 0.18 );
}
</style>
