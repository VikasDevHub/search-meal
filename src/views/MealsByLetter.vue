<template>

    <div class="my-5 text-orange-500 px-8">
            <h1 class="text-4xl font-bold mb-4">Meals By Letter</h1>
        
    </div>

    <div class="flex flex-wrap justify-center mb-5">
        <router-link :to="{ name: 'byLetter', params:{letter} }" 
            v-for="letter of letters" 
            :key="letter" 
            class="text-2xl px-2 text-gray-500 hover:text-4xl hover:text-orange-500">
            {{  letter }}
        </router-link>
    </div>

    <Meals :meals="meals"/>

</template>

<script setup>
    import { computed, onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router';
    import store from '../store';
    import Meals from '../components/Meals.vue';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const route = useRoute()
    const meals = computed(() => store.state.mealsByLetter)

    // need to see for route change if changed need to dispatch
    watch(route, () => {
        store.dispatch('searchMealsByLetter', route.params.letter)
    })


    onMounted(() => {
        store.dispatch('searchMealsByLetter', route.params.letter)
    })



</script>