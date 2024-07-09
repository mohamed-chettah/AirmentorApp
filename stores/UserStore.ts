import type {UserType} from "~/types/UserType";

export const useUserStore = defineStore('user', () => {
    const isError = ref(false);
    const user = ref<UserType>({
        email: '',
        role: ['ROLE_USER']
    });
    const waitList = ref<UserType[]>([]);
    const router = useRouter()
    const loading = ref(false);
    const message = ref('');

    const userStorage = localStorage.getItem('user');
    if (userStorage) {
        user.value = JSON.parse(userStorage);
        console.log(user.value);
    }

    async function updateReservation(reservationId: number, reservation: UserType){
        try {
            loading.value = true;
            await $fetch('http://127.0.0.1:3/api/reservations/' + reservationId, {
                headers: {
                    'Content-Type': 'application/merge-patch+json', // Corrected Content-Type
                    'Accept': 'application/ld+json'
                },
                method: 'PATCH',
                body: reservation
            });
        } catch (e) {
            console.log(e);
        } finally {
            setMessage('La réservation a été mise à jour avec succès');
            loading.value = false;
        }

        setTimeout(() => {
            setMessage('')
        }, 1500)

    }

    async function myProfile(userId: number) {
        try {
            loading.value = true;
            await $fetch('http://127.0.0.1:3001/api/users/' + userId, {
                headers: {
                    'Content-Type': 'application/merge-patch+json', // Corrected Content-Type
                    'Accept': 'application/ld+json'
                },
                method: 'GET',
            });
        } catch (e) {
            console.log(e);
        } finally {
            // setMessage('La réservation a été mise à jour avec succès');
            loading.value = false;
        }

        setTimeout(() => {
            setMessage('')
        }, 1500)

    }


    function setMessage(msg: string) {
        message.value = msg;
    }

    return {user, isError, waitList,loading,message, updateReservation,setMessage, myProfile};
});
