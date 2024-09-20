<!-- src/views/Users.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import swal from 'sweetalert';

const users = ref([]);
const currentPage = ref(1);
const pageSize = 5;
const totalUsers = ref(0);
const totalPages = ref(0);

const fetchUsers = async (page) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  let { data, error, count } = await supabase
    .from('users')
    .select('*', { count: 'exact' })
    .range(start, end);

  if (error) {
    console.error('Error:', error);
    swal("Error", "An error occurred while fetching users. Please try again.", "error");
  } else {
    users.value = data;
    totalUsers.value = count;
    totalPages.value = Math.ceil(count / pageSize);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    fetchUsers(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    fetchUsers(currentPage.value);
  }
};

const toPascalCase = (str) => {
  return str.replace(/\w+/g, 
    (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
};

onMounted(() => {
  fetchUsers(currentPage.value);
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-4">Users</h1>
    <div v-if="users.length">
      <ul>
        <li v-for="user in users" :key="user.id" class="mb-2 p-4 bg-white shadow rounded">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Role:</strong> {{ toPascalCase(user.role) }}</p>
        </li>
      </ul>
      <div class="flex justify-between mt-4">
        <button @click="prevPage" :disabled="currentPage === 1" class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-700">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
    <div v-else>
      <p class="text-center">No users found.</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>