<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <img src="@/assets/muscle.png" alt="Fiber Muscle Logo" class="mb-4 w-10 h-10" />
    <h1 class="text-3xl font-bold mb-4">Login to Fiber Muscle</h1>
    <form class="w-full max-w-sm border border-gray-300 shadow-lg rounded-lg p-6 bg-white">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
body {
font-family: 'Arial', sans-serif;
}
</style>
