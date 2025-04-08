<script setup>
import FadeIn from "@/components/FadeIn.vue";

// Import des images
import pythonLogo from "@/assets/images/Python-logo-removebg-preview.png";
import jsLogo from "@/assets/images/JavaScript-logo.png";
import javaLogo from "@/assets/images/java-removebg-preview.png";
import htmlLogo from "@/assets/images/HTML-min.png";
import twindCSSLogo from "@/assets/images/tailwind-removebg-preview.png";
import cssLogo from "@/assets/images/CSS-min.png";
import ScssLogo from "@/assets/images/scss.png";
import vueLogo from "@/assets/images/vuejs.png";
import angularLogo from "@/assets/images/Angular-min.png";
import springLogo from "@/assets/images/spring_-removebg-preview.png";
import intellijLogo from "@/assets/images/Intellij-min.png";
import Git from "@/assets/images/git-removebg-preview.png";
import dockerLogo from "@/assets/images/docker-min-removebg-preview.png";
import postman from "@/assets/images/postmn-removebg-preview.png";
import swagger from "@/assets/images/swagger-removebg-preview.png";
import sqlalchemy from "@/assets/images/sql_aclehmy.jpg";
import mysql from "@/assets/images/mysql.png";
import androidStudio from "@/assets/images/Android_Studio_icon_(2023).svg.png";
import retrofit from "@/assets/images/retrofit.png";
import gradio from "@/assets/images/gradio-min.png";
import FastAPI from "@/assets/images/fastapi-removebg-preview.png";

// Définition des compétences
const techSkills = {
  "Langages de programmation": [
    { name: "Python", description: "Utilisation dans le cadre d'une refonte d'application centrée data", image: pythonLogo},
    { name: "JavaScript", description: "Utilisation en entreprise et au cours de mon projet de fin de BTS", image: jsLogo},
    { name: "Java", description: "Utilisation lors de mon projet de fin de BTS", image: javaLogo},
    { name: "HTML", description: "Utilisé dans l'ensemble des projets", image: htmlLogo },
    { name: "CSS", description: "Utilisation récurrente dans l'ensemble des projets", image: cssLogo },
    { name: "SCSS", description: "Utilisation dans le cadre d'un projet entreprise", image: ScssLogo },
  ],
  "Frameworks & Librairies": [
    { name: "Vue.js", description: "Utilisé lors du projet de fin de BTS afin d'améliorer la courbe d'apprentissage d'Angular et de débuter par un framework front plus intuitif et facile à prendre en main", image: vueLogo },
    { name: "Angular", description: "Utilisé lors de projet en entreprise", image: angularLogo},
    { name: "Spring", description: "Utilisé lors du projet web de fin d'étude", image: springLogo},
    { name: "TailwindCSS", description: "Utilisation pour le projet web de fin de BTS", image: twindCSSLogo},
    { name: "Retrofit", description: "Appréhendé lors du projet mobile de fin d'étude de fin de BTS", image: retrofit},
    { name: "Gradio", description: "Utilisation en entreprise", image: gradio},
    { name: "FastAPI", description: "Utilisation en entreprise et pour la création de l'application GSB mobile", image: FastAPI},
  ],
  "Outils & Environnements": [
    { name: "Intellij", description: "En entreprise dans le cadre de la méthode Agile ainsi que lors de la réalisation du projet de fin de BTS", image: intellijLogo},
    { name: "Git", description: "Utilisé dans le cadre de la méthode Agile ainsi que lors de la réalisation du projet de fin de BTS", image: Git},
    { name: "Docker", description: "Quelques cas d'utilisation, encore beaucoup à apprendre sur cet outils!", image: dockerLogo},
    { name: "Swagger", description: "Utilisation pour du test en local ainsi qu'au cours de plusieurs TP en étude", image: swagger },
    { name: "Postman", description: "Largement utilisé au cours de la deuxième année d'étude", image: postman},
    { name: "Android Studio", description: "Envrionnement utilisé pour développer l'application mobile de fin d'étude", image: androidStudio},
  ],
  "Base de donnees et ORM": [
    { name: "MySQL", description: "Utilisé en entreprise comme pour les deux projets de fin de BTS", image: mysql},
    { name: "SQLAlchemy", description: "Appréhendé lors du projet mobile de fin d'étude", image: sqlalchemy},
  ],
};
</script>

<template>
  <div class="bg-white py-0.5"></div>

  <section id="skills" class="bg-black pt-24 pb-12 mx-4">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-yellow-400 mb-6">Compétences</h2>
        <p class="text-lg text-center text-white mb-8 space-mono-regular-italic">
          Technologies utilisées lors de réalisations académiques ou professionnelles
        </p>

        <div class="space-y-12">
          <div v-for="(skills, category) in techSkills" :key="category">
            <h3 class="text-2xl font-semibold text-white mb-4">{{ category }}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div
                  v-for="skill in skills"
                  :key="category + skill.name"
                  class="skill-card relative shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <div class="absolute inset-0 bg-white bg-opacity-10 rounded-2xl pointer-events-none"></div>
                <img
                    :src="skill.image"
                    :alt="skill.name"
                    class="h-24 w-24 object-contain mb-4 rounded-full bg-white p-2"
                />
                <h4 class="text-lg font-semibold text-white mb-2">{{ skill.name }}</h4>
                <p class="text-sm text-white mb-4">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
.skill-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(25deg,#facc15 5%, #000000 40%, #facc15 80%, #000000 100%);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.skill-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 0;
  transition: opacity 0.3s;
  border-radius: 2rem;
}

.skill-card:hover::before {
  opacity: 0.4;
}
</style>
