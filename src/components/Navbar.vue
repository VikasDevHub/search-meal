<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
          <router-link :to="{ name: 'home'}" class="inline-flex items-center font-bold text-2xl text-orange-500 px-5">Home</router-link>
          
          <div class="flex gap-1">
              <router-link :to="{ name: 'byName' }" class="px-2 hover:bg-orange-500 inline-flex items-center transition-colors">Search Meals</router-link>
              <router-link :to="{ name: 'byLetter'}" class="px-2 hover:bg-orange-500 inline-flex items-center transition-colors">Search Meals By Letter</router-link>
              <router-link :to="{ name: 'ingredients' }" class="px-2 hover:bg-orange-500 inline-flex items-center transition-colors">Search Meals By Ingredient</router-link>
          </div>
      </header>
</template>