<script setup>
import { Post } from "@/models/Post";

const props = defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <section class="row justify-content-center">
    <div class="col-md-6 shadow my-3 rounded">
      <div class="m-5">
        <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
          <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img">
          <span class="ms-3">{{ postProp.creator.name }}</span>
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