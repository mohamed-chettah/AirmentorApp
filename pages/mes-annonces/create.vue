<template>
  <div class="max-w-4xl mx-auto p-4">
    <UCard class="flex flex-col">
      <h3 class="font-bold w-full text-center pb-3">{{ announcementId ? 'Edit' : 'Create' }} Announcement 📝</h3>
      <UForm :schema="schema" :state="form" class="space-y-4" @submit="handleSubmit">
        <UFormGroup label="Title" name="title">
          <UInput v-model="form.title" />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
          <UInput v-model="form.description" />
        </UFormGroup>
        <UFormGroup label="Picture URL" name="picture">
          <UInput v-model="form.picture" />
        </UFormGroup>
        <UFormGroup label="Is Active" name="is_activate">
          <UCheckbox v-model="form.is_activate" />
        </UFormGroup>
        <UFormGroup label="Skills" name="skills">
          <MultiSelect v-model:selectedItems="form.skills" :options="skillsOptions" />
        </UFormGroup>
        <UButton @click="handleSubmit" type="submit" class="w-fit px-4 rounded-full bg-gray-500 hover:bg-blue-500">
          {{ announcementId ? 'Update' : 'Create' }}
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { z } from 'zod';
import { type AnnouncementType, AnnouncementSchema } from '@/types/AnnouncementType'; // Assurez-vous que ce chemin est correct
import MultiSelect from '~/components/multi-select.vue';
import type {UserType} from "~/types/UserType"; // Assurez-vous que ce chemin est correct

const form = ref<Partial<AnnouncementType>>({
  title: '',
  description: '',
  picture: '',
  is_activate: false,
  skills: [],
  review: [],
  createdBy: {} as UserType
});

const schema = AnnouncementSchema; // Associe le schéma Zod à une variable pour UForm
const router = useRouter();
const route = useRoute();
const announcementId = route.params.id as string;

const skillsOptions = ref([
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Vue.js' },
  { id: 3, name: 'Nuxt.js' },
  { id: 4, name: 'TailwindCSS' },
  { id: 5, name: 'Node.js' },
]);

const fetchAnnouncement = async (id: string) => {
  const res = await fetch(`http://localhost:3001/api/announcements/${id}`);
  const data: AnnouncementType = await res.json();
  form.value = data;
};

const handleSubmit = async () => {
  const result = schema.safeParse(form.value);
  if (!result.success) {
    alert('Validation failed');
    return;
  }

  const url = announcementId
      ? `http://localhost:3001/api/announcements/${announcementId}`
      : 'http://localhost:3001/api/announcements';
  const method = announcementId ? 'PUT' : 'POST';

  await fetch(url, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.value),
  });

  router.push('/announcements');
};

if (announcementId) {
  fetchAnnouncement(announcementId);
}
</script>

<style scoped>
/* Ajoute des styles personnalisés ici si nécessaire */
</style>
