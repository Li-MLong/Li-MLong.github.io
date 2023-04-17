<template>
  <div class="gaodeMap">
    <div id="gaodeContainer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "MyGaodeMap",
  setup() {
    let map = ref(null);

    function getLocation() {
      AMap.plugin("AMap.Geolocation", function () {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认：true
          timeout: 10000, // 设置定位超时时间，默认：无穷大
          zoomToAccuracy: true, //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          position: "RB", //  定位按钮的排放位置,  RB表示右下
        });

        geolocation.getCurrentPosition(function (
          status,
          result,
        ) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });

        function onComplete(data) {
          // data是具体的定位信息
          console.log("定位成功位置:", data);
        }

        function onError(data) {
          // 定位出错
          console.log("定位失败", data);
        }
      });
    }

    function createMap() {
      map.value = new AMap.Map("gaodeContainer", {
        zoom: 10,
      });

      AMap.plugin("AMap.Geolocation", function () {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认：true
          timeout: 10000, // 设置定位超时时间，默认：无穷大
          zoomToAccuracy: true, //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          position: "RB", //  定位按钮的排放位置,  RB表示右下
        });

        map.value.addControl(geolocation);
        geolocation.getCurrentPosition(function (
          status,
          result,
        ) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });

        function onComplete(data) {
          // data是具体的定位信息
          console.log("定位成功位置:", data);
        }

        function onError(data) {
          // 定位出错
          console.log("定位失败", data);
        }
      });
    }

    onMounted(() => {
      createMap();
    });

    onUnmounted(() => {
      map.value.destroy();
      map.value = null;
    });
    return {
      map,
    };
  },
};
</script>

<style lang="less" scoped>
.gaodeMap,
#gaodeContainer {
  width: 100%;
  height: 100%;
}
</style>
