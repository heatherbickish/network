<script setup>
import { AppState } from "@/AppState";
import { accountService } from "@/services/AccountService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted, ref } from "vue";

const account = computed(() => AppState.account)

onMounted(() => editableAccountFormData.value = { ...account.value })

const editableAccountFormData = ref({
  name: '',
  picture: '',
  coverImg: '',
  bio: '',
  class: '',
  github: '',
  linkedin: '',
  graduated: false,
  resume: ''
})

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountFormData.value)
  }
  catch (error) {
    Pop.meow(error);
    logger.log('updating account', error)
  }
}
</script>


<template>
  <section class="container">
    <form @submit.prevent="updateAccount()" class="row g-4 bg-white p-4 rounded shadow my-3">
      <div class="col-md-4">
        <label for="name">Name</label>
        <input v-model="editableAccountFormData.name" type="text" id="name" class="form-control" maxlength="100"
          minlength="2" required>
      </div>
      <div class="col-md-4">
        <label for="picture">Profile image url</label>
        <input v-model="editableAccountFormData.picture" type="url" id="picture" class="form-control" maxlength="500"
          minlength="0">
      </div>

      <div class="col-md-4 ">
        <div class="">
          <label for="graduated" class="d-inline me-3">Graduated</label>
          <input v-model="editableAccountFormData.graduated" type="checkbox" id="graduated" class="check">
        </div>
      </div>
      <div class="col-md-4">
        <label for="github">Github</label>
        <input v-model="editableAccountFormData.github" type="url" id="github" class="form-control" maxlength="500"
          minlength="0">
      </div>
      <div class="col-md-4">
        <label for="linkedin">Linkedin</label>
        <input v-model="editableAccountFormData.linkedin" type="url" id="linkedin" class="form-control" maxlength="500"
          minlength="0">
      </div>
      <div class="col-md-4">
        <label for="resume">Resume</label>
        <input v-model="editableAccountFormData.resume" type="url" id="resume" class="form-control" maxlength="500"
          minlength="0">
      </div>
      <div class="col-md-4">
        <label for="class">Attending class</label>
        <input v-model="editableAccountFormData.class" type="text" id="class" class="form-control" maxlength="100"
          minlength="0">
      </div>
      <div class="col-md-4">
        <label for="coverImg">Cover image url</label>
        <input v-model="editableAccountFormData.coverImg" type="url" id="coverImg" class="form-control" maxlength="500"
          minlength="0">
      </div>
      <div class="col-md-8">
        <label for="bio">Tell us about yourself</label>
        <textarea v-model="editableAccountFormData.bio" id="bio" class="form-control" maxlength="1000" minlength="0"
          style="width: 100%;" rows="3"></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-outline-info" type="submit">Submit Changes</button>
      </div>
    </form>
  </section>
</template>


<style lang="scss" scoped></style>