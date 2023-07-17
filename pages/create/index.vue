<template>
  <section class="flex flex-col justify-center items-center p-3">
    <h1 class="font-bold my-5">Post Your Cat!</h1>
    <div
      class="flex flex-col border border-solid rounded shadow-lg max-w-lg p-2 my-3"
    >
      <p class="font-bold">Cat Name:</p>
      <input
        type="text"
        placeholder="name"
        class="border border-solid p-2 my-2"
        v-model="form.name"
        @keydown="handleChangeInput('name', $event.target.value)"
      />
      <p class="font-bold">Cat age:</p>
      <input
        type="number"
        placeholder="age"
        class="border border-solid p-2 my-2"
        v-model="form.age"
        @keydown="handleChangeInput('age', $event.target.value)"
      />
      <p class="font-bold">Cat Breed:</p>
      <input
        type="text"
        placeholder="breed"
        class="border border-solid p-2 my-2"
        v-model="form.breed"
        @keydown="handleChangeInput('breed', $event.target.value)"
      />
      <p class="font-bold">Cat color:</p>
      <input
        type="text"
        placeholder="color"
        class="border border-solid p-2 my-2"
        v-model="form.color"
        @keydown="handleChangeInput('color', $event.target.value)"
      />
      <p class="font-bold">Cat Pictures:</p>
      <input
        type="file"
        name="inputImage"
        id="inputImage"
        class="my-2"
        multiple
        accept="image/*"
        @change="handleFileUpload"
      />
      <div class="flex flex-row justify-end">
        <button
          @click="handleOnSubmit"
          class="border border-solid p-3 m-1 bg-red-500 text-white rounded shadow-lg hover:scale-75"
        >
          Submit
        </button>
        <NuxtLink
          to="/"
          class="border border-solid p-3 m-1 rounded shadow-lg hover:scale-75"
          >Cancel</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "nonavbar",
});
const config = useRuntimeConfig();
const form = ref({
  name: "",
  breed: "",
  age: "",
  color: "",
  files: [],
});

const handleChangeInput = (ref, val) => {
  form.value[ref] = val;
};

const handleFileUpload = (e) => {
  const files = Array.from(e.target.files);
  form.value.files = files;
};

const handleOnSubmit = async () => {
  const isAnyInputEmpty = Object.values(form.value).some((value) => {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "";
    }
  });

  if (isAnyInputEmpty) {
    // At least one input is empty, handle the error
    alert("Please fill in all the inputs.");
    return;
  }

  let dataForm = new FormData();
  dataForm.append("name", form.value.name);
  dataForm.append("age", form.value.age);
  dataForm.append("breed", form.value.breed);
  dataForm.append("color", form.value.color);

  for (let i = 0; i < form.value.files.length; i++) {
    dataForm.append(`images[${i}]`, form.value.files[i]);
  }

  await $fetch("/cats/create", {
    method: "POST",
    baseURL: config.public.BASE_URL,
    body: dataForm,
  })
    .then(async (response) => {
      if (response.success) {
        console.log("Request succeeded!");
		await navigateTo('/')
      } else {
        console.log("Request failed!");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
</script>

<style lang="scss" scoped></style>
