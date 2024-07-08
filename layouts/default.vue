<script setup lang="ts">
import Header from "~/components/header.vue";
</script>

<template>


  <Header class="pt-5"/>

  <div class="mt-32 container mx-auto">
    <slot />
  </div>

</template>
