<template>
  <div class="login">
    <el-form
      ref="formRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      @submit.prevent
    >
      <h3 class="title">请输入访问密码</h3>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="密码为简历手机号"
          @keyup.enter="handleLogin(formRef)"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          size="default"
          type="primary"
          style="width: 100%"
          @click.prevent="handleLogin(formRef)"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      Copyright © 2022 All Rights Reserved of
      <a href="https://github.com/Li-MLong" target="_blank"
        >Github</a
      >
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage, ElNotification } from "element-plus";
import { useStore } from "vuex";
import Cookie from "js-cookie";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const store = useStore();
    const formRef = ref(null);
    const loading = ref(false);
    const loginForm = reactive({
      password: "",
    });
    const loginRules = {
      password: [
        {
          required: true,
          message: "请输入简历手机号",
          trigger: "change",
        },
      ],
    };

    const handleLogin = async formEl => {
      if (!formEl) return;
      console.log(process.env);
      await formEl.validate((valid, fields) => {
        if (valid) {
          loading.value = true;
          setTimeout(() => {
            if (
              loginForm.password ==
              store.state.home.mobileNo
            ) {
              Cookie.set("token", loginForm.password);
              ElMessage({
                message: "成功登录",
                type: "success",
              });
              router.replace("/");
            } else {
              ElNotification({
                title: "访问密码错误",
                message: "访问密码错误,请输入简历手机号",
                type: "error",
              });
            }
            loginForm.password = "";
            loading.value = false;
          }, 500);
        } else {
          return false;
        }
      });
    };

    return {
      formRef,
      loading,
      loginForm,
      loginRules,
      handleLogin,
    };
  },
};

/* import {
  Component,
  Vue,
  Ref,
} from "vue-property-decorator";
const Cookie = require("js-cookie");

@Component
export default class ClassName extends Vue {
  @Ref() form: any;

  loading: boolean = false;
  loginForm: any = {
    password: "",
  };
  loginRules: object = {
    password: [
      {
        required: true,
        message: "请输入简历手机号",
        trigger: "change",
      },
    ],
  };
  handleLogin() {
    this.form.validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        setTimeout(() => {
          if (this.loginForm.password == "13849141247") {
            Cookie.set("token", this.loginForm.password);
            this.$message.success("成功登录");
            this.$router.push({ path: "/", replace: true });
          } else {
            this.$message.error(
              "访问密码错误,请输入简历手机号",
            );
          }
          this.loading = false;
        }, 500);
      } else {
        return false;
      }
    });
  }
} */
</script>

<style lang="less" scope>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #000;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
  a {
    color: #000;
  }
}
</style>
