<template>
  <div class="index">
    <!-- 顶部导航 -->
    <div v-if="!$store.state.navType"
         class="horizontal-container">
      <horizontal-page></horizontal-page>
    </div>

    <div v-if="$store.state.navType"
         class="fixed-header"
         :class="{'is-hide': !$store.state.sidebar}">
      <nav-bar></nav-bar>
    </div>
    <!-- 左侧导航 -->
    <div v-if="$store.state.navType"
         class="vertical-container"
         :class="{'is-hide': !$store.state.sidebar}">
      <vertical-page></vertical-page>
    </div>

    <!-- 主要页面内容 -->
    <div class="app-page"
         :class="[{'is-hide': !$store.state.sidebar},{'is-navBar': !$store.state.navType}]">
      <transition name="fade-transform"
                  mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>

    <div class="setting-icon"
         @click="drawer = true">
      <i class="el-icon-setting"></i>
    </div>
    <el-drawer title="我是标题"
               size="300px"
               :visible.sync="drawer"
               :with-header="false">
      <setting-page></setting-page>
    </el-drawer>

  </div>
</template>

<script>
import verticalPage from './components/vertical-page/index.vue';
import horizontalPage from './components/horizontal-page/index.vue';
import navBar from './components/nav-bar/nav-bar.vue';
import settingPage from './components/setting-page/index.vue';
export default {
  components: {
    navBar,
    verticalPage,
    horizontalPage,
    settingPage
  },
  data() {
    return {
      value: false,
      isCollapse: true,
      drawer: false
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
@import '@/styles/variables.scss';
.index {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    height: $navHeight;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
    &.is-hide {
      width: calc(100% - 54px);
    }
  }
  .horizontal-container {
    height: 60px;
    background: url('~@/assets/images/pc/nav_bg.png');
  }
  .vertical-container {
    position: absolute;
    width: 210px;
    height: 100%;
    background: url('~@/assets/images/pc/nav_bg.png');
    transition: width 0.28s;
    &.is-hide {
      width: 54px !important;
      /deep/ {
        .el-submenu {
          overflow: hidden;
          & > .el-submenu__title {
            padding-left: 14px !important;
            .el-submenu__icon-arrow {
              display: none;
            }
            & > span {
              height: 0;
              width: 0;
              overflow: hidden;
              visibility: hidden;
              display: inline-block;
            }
          }
        }
        .el-tooltip {
          padding: 0 !important;
          left: 13px !important;
        }
      }
    }
  }
  .app-page {
    margin-left: 210px;
    margin-top: $navHeight;
    height: calc(100% - #{$navHeight});
    transition: width 0.28s;
    &.is-hide {
      margin-left: 54px !important;
    }
    // doto
    &.is-navBar {
      transition: margin 0.28s;
      //   margin: 0;
      margin-top: 0px !important;
      margin-left: 0px !important;
    }
  }

  .setting-icon {
    position: fixed;
    background-color: orange;
    right: -2px;
    top: 50%;
    cursor: pointer;
    z-index: 100;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    &:hover {
      color: #fff;
    }
  }
}
</style>
