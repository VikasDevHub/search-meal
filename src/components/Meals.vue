<template>
    <div class="p-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals.length" class="text-5xl mt-5 text-center">
        There are no Meals
    </div>
</template>

<script setup>
import MealItem from './MealItem.vue';
const { meals } = defineProps({
    meals: {
        required: true,
        type: Array
    }
})
</script>
