<script setup>
import { AppState } from "@/AppState";
import MoneyCard from "@/components/MoneyCard.vue";
import PageNav from "@/components/PageNav.vue";
import PostForm from "@/components/PostForm.vue";
import Posts from "@/components/Posts.vue";
import { moneyService } from "@/services/MoneyService";
import { postsService } from "@/services/PostsService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";


onMounted(() => {
  getAllPosts()
  getAds()
})

const posts = computed(() => AppState.posts)
const moneyPics = computed(() => AppState.moneyPics)


async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error) {
    Pop.meow(error);
    logger.log('getting posts', error)
  }
}

async function getAds() {
  try {
    await moneyService.getAds()
  }
  catch (error) {
    Pop.meow(error);
  }
}



</script>

<template>
  <PostForm />
  <div class="row justify-content-center mt-3">
    <div class="col-md-6">
      <PageNav />
      <!-- <div class="text-center mb-2">
        <button @click="changePage(currentPage - 1)" class="btn btn-outline-info me-5" type="button"
          :disabled="currentPage == 1">Newer</button>
        <span></span>
        <button @click="changePage(currentPage + 1)" class="btn btn-outline-info ms-5">Older</button>
      </div> -->
    </div>
  </div>
  <div class="container">
    <section class="row">
      <div v-for="post in posts" :key="post.id" class="col-12">
        <Posts :postProp="post" />
      </div>
      <div class="row">
        <div v-for="moneyPic in moneyPics" :key="moneyPic.linkUrl" class="col-md-3">
          <MoneyCard :moneyProp="moneyPic" />
        </div>


      </div>
    </section>
  </div>

</template>

<style scoped lang="scss"></style>
