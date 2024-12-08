<script setup>
import { AppState } from "@/AppState";
import { Post } from "@/models/Post";
import { postsService } from "@/services/PostsService";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";

const props = defineProps({
  postProp: { type: Post, required: true }
})

const account = computed(() => AppState.account)



async function getLikes(id) {
  try {
    await postsService.getLikes(id)
  }
  catch (error) {
    Pop.meow(error);
  }
}

async function dontLike(id) {
  try {
    await postsService.dontLike(id)
  }
  catch (error) {
    Pop.meow(error);
  }
}

async function deletePost() {
  try {
    const confirmed = await Pop.confirm('Are you sure what want to delete your post?')
    if (!confirmed) { return }
    const postId = props.postProp.id
    await postsService.deletePost(postId)
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>


<template>
  <section class="row justify-content-center">
    <div class="col-md-6 shadow my-3 rounded">
      <div class="m-5">
        <h4 @click="deletePost()" v-if="account?.id == postProp.creatorId" class="text-end" role="button"><i
            class="mdi mdi-delete"></i></h4>
        <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
          <img :src="postProp.creator.picture" class="creator-img">
          <span class="ms-3">{{ postProp.creator.name }}</span>
        </router-link>
      </div>
      <p class="ms-5">{{ postProp.createdAt.toLocaleDateString() }}</p>
      <p class="ms-5">{{ postProp.body }}</p>
      <div class="d-flex justify-content-center">
        <img :src="postProp.imgUrl" alt="" class="post-img">
      </div>
      <div class="my-3">
        <button v-if="account" @click="getLikes(postProp.id)" class="btn btn-outline-none"><i
            class="mdi mdi-thumb-up text-info"></i></button>
        <span>{{ postProp.likes.length }}</span>
        <button v-if="account" @click="dontLike(postProp.id)" class="btn btn-outline-none"><i
            class="mdi mdi-thumb-down text-info"></i></button>
        <!-- <span :disabled="postProp.creatorId == account.id" class="text-end text-info mdi mdi-heart me-5 mt-2"
          role="button">{{
            postProp.likes.length }}</span> -->
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
  width: auto;
  object-fit: cover;
}
</style>