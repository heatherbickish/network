<script setup>
import { AppState } from "@/AppState";
import Posts from "@/components/Posts.vue";
import { postsService } from "@/services/PostsService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, ref } from "vue";

const editableSearchQuery = ref('')

const posts = computed(() => AppState.posts)

async function searchPosts() {
  try {
    await postsService.searchPosts(editableSearchQuery.value)
  }
  catch (error) {
    Pop.meow(error);
    logger.error('searching posts', error)
  }
}
</script>


<template>
  <div class="container">
    <section class="row justify-content-center">
      <div class="col-12">
        <div class="mt-4">
          <h1>Search Posts</h1>
        </div>
      </div>
      <div class="col-md-6 shadow rounded">
        <form @submit.prevent="searchPosts()">
          <div class="mb-3">
            <label for="searchQuery" class="form-label"></label>
            <div class="d-flex">
              <input v-model="editableSearchQuery" type="text" class="form-control" id="searchQuery"
                placeholder="Search..." required maxlength="30" minlength="1">
              <button class="btn btn-outline-info" type="submit" title="Search for posts"><i
                  class="mdi mdi-magnify"></i></button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
  <section class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <Posts :postProp="post" />
    </div>
  </section>
</template>


<style lang="scss" scoped></style>