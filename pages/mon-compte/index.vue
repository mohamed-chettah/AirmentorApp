<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {z} from 'zod'
import type {FormSubmitEvent} from '#ui/types'

const schema = z.object({
  last_name: z.string().min(2, 'Must be at least 2 characters'),
  first_name: z.string().min(2, 'Must be at least 2 characters'),
  age: z.number().int().min(12, 'Must be at least 12 years old'),
  phone: z.string().min(10, 'Must be at least 10 characters'),
  location: z.string().min(2, 'Must be at least 2 characters'),
  description: z.string().min(10, 'Must be at least 10 characters').max(350, 'Must be at most 350 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  last_name: 'Toto',
  first_name: 'Tata',
  age: 20,
  phone: '07 12 34 56 78',
  location: '9 rue de la paix, 75000 Paris',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
    <section class="grid grid-cols-1 gap-4 md:grid-cols-3 container mx-auto">
      <!--      Colonne 1 -->
      <div class="flex flex-col w-full gap-4">
        <!--    Photo de profile -->
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Photo de profil 😊</h3>
          <NuxtImg
              src="https://via.placeholder.com/200"
              alt="Profile picture"
              class="rounded-[15%]  w-60 h-60"
          />
          <div class="flex md:flex-row flex-col justify-center items-center w-full pt-3 gap-6 ">
            <UIcon name="i-heroicons-trash" class="scale-125 text-red-600 cursor-pointer hover:text-red-800"/>
            <UButton class="w-fit px-4 rounded-full ">Changer</UButton>
          </div>
        </UCard>
        <!--    Suppression du compte-->
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Suppression du compte 🗑️</h3>
          <p class="text-center">Vous êtes sur le point de supprimer votre compte. Cette action est irréversible.</p>
          <div class="flex md:flex-row flex-col justify-center items-center w-full pt-3 gap-6 ">
            <UButton class="w-fit px-4 rounded-full bg-gray-500 hover:bg-red-600 ">Supprimer</UButton>
          </div>
        </UCard>
      </div>
      <!--      Colonne 2 -->

      <div class="flex flex-col w-full gap-4">
        <!--        Information Générale 🤷‍  Forrmualaire️-->

        <UCard class="w-full flex flex-col items-center">
          <h3 class="font-bold w-full text-center pb-3 ">Informations générales 📝</h3>
          <UForm :schema="schema" :state="state" class="space-y-4 w-96 " @submit="onSubmit">
            <UFormGroup label="Name" name="name">
              <UInput v-model="state.first_name" size="xl"/>
            </UFormGroup>
            <UFormGroup label="Last Name" name="last_name">
              <UInput v-model="state.last_name" size="xl"/>
            </UFormGroup>
            <UFormGroup label="Age" name="age">
              <UInput type="number" v-model="state.age" size="xl"/>
            </UFormGroup>
            <UFormGroup label="Phone" name="phone">
              <UInput v-model="state.phone" size="xl"/>
            </UFormGroup>
            <UFormGroup label="Loation" name="location">
              <UInput v-model="state.location" size="xl"/>
            </UFormGroup>
            <UFormGroup label="Description" name="description">
              <UTextarea v-model="state.description" resize size="xl"/>
            </UFormGroup>

            <UButton type="submit" class="w-fit px-4 rounded-full bg-gray-500 hover:bg-blue-500 ">Modifier</UButton>

          </UForm>
        </UCard>
      </div>
      <!--      Colonne 3 Map note en etoile et nombre de credit restant -->

      <div class="flex flex-col w-full gap-4">
        <UCard class="w-full flex flex-col items-center">
          <h3 class="font-bold w-full text-center pb-3 ">Note et Avis 🌟</h3>
          <div class="flex flex-col items-center gap-4 ">
            <div class="flex gap-x-2 ">
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
              <UIcon name="i-heroicons-star" class="text-4xl text-yellow-400"/>
            </div>
            <p>Vous avez une note de <span class="font-bold">5/5</span></p>
          </div>
        </UCard>
        <UCard class="w-full flex flex-col items-center ">
          <h3 class="font-bold w-full text-center pb-3 ">Crédit restant(s) 💰</h3>
          <p class="text-center">Vous avez <span class="font-bold">10</span> crédits restants</p>
        </UCard>
      </div>
    </section>
</template>
