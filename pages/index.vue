<template>
  <div class="flex flex-col justify-center items-center">
    <svg
      @click="openAdd"
      class="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
      ></path>
    </svg>
    <div v-infinite-scroll="[onLoadMore, { 'distance' : 200 }]">
      <ul>
        <li v-for="user in posts" :key="user.id">
          <Post
            :user="user"
            @openEdit="openEdit"
            @openDelete="openDelete"
            @closeDelete="closeDelete"
          />
        </li>
      </ul>
    </div>
  </div>
  <EditPost
    v-if="isOpen"
    @updatePosts="updatePosts"
    @closeEdit="closeEdit"
    :selectedPost="selectedPost"
  />
  <Delete
    v-if="isOpenDelete"
    @updatePosts="updatePosts"
    @closeDelete="closeDelete"
    :selectedPost="selectedPost"
  />
  <AddPost @updatePosts="updatePosts" @closeAdd="closeAdd" v-if="isOpenAdd" />
</template>

<script setup>
import { vInfiniteScroll } from '@vueuse/components'
const client = useSupabaseClient();
const isOpen = ref(false);
const isOpenDelete = ref(false);
const isOpenAdd = ref(false);
const selectedPost = ref(null);
const posts = ref([]);
const { data } = await client.from("posts").select().range(1, 3);
posts.value = data;
const updatePosts = async () => {
  const { data } = await client.from("posts").select();
  posts.value = data;
};
const onLoadMore = async () => {
  console.log('infinite scroll trigger')
  const { data, error } = await client
    .from("posts")
    .select()
    .range(posts.value.length, posts.value.length + 3);
  if (error) {
    console.error("Error fetching posts:", error);
    return;
  }
  posts.value = [...posts.value, ...data];
};
const openEdit = async (user) => {
  selectedPost.value = user;
  isOpen.value = true;
};
const openDelete = async (user) => {
  selectedPost.value = user;
  isOpenDelete.value = true;
};
const closeEdit = () => {
  isOpen.value = false;
};
const closeDelete = () => {
  isOpenDelete.value = false;
};
const closeAdd = () => {
  isOpenAdd.value = false;
};
const openAdd = () => {
  isOpenAdd.value = true;
};
</script>



<!-- <script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const data = ref([1])

useInfiniteScroll(
  el,
  () => {
    const length = data.value.length + 1
    data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
  },
  { distance: 10 },
)
</script>

<template>
  <div ref="el" class="flex flex-col gap-2 p-4 w-300px h-300px m-auto overflow-y-scroll bg-gray-500/5 rounded">
    <div v-for="item in data" :key="item" class="h-15 bg-gray-500/5 rounded p-3">
      {{ item }}
    </div>
  </div>
</template> -->