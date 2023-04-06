<template>
  <div class="basic">
    <dl>
      <dt>姓名：</dt>
      <dd>{{ home.name ? home.name : "Mr Li" }}</dd>
      <dt>性别：</dt>
      <dd>{{ home.sex ? home.sex : "男" }}</dd>
      <dt>出生日期：</dt>
      <dd>
        {{ home.birthday ? home.birthday : "09 Jan 1991" }}
      </dd>
      <dt>手机：</dt>
      <dd>{{ home.mobileNo ? home.mobileNo : "xxxx" }}</dd>
      <dt>微信：</dt>
      <dd>{{ home.wechatNo ? home.wechatNo : "xxxx" }}</dd>
      <dt>E-MAIL：</dt>
      <dd>
        <a
          href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=4NnR09XW09jU2KCRkc6Dj40"
          target="_blank"
          title="给我写信"
          >{{
            home.mailbox ? home.mailbox : "xxxx@xx.com"
          }}</a
        >
      </dd>
    </dl>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Basic",
  setup() {
    const store = useStore();
    const home = computed(() => store.state.home);

    return {
      home,
    };
  },
};
</script>

<style lang="less" scope>
.basic {
  dl {
    margin-bottom: 50px;
  }
  dl dt {
    font-size: 16px;
    float: left;
    font-weight: bold;
    margin: 10px 0;
    width: 150px;
  }
  dl dd {
    font-size: 16px;
    margin: 3px 0;
    padding: 10px 0;
    a {
      color: #303133;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
