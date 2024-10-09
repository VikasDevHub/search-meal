<template>

<div class="p-8">
    <Meals :meals="meals"/>
</div>
    
</template>

<script setup>
    import { onMounted, computed } from 'vue'
    import store from '../store';
    import { useRoute } from 'vue-router';
    import Meals from '../components/Meals.vue';

    const meals = computed(() => store.state.mealsByIngredient)
    const route = useRoute()

    onMounted(() => {
        store.dispatch('searchedMealsByIngredient', route.params.ingredient)    
    })

</script>