<template>
    <div class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow mb-2 mt-2">
      <NuxtLink :to="`/post/${user.id}`" key="`/${user.id}`">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="text-xl">username: {{ user.username }}</div>
            <div class="text-xm">name: {{ user.name }}</div>
            <div class="text-xm">email: {{ user.email }}</div>
            <div class="text-xm">website:{{ user.website }}</div>
            <div class="text-xm">city: {{ user.city }}</div>
            <div class="text-xm">phone: {{ user.phone }}</div>
          </div>
        </div>
      </NuxtLink>
      <div>
        <div class="mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1 hover:bg-sky-400">
            <button @click="editHandle(user)"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              Edit
            </button>
          </div>
          <div class="-ml-px flex w-0 flex-1 hover:bg-red-400">
            <button @click="deleteHandle(user)"
              class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { user } = defineProps(['user']);
    const emit = defineEmits(['openEdit', 'openDelete']);
  const editHandle = (user) => {
    emit('openEdit', user);
  };
  const deleteHandle = (user) => {
    emit('openDelete', user);
  };
  </script>