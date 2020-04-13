<template>
  <div class="rain-search">
    <el-scrollbar style="width: 100%; height: 100%">
      我是水资源
      <!-- <iframe class="es-frame"
              :src="'http://192.168.0.103:8087/#/rainSearch?userInfo=122'"
              frameborder="0"></iframe> -->
    </el-scrollbar>

  </div>
</template>

<script>
export default {
  name: 'rain-search'
};
</script>

<style lang="scss" scoped>
.rain-search {
  position: relative;
  height: 100%;
  width: 100%;
  .es-frame {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
  /deep/ {
    .el-scrollbar__view {
      height: 100%;
    }
  }
}
</style>

