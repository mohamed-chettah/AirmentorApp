<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
</script>

<template>
  <main class="container mx-auto ">
<!--    Photo de profile -->
    <section class="grid grid-cols-1 gap-4 md:grid-cols-3 ">
      <UCard class="w-full flex flex-col items-center ">
        <h3 class="font-bold w-full text-center pb-3 ">Photo de profil 😊</h3>
        <NuxtImg
            src="https://via.placeholder.com/200"
            alt="Profile picture"
            class="rounded-[15%]  w-60 h-60"
        />
        <div class="flex md:flex-row flex-col justify-center items-center w-full pt-3 gap-6 ">
          <UIcon name="i-heroicons-trash" class="scale-125 text-red-600 cursor-pointer hover:text-red-800"/>
          <UButton class="w-fit px-4 rounded-full ">Changer</UButton>
        </div>
      </UCard>
      <UCard></UCard>
      <UCard></UCard>
<!--    Suppression du compte-->
      <UCard class="w-full flex flex-col items-center ">
        <h3 class="font-bold w-full text-center pb-3 ">Suppression du compte 🗑️</h3>
        <p class="text-center">Vous êtes sur le point de supprimer votre compte. Cette action est irréversible.</p>
        <div class="flex md:flex-row flex-col justify-center items-center w-full pt-3 gap-6 ">
          <UButton class="w-fit px-4 rounded-full bg-gray-500 hover:bg-red-600 ">Supprimer</UButton>
        </div>
      </UCard>
    </section>
  </main>

</template>
