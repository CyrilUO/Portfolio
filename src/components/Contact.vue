<script setup>
import FadeIn from './FadeIn.vue'
</script>

<template>
  <section id="contact" class="bg-gray-50 pt-24 min-h-screen">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Entrer en contact</h2>
        <p class="text-lg text-center text-gray-600 mb-8">
          Parlons de vos projets
        </p>
        <div class="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form action="#" method="POST" class="space-y-6">
            <!-- Champ Nom -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <!-- Champ Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="mt-1 py-1 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"

              />
            </div>
            <!-- Champ Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-500"
              ></textarea>
            </div>
            <!-- Bouton Soumettre -->
            <div>
              <button
                  type="submit"
                  class="w-full bg-primary-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </FadeIn>
  </section>
</template>
