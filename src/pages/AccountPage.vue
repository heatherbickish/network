<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from "@/components/AccountForm.vue";

const account = computed(() => AppState.account)

</script>

<template>
  <div class="text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <router-link :to="{ name: 'Profile', params: { profileId: account.id } }">
        <img class="rounded" :src="account.picture" alt="" />
      </router-link>
      <p>{{ account.email }}</p>
    </div>
    <div class="container">
      <AccountForm />
    </div>

    <!-- <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
