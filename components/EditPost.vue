<template>
    <div
      @click="handleBackgroundClick"
      class="fixed flex flex-col items-center justify-center max-h-screen inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div class="bg-white flex flex-col text-black p-20 rounded-lg relative">
        <button
          @click="$emit('closeEdit')"
          class="absolute top-2 right-2 rounded-md border-red-400 bg-red-400 border-solid text-xl hover:bg-red-200 border-2"
        >
          Close
        </button>
  
        <ul class="text-xl">
          <li class="">
            <label class="mr-2" for="selectedUsername">Username:</label>
            <input
              id="selectedUsername"
              type="text"
              v-model="formData.username"
              placeholder="new username"
            />
          </li>
          <li>
            <label class="mr-2" for="selectedName">Name:</label>
            <input
              id="selectedName"
              type="text"
              v-model="formData.name"
              placeholder="new name"
            />
          </li>
          <li>
            <label class="mr-2" for="selectedEmail">Email:</label>
            <input
              id="selectedEmail"
              type="text"
              v-model="formData.email"
              placeholder="new email"
            />
          </li>
          <li>
            <label class="mr-2" for="selectedWebsite">Website:</label>
            <input
              id="selectedWebsite"
              type="text"
              v-model="formData.website"
              placeholder="new website"
            />
          </li>
          <li>
            <label class="mr-2" for="selectedCity">City:</label>
            <input
              id="selectedCity"
              type="text"
              v-model="formData.city"
              placeholder="new city"
            />
          </li>
          <li>
            <label class="mr-2" for="selectedPhone">Phone:</label>
            <input
              id="selectedPhone"
              type="text"
              v-model="formData.phone"
              placeholder="new phone"
            />
          </li>
        </ul>
        <button class="flex mt-20 justify-center" @click="updatePost">Confirm</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const client = useSupabaseClient();
  const emit = defineEmits(["closeEdit", "updatePosts"]);
  const props = defineProps({
    selectedPost: {
      type: Object,
      default: null,
      required: true,
    },
  });
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      emit("closeEdit");
    }
  };
  
  const formData = ref({
    username: props.selectedPost.username,
    name: props.selectedPost.name,
    email: props.selectedPost.email,
    website: props.selectedPost.website,
    city: props.selectedPost.city,
    phone: props.selectedPost.phone,
  });
  
  const updatePost = async () => {
    if (
      !formData.value.username ||
      !formData.value.name ||
      !formData.value.email ||
      !formData.value.city ||
      !formData.value.phone
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const { error } = await client
      .from("posts")
      .update(formData.value)
      .eq("id", props.selectedPost.id)
      .select();
    if (!error) {
      emit("updatePosts");
      emit("closeEdit");
    } else {
      console.error(error);
    }
  };
  </script>