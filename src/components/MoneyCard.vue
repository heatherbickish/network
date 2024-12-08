<script setup>
import { AppState } from "@/AppState";
import { Money } from "@/models/MoneyPic";
import { moneyService } from "@/services/MoneyService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";


defineProps({
  moneyProp: { type: Money, required: true }
})

// onMounted(() => {
//   getAds()
// })

// async function getAds() {
//   try {
//     logger.log('getting ads')

//     await moneyService.getAds()
//   }
//   catch (error) {
//     Pop.meow(error);
//   }
// }
</script>


<template>
  <div class="text-center">
    <!-- {{ moneyp.title }} -->
  </div>
</template>


<style lang="scss" scoped></style>