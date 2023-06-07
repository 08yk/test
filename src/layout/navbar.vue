<template>
    <div class="top-navbar">
        <div class="top-navbar-left">
            <el-icon @click="toggle(1)" v-if="!iscollapse"><i-ep-Fold /></el-icon>
            <el-icon @click="toggle(2)" v-else><i-ep-Expand /></el-icon>
            <el-breadcrumb class="breadcrumb" separator="＞">
                <el-breadcrumb-item v-for="item in breadcrumbData" :key="item.path">
                    <span class="no-redirect">{{
                        item.name
                    }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <span @click="exit">退出</span>
    </div>
</template>
  
<script setup>
import { showMsg, deleteEmpty, confirmBox, alertBox } from "../assets/js/public";
import router from "@/router";
import { useRoute } from 'vue-router'
const $route = useRoute()

// 面包屑
const breadcrumbData = ref([])

const getBreadcrumbData = () => {
    breadcrumbData.value = $route.matched.filter(
        item => item.name && item.name
    )
}

// 左侧菜单栏显隐
let iscollapse = ref(false)
if (sessionStorage.getItem('setIsColl')) {
    iscollapse.value = JSON.parse(sessionStorage.getItem('setIsColl'))
}

function toggle(val) {
    if (val == 1) {
        iscollapse.value = true
        store.commit('setIsColl', iscollapse.value)
    } else {
        iscollapse.value = false
        store.commit('setIsColl', iscollapse.value)
    }
}

// 退出登录
function exit() {
    confirmBox('是否退出登录').then(r => {
        router.push('/login')
        localStorage.removeItem("loginName")
    }).catch(e => { })
}


// 监听路由 更换面包屑
watch($route, () => {
    getBreadcrumbData()
}, {
    immediate: true
})
</script>
  
<style lang="scss" scoped>
.top-navbar {
    flex: none;
    width: 100%;
    height: 55px;
    padding: 0 15px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e7ed;
    .top-navbar-left{
        display: flex;
        align-items: center;
        .el-icon {
            cursor: pointer;
            margin-right: 15px;
        }
    }

}
</style>