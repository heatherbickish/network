<script setup>
import { AppState } from "@/AppState";
import PostForm from "@/components/PostForm.vue";
import Posts from "@/components/Posts.vue";
import { postsService } from "@/services/PostsService";
import { profilesService } from "@/services/ProfilesService";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const profile = computed(() => AppState.activeProfile)
const posts = computed(() => AppState.posts)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const account = computed(() => AppState.account)

onMounted(() => {
  getProfileById()
  getPostsByCreatorId()
  profilesService.clearPage()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.meow(error);
  }
}

async function getPostsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await profilesService.getPostsByCreatorId(profileId)
  }
  catch (error) {
    Pop.meow(error);
  }
}

async function changePage(pageNumber) {
  try {
    await postsService.changePage(pageNumber)
  }
  catch (error) {
    Pop.meow(error);
  }
}


</script>


<template>
  <section v-if="profile" class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 rounded shadow mt-3">
        <img :src="profile.coverImg" alt="" class="hero img-fluid">
        <div class="m-5">
          <img :src="profile.picture" class="creator-img ms-3">
          <div>
            <i v-if="profile.graduated" class="mdi mdi-school fs-3 text-success"></i>
          </div>
          <div class="ms-3 mt-3">
            <h6>{{ profile.class }}</h6>
            <h4>{{ profile.name }}</h4>
          </div>
          <div class="text-end px-3 fs-4">
            <a :href="profile.linkedin" target="_blank">
              <i v-if="profile.linkedin" class="mdi mdi-linkedin me-3"></i>
            </a>
            <a :href="profile.github" target="_blank">
              <i v-if="profile.github" class="mdi mdi-github me-3"></i>
            </a>
            <a :href="profile.resume" target="_blank">
              <i v-if="profile.resume" class="mdi mdi-file-document-check"></i>
            </a>
          </div>
        </div>
        <p class="p-3 mb-3">{{ profile.bio }}</p>
        <p></p>
        <div class="text-end mb-3 me-3">
          <router-link :to="{ name: 'Account' }">
            <button v-if="profile?.id == account.id" class="btn btn-outline-info">Edit</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section v-if="account.id == profile?.id">
    <PostForm />
  </section>
  <section v-for="post in posts" :key="post.id" class="row justify-content-center">
    <Posts :postProp="post" />
  </section>
  <div class="row justify-content-center mt-3">
    <div class="col-md-6">
      <div class="text-center mb-2">
        <button @click="changePage(currentPage - 1)" class="btn btn-outline-info me-5" type="button"
          :disabled="currentPage == 1">Newer</button>
        <span></span>
        <button @click="changePage(currentPage + 1)" class="btn btn-outline-info ms-5" type="button"
          :disabled="currentPage == 1">Older</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 15dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.post-img {
  height: 30dvh;
  width: 60dvh;
  object-fit: cover;
}

.hero {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  margin-bottom: -150px;
  margin-top: 20px;
  border-radius: 12px;

}
</style>