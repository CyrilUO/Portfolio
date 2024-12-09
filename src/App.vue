<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LandingPage from "@/components/LandingPage.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import TechWatch from "@/components/TechWatch.vue";
import Contact from "@/components/Contact.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <LandingPage />
      <About />
      <Education />
      <Projects />
      <Skills />
      <TechWatch />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
