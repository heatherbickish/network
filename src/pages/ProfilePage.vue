<script setup>
import { AppState } from "@/AppState";
import { profilesService } from "@/services/ProfilesService";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const profile = computed(() => AppState.activeProfile)
onMounted(() => {
  getProfileById()
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
</script>


<template>
  <section v-if="profile" class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 rounded shadow">
        <img :src="profile.coverImg" alt="" class="hero img-fluid">
        <div class="m-5">
          <img :src="profile.picture" class="creator-img ms-3">
          <div>
            <i v-if="profile.github" class="mdi mdi-school fs-3"></i>
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

        <div>
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 20dvh;
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
  height: 18dvh;
  width: 80dvh;
  object-fit: cover;

}
</style>