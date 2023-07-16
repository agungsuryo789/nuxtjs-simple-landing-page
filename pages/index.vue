<template>
  <div>
    <detail-popup v-if="isShowModal" @toggleModal="toggleModal" />
    <section>
      <ul class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3">
        <li v-for="(card, index) in 6" :key="index" @click="toggleModal()">
          <cat-card />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const isShowModal = ref(false);
const config = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(
  "https://developer.redcomm.co.id/test/fe/test-api/api/cats/search",
  { query: { page: '1', search: "" } }
);
console.log("data", data._rawValue);

const toggleModal = () => {
  isShowModal.value = !isShowModal.value;
};
</script>

<style scoped></style>
