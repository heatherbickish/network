<script setup>
import { AppState } from "@/AppState";
import { Post } from "@/models/Post";
import { computed } from "vue";

const props = defineProps({
  postProp: { type: Post, required: true }
})

const account = computed(() => AppState.account)
</script>


<template>
  <section class="row justify-content-center">
    <div class="col-md-6 shadow my-3 rounded">
      <div class="m-5">
        <h4 v-if="account?.id == postProp.creatorId" class="text-end">...</h4>
        <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
          <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img">
          <span class="ms-3">{{ postProp.creator.name }}</span>

          <h4></h4>
        </router-link>
      </div>
      <p class="ms-5">{{ postProp.createdAt.toLocaleDateString() }}</p>
      <p class="ms-5">{{ postProp.body }}</p>
      <div class="d-flex justify-content-center">
        <img :src="postProp.imgUrl" alt="" class="post-img">
      </div>
      <div>
        <p class="text-end text-info mdi mdi-heart me-5 mt-2"></p>
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

.post-img {
  height: 30dvh;
  width: 60dvh;
  object-fit: cover;
}
</style>