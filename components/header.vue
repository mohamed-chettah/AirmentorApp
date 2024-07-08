<script setup lang="ts">

</script>

<template>
    <nav  class="fixed top-0 left-0 right-0 z-5">
      <div class="flex xl:mx-10 mx-3 justify-between items-center h-24 ">
        <div class="flex flex-row items-center xl:gap-20 gap-16">
          <a href="/" class="cursor-pointer text-xl font-bold text-primary" >
            AirMentor
          </a>

          <div class="flex gap-2 ">

            <UInput
                size="md"
                color="white"
                :trailing="false"
                placeholder="Que souhaitez vous apprendre ?"
                class="rounded-xl xl:flex hidden xl:w-60"
            />

            <UInput
                size="md"
                color="white"
                :trailing="false"
                placeholder="Recherche"
                class="rounded-xl xl:hidden flex xl:w-60 w-32"
            />

            <UButton   class="rounded-xl p-2" icon="i-heroicons-magnifying-glass-20-solid"/>
          </div>

          <UButton class="xl:hidden flex bg-gray-100 border-2  text-primary rounded-xl hover:text-white px-2  py-2 " icon="i-heroicons-bars-2-solid"  />

        </div>

        <div class="gap-4 xl:flex hidden">
          <ButtonBasic label=" Proposer ses services de mentorat" />
          <ButtonBasic label="Connexion" />
        </div>
      </div>
    </nav>
</template>

<style scoped>

</style>