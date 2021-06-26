<template>
  <BasicLayout>
    <div class="ui container">
      <img class="homepage" src="../assets/homepage.png" alt="Home" />
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Home",
  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  height: auto;
}
</style>
