<template>
  <el-menu
    :default-active="onRoutes"
    :collapse="isCollapse"
    class="menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <sidebar-item v-for='item in menuArray' :key="item.text" :item='item' ></sidebar-item>
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item> -->
  </el-menu>
</template>
<script>
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  computed: {
    isCollapse () {
      return !this.$store.state.sideBarOpen
    },
    menuArray () {
      return this.$store.state.menu.menuList
    },
    onRoutes () {
      return this.$route.path
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .side-wrapper{
    background-color: #545c64;
    height: 100%;
  }
  .el-menu{
    border-right: 0px;
  }
  .menu {
    width: 100% !important;
  }
  .menu a{
    text-decoration: none;
  }
</style>
