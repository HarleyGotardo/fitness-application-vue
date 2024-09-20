<!-- src/views/Exercises.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import swal from 'sweetalert';

const exercises = ref([]);
const currentPage = ref(1);
const pageSize = 5; // Adjust the page size as needed
const totalExercises = ref(0);
const totalPages = ref(0);

const fetchExercises = async (page) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  let { data, error, count } = await supabase
    .from('exercises')
    .select('*', { count: 'exact' })
    .range(start, end);

  if (error) {
    console.error('Error:', error);
    swal("Error", "An error occurred while fetching exercises. Please try again.", "error");
  } else {
    exercises.value = data;
    totalExercises.value = count;
    totalPages.value = Math.ceil(count / pageSize);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    fetchExercises(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    fetchExercises(currentPage.value);
  }
};

onMounted(() => {
  fetchExercises(currentPage.value);
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-4">Exercises</h1>
    <div v-if="exercises.length">
      <ul>
        <li v-for="exercise in exercises" :key="exercise.id" class="mb-3 p-4 bg-white shadow rounded">
          <p><strong>Name:</strong> {{ exercise.name }}</p>
          <p><strong>Description:</strong> {{ exercise.description }}</p>
          <p><strong>Content:</strong> {{ exercise.content }}</p>
        </li>
      </ul>
      <div class="flex justify-between mt-4">
        <button @click="prevPage" :disabled="currentPage === 1" class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
    <div v-else>
      <p>No exercises found.</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>