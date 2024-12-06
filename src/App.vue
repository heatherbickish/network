<script setup>
import { onMounted } from "vue";
import Navbar from './components/Navbar.vue';
import { moneyPicsService } from "./services/MoneyPicsService";
import Pop from "./utils/Pop";

onMounted(() => {
  getAds()
})

async function getAds() {
  try {
    await moneyPicsService.getAds()
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-info">
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
