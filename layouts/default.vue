<script setup lang="ts">
import Header from "~/components/header.vue";
</script>

<template>


  <Header class="pt-5"/>

  <div class="mt-20 bg-dodger-blue-100 ">
    <slot />
  </div>

</template>
