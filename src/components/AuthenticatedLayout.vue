<!-- src/components/AuthenticatedLayout.vue -->
<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { supabase } from '@/lib/supabaseClient';
import swal from 'sweetalert';

const router = useRouter();

const logout = async () => {
  const willLogout = await swal({
    title: "Are you sure?",
    text: "Do you really want to log out?",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: null,
        visible: true,
        className: "bg-green-400 text-black",
        closeModal: true,
      },
      confirm: {
        text: "Log Out",
        value: true,
        visible: true,
        className: "bg-red-400 text-white",
        closeModal: true
      }
    },
    dangerMode: true,
  });

  if (willLogout) {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error:', error);
      swal("Error", "An error occurred while logging out. Please try again.", "error");
    } else {
      swal("Success", "Logged out successfully!", "success");
      router.push('/login');
    }
  }
};
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
        <button @click="logout" class="py-2 px-4 rounded hover:bg-gray-700">
          <img src="@/assets/exit.png" alt="Logout" class="w-6 h-6" />
        </button>
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