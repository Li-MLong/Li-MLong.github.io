<template>
  <div class="home" id="basic">
    <div class="home-left">
      <Message />
    </div>
    <div class="home-center">
      <Main></Main>
      <div class="copyright">
        Copyright © 2022 All Rights Reserved of
        <a
          href="https://github.com/Li-MLong"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Message from "./components/Message";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
export default {
  name: "HomeView",
  components: {
    Message,
    Main,
    Sidebar,
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 99.9%;
  padding: 30px 10px;
  .home-left {
    width: 290px;
    height: 520px;
    position: fixed;
  }
  .home-center {
    background-color: #fff;
    color: #303133;
    width: 900px;
    margin: 0 auto;

    .copyright {
      background-color: #e1ffff;
      padding-top: 20px;
      text-align: center;
      > a {
        color: #303133;
        text-decoration: none;
      }
    }
  }
  .sidebar {
    width: 54px;
    height: 520px;
    background-image: linear-gradient(
      -225deg,
      #fffeff 0%,
      #d7fffe 100%
    );
    position: fixed;
    top: 30px;
    right: 25px;
  }
}
</style>
