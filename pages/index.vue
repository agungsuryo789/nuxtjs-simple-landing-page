<template>
  <div>
    <navbar @handleSearch="handleSearch" />
    <detail-popup
      v-if="isShowModal"
      @toggleModal="toggleModal"
      :modalData="modalData"
    />
    <section>
      <ul
        class="grid grid-cols-1 place-items-center gaps-2 xl:grid-cols-3 md:grid-cols-4"
        v-if="pending"
      >
        <li v-for="(card, index) in 9" :key="index">
          <card-skeleton />
        </li>
      </ul>

      <ul
        class="grid grid-cols-1 place-items-center gaps-2 xl:grid-cols-4 md:grid-cols-4"
        v-if="!pending"
      >
        <li
          v-for="(card, index) in catsData"
          :key="index"
          @click="toggleModal(card)"
        >
          <cat-card :data="card" />
        </li>
      </ul>
    </section>
    <div
      id="scrollTrigger"
      class="flex flex-row justify-center items-center text-xl font-bold p-4 my-2"
    >
      Load more
    </div>
  </div>
</template>

<script setup>
const isShowModal = ref(false);
const config = useRuntimeConfig();
const pending = ref(true);
const page = ref(1);
const catsData = ref([]);
const modalData = ref({});

await $fetch("/cats/search", {
  baseURL: config.public.BASE_URL,
  params: {
    page: page.value,
  },
})
  .then((response) => {
    if (response.success) {
      pending.value = false;
      catsData.value = response?.data.data;
    } else {
      console.log("Request failed!");
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

const handleSearch = (param) => {
  pending.value = true;
  setTimeout(async () => {
    await $fetch("/cats/search", {
      baseURL: config.public.BASE_URL,
      params: {
        page: page.value,
        search: param,
      },
    })
      .then((response) => {
        if (response.success) {
          pending.value = false;
          catsData.value = response?.data.data;
        } else {
          console.log("Request failed!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, 300);
};

const toggleModal = (data) => {
  isShowModal.value = !isShowModal.value;
  modalData.value = data;
};

const handleFetchScroll = async () => {
  await $fetch("/cats/search", {
    baseURL: config.public.BASE_URL,
    params: {
      page: page.value,
    },
  })
    .then((response) => {
      if (response.success) {
        pending.value = false;
        catsData.value = [...catsData.value, ...response?.data.data];
      } else {
        console.log("Request failed!");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

const handleScroll = async () => {
  const scrollTrigger = document.getElementById("scrollTrigger");

  if (scrollTrigger) {
    const triggerPosition = scrollTrigger.getBoundingClientRect().top;
    if (triggerPosition <= window.innerHeight) {
      if (page.value >= 10) {
        alert("You browse too much cat, take a rest.");
		return;
      }
      pending.value = true;
      page.value++;
      handleFetchScroll();
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
