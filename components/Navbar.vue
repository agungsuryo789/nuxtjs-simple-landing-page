<template>
  <nav
    class="header flex flex-col justify-between content-center xl:flex-row md:flex-row"
  >
    <h3 class="header__title basis-1/2 xl:basis-1/2">
      <b>Adopt your Cat here!</b>
    </h3>
    <div
      class="flex flex-col justify-between basis-1/2 xl:basis-1/4 xl:flex-row md:flex-row"
    >
      <NuxtLink to="/create" class="my-2 xl:my-0 xl:mx-5"
        >Post Your Cat!</NuxtLink
      >
      <input class="header__input" type="text" placeholder="search" />
    </div>
  </nav>
</template>

<style scoped></style>
