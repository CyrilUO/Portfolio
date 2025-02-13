<script setup>
import FadeIn from './FadeIn.vue'
import Buttons from "@/components/common/buttons.vue";

const downloadCV = () => {

}
</script>

<template>
  <section id="about" class="w-full flex items-center justify-center">
    <FadeIn>
      <div class="max-w-7xl w-5/6 py-10 px-10 m-auto">
        <!-- Titre et sous-titre -->
        <h2 class="section-title text-center text-4xl font-bold text-white mb-6">Qui suis-je ?</h2>

        <!-- Contenu principal -->
        <div class="flex flex-col md:flex-row items-center gap-14">
          <!-- Image à gauche -->
          <div class="w-full md:w-1/2 flex justify-center overflow-hidden">
            <img
                src="../assets/images/me.jpg"
                alt="Votre photo"
                class="rounded-ee-xl shadow-lg object-cover w-full h-auto max-w-xs md:max-w-md"
            />
          </div>

          <!-- Description à droite -->
          <div class="w-full md:w-1/2 text-gray-700">
            <p class="text-lg leading-relaxed">
              Passionné par le développement web, j'apprends différents technologies pour appréhender le développement front et back end
            </p>
            <p class="text-lg leading-relaxed mt-4">
              Je m'intéresse aussi aux différents framework IA et tout ce qui est relatif à ce domaine.
            </p>
          </div>
        </div>

        <!-- Bouton Télécharger CV -->
        <div class="flex justify-center mt-8 align-middle">
          <Buttons label="Télécharger mon CV" v-on:click="downloadCV"></Buttons>
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
