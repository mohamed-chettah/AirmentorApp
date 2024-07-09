<script setup lang="ts">

import {useCategorieStore} from "~/stores/CategorieStore";

useCategorieStore().getAllCategorie().then(() => {
  console.log('Categories loaded')
})

</script>

<template>

  <div class="container mx-auto justify-center grid grid-cols-3 gap-6 my-10" >



    <NuxtLink to="/annonces/1" class="p-0 col-span-1">
      <UCard>
        <div class="flex flex-col gap-4 p-4">
          <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
          <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
          <p class="text-sm text-gray-600">Description de l'annonce</p>
        </div>
      </UCard>
    </NuxtLink>


    <NuxtLink to="/annonces/1" class="p-0 col-span-1">
      <UCard>
        <div class="flex flex-col gap-4 p-4">
          <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
          <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
          <p class="text-sm text-gray-600">Description de l'annonce</p>
        </div>
      </UCard>
    </NuxtLink>


    <NuxtLink to="/annonces/1" class="p-0 col-span-1">
      <UCard>
        <div class="flex flex-col gap-4 p-4">
          <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
          <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
          <p class="text-sm text-gray-600">Description de l'annonce</p>
        </div>
      </UCard>
    </NuxtLink>


  </div>



</template>

<style scoped>

</style>