<script setup>
import { AppState } from "@/AppState";
import { postsService } from "@/services/PostsService";
import Pop from "@/utils/Pop";
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const route = useRoute()

const props = defineProps({
  searchQueryProp: { type: String }
})


async function changePage(pageNumber) {
  try {
    if (route.name == 'Home') {
      await postsService.changeHomePage(pageNumber)
    } else {
      await postsService.changeProfilePage(pageNumber, props.searchQueryProp)
    }
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>


<template>
  <div class="text-center mb-2">
    <button @click="changePage(currentPage - 1)" class="btn btn-outline-info me-5" type="button"
      :disabled="currentPage == 1">Newer</button>
    <span></span>
    <button @click="changePage(currentPage + 1)" class="btn btn-outline-info ms-5" type="button"
      :disabled="currentPage == 2">Older</button>
  </div>
</template>


<style lang="scss" scoped></style>