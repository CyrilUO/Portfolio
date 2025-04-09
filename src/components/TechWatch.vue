<script setup>
import FadeIn from "@/components/FadeIn.vue";
import articleImage from "@/assets/images/vue-react-angular.png"
import Buttons from "@/components/common/buttons.vue";

const articles = [
  {
    id: 1,
    title: "Comparatif : Vue.js, React, et Angular",
    description: "Quel framework frontend choisir en 2024-2025 ?",
    date: "1 Décembre 2024",
    image: articleImage,
    filename : "react-angular-vue.pdf",
  },
];
</script>

<template>
  <div class="bg-white py-1"></div>

  <section id="tech-watch" class="bg-black mx-4">
    <FadeIn>
      <div class="max-w-7xl mx-auto py-8">
        <h2 class="text-4xl font-bold text-center text-yellow-400 mb-2">
          Tech Watch
        </h2>
        <p class="text-lg text-center text-white space-mono-regular-italic mb-8">
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
              class="bg-black border-white border rounded-lg overflow-hidden flex flex-col items-center text-center"
          >
            <img
                :src="article.image"
                :alt="article.title"
                class="h-40 object-contain"
            />
            <div class="p-4 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ article.title }}
              </h3>
              <p class="text-white mb-4 flex-grow">
                {{ article.description }}
              </p>
              <div class="text-sm text-gray-50 mb-4">{{ article.date }}</div>
              <div class="flex justify-center mt-10">
                <router-link
                    :to="{ name: 'TechWatchDetails', params: { id: article.id } }"
                    class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
                    rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
                    transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
                    hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  Voir l'article
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

