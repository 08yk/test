<template>
    <el-menu class="nav-list" :default-active="defaultActive" router background-color="#191a20" text-color="#bdbdC0"
        :collapse="store.state.iscollapse" :collapse-transition="false" :unique-opened="true">
        <template v-for="item in store.getters.getSidenNavList" :key="item" >
            <el-menu-item :index="item.path" v-if="!item.children">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
            <el-sub-menu :index="item.path" v-if="item.children">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </template>
                <template v-for="childitem in item.children" :key="childitem">
                    <el-menu-item :index="childitem.path">
                        <template #title>
                            <el-icon>
                                <component :is="childitem.meta.icon"></component>
                            </el-icon>
                            <span>{{ childitem.name }}</span>
                        </template>
                    </el-menu-item>
                </template>

            </el-sub-menu>
        </template>
    </el-menu>
</template>
  
<script setup name="leftMenu">

import { store } from "@/store/index";
import { useRoute } from 'vue-router'
const $route = useRoute()


let defaultActive = ref('')


// 左侧菜单栏高亮监听
watch(() => $route.fullPath, (newVal) => {
    defaultActive.value = newVal
}, {
    immediate: true
})
</script>
  
<style lang="scss" scoped>
.nav-list {
    border: none !important;

    .el-menu-item {
        font-size: 14px;
    }
}
</style>