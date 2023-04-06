<template>
  <el-card class="sidebar">
    <el-avatar
      :size="50"
      fit="scale-down"
      :src="src"
      @error="errorHandler"
      class="avatarImg"
      title="退出登录"
      @click="logout"
    >
      <img :src="require('@/assets/src.png')" />
    </el-avatar>
    <a @click="slidePage($event, '#basic')">
      <el-icon title="基本信息"><User /></el-icon>
    </a>
    <a @click="slidePage($event, '#skill')">
      <el-icon title="职业技能"><Brush /></el-icon>
    </a>
    <a @click="slidePage($event, '#education')">
      <el-icon title="教育经历"><School /></el-icon>
    </a>
    <a @click="slidePage($event, '#work')">
      <el-icon title="工作经历"><Suitcase /></el-icon>
    </a>
    <a @click="slidePage($event, '#production')">
      <el-icon title="个人作品"><Trophy /></el-icon>
    </a>
  </el-card>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";

import Cookie from "js-cookie";

export default {
  name: "Sidebar",
  setup() {
    const store = useStore();
    const router = useRouter();
    const src = computed(() => store.state.home.avatar);

    function errorHandler() {
      return true;
    }

    function slidePage(e, href) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView(true);
    }

    // 退出登录
    function logout() {
      ElMessageBox.confirm("是否确认退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          Cookie.remove("token");
          ElMessage({
            type: "success",
            message: "退出登录",
          });
          router.push("/login");
        })
        .catch(() => {});
    }
    return {
      src,
      errorHandler,
      slidePage,
      logout,
    };
  },
};
</script>

<style lang="less" scope>
.sidebar {
  width: 100%;
  height: 520px;
  position: fixed;
  top: 30px;
  > div {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > a {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 30px;
      color: #999;
      &:hover {
        color: #000;
      }
    }
    .avatarImg {
      box-shadow: 0px 0px 1px grey;
    }
  }
}
</style>
