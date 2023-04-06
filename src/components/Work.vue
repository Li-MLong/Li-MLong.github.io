<template>
  <div class="work">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time"
        v-for="(item, i) in works"
        :key="i"
        placement="top"
        size="large"
      >
        <el-card shadow="never" class="work-card">
          <h3>{{ item.name }}</h3>
          <p>{{ item.site }} | {{ item.company }}</p>
          <el-collapse>
            <el-collapse-item>
              <template #title>
                <p
                  class="work-card-title"
                  onselectstart="return false;"
                >
                  主要技术栈: {{ item.title }}
                </p>
              </template>
              <p
                class="work-card-content"
                v-html="item.content"
              ></p>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Work",
  setup() {
    const store = useStore();
    const works = computed(() => store.state.home.works);

    return {
      works,
    };
  },
};
</script>

<style lang="less" scope>
.work {
  padding: 0 50px;
  .work-card {
    .work-card-title {
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      line-height: 40px;
    }
  }
}
</style>
