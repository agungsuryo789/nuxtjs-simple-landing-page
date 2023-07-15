<template>
  <section class="flex flex-col justify-center items-center p-3">
    <h1 class="font-bold my-5">Post Your Cat!</h1>
    <div class="flex flex-col border border-solid rounded shadow-lg max-w-lg p-2 my-3">
      <input type="text" placeholder="name" class="header__input my-2">
      <input type="text" placeholder="age" class="header__input my-2">
      <input type="text" placeholder="breed" class="header__input my-2">
      <input type="text" placeholder="color" class="header__input my-2">
	  <input type="file" name="inputImage" id="inputImage" class="my-2">
    </div>
	<NuxtLink to="/" class="p-2 my-3 font-bold">{{ `<-` }}Take me back</NuxtLink>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
