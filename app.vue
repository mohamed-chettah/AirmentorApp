<script setup lang="ts">
import { useUserStore } from '~/stores/UserStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user, isAuthenticated } = storeToRefs(userStore);

console.log('User:');

// Check authentication status when the app loads
onMounted(async () => {
  await userStore.checkAuth();
  
  // If authenticated, you might want to fetch additional user data here
  if (isAuthenticated.value) {
    // For example, fetch user profile or other necessary data
    // await fetchUserProfile();
  }
});

// Optional: Watch for changes in authentication status
watch(isAuthenticated, (newValue) => {
  if (newValue) {
    console.log('User is now authenticated');
    // You could perform additional actions here when the user becomes authenticated
  } else {
    console.log('User is not authenticated');
    // You could perform actions here when the user becomes unauthenticated
  }
});

// Optional: Function to fetch additional user data
// async function fetchUserProfile() {
//   try {
//     const response = await fetch('/api/user-profile', {
//       method: 'GET',
//       credentials: 'include',
//     });
//     if (response.ok) {
//       const profileData = await response.json();
//       userStore.updateUser(profileData);
//     }
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//   }
// }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
