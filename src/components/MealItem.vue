<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover" />
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold text-2xl">{{ meal.strMeal }}</h3>
            <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda temporibus quam
                accusantium neque odio, beatae harum ipsam asperiores voluptatum veritatis!</p>
            <div class="py-3">
                <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
            </div>
        </div>
    </div>

</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';
const { meal } = defineProps({
    required: true,
    meal: Object
})

</script>
