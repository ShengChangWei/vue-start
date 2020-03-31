<template>
  <div class="sidebar-logo-container">
    <div key="expand"
         class="sidebar-logo-link"
         to="/">
      <img v-if="logo"
           :src="logo"
           class="sidebar-logo">
      <h1 class="sidebar-title">{{ title }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'vue-essence-start 项目',
      logo: require('@/assets/images/pc/logo.png')
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: $navHeight;
  line-height: $navHeight;
  padding-left: 30px;
  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    .sidebar-logo {
      width: 30px;
      height: 41px;
      vertical-align: middle;
      margin-right: 12px;
    }
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
