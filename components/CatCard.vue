<template>
  <div class="card card-hover-animation card-hover-gray relative text-black hover:text-white">
    <img
      :src="props.data?.images[0].path"
      alt=""
      class="card__img object-fit"
    />

    <div class="card__container card__container-font absolute bottom-4">
      <h5 class="card__name font-bold">{{ props.data.name }}</h5>
      <p class="card__detail">{{ props.data.breed }}</p>
      <span> {{ props.data.age }} Years old </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped></style>
