<template>
  <el-row xs="24">
    <el-col :span="4">
      <logo :collapse="!$store.state.sidebar"></logo>
    </el-col>
    <el-col :span="16">
      <el-menu router
               :default-active="activeMenu"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :unique-opened="false"
               :active-text-color="variables.menuActiveText"
               mode="horizontal">
        <template v-for="item in curMenu">
          <sidebar-item v-if="!item.hidden"
                        :key="item.id"
                        :item="item"></sidebar-item>
        </template>
      </el-menu>
    </el-col>

    <el-col :span="4">
      <div class="user-info">
        <user-wrapper></user-wrapper>
      </div>
    </el-col>
  </el-row>

</template>

<script>
import logo from './logo';
import variables from '@/styles/variables.scss';
import sidebarItem from './sidebar-item.vue';
import userWrapper from '../user-wrapper/index.vue';
import routerInfo from '@/router.js';
export default {
  name: 'side-bar',
  components: {
    sidebarItem,
    logo,
    userWrapper
  },
  data() {
    return {
      curMenu: []
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
    variables() {
      return variables;
    }
  },
  created() {
    const routerData = routerInfo.options.routes;
    this.curMenu =
      this.$store.state.currUserMenus.length > 0
        ? this.$store.state.currUserMenus
        : this.handleRouter(routerData);
  },
  mounted() {
    if (this.activeMenu === '/') {
      this.$router.push({ path: this.curMenu[0].url });
    }
  },
  methods: {
    handleRouter(routerData, basePath = '') {
      const children = [];
      routerData.forEach(item => {
        let path;
        if (basePath === '/') {
          path = basePath + item.path;
        } else {
          path = basePath + '/' + item.path;
        }
        const url = /^\/.*/.test(item.path) ? item.path : path;
        const obj = {
          id: item.path,
          resourceName: item.meta.title,
          icon: 'fa fa-book',
          hidden: item.meta.hidden,
          url: url,
          children: []
        };
        if (item.children) {
          obj.children = this.handleRouter(item.children, item.path);
          return children.push(obj);
        } else {
          children.push(obj);
        }
      });
      return children;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.user-info {
  float: right;
  height: $navHeight;
  line-height: $navHeight;
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  padding-right: 10px;
}
</style>
