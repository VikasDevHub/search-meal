<template>
    
    <div class="p-8 pb-0">

        <div class="mb-5 text-orange-500">
            <h1 class="text-4xl font-bold mb-4">Search Meal By Name</h1>
        </div>

        <input type="text" 
            v-model="keyword"
            placeholder="Search for meals" 
            class="rounded border-2 border-gray-200 w-full"
            @change="searchMeals"
        />
    </div>

    <Meals :meals="meals"/>
    
</template> 

<script setup>
    import { computed, onMounted, ref } from 'vue'
    import store from '../store'
    import { useRoute } from 'vue-router'
    import Meals from '../components/Meals.vue';
    
    const keyword = ref('')
    const route = useRoute()
    const meals = computed(() => store.state.searchedMeals)

    const searchMeals = () => {
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        keyword.value = route.params.name
        if(keyword.value) {
            searchMeals()
        }
    })


</script>