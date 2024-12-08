<script setup>
import { AppState } from "@/AppState";
import { postsService } from "@/services/PostsService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, ref } from "vue";

const account = computed(() => AppState.account)
const editablePostFormData = ref({
  body: '',
  imgUrl: ''
})

async function createPost() {
  try {
    await postsService.createPost(editablePostFormData.value)
    editablePostFormData.value = {
      body: '',
      imgUrl: ''
    }
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>


<template>
  <section class="row justify-content-center">
    <div v-if="account != null" class="col-md-6 shadow rounded mt-3">
      <div>
        <router-link :to="{ name: 'Profile', params: { profileId: account.id } }">
          <img :src="account.picture" alt="" class="creator-img m-3">
        </router-link>
        <form @submit.prevent="createPost()">
          <div class="form-floating mb-3">
            <textarea v-model="editablePostFormData.body" id="body" class="form-control" maxlength="1000"
              style="width: 100%;" required></textarea>
            <label for="floatingInput">Share whats happening...</label>
          </div>
          <div class="form-floating">
            <input v-model="editablePostFormData.imgUrl" type="url" class="form-control" id="imgUrl"
              placeholder="Picture/Video">
            <label for="floatingPassword">Picture/Video</label>
          </div>
          <div class="text-end m-2">
            <button class="btn btn-outline-info">
              <i class="mdi mdi-arrow-top-right-bold-outline text-info">Post</i>
            </button>
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