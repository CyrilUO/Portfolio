<script setup>
import FadeIn from './FadeIn.vue'
</script>

<template>
  <section id="about" class="min-h-screen w-full flex items-center justify-center">
    <FadeIn>
      <div class="max-w-7xl w-5/6 py-10 px-10 m-auto bg-black rounded-3xl min-h-screen">
        <!-- Titre et sous-titre -->
        <h2 class="section-title text-center text-4xl font-bold text-white mb-6">Qui suis-je ?</h2>

        <!-- Contenu principal -->
        <div class="flex flex-col md:flex-row items-center gap-14">
          <!-- Image à gauche -->
          <div class="w-full md:w-1/2 flex justify-center overflow-hidden">
            <img
                src="../assets/images/me.jpg"
                alt="Votre photo"
                class="rounded-lg shadow-lg object-cover w-full h-auto max-w-xs md:max-w-md"
            />
          </div>

          <!-- Description à droite -->
          <div class="w-full md:w-1/2 text-gray-700">
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

        <!-- Bouton Télécharger CV -->
        <div class="flex justify-center mt-8 align-middle">
          <a
              href="/cv.pdf"
              download
              class="inline-flex items-center px-6 py-3 border border-white rounded-md text-white bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#b29627"
                class="w-5 h-5 mr-2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-6m0 6l-3-3m3 3l3-3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </FadeIn>
  </section>
</template>


<style scoped>
/* Background for the section */
section {
  padding: 2rem 1rem; /* Ajoute des espaces internes */
  background-color: #ffffff;
  margin-top: 5rem; /* Réduit l'espace supérieur */
}


/* Title styles */
.section-title {
  color: #ffffff; /* White */
  font-family: "Signika Negative", sans-serif;
}

h3 {
  font-family: "Signika Negative", sans-serif
}

/* Description text */
p {
  padding-block:1rem;
  text-align: start;
  color: #b29627;
  line-height: 1.5;
  font-family: "Signika Negative", sans-serif;
  font-size: 1rem;
  font-style: normal;
}

img {
  margin: 0 auto; /* Centre l'image horizontalement */
  padding: 0.5rem; /* Espace autour de l'image */
}


</style>
