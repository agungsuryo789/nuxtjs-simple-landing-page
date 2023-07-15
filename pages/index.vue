<template>
  <div>
    <section>
      <ul class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3">
        <li v-for="(card, index) in 6" :key="index" @click="console.log('Cat', index)">
          <cat-card />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
