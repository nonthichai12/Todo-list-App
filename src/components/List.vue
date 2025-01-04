<script setup>

    defineProps({
        product: String
    })

    defineEmits(['deletetodo'])
</script>

<template>
    <template v-for="(item, index) in product" :key="index" class="h-1/3 text-wrap ">
        <li class="list group break-all flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:text-center">
            <div class="w-7/12">{{ item.name }}</div>
            <button class="delete group-hover:bg-yellow-green group-hover:text-white max-sm:mt-4 max-sm:w-2/3 max-sm:mx-auto" @click="$emit('deletetodo', index)">Delete</button>
        </li>
    </template>
</template>
