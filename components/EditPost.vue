<template>
  <div
    @click="handleBackgroundClick"
    class="fixed flex flex-col items-center justify-center max-h-screen inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div class="bg-white flex flex-col text-black rounded-lg relative">
      <FormKit
        @submit="updatePost"
        :actions="false"
        type="form"
        submit-label="Confirm"
      >
        <FormKit
          v-model="formData.username"
          @submit="updatePost"
          name="userName"
          label="New username"
          validation="required|length:4,20"
          help="Please enter a username between 4 and 20 characters long."
          validation-visibility="live"
        />
        <FormKit
          v-model="formData.name"
          label="New name"
          validation="required|length:4,20"
          help="Please enter a name and surname between 4 and 20 characters long."
          validation-visibility="live"
        />
        <FormKit
          v-model="formData.email"
          name="email"
          type="email"
          label="New email"
          validation="required|email"
          validation-visibility="live"
        />
        <FormKit
          v-model="formData.website"
          label="New website"
          validation="required|url"
          validation-visibility="live"
          placeholder="https://www.example.com..."
        />
        <FormKit
          type="text"
          name="city"
          v-model="formData.city"
          label="New city"
          validation="required"
          validation-visibility="live"
        />
        <FormKit
          v-model="formData.phone"
          label="New phone"
          validation-visibility="live"
          placeholder="xxx-xxx-xxxx"
          validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        />
        <FormKit type="submit" label="Confirm" />
      </FormKit>
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
  console.log("trigger");
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
