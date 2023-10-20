<template>
  <div
    @click="handleBackgroundClick"
    class="fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-50"
  >
    <div
      class="bg-white flex flex-col text-black w-1/2 rounded-lg relative max-h-[80vh] overflow-auto"
    >
      <h3 class="flex justify-center text-xl">Add new post</h3>
      <button
        @click="$emit('closeAdd')"
        class="absolute top-2 right-2 rounded-md border-red-400 bg-red-400 border-solid text-xl hover:bg-red-200 border-2"
      >
        Close
      </button>

      <ul class="text-xl mt-7">
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.username,
            'border-none': !errorsValidation.username,
          }"
        >
          <label class="mr-2" for="username">Username:</label>
          <input
            id="username"
            name="username"
            v-model="formData.username"
            type="text"
            placeholder="new username"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.username">
          {{ errorsValidation.username }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.name,
            'border-none': !errorsValidation.name,
          }"
        >
          <label class="mr-2" for="name">Name:</label>
          <input
            id="name"
            name="name"
            v-model="formData.name"
            type="text"
            placeholder="new name"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.name">
          {{ errorsValidation.name }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.email,
            'border-none': !errorsValidation.email,
          }"
        >
          <label class="mr-2" for="email">Email:</label>
          <input
            id="email"
            name="email"
            v-model="formData.email"
            type="email"
            placeholder="new email"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.email">
          {{ errorsValidation.email }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.username,
            'border-none': !errorsValidation.username,
          }"
        >
          <label class="mr-2" for="website">Website:</label>
          <input
            id="website"
            name="website"
            v-model="formData.website"
            type="text"
            placeholder="new website"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.website">
          {{ errorsValidation.website }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.city,
            'border-none': !errorsValidation.city,
          }"
        >
          <label class="mr-2" for="city">City:</label>
          <input
            id="city"
            name="city"
            v-model="formData.city"
            type="text"
            placeholder="new city"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.city">
          {{ errorsValidation.city }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.phone,
            'border-none': !errorsValidation.phone,
          }"
        >
          <label class="mr-2" for="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="new phone"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.phone">
          {{ errorsValidation.phone }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.street,
            'border-none': !errorsValidation.street,
          }"
        >
          <label class="mr-2" for="street">Street:</label>
          <input
            id="street"
            name="street"
            v-model="formData.street"
            type="text"
            placeholder="new street"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.street">
          {{ errorsValidation.street }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.suite,
            'border-none': !errorsValidation.suite,
          }"
        >
          <label class="mr-2" for="suite">Suite:</label>
          <input
            id="suite"
            name="suite"
            v-model="formData.suite"
            type="text"
            placeholder="new suite"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.suite">
          {{ errorsValidation.suite }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.zipcode,
            'border-none': !errorsValidation.zipcode,
          }"
        >
          <label class="mr-2" for="zipcode">Zipcode:</label>
          <input
            id="zipcode"
            name="zipcode"
            v-model="formData.zipcode"
            type="value"
            placeholder="new Zipcode"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.zipcode">
          {{ errorsValidation.zipcode }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.company_name,
            'border-none': !errorsValidation.company_name,
          }"
        >
          <label class="mr-2" for="company_name">Company name:</label>
          <input
            id="company_name"
            name="company_name"
            v-model="formData.company_name"
            type="text"
            placeholder="new Company name"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.company_name">
          {{ errorsValidation.company_name }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.bs,
            'border-none': !errorsValidation.bs,
          }"
        >
          <label class="mr-2" for="bs">Bs:</label>
          <input
            id="bs"
            name="bs"
            v-model="formData.bs"
            type="text"
            placeholder="new bs"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.bs">
          {{ errorsValidation.bs }}
        </p>
        <li
          :class="{
            border: true,
            'border-red-600 rounded-md': errorsValidation.catchPhrase,
            'border-none': !errorsValidation.catchPhrase,
          }"
        >
          <label class="mr-2" for="catchPhrase">Catch phrase:</label>
          <input
            id="catchPhrase"
            name="catchPhrase"
            v-model="formData.catchPhrase"
            type="text"
            placeholder="new catch phrase"
          />
        </li>
        <p class="text-red-600 text-xl" v-if="errorsValidation.catchPhrase">
          {{ errorsValidation.catchPhrase }}
        </p>
      </ul>
      <button @click="confirmAdd" class="p-10">Confirm</button>
    </div>
  </div>
</template>

<script setup>
import { object, string, number } from "yup";
const supabase = useSupabaseClient();
const emit = defineEmits(["closeAdd", "updatePosts"]);
const formData = ref({
  username: "",
  name: "",
  email: "",
  website: "",
  city: "",
  phone: null,
  street: "",
  suite: "",
  zipcode: null,
  company_name: "",
  bs: "",
  catchPhrase: "",
});
const errorsValidation = ref({});
const validatePost = object({
  username: string().required(),
  name: string().required(),
  email: string().email().required(),
  website: string().url().required(),
  city: string().required(),
  phone: number()
    .positive()
    .min(12, "must in international format, at should be 12 numbers long"),
  street: string().min(2, "should be at least 3"),
  suite: string(),
  zipcode: number().min(5, "index should contain 5 numbers"),
  company_name: string(),
  bs: string(),
  catchPhrase: string(),
});

const confirmAdd = async () => {
  try {
    await validatePost.validate(formData.value, { abortEarly: false });
    const { error } = await supabase
      .from("posts")
      .insert([formData.value])
      .select();
    if (error) {
      alert(error);
      return;
    }
    emit("closeAdd");
    emit("updatePosts");
  } catch (error) {
    if (error.inner) {
      error.inner.forEach((validateError) => {
        errorsValidation.value[validateError.path] = validateError.message;
        console.log(validateError.message);
      });
    }
  }
};
const handleBackgroundClick = (event) => {
  if (event.target === event.currentTarget) {
    emit("closeAdd");
  }
};
</script>
