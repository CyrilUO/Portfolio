<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import FadeIn from './FadeIn.vue';
import delawareLogo from "@/assets/images/delaware-logo.png";
import Buttons from "@/components/common/buttons.vue";
import router from "@/router/index.js";

const goToContact = () => {
  router.push('/#contact');
};

const contentArray = [
  { type: "text", value: "N'hésite pas à me contacter !" },
  { type: "text", value: "Bienvenue sur mon site !" },
  { type: "text", value: "Je m'appelle Cyril" },
  { type: "text", value: "Je suis développeur en alternance" },
  { type: "text-image", textBefore: "Chez", image: delawareLogo },
];

const currentContent = ref(contentArray[0]);
let contentIndex = 0;
let typingTimeout;
let resizeCanvas; //

const cycleContent = () => {
  contentIndex = (contentIndex + 1) % contentArray.length;
  currentContent.value = { type: "text", value: "" };

  if (contentArray[contentIndex].type === "text") {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < contentArray[contentIndex].value.length) {
        currentContent.value.value += contentArray[contentIndex].value[charIndex];
        charIndex++;
        typingTimeout = setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          cycleContent();
        }, 2000);
      }
    };
    typeText();
  } else {
    currentContent.value = contentArray[contentIndex];
    setTimeout(() => {
      cycleContent();
    }, 2000);
  }
};

onMounted(() => {
  cycleContent();

  const canvas = document.getElementById('hero-bg');
  const ctx = canvas.getContext('2d');

  resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    velocityX: (Math.random() - 0.5) * 2,
    velocityY: (Math.random() - 0.5) * 2,
  }));

  const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.velocityX;
      p.y += p.velocityY;

      if (p.x < 0 || p.x > canvas.width) p.velocityX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.velocityY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "#b29627";
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  };

  animateParticles();
});

onUnmounted(() => {
  if (resizeCanvas) {
    window.removeEventListener('resize', resizeCanvas);
  }
});
</script>


<template>
  <section id="home" class="h-screen relative overflow-hidden flex items-center justify-center">
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"></div>

    <canvas id="hero-bg" class="absolute inset-0 pointer-events-none z-0"></canvas>

    <FadeIn>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-title font-display font-bold text-white mb-4">
          <template v-if="currentContent.type === 'text'">
            <span
                class="dynamic-typing block whitespace-nowrap overflow-hidden border-r-4 border-primary-200 pr-2"
            >
              {{ currentContent.value }}
            </span>
          </template>
          <template v-else-if="currentContent.type === 'text-image'">
            <span class="dynamic-typing inline-flex items-center">
              {{ currentContent.textBefore }}
              <span class="logo-container ml-2">
                <img
                    :src="currentContent.image"
                    alt="Logo"
                    class="logo"
                />
              </span>
            </span>
          </template>
        </h1>
        <Buttons title="Entrez en contact" label="Entrons en contact" v-on:click="goToContact" ></Buttons>
      </div>
    </FadeIn>
  </section>
</template>


<style scoped>
/* Dynamic typing effect */
.dynamic-typing {
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  white-space: pre-wrap;
  overflow: hidden;
  border-right: 4px solid;
  animation: blink 0.7s step-end infinite;
}

.logo-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
}

.logo {
  height: max-content;
  width: 5rem;
}

/* Cursor blink effect */
@keyframes blink {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: #b29627;
  }
}

/* Gradient background */
.bg-gradient-to-br {
  background: linear-gradient(135deg, black, #333333);
}

/* Responsive typography */
.text-title {
  font-size: clamp(1.75rem, 5vw, 3.75rem); /* Adjusts between 28px and 60px */
  line-height: 1.2;
}

.text-body {
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Adjusts between 16px and 20px */
  line-height: 1.6;
}

/* Custom button background */
.cst-bg {
  background-color: #bd9d1a;
}

.cst-bg:hover {
  background-color: #e1b927;
}

.space-mono-bold{
  font-family: "Space Mono", serif;
  font-weight: 400;
  font-style: normal;
}

.space-mono-bold-italic {
  font-family: "Space Mono", serif;
  font-weight: 700;
  font-style: italic;
}

</style>




