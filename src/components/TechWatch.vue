<script setup>
import FadeIn from "@/components/FadeIn.vue";
import articleImage from "@/assets/images/vue-react-angular.png"

const articles = [
  {
    id: 1,
    title: "Comparatif : Vue.js, React, et Angular",
    description: "Quel framework frontend choisir en 2024 ?",
    date: "1 Décembre 2024",
    image: articleImage,
    filename : "react-angular-vue.pdf"
  },
];

</script>

<template>
  <section id="tech-watch" class="bg-white pt-20 min-h-screen">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-2">
          Tech Watch
        </h2>
        <p class="text-lg text-center text-gray-600 mb-8">
          Articles sur les tendances tech de 2024 - 2025
        </p>
        <div
            :class="[
            'grid gap-8',
            articles.length === 1
              ? 'grid-cols-1'
              : articles.length === 2
              ? 'grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          ]"
        >
          <div
              v-for="article in articles"
              :key="article.id"
              class="bg-white shadow-md border border-primary-700 rounded-lg overflow-hidden flex flex-col"
          >
            <img
                :src="article.image"
                :alt="article.title"
                class="h-40 object-contain"
            />
            <div class="p-4 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4 flex-grow">
                {{ article.description }}
              </p>
              <div class="text-sm text-gray-500 mb-4">{{ article.date }}</div>
              <div class="flex justify-center">
                <a
                    :href="`/articles/${article.filename}`"
                    target="_blank"
                    class="bg-primary-700 inline-block text-white font-semibold py-2 px-4 rounded hover:opacity-90 hover:text-white"
                >
                  Télécharger l'article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

