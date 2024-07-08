<script setup lang="ts">

</script>

<template>
  <nav class="bg navbar fixed top-0 left-0 right-0 z-5">
    <div class="container flex justify-between  items-center h-24   ">
      <a href="/" class="cursor-pointer text-xl text-primary" >
        AirMentor
      </a>

      <div class="flex justify-center items-center space-x-6 lg:text-[17px] text-[16px] px-6 py-2">
        <a name="prendre-rendez-vous" id="contact" href="/contact" class="lg:px-4 px-2 text-white hover:text-black-200 hover:border-gold-200
           lg:text-[17px] sm:text-[14px] text-[10px] border-2
           font-bold rounded-xl p-2 hover:bg-gold-200 ">
          Prendre rendez-vous
        </a>
        <UButton icon="i-heroicons-bars-2-solid" class="lg:px-3 px-2 lg:py-3 py-1.8 dark:text-white  rounded-xl border-2
          hover:border-gold-200 dark:bg-transparent bg-transparent border-white hover:text-black-200 dark:hover:text-black-200" @click="isOpen = true" />
      </div>
    </div>

  </nav>
</template>

<style scoped>

</style>