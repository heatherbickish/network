<script setup>
import { AppState } from "@/AppState";
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
  <div>
  </div>
  <PostForm />
  <div class="container">
    <section class="row">
      <div v-for="post in posts" :key="post.id" class="col-12">
        <Posts :postProp="post" />
      </div>
    </section>

    <div class="row justify-content-center mt-3">
      <div class="col-md-6">
        <PageNav />
      </div>
    </div>
    <div v-for="moneyPic in moneyPics" :key="moneyPic.linkUrl" class="row">
      <div class="d-flex">
        <img :src="moneyPic.square" alt="" class="money-pic">
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.money-pic {
  height: 300px;
  width: 200px;
  margin-bottom: 100px;
}
</style>
