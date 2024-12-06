<script setup>
import { postsService } from "@/services/PostsService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";

onMounted(()=> 
getAllPosts()
)

async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error){
    Pop.meow(error);
    logger.log('getting posts', error)
  }
}
</script>

<template>
  <h1>home page</h1>
</template>

<style scoped lang="scss"></style>
