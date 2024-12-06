<script setup>
import { AppState } from "@/AppState";
import { Money } from "@/models/MoneyPic";
import { moneyService } from "@/services/MoneyService";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";


defineProps({
  moneyProp: { type: Money, required: true }
})




</script>


<template>
  <div class="col-md-3">
    <!-- {{ moneyProp.title }} -->

  </div>
</template>


<style lang="scss" scoped></style>