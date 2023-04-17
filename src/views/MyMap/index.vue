<template>
  <div class="btn-group">
    <el-button-group>
      <el-button @click="goHome">
        <el-icon><ArrowLeft /></el-icon> 返回首页
      </el-button>
      <el-button @click="changeMap" :disabled="isDisabled">
        <el-icon><MapLocation /></el-icon>&nbsp; 点我切换{{
          currentName == "MyBaiduMap"
            ? "高德地图"
            : "百度地图"
        }}
      </el-button>
    </el-button-group>
  </div>
  <div class="myMap shadow-box">
    <component :is="currentName"></component>
  </div>
</template>

<script>
import MyBaiduMap from "./components/baiduMap.vue";
import MyGaodeMap from "./components/gaodeMap.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "myMap",
  components: {
    MyBaiduMap,
    MyGaodeMap,
  },
  setup() {
    let router = useRouter();
    let currentName = ref("MyGaodeMap");
    let isDisabled = ref(false);

    function changeMap() {
      isDisabled.value = true;
      currentName.value =
        currentName.value === "MyBaiduMap"
          ? "MyGaodeMap"
          : "MyBaiduMap";
      setTimeout(() => {
        isDisabled.value = false;
      }, 3000);
    }

    function goHome() {
      router.push("/");
    }

    return {
      currentName,
      isDisabled,
      changeMap,
      goHome,
    };
  },
};
</script>

<style lang="less" scoped>
.btn-group {
  margin: 20px auto;
  text-align: center;
}
.myMap {
  width: 80%;
  height: 80%;
  z-index: 2;
}
</style>
