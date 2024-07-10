import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type { UserType } from "~/types/UserType";
import type {CategorieType} from "~/types/CategorieType";
import type {SkillType} from "~/types/SkillType";

export const useSkillStore = defineStore("skill", () => {
    const loading = ref(false);
    const listSkills = ref<SkillType[]>([]);
    const skill = ref<SkillType>({
        title: "",
        categorie: "",
        _id: "",
    });

    async function getAllSkill() {
        try {
            loading.value = true;
            listSkills.value = await $fetch("http://localhost:3001/api/skills", {
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

    return {
        getAllSkill,
        listSkills,
        loading,
    };
})
