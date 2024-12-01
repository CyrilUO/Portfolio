<script setup>
import FadeIn from './FadeIn.vue'

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecast app showing real-time weather updates for any location.',
    tech: ['Vue', 'TailwindCSS', 'API'],
    image: '/assets/weather-app.jpg',
    link: 'https://example-weather.com'
  },
  {
    title: 'E-Commerce Platform',
    description: 'An e-commerce site with a focus on user-friendly design and fast performance.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/ecommerce-platform.jpg',
    link: 'https://example-ecommerce.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects.',
    tech: ['Vue', 'CSS'],
    image: '/assets/portfolio.jpg',
    link: 'https://my-portfolio.com'
  }
]
</script>

<template>
  <section id="projects" class="bg-gray-100 py-24 min-h-screen">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800">Projects</h2>
        <p class="mt-2 text-lg text-center text-gray-600">
          Showcasing my latest work and creative solutions
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
              v-for="project in projects"
              :key="project.title"
              class="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex flex-col"
          >
            <img
                :src="project.image"
                :alt="project.title"
                class="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 flex-grow">
              {{ project.description }}
            </p>
            <a
                :href="project.link"
                target="_blank"
                class="mt-4 inline-block text-primary-500 hover:underline"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>
