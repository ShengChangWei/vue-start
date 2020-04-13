<template>
  <div class="has-logo">
    <logo :collapse="!$store.state.sidebar"></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper"
                  style="height: 100%;">
      <el-menu router
               :default-active="activeMenu"
               :collapse="!$store.state.sidebar"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :unique-opened="false"
               :active-text-color="variables.menuActiveText"
               :collapse-transition="false"
               mode="vertical">
        <template v-for="item in curMenu">
          <sidebar-item v-if="!item.hidden"
                        :key="item.id"
                        :item="item"></sidebar-item>
        </template>

      </el-menu>
    </el-scrollbar>
  </div>

</template>

<script>
import logo from './logo';
import variables from '@/styles/variables.scss';
import sidebarItem from './sidebar-item.vue';
import routerInfo from '@/router.js';
export default {
  name: 'side-bar',
  components: {
    logo,
    sidebarItem
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
    console.log(this.$store.state.currUserMenus);
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
.has-logo {
  height: calc(100% - 50px);
}
</style>
