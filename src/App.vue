<template>
  <div class="d-flex flex-column w-100">
    <HeaderComponent />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script>
import HeaderComponent from "@/components/Header";
export default {
  components: {HeaderComponent}
}
</script>
