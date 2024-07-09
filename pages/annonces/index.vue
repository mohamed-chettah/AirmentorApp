<script setup lang="ts">

const notes = [
  {label: 'Toutes', value: 'all'},
  {label: '1 étoile', value: '1'},
  {label: '2 étoiles', value: '2'},
  {label: '3 étoiles', value: '3'},
  {label: '4 étoiles', value: '4'},
  {label: '5 étoiles', value: '5'}
]

const categories = [
  {label: 'Toutes', value: 'all'},
  {label: 'Design', value: 'design'},
  {label: 'Développement Web', value: 'web'},
  {label: 'SEO', value: 'seo'}
]

const skills = [
  {label: 'Toutes', value: 'all'},
  {label: 'HTML', value: 'html'},
  {label: 'CSS', value: 'css'},
  {label: 'JavaScript', value: 'js'},
  {label: 'React', value: 'react'},
  {label: 'Vue', value: 'vue'},
  {label: 'Node', value: 'node'},
  {label: 'SEO', value: 'seo'}
]

</script>

<template>
  <!--  page qui presente les differentes annnonces -->
  <!--  un titre-->
  <!--  des filtres par note / par categorie / par skills-->
  <!--  une liste d'annonces (grid 3 col) sous forme de carde avec une image, un titre, une description, une note, un nombre de credit et un bouton pour voir plus de detail-->

  <div class=" flex flex-col gap-6 container mx-auto">
    <h1 class="text-4xl font-bold text-primary">Annonces</h1>
    <div class="flex gap-4">
      <USelect class="w-48" label="Note" :options="notes"/>
      <USelect class="w-48" label="Catégorie" :options="categories"/>
      <USelect class="w-48" label="Skills" :options="skills"/>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <NuxtLink to="/annonces/1" class="p-0">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/annonces/1">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/annonces/1">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>

      <NuxtLink to="/annonces/1">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/annonces/1">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/annonces/1">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">Titre de l'annonce</h3>
            <p class="text-sm text-gray-600">Description de l'annonce</p>
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
            <p class="text-sm text-gray-600 font-medium">10 crédits</p>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>