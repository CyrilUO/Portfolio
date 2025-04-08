<script setup>
const currentYear = new Date().getFullYear();
const githubUrl = "https://github.com/CyrilUO";
const linkedinUrl = "https://fr.linkedin.com/in/cyril-dupont-835155227?trk=public_post_feed-actor-name";
</script>

<template>
  <div class="py-1 bg-white"></div>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center gap-4">
        <a
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="custo-clr flex items-center"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6 mr-2"
          >
            <path
                d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.3 9.42 7.87 10.95.58.11.77-.25.77-.55v-2c-3.2.7-3.9-1.55-3.9-1.55-.53-1.3-1.3-1.65-1.3-1.65-1.07-.74.08-.72.08-.72 1.17.08 1.8 1.2 1.8 1.2 1.05 1.8 2.76 1.3 3.42.99.1-.76.4-1.3.74-1.6-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.46-2.3 1.2-3.12-.12-.3-.53-1.55.12-3.22 0 0 1-.33 3.3 1.2a11.5 11.5 0 013-.42c1 0 2 .14 3 .42 2.3-1.53 3.3-1.2 3.3-1.2.65 1.67.24 2.9.12 3.22.76.82 1.2 1.86 1.2 3.12 0 4.44-2.7 5.4-5.25 5.7.4.34.77 1 .77 2.04v3c0 .3.2.67.78.55 4.57-1.53 7.87-5.84 7.87-10.95C23.5 5.74 18.27.5 12 .5z"
            />
          </svg>
          GitHub
        </a>

        <a
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="custo-clr flex items-center"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6 mr-2"
          >
            <path
                d="M4.98 3.5c0 1.3-1.01 2.5-2.5 2.5C.99 6 0 4.8 0 3.5S.99 1 2.48 1C3.97 1 5 2.2 5 3.5zM0 24h5V7H0v17zm7.97-13h4.55v2.26h.07c.63-1.2 2.17-2.48 4.46-2.48 4.77 0 5.65 3.14 5.65 7.23V24h-5V17.5c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.48V24H7.97V11z"
            />
          </svg>
          LinkedIn
        </a>
      </div>

      <div class="mt-8 pt-4 flex flex-wrap justify-center border-gray-800 text-center text-gray-400">
        <div class="mr-6">
          <p>&copy; {{ currentYear }} CyrilUO </p>

        </div>
        <div>
          <p>Tous droits réservés</p>

        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custo-clr {
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, opacity 0.3s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 15px;
}

.custo-clr:hover {
  transform: scale(1.010);
  color: white;
  opacity: 0.9;
  box-shadow: 2px 4px 15px rgba(178, 150, 39, 0.5);
}

</style>
