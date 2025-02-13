<script setup>
import FadeIn from "@/components/FadeIn.vue";

// Import des images
import pythonLogo from "@/assets/images/python-min.png";
import jsLogo from "@/assets/images/JS-min.png";
import javaLogo from "@/assets/images/java-min.png";
// import phpLogo from "@/assets/images/php-logo.png";

import htmlLogo from "@/assets/images/HTML-min.png";
import twindCSSLogo from "@/assets/images/TW-CSS-min.png";
import cssLogo from "@/assets/images/CSS-min.png";

import vueLogo from "@/assets/images/Vue-JS-min.png";
import angularLogo from "@/assets/images/Angular-min.png";
import springLogo from "@/assets/images/Spring-min.png";

import gitLogo from "@/assets/images/Intellij-min.png";
// import postmanLogo from "@/assets/images/Pos";
import dockerLogo from "@/assets/images/docker-min.png";

// Définition des compétences
const techSkills = {
  "Langages de programmation": [
    { name: "Python", description: "Langage polyvalent.", image: pythonLogo, level: 80 },
    { name: "JavaScript", description: "Langage interactif.", image: jsLogo, level: 75 },
    { name: "Java", description: "Backend robuste.", image: javaLogo, level: 75 },
    { name: "PHP", description: "Backend dynamique.", image: javaLogo, level: 70 },
    { name: "HTML", description: "Backend dynamique.", image: htmlLogo, level: 70 },
    { name: "CSS", description: "Backend dynamique.", image: cssLogo, level: 70 },
  ],
  Frameworks: [
    { name: "Vue.js", description: "Framework interactif.", image: vueLogo, level: 70 },
    { name: "Angular", description: "Framework robuste.", image: angularLogo, level: 65 },
    { name: "Spring", description: "Backend puissant.", image: springLogo, level: 60 },
    { name: "TailwindCSS", description: "Backend puissant.", image: twindCSSLogo, level: 60 },
  ],
  Outils: [
    { name: "Git", description: "Contrôle de version.", image: gitLogo, level: 90 },
    // { name: "Postman", description: "Test d'API.", image: postmanLogo, level: 85 },
    { name: "Docker", description: "Conteneurisation.", image: dockerLogo, level: 80 },    { name: "Git", description: "Contrôle de version.", image: gitLogo, level: 90 },
    // { name: "Postman", description: "Test d'API.", image: postmanLogo, level: 85 },
    { name: "Docker", description: "Conteneurisation.", image: dockerLogo, level: 80 },    { name: "Git", description: "Contrôle de version.", image: gitLogo, level: 90 },
    // { name: "Postman", description: "Test d'API.", image: postmanLogo, level: 85 },
    { name: "Docker", description: "Conteneurisation.", image: dockerLogo, level: 80 }, {
      name: "Git",
      description: "Contrôle de version.",
      image: gitLogo,
      level: 90
    },
    // { name: "Postman", description: "Test d'API.", image: postmanLogo, level: 85 },
    {name: "Docker", description: "Conteneurisation.", image: dockerLogo, level: 80},
  ],
};
</script>

<template>
  <section id="skills" class="bg-gray-50 pt-24">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Compétences</h2>
        <p class="text-lg text-center text-gray-600 mb-8">
          Technologies utilisées lors de réalisations académiques ou professionnelles
        </p>

        <div class="space-y-12">
          <!-- Boucle pour chaque catégorie -->
          <div v-for="(skills, category, index) in techSkills" :key="category">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">{{ category }}</h3>
            <div class="relative overflow-hidden py-4">
              <!-- Ajout de la classe reverse pour les animations inversées -->
              <div class="scrolling-container" :class="{ reverse: index % 2 !== 0 }">
                <!-- Les cartes originales -->
                <div
                    v-for="skill in skills"
                    :key="category + skill.name"
                    class="skill-card flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center mx-4"
                >
                  <img
                      :src="skill.image"
                      :alt="skill.name"
                      class="h-20 w-20 object-contain mb-4"
                  />
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">
                    {{ skill.name }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-4">{{ skill.description }}</p>
                  <!-- Barre de progression -->
                  <div class="w-full bg-gray-200 rounded-full h-3">
                    <div
                        class="bg-primary-500 h-3 rounded-full"
                        :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
                <!-- Duplique les cartes pour une continuité fluide -->
                <div
                    v-for="skill in skills"
                    :key="category + skill.name + '-duplicate'"
                    class="skill-card flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center mx-4"
                >
                  <img
                      :src="skill.image"
                      :alt="skill.name"
                      class="h-20 w-20 object-contain mb-4"
                  />
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">
                    {{ skill.name }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-4">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
/* Conteneur de défilement */
.scrolling-container {
  display: flex;
  gap: 1rem;
  animation: scrolling 10s linear infinite; /* Durée pour ajuster la vitesse */
  will-change: transform;
}

/* Animation inversée pour les sections impaires */
.scrolling-container.reverse {
  animation-direction: reverse;
}

/* Animation continue fluide */
@keyframes scrolling {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Espacement des cartes */
.skill-card {
  flex-shrink: 0;
  width: 18rem; /* Largeur fixe pour les cartes */
}

/* Dupliquer les éléments pour un effet continu */
.scrolling-container::after {
  content: '';
  display: flex;
  gap: 1rem;
  width: 100%;
}

/* Assurez-vous que le parent gère bien l'overflow */
.relative.overflow-hidden {
  overflow: hidden;
  position: relative;
}
</style>

