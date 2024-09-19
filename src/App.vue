<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <header class="text-center mb-8">
      <h1 class="text-5xl font-bold mb-4">Fiber Muscle</h1>
      <p class="text-lg text-gray-700">Your ultimate fitness companion</p>
    </header>

    <div class="mb-8">
      <router-link to="/login">
        <button class="bg-blue-500 text-white px-4 py-2 rounded mr-4">Login</button>
      </router-link>
      <router-link to="/register">
        <button class="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>