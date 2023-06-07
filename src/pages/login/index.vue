 
<template>
  <div class="login">
    <div class="content">
      <img src="../../assets/login_icon.png" alt="" class="login-img">
      <!-- <div class="star1"></div>
      <div class="star2"></div>
      <div class="star3"></div>
      <div class="star4"></div>
      <div class="star5"></div> -->
      <div class="input-format">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <img src="../../assets/login_icon2.png" alt="" class="login_logo">
          <el-form-item prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({});

const formSize = ref('large')
let ruleFormRef = ref(null);

const ruleForm = reactive({
  phone: '',
  pass: '',
})

function submitForm(params) {
  router.push('/index')
  localStorage.setItem("loginName", 1);
}


</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;

  @function getShadows($n) {
    $shadows: "#{random(100)}vw #{random(100)}vh #fff";

    @for $i from 2 through $n {
      $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
    }

    @return unquote($shadows);
  }

  @keyframes moveUp {
    100% {
      transform: translateY(-100vh);
    }
  }

  $duration: 500s;
  $count: 1200;

  .content {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    background: url('../../assets/login_bg.png') no-repeat;
    // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    background-size: cover;

    // @for $i from 1 through 5 {
    //   $duration: floor(calc($duration / 2));
    //   $count: floor(calc($count / 2));

    //   .star#{$i} {
    //     $size: #{$i}px;
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: $size;
    //     height: $size;
    //     border-radius: 50%;
    //     box-shadow: getShadows($count);
    //     animation: moveUp $duration linear infinite;

    //     &::after {
    //       position: fixed;
    //       top: 100vh;
    //       left: 0;
    //       width: $size;
    //       height: $size;
    //       content: "";
    //       border-radius: inherit;
    //       box-shadow: inherit;
    //     }
    //   }
    // }
    .login-img {
      width: 750px;
    }

    .input-format {
      background-color: #fff;
      flex: 0 1 auto;
      padding: 40px;
      border-radius: 6px;
      box-shadow: 1px 1px 8px #aaa6a6;
      box-sizing: border-box;
      width: 400px;

      .el-form {
        .login_logo {
          width: 150px;
          height: 75px;
          display: block;
          margin: 0 auto;
          margin-bottom: 15px;
        }

        .el-form-item {
          margin-bottom: 26px;

          :deep(.el-form-item__content) {
            margin-left: 0 !important;

            .el-button {
              width: 100%;
            }
          }
        }
      }
    }
  }
}</style>
  