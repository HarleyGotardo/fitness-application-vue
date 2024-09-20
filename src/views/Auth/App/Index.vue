<!-- src/views/Index.vue -->
<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <h1 class="text-3xl font-bold mb-4">Welcome to Fiber Muscle</h1>
      <p class="text-lg text-gray-700 mb-4">You are successfully logged in!</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4">
        <div class="bg-blue-100 shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Personalized Workouts</h2>
          <p class="text-gray-600">Get workout plans tailored to your fitness goals.</p>
        </div>
        <div class="bg-green-100 shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Nutrition Tracking</h2>
          <p class="text-gray-600">Track your daily nutrition and stay on top of your diet.</p>
        </div>
        <div class="bg-yellow-100 shadow-md rounded-lg p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Progress Monitoring</h2>
          <p class="text-gray-600">Monitor your progress with detailed analytics and reports.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>