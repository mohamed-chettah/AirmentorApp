<script setup lang="ts">
const items = [{
  key: 'categorie',
  label: 'Categories',
  icon: 'i-heroicons-clipboard-document-list-solid',
}, {
  key: 'skill',
  label: 'Skills',
  icon: 'i-heroicons-clipboard-document-list-solid',
}, {
  key: 'utilisateur',
  label: 'Utilisateurs',
  icon: 'i-heroicons-clipboard-document-list-solid',
}]
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <UIcon name="i-heroicons-adjustments-horizontal" class="text-[25px] text-primary" />
    <h1 class="text-3xl "> Administration : </h1>
  </div>


  <div class="xl:container xl:mx-auto mx-20 mt-16">
    <UTabs :items="items" class="col-span-5" >
      <template #default="{ item, index, selected }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0"  :class="{'text-black': !selected, 'text-white': selected}" />

          <span :class="{'text-black': !selected, 'text-white': selected}" class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        </div>
      </template>
      <template #item="{ item }" >
        <div v-if="item.key === 'categorie'">
          ff
        </div>
        <div v-else-if="item.key === 'skill'">
          gfbd
        </div>
        <div v-else-if="item.key === 'utilisateur'">

        </div>
      </template>
    </UTabs>
  </div>
</template>
