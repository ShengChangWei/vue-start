<template>
  <div class="setting">
    导航模式
    <el-divider></el-divider>
    <el-switch v-model="$store.state.navType"
               style="display: block"
               active-color="#13ce66"
               inactive-color="#0064f2"
               active-text="顶部导航"
               inactive-text="侧边导航">
    </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.setting {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
