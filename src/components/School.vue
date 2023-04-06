<template>
  <div class="education">
    <div class="badge">
      <el-avatar
        :size="60"
        :src="badge"
        @error="errorHandler"
      >
        <img :src="require('../assets/badge.png')" />
      </el-avatar>
    </div>
    <div class="details">
      <div>
        <b>{{ school.name }}</b>
        <p>{{ school.year }} | {{ school.department }}</p>
      </div>
      <p>
        {{ school.content }}
      </p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "School",
  setup() {
    const store = useStore();
    const badge = computed(
      () => store.state.home.schoolBadge,
    );
    const school = computed(() => store.state.home.school);

    function errorHandler() {
      return true;
    }

    return {
      badge,
      school,
      errorHandler,
    };
  },
};
</script>

<style lang="less" scope>
.education {
  display: flex;
  .badge {
    margin-right: 20px;
  }
  .details {
    line-height: 25px;
    > p {
      margin: 20px 0;
      line-height: 30px;
    }
  }
}
</style>
