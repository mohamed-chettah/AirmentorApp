<script setup lang="ts">

</script>

<template>
    <nav  class="fixed top-0 left-0 right-0 z-5">
      <div class="flex mx-10 justify-between items-center h-24   ">
        <div class="flex flex-row items-center gap-20">
          <a href="/" class="cursor-pointer text-xl font-bold text-primary" >
            AirMentor
          </a>
          <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="md"
              color="white"
              :trailing="false"
              placeholder="Recherche de mentor..."
          />
        </div>

        <UButton color="primary" variant="solid">Connexion</UButton>


      </div>
    </nav>
</template>

<style scoped>

</style>