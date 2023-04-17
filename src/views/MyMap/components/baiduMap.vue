<template>
  <div class="baiduMap">
    <div id="baiduContainer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "MyBaiduMap",
  setup() {
    let map = ref(null);
    let point = sessionStorage.getItem("point")
      ? JSON.parse(sessionStorage.getItem("point"))
      : {
          lng: 116.404,
          lat: 39.915,
        };

    function getCurrentPosition(isSDK) {
      let geolocation = new BMapGL.Geolocation();

      if (isSDK) {
        geolocation.enableSDKLocation();
      }
      return new Promise((resolve, reject) => {
        geolocation.getCurrentPosition(r => {
          if (
            geolocation.getStatus() == BMAP_STATUS_SUCCESS
          ) {
            resolve(r);
          } else {
            reject(new Error("定位失败"));
          }
        });
      });
    }

    // 获取定位信息
    async function getLocationPoint() {
      await getCurrentPosition()
        .then(r => {
          console.log("浏览器直接获取定位成功", r);
          point = r.point;
          return;
        })
        .catch(error => {
          console.log(
            "浏览器直接获取定位错误,开始尝试SDK辅助定位",
          );
          getCurrentPosition(true)
            .then(r => {
              console.log("SDK辅助定位成功", r);
              point = r.point;
            })
            .catch(error => {
              console.log("SDK辅助定位失败,使用默认位置");
            });
        });
      sessionStorage.setItem(
        "point",
        JSON.stringify(point),
      );
    }

    // 添加地图控件
    async function addMapControl() {
      if (map.value.isSupportEarth()) {
        map.value.setMapType(BMAP_EARTH_MAP); // 设置地图类型为卫星图
      }
      map.value.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
      map.value.enableKeyboard(); // 启用键盘操作，默认禁用
      map.value.setCopyrightOffset({ top: 0 }); // 设置版权控件位置

      var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.value.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.value.addControl(zoomCtrl);
    }

    onMounted(async () => {
      // 创建默认地图,定位默认位置
      map.value = new BMapGL.Map("baiduContainer", {
        enableAutoResize: true,
      });
      await map.value.centerAndZoom(point, 15);
      // 地图控件
      await addMapControl();

      map.value.addEventListener(
        "mouseover",
        ({ type, target }) => {
          console.log(type, target);
        },
      );

      // 获取定位信息
      await getLocationPoint();
      // 添加标注
      let mk = new BMapGL.Marker(point);
      await map.value.addOverlay(mk);
      // 移动当前位置
      await map.value.panTo(point);
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
.baiduMap,
#baiduContainer {
  width: 100%;
  height: 100%;
}
</style>
