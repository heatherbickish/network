<script setup>
import { AppState } from "@/AppState";
import { computed, ref } from "vue";

const account = computed(() => AppState.account)

const editableAccountFormData = ref({
  // name: account.value.name,
  picture: account.value.picture,
  coverImg: account.value.coverImg,
  bio: account.value.bio,
  class: account.value.class,
  github: account.value.github,
  linkedin: account.value.linkedin,
  graduated: account.value.graduated,
  resume: account.value.resume
})
</script>


<template>
  <section class="container">
    <form class="row g-4 bg-white p-4 rounded shadow my-3">
      <div class="col-md-4">
        <label for="picture">Profile image url</label>
        <input type="url" id="picture" class="form-control">
      </div>
      <div class="col-md-4">
        <label for="class">Attending class</label>
        <input type="url" id="class" class="form-control">
      </div>
      <div class="col-md-4 ">
        <div class="">
          <label for="graduated" class="d-inline me-3">Graduated</label>
          <input type="checkbox" id="graduated" class="check">
        </div>
      </div>
      <div class="col-md-4">
        <label for="github">Github</label>
        <input type="url" id="github" class="form-control">
      </div>
      <div class="col-md-4">
        <label for="linkedin">Linkedin</label>
        <input type="url" id="linkedin" class="form-control">
      </div>
      <div class="col-md-4">
        <label for="resume">Resume</label>
        <input type="url" id="resume" class="form-control">
      </div>
      <div class="col-md-4">
        <label for="coverImg">Cover image url</label>
        <input type="url" id="coverImg" class="form-control">
      </div>
      <div class="col-md-8">
        <label for="bio">Tell us about yourself</label>
        <textarea id="bio" class="form-control" maxlength="1000" style="width: 100%;" rows="3"></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-outline-info">Submit Changes</button>
      </div>
    </form>
  </section>
</template>


<style lang="scss" scoped></style>