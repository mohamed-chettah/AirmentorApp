<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '~/stores/UserStore';
import {useAnnouncementStore} from "~/stores/AnnouncementStore";

const userStore = useUserStore();
const route = useRoute();
const announcementId = route.params.id;

const announcementStore = useAnnouncementStore()

onMounted(async () => {
  await announcementStore.getAnnouncementById(announcementId)
  console.log(announcementStore.announcement)
});

const conversations = ref<Conversation[]>([]);
const selectedConversation = ref<Conversation | null>(null);

interface Conversation {
  _id: string;
  idUser: string[];
  idCreator: string[];
  idAnnouncement: string[];
  messages: Message[];
}

interface Message {
  _id: string;
  user: { _id: string, name: string };
  content: string;
  timestamp: string;
}


const getConversations = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/conversations/${announcementId}`, {
      method: "GET",
      credentials: "include"
    });
    conversations.value = await response.json();
  } catch (error) {
    console.error('Error fetching conversations:', error);
  }
};

const selectConversation = (conversation: Conversation) => {
  selectedConversation.value = conversation;
};

onMounted(() => {
  getConversations();
});
</script>

<template>
  <div class="container mx-auto py-4">

    <div v-if="useAnnouncementStore().announcement.announcement">
      <h1  class="text-2xl font-semibold mb-4">chat de l'annonce: {{ useAnnouncementStore().announcement.announcement.title }}</h1>
      <NuxtImg :src="useAnnouncementStore().announcement.announcement.picture" />
    </div>

    <div class="flex">
      <!-- Conversations List -->
      <div class="w-1/3 p-4 border-r">
        <h2 class="text-xl font-semibold mb-2">Conversations</h2>
        <ul>
          <li
              v-for="conversation in conversations"
              :key="conversation._id"
              @click="selectConversation(conversation)"
              class="cursor-pointer p-2 mb-2 border rounded hover:bg-gray-100 flex items-center gap-2"
          >
            <NuxtImg :src="conversation.idUser[0].profile_picture" class="w-12 h-12 object-cover rounded-full"/>
            {{ conversation.idUser[0].name }}


          </li>
        </ul>
      </div>

      <!-- Selected Conversation -->
      <div class="w-2/3 p-4">
        <div v-if="selectedConversation">
          <h2 class="text-xl font-semibold mb-2">Messages</h2>
          <div class="messages overflow-y-auto h-64 mb-4">
            <div v-for="message in selectedConversation.messages" :key="message._id" class="mb-2">
              <div :class="{'bg-blue-100': message.user._id === userStore.user._id, 'bg-green-100': message.user._id !== userStore.user._id}" class="p-2 rounded-lg">
                <strong>{{ message.user.name }}:</strong> {{ message.content }}
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Select a conversation to view messages.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.messages {
  max-height: 256px;
  scroll-behavior: smooth;
  overflow-y: auto;
}
</style>
