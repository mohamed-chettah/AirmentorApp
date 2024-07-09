<script setup lang="ts">

</script>

<template>
<!--&lt;!&ndash;detail d'une annonce-->
<!-- structure:  2/3  Titre/lieux du cours/a propos du mentor( sa desription)/a propos du cours(skills/description/avis) -->
<!--  1/3 card avec la photo du mentor et son nom et prenom, sa note(avis)  tarif horaire de credit et un bouton pour le contacter-->

  <div class="flex flex-col justify-between md:flex-row gap-6 container mx-auto">
      <div class="w-2/3">
        <h1 class="text-4xl font-bold text-primary w-full mb-3">Titre de l'annonce</h1>
        <h3 class="text-xl text-gray-600 font-bold mb-1">Lieux du cours</h3>
        <div class="mb-6">
          <UBadge color="blue" variant="outline"  i class="rounded-2xl text-lg px-2">
            <UIcon name="i-heroicons-map-pin" class="text-2xl "/>
            En distanciel
          </UBadge>
        </div>
        <h3 class="text-xl text-gray-600 font-bold mb-1">A propos du mentor</h3>
        <div class="mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?
          </p>
        </div>
        <h3 class="text-xl text-gray-600 font-bold mb-1">A propos du cours</h3>
        <div class="mb-16">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?
          </p>
        </div>

        <div class="mb-6 flex flex-col gap-6">
          <div class="flex gap-4 flex-row justify-between">
            <h3 class="text-xl text-gray-600 font-bold mb-1">Avis</h3>
            <div class="flex gap-1 items-center">
              <p class="text-md text-gray-600 ">Note moyenne</p>
              <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
              <p class="text-sm text-gray-600">5/5</p>
            </div>
          </div>
          <UCard class="p-4">
            <div class="flex gap-4 justify-between pb-4">
              <h3 class="font-bold text-xl text-gray-800">Nom et prenom</h3>
              <div class="flex gap-1">
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <p class="text-sm text-gray-600">5/5</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?</p>
          </UCard>
          <UCard class="p-4">
            <div class="flex gap-4 justify-between pb-4">
              <h3 class="font-bold text-xl text-gray-800">Nom et prenom</h3>
              <div class="flex gap-1">
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <p class="text-sm text-gray-600">5/5</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?</p>
          </UCard>
          <UCard class="p-4">
            <div class="flex gap-4 justify-between pb-4">
              <h3 class="font-bold text-xl text-gray-800">Nom et prenom</h3>
              <div class="flex gap-1">
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <UIcon name="i-heroicons-star" class="text-lg text-yellow-400"/>
                <p class="text-sm text-gray-600">5/5</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam debitis deserunt dolorum ducimus ea id iste, magnam molestiae praesentium qui quod totam unde? Accusantium aperiam mollitia obcaecati omnis sit?</p>
          </UCard>
      </div>
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
            <UButton class="rounded-3xl p-4  text-2xl  w-fit">
              <UIcon name="i-heroicons-chat-bubble-left-right-solid" class="text-2xl "/>
              Contacter
            </UButton>
          </div>
        </UCard>
      </div>
    </div>

</template>

<style scoped>

</style>