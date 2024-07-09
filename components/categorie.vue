<script setup lang="ts">

import {useCategorieStore} from "~/stores/CategorieStore";

useCategorieStore().getAllCategorie().then(() => {
  console.log()
})

</script>

<template>


  <div class=" mt-20 xl:mx-32 mx-20 ">

    <div class="flex items-center gap-2">
      <UIcon name="i-heroicons-tag-solid" class="text-[25px] text-primary" />
      <h2 class="text-2xl "> Différentes Catégorie de mentorat : </h2>
    </div>


  <div class="justify-center grid xl:grid-cols-3 grid-cols-1 gap-6 my-16" >

    <div v-if="useCategorieStore().listCategories" v-for="item in useCategorieStore().listCategories" class="col-span-1">


        <div class="flex flex-col items-center justify-center gap-4  w-full  ">
          <NuxtLink  to="/annonces" class="">
            <UCard class="hover:opacity-75  object-cover rounded-xl bg-gradient-to-tl from-indigo-600 to-cyan-300 text-white">
              {{ item.title }}
            </UCard>
          </NuxtLink>
          <p class="text-sm text-gray-600">  {{ item.description }}</p>
        </div>

    </div>

  </div>

  </div>

</template>

<style scoped>

</style>