<template>
  <nav
    class="header flex flex-col justify-between content-center xl:flex-row md:flex-row"
  >
    <h3 class="header__title text-white basis-1/2 xl:basis-1/2">
      <b>Adopt your Cat here!</b>
    </h3>
    <div
      class="flex flex-col justify-between basis-1/2 xl:basis-1/4 xl:flex-row md:flex-row"
    >
      <NuxtLink to="/create" class="text-white my-2 xl:my-0 xl:mx-5"
        >Post Your Cat!</NuxtLink
      >
      <input
        class="header__input"
        type="text"
        placeholder="search"
        v-model="inputVal"
        @keydown="handleSearch"
      />
    </div>
  </nav>
</template>

<script setup>
const inputVal = ref("");
const emit = defineEmits(["handleSearch"]);

const handleSearch = (e) => {
  emit("handleSearch", e.target.value);
};
</script>
<style scoped></style>
