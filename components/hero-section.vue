<script setup lang="ts">
const stats = [
  { id: 1, name: 'Sessions de mentorat par mois', value: '5000+' },
  { id: 2, name: 'Mentors disponibles', value: '1200' },
  { id: 3, name: 'Taux de satisfaction', value: '98%' },
]

</script>

<template>
  <div class="bg-[#FAEBD7FF] ">

  <div class="mx-32 py-10 flex justify-center flex-col xl:gap-16 gap-10 ">

    <div class="flex flex-col gap-8">

      <div class="opacity-0">
        <UBadge class="title dark:bg-gold-200/50 bg-gold-200/50 xl:text-sm text-[10px] text-white dark:text-white rounded-xl" size="lg" variant="solid">Design - Développement Web - SEO </UBadge>
      </div>

      <div class="xl:text-left text-center flex  xl:flex-row flex-col justify-center xl:gap-40 gap-20">
        <div>
          <h1 class="lg:text-4xl text-3xl font-bold text-primary leading-relaxed">
            Des mentors experts pour <br> résoudre tous vos problèmes.
          </h1>

          <div class="flex flex-col font-bold gap-4 mt-14">
            <p class="text-xl">🔥 Des mentors partout en France </p>
            <p  class="text-xl">🎓 Pour toutes les matières de la tech </p>
            <p  class="text-xl"> 💪 Pour tous les niveaux et budgets </p>
          </div>

          <div class="mt-20">
            <div class="max-w-4xl">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
                  <dd class="order-first font-semibold tracking-tight text-gray-900 text-2xl">{{ stat.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <NuxtImg src="/img/main-picture.png" class="xl:w-[50%] xl:mx-0 mx-auto rounded-2xl" />
      </div>

    </div>

  </div>
  </div>
</template>

<style scoped>

</style>