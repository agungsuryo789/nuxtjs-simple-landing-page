<template>
  <div>
    <navbar />

    <!-- content output -->
    <div>
      <slot />
    </div>
    <footer class="flex flex-row justify-center items-center my-20">
      <h3 class="font-bold">Footer</h3>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
