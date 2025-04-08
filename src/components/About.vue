<script setup>
import FadeIn from './FadeIn.vue'
import Buttons from "@/components/common/buttons.vue";

import cvImage from "@/assets/images/cyril_cv.png"

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = cvImage;
  link.download = 'Cyril_DUPONT_CV.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

</script>

<template>
  <div class="py-1 bg-white"></div>
  <section id="about" class="w-full flex items-center justify-center bg-black py-20 px-6 mx-auto  md:px-10">
    <FadeIn>
      <div class="max-w-7xl w-full flex flex-col items-center space-y-12">
        <h2 class="section-title text-center text-4xl font-bold text-yellow-400 mb-6">Qui suis-je ?</h2>

        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
          <div class="w-full md:w-1/2 flex justify-center">
            <img
                src="../assets/images/me.jpg"
                alt="Votre photo"
                class="rounded-xl shadow-lg object-cover w-full h-auto max-w-sm md:max-w-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div class="w-full text-yellow-400 md:w-1/2 space-y-6">
            <p class="text-lg md:text-xl leading-relaxed">
              Passionné par le développement informatique, j'apprends différentes technos pour obtenir un bagage de développeur fullstack.
              <br><br>Avec l'apprentissage permanent comme credo, j'aime mettre à dispositions mes compétences dans le cadre de projets personnels ou professionnels
            </p>
            <p class="text-lg text-yellow-400 md:text-xl leading-relaxed">
              Je m'intéresse également aux frameworks agentic permettant l'automatisation des tâches au sein des entreprises.
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <Buttons label="Télécharger mon CV" v-on:click="downloadCV"></Buttons>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
.section-title {
  font-family: "Signika Negative", sans-serif;
}

.text-custo {
  color:#b29627
}
p {
  color: #b29627;
  line-height: 1.75;
  font-family: "Signika Negative", sans-serif;
}

img {
  border: 4px solid #b29627;
  border-radius: 12px;
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.05);
}
</style>
