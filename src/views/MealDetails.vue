<template>

        <div class="max-w-[800px] mx-auto p-8">
            <h1 class="text-5xl font-bold mb-5">{{  meal.strMeal }}</h1>
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]"/>
            <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
                <div>
                    <strong class="font-bold">Category:</strong> {{  meal.strCategory }}
                </div>
                <div>
                    <strong class="font-bold">Area:</strong> {{  meal.strArea }}
                </div>
                <div>
                    <strong class="font-bold">Tags:</strong> {{  meal.strTags }}
                </div>
            </div>

            <div class="my-3">
                {{ meal.strInstructions }}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Ingredient</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(20)">
                            <li v-if="meal[`strIngredient${ind + 1}`]" :key="ind">
                               {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`]  }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(20)">
                            <li v-if="meal[`strMeasure${ind + 1}`]" :key="ind">
                               {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`]}}
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="mt-5">
                    <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
                    <a :href="meal.strSource" target="_blank" 
                        class="ms-5 px-3 py-2 rounded border bottom-2 border-purple-600 
                        hover:bg-purple-600 transition-colors hover:text-white">
                        Go To Original Source
                    </a>
                </div>
            </div>

        </div>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref({})
const route = useRoute()
onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        meal.value = data.meals[0] || {}  // if data not exits then lets assign empty object
    })
})
</script>