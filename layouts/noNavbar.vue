<template>
  <div>
    <nav
      class="header flex flex-col justify-between content-center xl:flex-row md:flex-row"
    >
      <h3 class="header__title text-white basis-1/2 xl:basis-1/2">
        <b>Adopt your Cat here!</b>
      </h3>
    </nav>
    <!-- content output -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
