<script setup>
import { ref } from 'vue';
import List from '../components/List.vue';

const product = ref([]);
const todo = ref('')

function addProduct(todo) {
  product.value.push({
    id: +1,
    name: todo
  })
}

function deletetodo(id) {
  product.value.splice(id, 1)
}
</script>


<template>
  <template class="flex justify-center p-5 h-screen max-lg:flex-col w-screen">
    <template class="flex flex-col w-2/3 items-center mr-5 max-lg:h-5/6 max-lg:w-full">
      <h1 class="text-7xl font-dosis text-yellow-green">List To Do</h1>
      <label class="relative block w-2/3 group max-sm:w-10/12">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray group-hover:text-yellow-green">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <input v-model="todo" type="text" class="input" placeholder="Add New Task">
      </label>
      <div class="w-full max-h-1/2 overflow-y-scroll no-scrollbar">
        <List :product="product" @deletetodo="deletetodo"/>
      </div>
    </template>

    <template class="flex justify-center w-1/3 items-end bg-parchment rounded-lg max-lg:w-full max-lg:h-1/6 max-lg:bg-opacity-0">
      <button class="btn my-20 flex items-center group max-lg:mb-12 max-lg:my-0" @click="addProduct(todo)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 m-4 group-hover:animate-zoom">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span class="flex w-2/3 justify-center">
          Add
        </span>
      </button>
    </template>
  </template>
</template>
