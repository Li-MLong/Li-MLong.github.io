<template>
  <div class="production">
    <el-row :gutter="20" class="row-box">
      <el-col :lg="12" :md="24">
        <el-row class="row-box">
          <el-col :md="24">
            <ImgDiv
              :productions="productions[0]"
              img="cangku.png"
            ></ImgDiv>
          </el-col>
        </el-row>
        <el-row class="row-box row-item">
          <el-col :md="24">
            <ImgDiv
              :productions="productions[1]"
              img="xiaochengxu.png"
            ></ImgDiv>
          </el-col>
        </el-row>
      </el-col>

      <el-col :lg="12" :md="24" class="needAllHeight">
        <ImgDiv
          :productions="productions[2]"
          img="guanwang.png"
        ></ImgDiv>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row-box">
      <el-col :lg="12" :md="24">
        <ImgDiv
          :productions="productions[3]"
          img="region.jpg"
          routerLink="/stereograph"
        ></ImgDiv>
      </el-col>
      <el-col :lg="12" :md="24" class="row-lg-item">
        <ImgDiv
          :productions="productions[4]"
          img="map.png"
          routerLink="/mymap"
        ></ImgDiv>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import ImgDiv from "./imgDiv.vue";

export default {
  name: "Production",
  components: {
    ImgDiv,
  },
  setup() {
    const store = useStore();
    const productions = computed(
      () => store.state.home.productions,
    );

    return {
      productions,
    };
  },
};
</script>

<style lang="less" scope>
.row-box {
  margin-bottom: 10px;
}
.row-item {
  margin-top: 20px;
}

@media screen and (max-width: 1200px) {
  .row-lg-item {
    margin-top: 20px;
  }
}
</style>
