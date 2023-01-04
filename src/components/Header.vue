<template>
  <div class="d-flex flex-column w-100 p-4 text-white" style="background: #1fe0ff">
    <b-navbar type="dark" variant="dark" class="d-flex g16" style="gap: 18px;">
      <router-link class="text-black text-decoration-none" to="/">Home</router-link>
      <router-link class="text-black text-decoration-none" to="/SearchTransaction">SearchTransaction</router-link>
    </b-navbar>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

</style>
