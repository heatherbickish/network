<script setup>
import Navbar from './components/Navbar.vue';


</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-info">
    <h4 class="text-center text-light">Network</h4>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');

:root {
  --main-height: calc(100vh - 32px - 64px);
}

body {
  font-family: "Uchen", serif;
}

footer {
  height: 32px;
}
</style>
