<template>
  <div class="vertical-page">
    <side-bar></side-bar>
  </div>
</template>

<script>
import sideBar from './side-bar.vue';
export default {
  components: {
    sideBar
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.vertical-page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
