<script setup>
import FadeIn from "@/components/FadeIn.vue";

const articles = [
  {
    title: 'Comparing Vue.js, React, and Angular in 2024',
    description: 'Discover the strengths and weaknesses of the three most popular frameworks for web development in 2024.',
    date: 'December 1, 2024',
    link: 'https://example.com/vue-react-angular-comparison',
    image: '/assets/framework-comparison.jpg',
  },
  {
    title: 'The Rise of Svelte in Modern Web Development',
    description: 'Why Svelte is gaining traction and how it compares to other major frameworks.',
    date: 'November 20, 2024',
    link: 'https://example.com/svelte-rise',
    image: '/assets/svelte-rise.jpg',
  },
  {
    title: 'Solid.js: The Future of Reactive Web Applications?',
    description: 'Exploring the unique features and performance benefits of Solid.js.',
    date: 'October 15, 2024',
    link: 'https://example.com/solid-js',
    image: '/assets/solid-js.jpg',
  },
];
</script>

<template>
  <section id="tech-watch" class="bg-gray-50 pt-24 min-h-screen">
    <FadeIn>
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Tech Watch</h2>
      <p class="text-lg text-center text-gray-600 mb-8">
        Stay updated with the latest trends and analysis on web frameworks.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="article in articles"
            :key="article.title"
            class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
        >
          <img
              :src="article.image"
              :alt="article.title"
              class="h-40 w-full object-cover"
          />
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 mb-4 flex-grow">
              {{ article.description }}
            </p>
            <div class="text-sm text-gray-500 mb-4">{{ article.date }}</div>
            <a
                :href="article.link"
                target="_blank"
                class="text-primary-500 hover:underline mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  </section>
</template>
