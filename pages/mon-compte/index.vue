<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { onMounted, reactive, ref } from 'vue';
import { z } from 'zod';
import { useUserStore } from "~/stores/UserStore.ts";
import { fetchWithBody } from '~/utils/utils.ts'; // Mettez à jour le chemin vers vos fonctions

const loading = ref(false);
const message = ref('');

const schema = z.object({
  name: z.string().min(2, 'Must be at least 2 characters'),
  // age: z.number().int().min(12, 'Must be at least 12 years old'),
  // phone: z.string().min(10, 'Must be at least 10 characters'),
  // location: z.string().min(2, 'Must be at least 2 characters'),
  description: z.string().min(10, 'Must be at least 10 characters').max(350, 'Must be at most 350 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
  name: '',
  age: 0,
  phoneNumber: '',
  location: '',
  languages: '',
  profile_picture: '',
  credits: 0,
  grade: 0,
});
const userStore = useUserStore();
const { user, isAuthenticated } = storeToRefs(userStore); // Assurez-vous que l'ID est disponible
async function fetchUserData() {
  try {
    loading.value = true;
      const response = await fetch('http://localhost:3001/api/users/' + userStore.user.googleId, {
        method: "GET",
        credentials: "include", // This is important to include cookies
      });
      const user = await response.json()

    if (user) {
      console.log(user)
      // Update all properties of state with the fetched data
      state.name = user.name
      state.description = user.description
      // state.languages = user.languages
      // state.location = user.location
      state.profile_picture = user.profile_picture
      state.credits = user.credits
      state.grade = user.grade
      console.log('User data updated successfully');
    }
  } catch (e) {
    console.log('Failed to fetch user data', e);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  if (user.name !== "") {
    await fetchUserData();
  }
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const parsedData = schema.parse({
      name: state.name,
      description: state.description,
    });
    console.log("parsedData",parsedData)
    const response = await fetch(`http://localhost:3001/api/users/${userStore.user.googleId}`, {
      method: 'PUT',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    
    // Update the user store with the new data
    userStore.updateUser(result);
    
  } catch (error) {
    console.error('Failed to update user data:', error);
    // Optionally handle the error (e.g., show an error message to the user)
  }
}
</script>

<template>
    <section class="grid grid-cols-1 gap-4 md:grid-cols-3 container mx-auto">
      <!--      Colonne 1 -->
      <div class="flex flex-col w-full gap-4">
        <!--    Photo de profile -->
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Photo de profil 😊</h3>
          <NuxtImg
              :src="state.profile_picture"
              alt="Profile picture"
              class="rounded-[15%]  w-60 h-60"
          />
        </UCard>
        <!--    Suppression du compte-->
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Suppression du compte 🗑️</h3>
          <p class="text-center">Vous êtes sur le point de supprimer votre compte. Cette action est irréversible.</p>
          <div class="flex md:flex-row flex-col justify-center items-center w-full pt-3 gap-6 ">
            <UButton class="w-fit px-4 rounded-full bg-gray-500 hover:bg-red-600 ">Supprimer</UButton>
          </div>
        </UCard>
      </div>
      <!--      Colonne 2 -->

      <div class="flex flex-col gap-4">
        <!--        Information Générale 🤷‍  Forrmualaire️-->

        <UCard class="flex flex-col ">
          <h3 class="font-bold w-full text-center pb-3 ">Informations générales 📝</h3>
            <UForm :schema="schema" :state="state" class="space-y-4 " @submit="onSubmit">
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>
    <UFormGroup label="Description" name="description">
      <UInput v-model="state.description" />
    </UFormGroup>
    <!-- <UFormGroup label="Age" name="age">
      <UInput type="number" v-model="state.age"/>
    </UFormGroup> -->
    <!-- <UFormGroup label="Location" name="location">
      <UInput v-model="state.location" size="xl" />
    </UFormGroup> -->
            <UButton @click="onSubmit" type="submit" class="w-fit px-4 rounded-full bg-gray-500 hover:bg-blue-500 ">Modifier</UButton>
          </UForm>
        </UCard>
      </div>
      <!--      Colonne 3 Map note en etoile et nombre de credit restant -->

      <div class="flex flex-col w-full gap-4">
        <UCard class="w-full flex flex-col items-center">
          <h3 class="font-bold w-full text-center pb-3 ">Note et Avis 🌟</h3>
          <div class="flex flex-col items-center gap-4 ">
            <div class="flex gap-x-2 ">
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
            </div>
            <p>Vous avez une note de <span class="font-bold">{{state.grade}}/5</span></p>
          </div>
        </UCard>
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Crédit restant(s) 💰</h3>
          <p class="text-center">Vous avez <span class="font-bold">{{state.credits}}</span> crédits restants</p>
        </UCard>
      </div>
    </section>
</template>
