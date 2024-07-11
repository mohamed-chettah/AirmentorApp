<script setup lang="ts">
import {useCategorieStore} from "~/stores/CategorieStore";
import type {CategorieType} from "~/types/CategorieType";

useUserStore().getAllUsers()

const columns = [{
  key: 'name',
  label: 'Utilisateur',
  sortable: true
},
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'actions',
    label: 'Actions'
  }]

const isOpen = ref(false)

function deleteCategorie(row : CategorieType) {


  const confirmDelete = confirm(`Voulez-vous vraiment supprimer la catégorie "${row.title}" ?`);

  if (confirmDelete) {
    useCategorieStore().deleteCategorie(row._id)
        .then(() => {
          alert('Catégorie supprimée avec succès');
          useCategorieStore().getAllCategorie()
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression de la catégorie:', error);
          alert('Erreur lors de la suppression de la catégorie');
        });
  }
}

function openModal(row : CategorieType) {
  idCategorie.value = row._id
  nameCategorie.value = row.title
  descriptionCategorie.value = row.description
  isOpen.value = true
}

function submitForm() {
  if (nameCategorie.value === '') {
    alert('Le nom de la catégorie est obligatoire');
    return;
  }

  const categorie = <CategorieType>{
    _id: idCategorie.value,
    title: nameCategorie.value,
    description: descriptionCategorie.value
  }

  useCategorieStore().updateCategorie(categorie)
      .then(() => {
        alert('Catégorie modifiée avec succès');
        useCategorieStore().getAllCategorie()
        isOpen.value = false
      })
      .catch((error) => {
        console.error('Erreur lors de la modification de la catégorie:', error);
        alert('Erreur lors de la modification de la catégorie');
      });
}
const idCategorie = ref('')
const nameCategorie = ref('')
const descriptionCategorie = ref('')
</script>-

<template>
  <UTable :columns="columns" :rows="useUserStore().listUsers" :loading="useCategorieStore().loading">
    <template #actions-data="{ row }">
      <div class="flex items-center space-x-2">
        <UButton @click="deleteCategorie(row)" icon="i-heroicons-trash-16-solid" class="bg-red-700 hover:bg-red-700/80"/>
      </div>
    </template>
  </UTable>

  <UModal v-model="isOpen">

    <form @submit.prevent="submitForm">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white ">
              Modification Catégorie
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"  @click="isOpen = false" />
          </div>
        </template>

        <div class="flex flex-col justify-center gap-6 px-8 ">

          <UFormGroup label="Catégorie" name="nom" >
            <UInput type="text" v-model="nameCategorie" required />
          </UFormGroup>

          <UFormGroup label="Description" name="email">
            <UTextarea class="mt-2" placeholder="Description catégorie..." v-model="descriptionCategorie"/>
          </UFormGroup>

        </div>
        <template #footer>

          <div class="flex gap-3  py-4 justify-center">
            <UButton @click="isOpen = false" class="bg-red-500">
              Annuler
            </UButton>
            <UButton type="submit" :loading="useCategorieStore().loading" >
              Enregistrer
            </UButton>
          </div>

        </template>
      </UCard>
    </form>
  </UModal>

</template>

<style scoped>

</style>