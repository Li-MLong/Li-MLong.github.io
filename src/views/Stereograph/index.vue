<template>
  <div class="stereograph">
    <router-link to="/" class="arrowLeft">
      &lt; 返回首页
    </router-link>
    <div id="viewer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
// 点位插件
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import "photo-sphere-viewer/dist/plugins/markers.css";

// 引入图片
import region from "@/assets/region.jpg";
import indoor1 from "@/assets/indoor1.jpg";
import indoor2 from "@/assets/indoor2.jpg";
import indoor3 from "@/assets/indoor3.jpg";

export default {
  name: "Stereograph",
  setup() {
    let viewer = ref(null);

    onMounted(() => {
      viewer.value = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: region,
        navbar: ["autorotate", "zoom", "fullscreen"], // 导航栏
        lang: {
          // 语言设置
          autorotate: "自动旋转", // 自动旋转按钮
          zoom: "缩放", // 缩放按钮
          zoomOut: "缩小", // 缩小
          zoomIn: "放大", // 放大
          move: "移动", // 移动
          download: "下载", // 下载
          fullscreen: "全屏", // 全屏
          menu: "菜单", // 菜单
          twoFingers: "双指导航", // 双指导航
          ctrlZoom: "ctrl + 滚轮缩放", // ctrl + 滚轮缩放
          loadError: "图片加载失败", // 图片加载失败
        },
        defaultZoomLvl: 1, // 默认缩放级别
        autorotateDelay: 1500, // 自动旋转延迟
        autorotateIdle: true, // 自动旋转
        autorotateSpeed: 0.1, // 自动旋转速度
        mousewheelCtrlKey: false, // 鼠标滚轮控制缩放

        // 点位插件
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: "goIndoor1",
                  tooltip: "点击查看楼盘内1号房子",
                  circle: 8,
                  style: {
                    fill: "rgba(255,255,255,0.8)",
                  },
                  longitude: 3.09,
                  latitude: -0.25,
                },
              ],
            },
          ],
        ],
      });

      let markersPlugin =
        viewer.value.getPlugin(MarkersPlugin);

      markersPlugin.on(
        "select-marker",
        (e, marker, data) => {
          switch (marker.id) {
            case "goIndoor1":
              viewer.value.setPanorama(indoor1);
              markersPlugin.removeMarker(marker);
              markersPlugin.addMarker({
                id: "goIndoor2",
                tooltip: "点击切换其他房子",
                circle: 8,
                style: {
                  fill: "rgba(255,255,255,0.8)",
                },
                longitude: 4.6,
                latitude: 0.1,
              });
              break;
            case "goIndoor2":
              viewer.value.setPanorama(indoor2);
              markersPlugin.removeMarker(marker);
              markersPlugin.addMarker({
                id: "goIndoor3",
                tooltip: "点击切换其他房子",
                circle: 8,
                style: {
                  fill: "rgba(255,255,255,0.8)",
                },
                longitude: 0.32,
                latitude: -0.0,
              });
              break;
            case "goIndoor3":
              viewer.value.setPanorama(indoor3);
              markersPlugin.removeMarker(marker);
              markersPlugin.addMarker({
                id: "goRegion",
                tooltip: "点击返回城市",
                circle: 8,
                style: {
                  fill: "rgba(255,255,255,0.8)",
                },
                longitude: -0.005,
                latitude: 0.1,
              });
              break;
            case "goRegion":
              viewer.value.setPanorama(region);
              markersPlugin.removeMarker(marker);
              markersPlugin.addMarker({
                id: "goIndoor1",
                tooltip: "点击查看楼盘内房子",
                circle: 8,
                style: {
                  fill: "rgba(255,255,255,0.8)",
                },
                longitude: 3.09,
                latitude: -0.25,
              });
            default:
              break;
          }
        },
      );
    });

    onUnmounted(() => {
      viewer.value = null;
    });

    return { viewer };
  },
};
</script>

<style lang="less" scoped>
.stereograph {
  width: 60%;
  height: 70%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.2),
    rgba(58, 76, 99, 0.2)
  );
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  border-radius: 20px;
}

.arrowLeft {
  position: absolute;
  top: 20px;
  left: 25px;
  text-decoration: none;
  color: #000;
  z-index: 100;
  cursor: pointer;
}

#viewer {
  width: 100%;
  height: 100%;
}
</style>
