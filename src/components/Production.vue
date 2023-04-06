<template>
  <div class="production">
    <div class="box-left">
      <ImgDiv
        :productions="productions[0]"
        img="cangku.png"
      ></ImgDiv>
      <ImgDiv
        :productions="productions[1]"
        img="xiaochengxu.png"
      ></ImgDiv>
    </div>
    <div>
      <ImgDiv
        :productions="productions[2]"
        img="guanwang.png"
      ></ImgDiv>
    </div>
    <div class="box-bottom">
      <ImgDiv
        :productions="productions[3]"
        img="region.jpg"
      ></ImgDiv>
    </div>
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
.production {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    overflow: hidden;
    width: 50%;
  }
  .box-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      height: 50%;
    }
  }
  .box-bottom {
    width: 100%;
    height: 200px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
