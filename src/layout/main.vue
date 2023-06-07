<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script setup>
 import route from "@/router/index";
import { store } from "@/store/index";
defineProps({});
//刷新获取当前路由 展示头部 左侧导航信息  
store.commit("setNavBar", { list: route.getRoutes(), now: route.currentRoute._rawValue.path.split("/")[1] });

if (sessionStorage.getItem('setIsColl')) {
  store.state.iscollapse=JSON.parse(sessionStorage.getItem('setIsColl'))
}
</script>

<style lang="scss" scoped>
.main{
  height: 100%;
}
</style>