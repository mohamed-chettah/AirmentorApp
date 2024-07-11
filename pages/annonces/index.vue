<script setup lang="ts">
import type { AnnouncementType } from "~/types/AnnouncementType";
import {useCategorieStore} from "~/stores/CategorieStore";
import {useSkillStore} from "~/stores/SkillStore";
import {useAnnouncementStore} from "~/stores/AnnouncementStore";

const notes = [
  {label: 'Toutes', value: 'all'},
  {label: '1 étoile', value: '1'},
  {label: '2 étoiles', value: '2'},
  {label: '3 étoiles', value: '3'},
  {label: '4 étoiles', value: '4'},
  {label: '5 étoiles', value: '5'}
]

useCategorieStore().getAllCategorie()



const categories = useCategorieStore().listCategories.map((categorie) => {
  return {label: categorie.title, value: categorie._id}
})


categories.unshift({label: 'Toutes', value: 'all'})

const selectedCategorie = ref('all')

useSkillStore().getAllSkill()

const skills = useSkillStore().listSkills.map((skill) => {
  return {label: skill.title, value: skill._id}
})

const route = useRoute()

if(route.query.categorie) {
  useAnnouncementStore().getAllAnnouncementByCateg(route.query.categorie as string)
  categories.forEach((categorie) => {
    if(categorie.value === route.query.categorie) {
      selectedCategorie.value = route.query.categorie
    }
  })
  console.log(selectedCategorie.value)
} else {
  useAnnouncementStore().getAllAnnouncement()
}

function getAnnouncementByCateg(categorie: string) {
  if(categorie === 'all') return useAnnouncementStore().getAllAnnouncement()
  useAnnouncementStore().getAllAnnouncementByCateg(categorie)
}

</script>

<template>
  <!--  page qui presente les differentes annnonces -->
  <!--  un titre-->
  <!--  des filtres par note / par categorie / par skills-->
  <!--  une liste d'annonces (grid 3 col) sous forme de carde avec une image, un titre, une description, une note, un nombre de credit et un bouton pour voir plus de detail-->

  <div class="flex justify-center items-center mt-10 gap-2">
    <UIcon name="i-heroicons-squares-2x2-20-solid" class="text-[25px] text-primary" />
    <h1 class="text-3xl text-primary "> Listes des Annonces : </h1>
  </div>


  <div class=" flex flex-col gap-6 container mx-auto">
    <div class="flex gap-4">
      <USelect class="w-64" placeholder="Catégorie" v-model="selectedCategorie" @update:modelValue="getAnnouncementByCateg" :options="categories"/>
<!--      <USelect class="w-48" placeholder="Skills" :options="skills"/>-->
<!--      <USelect class="w-48" placeholder="Note" :options="notes"/>-->
    </div>

    <div v-if="useAnnouncementStore().listAnnouncements.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <NuxtLink :to="'/annonces/' + annonce._id" class="p-0" v-for="annonce in useAnnouncementStore().listAnnouncements" :key="annonce._id">
        <UCard>
          <div class="flex flex-col gap-4 p-4">
            <NuxtImg src="/img/main-picture.png" class="w-full h-48 object-cover rounded-md"/>
            <h3 class="font-bold text-xl text-gray-800">{{ annonce.title }}</h3>
            <p class="text-sm text-gray-600">{{ annonce.description }}</p>
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

    <div v-else>
      <p>Aucune Annonces</p>
    </div>
  </div>
</template>