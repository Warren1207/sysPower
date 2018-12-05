<template>
    <div>
        <router-link v-if="item.leaf" :key="item.href" :to="'/'+item.href" class="link-menu">
            <el-menu-item :index='item.href'>
                <i :class="item.icon"></i>
                <span slot="title">{{item.text}}</span>
            </el-menu-item>
        </router-link>
        <el-submenu :index='item.href' :key="item.href" v-if="!item.leaf">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.text}}</span>
            </template>
            <template v-for="childItem in item.children">
                <router-link v-if="childItem.leaf" :key="childItem.href" :to="childItem.href" class="link-menu">
                    <el-menu-item :index="childItem.href" >{{childItem.text}}</el-menu-item>
                </router-link>
            </template>
        </el-submenu>
    </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .link-menu{
        text-decoration: none;
    }
</style>
