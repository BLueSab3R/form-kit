<template>
    <div
      class="z-50 fixed flex flex-col items-center justify-center max-h-screen inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div class="bg-white flex flex-col text-black p-20 rounded-lg relative">
        <NuxtLink :to="`/`">
          <button
            @click="closeData"
            class="absolute top-2 right-2 rounded-md border-red-400 bg-red-400 border-solid text-xl hover:bg-red-200 border-2"
          >
            Go back
          </button>
        </NuxtLink>
  
        <ul class="text-xl">
          <li>
            <h4 class="mr-2">Username: {{ post.username }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Name: {{ post.name }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Email: {{ post.email }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Website: {{ post.website }}</h4>
          </li>
          <li>
            <h4 class="mr-2">City: {{ post.city }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Phone: {{ post.phone }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Street: {{ post.street }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Suite: {{ post.suite }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Zipcode: {{ post.zipcode }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Company name: {{ post.company_name }}</h4>
          </li>
          <li>
            <h4 class="mr-2">Bs: {{ post.bs }}</h4>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const client = useSupabaseClient();
  const isShowed = ref(true);
  const post = ref(null);
  const { data } = await client
    .from("posts")
    .select()
    .eq("id", +route.params.id)
    .single();
  console.log(data);
  post.value = data;
  
  const closeData = () => {
    isShowed.value = false;
  };
  </script>