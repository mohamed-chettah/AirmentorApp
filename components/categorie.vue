<script setup lang="ts">

import {useCategorieStore} from "~/stores/CategorieStore";

useCategorieStore().getAllCategorie().then(() => {
  console.log('Categories loaded')
})

</script>

<template>


  <div class=" mt-20 xl:mx-32 mx-20 ">

    <div class="flex items-center gap-2">
      <UIcon name="i-heroicons-tag-solid" class="text-[25px] text-primary" />
      <h2 class="text-2xl "> Différentes Catégorie de mentorat : </h2>
    </div>


  <div class="justify-center grid xl:grid-cols-3 grid-cols-1 gap-6 my-16" >

    <div v-for="index in [0,1,2,3,4,5]" class="col-span-1">


        <div class="flex flex-col items-center justify-center gap-4  w-full  ">
          <NuxtLink  to="/annonces" class="">
            <UCard class="hover:opacity-75  object-cover rounded-xl bg-gradient-to-br from-blue-400 to-cyan-3000 text-white">
              Design
            </UCard>
          </NuxtLink>
          <p class="text-sm text-gray-600">Description de la catégorie</p>
        </div>

    </div>

  </div>

  </div>

</template>

<style scoped>

</style>