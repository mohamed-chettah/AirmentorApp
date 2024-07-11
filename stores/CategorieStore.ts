import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type {CategorieType} from "~/types/CategorieType";

export const useCategorieStore = defineStore("categorie", () => {
    const loading = ref(false);
    const listCategories = ref<CategorieType[]>([]);
    const categorie = ref<CategorieType>({
        title: "",
        description: "",
        _id: "",
    });

    async function getAllCategorie() {
        try {
            loading.value = true;
            listCategories.value = await $fetch("http://localhost:3001/api/categories", {
                method: "GET",
                credentials: "include", // This is important to include cookies
            });
        } catch (e) {
            console.log(e);
        } finally {
            // setMessage('La réservation a été mise à jour avec succès');
            loading.value = false;
        }
    }

    async function updateCategorie(categorie: CategorieType) {
        try {
            loading.value = true;
            await $fetch("http://localhost:3001/api/categories/" + categorie._id, {
                method: "PUT",
                credentials: "include", // This is important to include cookies
                body: JSON.stringify(categorie),
            });
        } catch (e) {
            console.log(e);
        }
        finally {
            loading.value = false;
        }
    }

    async function deleteCategorie(id: string) {
        try {
            loading.value = true;
            await $fetch("http://localhost:3001/api/categories/" + id, {
                method: "DELETE",
                credentials: "include", // This is important to include cookies
            });
        } catch (e) {
            console.log(e);
        } finally {
            loading.value = false;
        }
    }

    return {
        getAllCategorie,
        updateCategorie,
        deleteCategorie,
        listCategories,
        loading,
    };
})
