<template>
    <div class="sidebar" :class="{ 'w_65': store.state.iscollapse }">
        <div class="logo-box">
            <img src="../assets/logo_title.png" alt="">
            {{ store.sidenNavList }}
        </div>
        <el-scrollbar>
            <leftMenu></leftMenu>
        </el-scrollbar>
    </div>
</template>
  
<script setup>
import { store } from "@/store/index";
import leftMenu from './leftMenu.vue'

</script>
  
<style lang="scss" scoped>
.sidebar {
    flex: none;
    height: 100%;
    width: 210px;
    background: #191a20;
    transition: all .5s;

    .logo-box {
        text-align: center;
        height: 55px;
        line-height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #191a20;

        >img {
            width: 72px;
            height: 36px;
        }

        >p {
            font-size: 16px;
            color: #fff;
            // margin-left: 15px;
            font-weight: bold;
        }

    }

    .el-scrollbar {
        height: calc(100% - 55px);
    }

}
.w_65 {
    width: 70px;
}

</style>