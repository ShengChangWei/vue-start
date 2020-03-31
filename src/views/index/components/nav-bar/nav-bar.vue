<template>
  <div class="navbar">
    <hamburger :is-active="$store.state.sidebar"
               class="hamburger-container"
               @toggleClick="toggleSideBar"> </hamburger>
    <breadcrumb class="breadcrumb-container"> </breadcrumb>
    <div class="right-menu">
      <user-wrapper></user-wrapper>
    </div>
  </div>
</template>

<script>
import hamburger from './hamburger.vue';
import breadcrumb from './breadcrumb.vue';
import userWrapper from '../user-wrapper/index.vue';
export default {
  name: 'nav-bar',
  components: {
    hamburger,
    breadcrumb,
    userWrapper
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar');
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 54px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  margin: 0;

  .hamburger-container {
    line-height: 52px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    padding-right: 10px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

