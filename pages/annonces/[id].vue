<script setup lang="ts">

</script>

<template>
<!--&lt;!&ndash;detail d'une annonce-->
<!-- structure:  2/3  Titre/lieux du cours/a propos du mentor( sa desription)/a propos du cours(skills/description/avis) -->
<!--  1/3 card avec la photo du mentor et son nom et prenom, sa note(avis)  tarif horaire de credit et un bouton pour le contacter-->

  <div class="flex flex-col justify-between md:flex-row gap-6 container mx-auto">
      <div class="w-2/3 ">
        <h1 class="text-4xl font-bold text-primary w-full">Titre de l'annonce</h1>
        <p class="text-lg text-gray-600">Lieux du cours</p>
        <div>
          <UBadge label="En distanciel" color="blue" class="rounded-2xl text-lg"/>
        </div>
        <p class="text-lg text-gray-600">A propos du mentor</p>
        <p class="text-lg text-gray-600">A propos du cours</p>
      </div>
      <div class="w-1/3">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Nom et prenom du mentor</h3>
            <div class="flex gap-4 items-center">
              <div class="flex gap-1">
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              </div>
              <p class="text-sm text-gray-600">5/5</p>
            </div>
            <p class="text-sm text-gray-600">Tarif horaire: 10 crédits</p>
            <UButton class="rounded-xl p-2  w-fit" label="Contacter" icon="i-heroicons-chat-bubble-left-right-solid"/>
          </div>
        </UCard>
      </div>
    </div>
</template>

<style scoped>

</style>