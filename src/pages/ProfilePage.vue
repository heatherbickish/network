<script setup>
import { AppState } from "@/AppState";
import { profilesService } from "@/services/ProfilesService";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

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
  <p>profile page</p>
</template>


<style lang="scss" scoped></style>