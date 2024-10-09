<template>

    <div class="p-8">

        <div class="mb-5 text-orange-500">
            <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        </div>

        <div class="my-5">
            <input type="text" 
            v-model="keyword"
            placeholder="Search for ingredients" 
            class="rounded border-2 border-gray-200 w-full"
            />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <router-link :to="{ name: 'byIngredient', params: { 'ingredient': (ingredient.strIngredient) }}" 
                class="block bg-white rouded p-3 mb-3 shadow hover:scale-105 transition-all" v-for="ingredient of computedIngredient" :key="ingredient.idIngredient">
                <h3 class="text-2xl font-bold mb-2">
                    {{ ingredient.strIngredient}}
                </h3>
            </router-link>
        </div>
    </div>

</template>

<script setup>
    import { computed, onMounted, ref } from 'vue'
    import axiosClient from '../axiosClient';

    const ingredients = ref([])
    const keyword = ref('')

    const computedIngredient = computed(() => {
        if(!computedIngredient) return ingredients;

        return ingredients.value.filter((item) => item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
    })

    onMounted(() => {
        axiosClient.get('list.php?i=list')
        .then(({data}) => {
            ingredients.value = data.meals
        })
    })

</script>