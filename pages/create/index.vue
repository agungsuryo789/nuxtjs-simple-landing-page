<template>
  <section class="flex flex-col justify-center items-center p-3">
    <h1 class="font-bold my-5">Post Your Cat!</h1>
    <div
      class="flex flex-col border border-solid rounded shadow-lg max-w-lg p-2 my-3"
    >
      <p>Cat Name:</p>
      <input type="text" placeholder="name" class="border border-solid p-2 my-2" />
	  <p>Cat age:</p>
      <input type="text" placeholder="age" class="border border-solid p-2 my-2" />
	  <p>Cat Breed:</p>
      <input type="text" placeholder="breed" class="border border-solid p-2 my-2" />
	  <p>Cat color:</p>
      <input type="text" placeholder="color" class="border border-solid p-2 my-2" />
	  <p>Cat Pictures:</p>
      <input
        type="file"
        name="inputImage"
        id="inputImage"
        class="my-2"
        multiple
        accept="image/*"
      />
    </div>
    <NuxtLink to="/" class="p-2 my-3 font-bold">Take me back!</NuxtLink>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
