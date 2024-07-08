<script setup lang="ts">

</script>

<template>
    <nav  class="fixed top-0 left-0 right-0 z-5">
      <div class="flex mx-10 justify-between items-center h-24 ">
        <div class="flex flex-row items-center xl:gap-20 gap-8">
          <a href="/" class="cursor-pointer text-xl font-bold text-primary" >
            AirMentor
          </a>

          <div class="flex gap-5">

            <UInput
                size="md"
                color="white"
                :trailing="false"
                placeholder="Que souhaitez vous apprendre ?"
                class="rounded-xl xl:w-60 w-32"
            />

            <UButton   class="rounded-xl p-2" icon="i-heroicons-magnifying-glass-20-solid"/>
          </div>

        </div>

        <div class="flex gap-4">
          <UButton class="bg-gray-100 text-primary rounded-xl hover:text-white" variant="solid">Proposer ses services de mentorat</UButton>

          <UButton  class="bg-gray-100 text-primary rounded-xl hover:text-white"  variant="solid">Connexion</UButton>
        </div>
      </div>
    </nav>
</template>

<style scoped>

</style>