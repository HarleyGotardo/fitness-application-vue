<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <div class="bg-gray-800 text-white flex items-center p-4">
      <img src="@/assets/muscle.png" alt="Fiber Muscle Logo" class="w-10 h-10 mr-2" />
      <div class="text-2xl font-bold flex-1">
        Fiber Muscle
      </div>
      <nav class="flex space-x-4">
        <RouterLink to="/application/dashboard" class="py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">Dashboard</RouterLink>
        <RouterLink to="/application/exercises" class="py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">Exercises</RouterLink>
        <RouterLink to="/application/nutrition" class="py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">Nutrition</RouterLink>
        <RouterLink to="/application/progress" class="py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">Progress</RouterLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-100 p-6">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.router-link-active {
  background-color: #4a5568; /* Tailwind CSS bg-gray-700 */
}
</style>