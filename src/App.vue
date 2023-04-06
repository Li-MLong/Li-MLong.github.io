<template>
  <router-view />
</template>

<script setup></script>

<style lang="less">
@media screen and (max-width: 1530px) {
  .home-center {
    margin-left: 295px !important;
  }
  .home-left {
    position: fixed !important;
  }
}
@media screen and (max-width: 1290px) {
  .sidebar {
    display: none;
  }
}
@media screen and (max-width: 1190px) {
  .home-center,
  .home-left {
    width: 100% !important;
    position: static !important;
    margin: 0 !important;
  }
  .el-card {
    background-color: #fff !important;
  }
}
@media screen and (max-width: 700px) {
  .production {
    justify-content: center;
    > div {
      width: 100% !important;
      margin-top: 10px;
    }
  }
  .work {
    padding: 0 !important;
  }
  .skill-item {
    width: 100% !important;
  }
}
@media screen and (max-width: 500px) {
  .work {
    padding: 0 !important;
    .work-card > div {
      padding: 5 !important;
      .work-card-content {
        font-size: 10px !important;
      }
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    -225deg,
    #fffeff 0%,
    #d7fffe 100%
  );
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
}
.el-card {
  background-color: rgba(0, 0, 0, 0) !important;
}
.el-collapse-item__header {
  border-bottom: none !important;
}
body {
  cursor: url(./assets/blue.png), auto;
}
</style>
