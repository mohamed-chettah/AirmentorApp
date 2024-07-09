import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type { UserType } from "~/types/UserType";
import type {AnnouncementType} from "~/types/AnnouncementType";
import {fetchWithoutBody} from "~/utils/utils";

export const useUserStore = defineStore("user", () => {
  const loading = ref(false);
  const user = ref<UserType>({
    name: "",
    email: "",
    phoneNumber: "",
    place: "",
    password: "",
    profile_picture: "",
    grade: 0,
    credits: 0,
    description: "",
    languages: [],
    googleId: "",
  });

  const isAuthenticated = ref(false);

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/check", {
        method: "GET",
        credentials: "include", // This is important to include cookies
      });

      if (response.ok) {
        const data = await response.json();
        isAuthenticated.value = true;
        updateUser(data.user);
        saveUserToLocalStorage(data.user);
      } else {
        isAuthenticated.value = false;
        clearUser();
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      isAuthenticated.value = false;
      clearUser();
    }
  };

  const updateUser = (userData: Partial<UserType>) => {
    user.value = { ...user.value, ...userData };
  };

  const saveUserToLocalStorage = (userData: Partial<UserType>) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const clearUser = () => {
    user.value = {
      name: "",
      email: "",
      phoneNumber: "",
      place: "",
      password: "",
      profile_picture: "",
      grade: 0,
      credits: 0,
      description: "",
      languages: [],
      googleId: "",
    };
    localStorage.removeItem("user");
  };

  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    }
  };

  async function myProfile(userId: number) {
    try {
      loading.value = true;
      await $fetch("http://127.0.0.1:3001/api/users/" + userId, {
        headers: {
          "Content-Type": "application/merge-patch+json", // Corrected Content-Type
          "Accept": "application/ld+json",
        },
        method: "GET",
      });
    } catch (e) {
      console.log(e);
    } finally {
      // setMessage('La réservation a été mise à jour avec succès');
      loading.value = false;
    }
  }

  onMounted(() => {
    loadUserFromLocalStorage();
    checkAuth();
  });

  return {
    myProfile,
    user,
    isAuthenticated,
    checkAuth,
    updateUser,
    clearUser,
  };
});
