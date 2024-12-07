<script setup>

</script>


<template>
  <div class="container">
    <section class="row justify-content-center">
      <div class="col-12">
        <div class="mt-4">
          <h1>Search Posts</h1>
        </div>
      </div>
      <div class="col-md-8 shadow rounded">
        <form>
          <div class="mb-3">
            <label for="searchPosts" class="form-label"></label>
            <div class="d-flex">
              <input type="text" class="form-control" id="searchPosts" placeholder="Search...">
              <button class="btn btn-outline-info" type="submit" title="Search for posts"><i
                  class="mdi mdi-magnify"></i></button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>