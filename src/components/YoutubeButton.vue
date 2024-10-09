<template>
    <a :href="href" target="_blank" 
        class="px-3 py-2 rounded border bottom-2 border-red-600 
        hover:bg-red-600 transition-colors hover:text-white">
        <slot></slot>
    </a>
</template>

<script setup>
    const props = defineProps({
        href: String
    })
</script>