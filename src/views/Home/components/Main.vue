<template>
  <el-card class="main">
    <div class="main-item">
      <h2>基本信息</h2>
      <Basic />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="skill">
      <h2>职业技能</h2>
      <Skill />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="education">
      <h2>教育经历</h2>
      <School />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="work">
      <h2>工作经历</h2>
      <Work />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="production">
      <h2>个人作品</h2>
      <Production />
    </div>
  </el-card>
</template>

<script>
import Basic from "@/components/Basic.vue";
import School from "@/components/School.vue";
import Skill from "@/components/Skill.vue";
import Work from "@/components/Work.vue";
import Production from "@/components/Production.vue";

export default {
  name: "Main",
  components: {
    Basic,
    School,
    Skill,
    Work,
    Production,
  },
};
</script>

<style lang="less" scope>
.main {
  width: 100%;
  background-color: #fff;
  padding: 20px 25px;
  .main-item {
    width: 100%;
    > h2 {
      color: #505050;
      margin-bottom: 33px;
    }
  }
}
</style>
