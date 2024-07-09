import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type { UserType } from "~/types/UserType";
import type {CategorieType} from "~/types/CategorieType";

export const useCategorieStore = defineStore("categorie", () => {
    const loading = ref(false);
    const categorie = ref<CategorieType>({
        title: "",
        description: "",
    });

    async function getAllCategorie() {
        try {
            loading.value = true;
            await $fetch("http://127.0.0.1:3001/api/categories", {
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


    return {
        getAllCategorie
    };
})
