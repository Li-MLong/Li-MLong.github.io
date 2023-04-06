<template>
  <el-card class="message">
    <div class="avatar">
      <el-avatar
        :size="200"
        fit="scale-down"
        :src="src"
        @error="errorHandler"
        class="avatarImg"
      >
        <img :src="require('@/assets/src.png')" />
      </el-avatar>
    </div>

    <h1>{{ name ? name : "Mr Li" }}</h1>

    <el-breadcrumb separator="|" class="breadcrumb">
      <el-breadcrumb-item
        v-for="item in message"
        :key="item"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>

    <div class="icons">
      <el-icon :title="'手机：' + mobileNo">
        <Iphone />
      </el-icon>

      <a
        href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=4NnR09XW09jU2KCRkc6Dj40"
        target="_blank"
      >
        <el-icon :title="'邮箱：' + mailbox">
          <Postcard />
        </el-icon>
      </a>

      <el-icon :title="'微信：' + wechatNo">
        <ChatRound />
      </el-icon>
    </div>

    <div class="print">
      <el-button round>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&amp;uin=913563848&amp;site=qq&amp;menu=yes"
        >
          <i class="el-icon-s-promotion"></i> 点击进行QQ交谈
        </a>
      </el-button>
    </div>
  </el-card>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Message",
  setup() {
    const store = useStore();
    const src = computed(() => store.state.home.avatar);
    const name = computed(() => store.state.home.name);
    const message = computed(
      () => store.state.home.message,
    );
    const mobileNo = computed(
      () => store.state.home.mobileNo,
    );
    const mailbox = computed(
      () => store.state.home.mailbox,
    );
    const wechatNo = computed(
      () => store.state.home.wechatNo,
    );

    function errorHandler() {
      return true;
    }

    return {
      src,
      name,
      message,
      mobileNo,
      mailbox,
      wechatNo,
      errorHandler,
    };
  },
};
</script>

<style lang="less" scope>
.message {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
  .avatarImg {
    box-shadow: 0px 0px 1px grey;
  }
  h1 {
    height: 70px;
    line-height: 70px;
  }
  .breadcrumb {
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .icons {
    font-size: 28px;
    line-height: 70px;
    a {
      color: #303133;
      text-decoration: none;
    }
    i {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  .print {
    margin-top: 30px;
    a {
      text-decoration: none;
      color: #606266;
    }
  }
}
</style>
