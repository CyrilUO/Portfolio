<script setup>
import FadeIn from './FadeIn.vue'
import Buttons from "@/components/common/buttons.vue";

const sendMessageTo = () => {

}
</script>

<template>
  <section id="contact" class="bg-gray-50 mt-20">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Entrer en contact</h2>
        <p class="text-lg text-center text-gray-600 mb-8">
          Parlons de vos projets
        </p>
        <div class="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form
              action="https://formspree.io/f/xwpvnadv"
              method="POST"
              class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" name="name" required
                     class="mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"/>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required
                     class="mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"/>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" required
                        class="mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus-custo"></textarea>
            </div>
            <div>
              <Buttons label="Envoyez votre message" type="submit"></Buttons>
            </div>
          </form>
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<style scoped>
.cst-bg {
  background-color: #b29627;
}

.focus-custo:focus {

  border-color: #b29627; /* Couleur primaire-700 */
  outline: none;
  box-shadow: 0 0 0 1px rgba(140, 111, 31, 0.5); /* Optionnel */


}
</style>
