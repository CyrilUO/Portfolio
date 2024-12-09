<template>
  <section id="education" class="relative">
    <FadeIn>
      <div class="mx-auto bg-gray-100 my-10 px-10 py-10 rounded-3xl sm:px-6 lg:px-8 bx-shdw">
        <h2 class="text-4xl font-bold text-center text-primary-700 mb-8 title-relief">
          Mon Parcours Éducatif
        </h2>
        <div class="relative">
          <!-- Timeline central line -->
          <div class="absolute inset-0 left-1/2 w-1 transform -translate-x-1/2 z-10">
            <!-- Barre dorée dynamique -->
            <div
                ref="goldBar"
                class="w-full rounded-full bg-gold transition-all duration-300 opacity-0"
            ></div>
          </div>

          <!-- Timeline items -->
          <div
              v-for="(section, index) in sections"
              :key="index"
              :class="index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'"
              class="relative flex items-center mb-12 sm:mb-16 sm:z-40"
          >
            <!-- Content box -->
            <div class="relative bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 z-20">
              <h3 class="text-lg font-bold text-primary-700">
                {{ section.diploma }} {{ section.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600"><strong>Année :</strong> {{ section.year }}</p>
              <p class="mt-1 text-sm text-gray-600"><strong>Université :</strong> {{ section.university }}</p>
              <p class="mt-1 text-sm text-gray-600"><strong>Ville :</strong> {{ section.city }}</p>
              <p v-if="section.materia" class="mt-1 text-sm text-gray-600">
                <strong>Matière :</strong> {{ section.materia }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>

</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import FadeIn from "@/components/FadeIn.vue";

// Data for the timeline
const sections = ref([
  {
    diploma: "Baccalauréat",
    title: "Économique & Social",
    year: "2014",
    university: "Lycée Louis Aragon",
    city: "Givors",
  },
  {
    diploma: "Licence",
    title: "Langues Étrangères Appliquées",
    year: "2018",
    materia: "Anglais - Espagnol",
    university: "Université Jean-Moulin",
    city: "Lyon 3",
  },
  {
    diploma: "Master",
    title: "Métiers de l'enseignement, de l'éducation et de la formation",
    year: "2021",
    materia: "Espagnol",
    university: "Jean-Monnet",
    city: "Saint-Étienne",
  },
  {
    diploma: "Brevet de Technicien Supérieur",
    title: "Services Informatiques Aux Organisations (en cours)",
    year: "2023-2025",
    materia: "Développement Web et Applicatifs",
    university: "AFIP",
    city: "Villeurbanne",
  },
]);

const goldBar = ref(null);

const updateGoldBarHeight = () => {
  const section = document.querySelector("#education");
  const goldBarElement = goldBar.value;

  if (section && goldBarElement) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY + viewportHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      const visiblePart =
          Math.min(scrollY + viewportHeight - sectionTop, sectionHeight);
      const progress = (visiblePart / sectionHeight) * 99.5;
      goldBarElement.style.height = `${progress}%`;
      goldBarElement.style.opacity = "1"; // Rendre visible lorsque dans la section
    } else {
      goldBarElement.style.height = "0%"; // Réinitialiser hors de la section
      goldBarElement.style.opacity = "0"; // Masquer la barre
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateGoldBarHeight);
  updateGoldBarHeight(); // Appeler immédiatement pour initier
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateGoldBarHeight);
});
</script>

<style scoped>
/* Couleur dorée stylisée avec relief */
.bg-gold {
  background: linear-gradient(135deg, #d4af37, #b29627);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #f6d96a;
  transition: height 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
}

/* Effet d'ombre amélioré */
.bg-gold:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

/* Z-index élevé pour la barre */
.relative {
  z-index: 0;
}

@media screen and (max-width: 800px){
  .relative {
    z-index: 99;
  }
}

.bg-white {
  z-index: 20; /* Les cartes passent au-dessus */
}

.bx-shdw {
  box-shadow: 5px 10px 10px 0 rgba(183, 183, 183, 0.7);

}

.title-relief {
  color: #b29627; /* Couleur dorée */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), /* Ombre légère pour le relief */ -1px -1px 2px rgba(255, 255, 255, 0.2); /* Lumière douce pour le contraste */
  font-family: 'Poppins', sans-serif; /* Ajout d'une police moderne */
  letter-spacing: 1px; /* Espacement des lettres */
  background: none; /* Pas de dégradé pour la simplicité */
  -webkit-text-fill-color: #b29627; /* Remplissage couleur dorée */
}

.title-relief:hover {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
  -2px -2px 4px rgba(255, 255, 255, 0.3); /* Effet renforcé au survol */
  transform: scale(1.05); /* Léger agrandissement au survol */
  transition: all 0.3s ease; /* Transition douce */
}

</style>
