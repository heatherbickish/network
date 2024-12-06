<script setup>
import { AppState } from "@/AppState";
import Posts from "@/components/Posts.vue";
import { postsService } from "@/services/PostsService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";

onMounted(() =>
  getAllPosts()
)

const posts = computed(() => AppState.posts)

async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error) {
    Pop.meow(error);
    logger.log('getting posts', error)
  }
}
</script>

<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <Posts :postProp="post" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
