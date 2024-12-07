<script setup>
import { AppState } from "@/AppState";
import { computed } from "vue";

const account = computed(() => AppState.account)
</script>


<template>
  <section class="row justify-content-center">
    <div v-if="account != null" class="col-md-6 shadow rounded">
      <div>
        <img :src="account.picture" alt="" class="creator-img m-3">
        <form>
          <div class="form-floating mb-3">
            <textarea name="" id="bio" class="form-control" maxlength="1000" style="width: 100;"></textarea>
            <label for="floatingInput">Share whats happening...</label>
          </div>
          <div class="form-floating">
            <input type="url" class="form-control" id="imgUrl" placeholder="Picture/Video">
            <label for="floatingPassword">Picture/Video</label>
          </div>
          <div class="text-end m-2">
            <i class="mdi mdi-arrow-top-right-bold-outline text-info" type="button">Post</i>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>