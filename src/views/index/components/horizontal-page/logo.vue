<template>
  <div class="sidebar-logo-container">
    <img :src="logo"
         class="sidebar-logo">
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
      // title: require('@/assets/images/pc/essence.png'),
      logo: require('@/assets/images/pc/essence.png')
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  .sidebar-logo {
    width: 100%;
    padding-top: 14px;
  }
}
</style>
