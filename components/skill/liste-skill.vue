<script setup lang="ts">
import {useCategorieStore} from "~/stores/CategorieStore";
import {useSkillStore} from "~/stores/SkillStore";
import type {SkillType} from "~/types/SkillType";

const categorieStore = useCategorieStore()
categorieStore.getAllCategorie()


const skillStore = useSkillStore()

skillStore.getAllSkill()

const columns = [{
  key: 'title',
  label: 'Skill',
  sortable: true
},
  {
    key: 'categories.title',
    label: 'Catégorie',
    sortable: true
  },
  {
    key: 'actions',
    label: 'Actions'
  }]

const isOpen = ref(false)

function deleteSkill(row : SkillType) {
  const confirmDelete = confirm(`Voulez-vous vraiment supprimer la Compétence "${row.title}" ?`);

  if (confirmDelete) {
    skillStore.deleteSkill(row._id)
        .then(() => {
          alert('Compétence supprimée avec succès');
          skillStore.getAllSkill()
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression de la Compétence:', error);
          alert('Erreur lors de la suppression de la catégorie');
        });
  }
}

const categories = ref({})

function openModal(row : SkillType) {
  idSkill.value = row._id
  nameSkill.value = row.title
  if(row.categories){
    selectedCategorie.value = row.categories._id
  }
  else {
    selectedCategorie.value = ''
  }

  categories.value = categorieStore.listCategories.map((categorie) => {
    return {label: categorie.title, value: categorie._id}
  })
  isOpen.value = true
}

function submitForm() {
  if (nameSkill.value === '') {
    alert('Le nom de la skill est obligatoire');
    return;
  }

  const skill = <SkillType>{
    _id: idSkill.value,
    title: nameSkill.value,
    categories: selectedCategorie.value
  }

  skillStore.updateSkill(skill)
      .then(() => {
        skillStore.getAllSkill()
        isOpen.value = false
      })
      .catch((error) => {
        console.error('Erreur lors de la modification de la compétence:', error);
        alert('Erreur lors de la modification de la compétence');
      });
}
const idSkill = ref('')
const nameSkill = ref('')
const selectedCategorie = ref('')
</script>-

<template>
  <UTable :columns="columns" :rows="skillStore.listSkills" :loading="skillStore.loading">
    <template #actions-data="{ row }">
      <div class="flex items-center space-x-2">
        <UButton @click="openModal(row)" icon="i-heroicons-pencil-square" class="bg-primary" />
        <UButton @click="deleteSkill(row)" icon="i-heroicons-trash-16-solid" class="bg-red-700 hover:bg-red-700/80"/>
      </div>
    </template>
  </UTable>

  <UModal v-model="isOpen">

    <form @submit.prevent="submitForm">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white ">
              Modification Compétence
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"  @click="isOpen = false" />
          </div>
        </template>


        <div class="flex flex-col justify-center gap-6 px-8 ">

          <UFormGroup label="Compétence" name="nom" >
            <UInput type="text" v-model="nameSkill" required />
          </UFormGroup>

          <UFormGroup label="Catégories" name="email">
            <USelect class="w-64" placeholder="Catégorie" v-model="selectedCategorie" :options="categories"/>
          </UFormGroup>

        </div>
        <template #footer>

          <div class="flex gap-3  py-4 justify-center">
            <UButton @click="isOpen = false" class="bg-red-500">
              Annuler
            </UButton>
            <UButton type="submit" :loading="skillStore.loading" >
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