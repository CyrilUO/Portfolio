<script setup>
import FadeIn from './FadeIn.vue'
</script>

<template>
  <section id="about" class="min-h-screen flex items-center justify-center">
    <FadeIn>
      <div class="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <!-- Titre et sous-titre -->
        <h2 class="section-title text-center text-4xl font-bold text-gray-800 mb-6">Qui suis-je ?</h2>
        <p class="section-subtitle text-lg text-center text-gray-600 mb-12">
          Découvrez un peu plus sur moi.
        </p>

        <!-- Contenu principal -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Image à gauche -->
          <div class="w-full md:w-1/2 flex justify-center">
            <img
                src="../assets/images/me.jpg"
                alt="Votre photo"
                class="rounded-lg shadow-lg object-cover max-w-sm h-auto"
            />
          </div>

          <!-- Description à droite -->
          <div class="w-full md:w-1/2 text-gray-700">
            <h3 class="text-2xl font-semibold mb-4">Un peu sur moi</h3>
            <p class="text-lg leading-relaxed">
              Passionné par le développement web, je suis spécialisé dans la création
              d'applications dynamiques et réactives. Avec une expérience diversifiée
              en frontend et backend, je m'efforce toujours de produire un code
              élégant et performant.
            </p>
            <p class="text-lg leading-relaxed mt-4">
              En dehors de la programmation, j'aime explorer de nouveaux horizons,
              lire sur les dernières tendances technologiques et partager mes
              connaissances avec la communauté.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
/* Background for the section */
section {
  background-color: #6e6e6e;
}

/* Title styles */
.section-title {
  color: #ffffff; /* White */
}

/* Subtitle styles */
.section-subtitle {
  color: #b29627; /* Gold */
}

/* Description text */
p {
  color: #b29627; /* Gold */
}

</style>
