<template>
    <div class="app-wrapper">
        <sidebar></sidebar>
        <div class="main-box">
            <navbar></navbar>
            <div class="main-container">
                <mains></mains>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import navbar from "./navbar.vue";
import sidebar from "./sidebar.vue";
import mains from "./main.vue";
</script>
  
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
.main-box{
  flex: 1;
  min-width: 1186px;
}
.main-container {
    background: #fff;
    padding: 2px;
    height: calc(100% - 55px);
    overflow-y: auto;
  }
}

</style>