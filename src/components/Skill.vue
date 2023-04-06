<template>
  <div class="skill">
    <div
      class="skill-item"
      v-for="item in skills"
      :key="item.type"
    >
      <p>{{ item.type }}</p>
      <el-rate
        :model-value="item.score"
        disabled
        :max="10"
        show-score
        text-color="#1F2D3D"
      >
      </el-rate>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Skill",
  setup() {
    const store = useStore();
    const skills = computed(() => store.state.home.skills);

    return {
      skills,
    };
  },
};
</script>

<style lang="less" scope>
.skill {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .skill-item {
    height: 80px;
    width: 50%;
    p {
      margin: 10px 0;
      font-weight: bolder;
    }
  }
}
</style>
