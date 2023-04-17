<template>
  <div class="img_div">
    <img
      :src="src || require('../assets/' + img)"
      fit="cover"
    />
    <a
      class="mask"
      @click="goHref($event, productions.href)"
      target="_blank"
    >
      <p>
        <span>{{ productions.title }}</span>
        <br />
        {{ productions.content }}
      </p>
    </a>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "imgDiv",
  props: {
    productions: {
      type: Object,
      default: () => {},
    },
    img: {
      type: String,
      default: "",
    },
    routerLink: {
      type: String || null,
      default: "",
    },
  },
  setup(props) {
    const router = useRouter();
    const src = computed(() =>
      props.productions.src ? productions.src : false,
    );

    function goHref(e, href) {
      e.preventDefault();
      if (props.routerLink) {
        router.push(props.routerLink);
        return;
      }
      window.open(href);
    }

    return {
      src,
      goHref,
    };
  },
};
</script>

<style lang="less" scoped>
.img_div {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 5px 10px;
  .mask {
    display: block;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(101, 101, 101, 0.7);
    color: #ffffff;
    opacity: 0;
    transition: opacity 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
      text-align: center;
      padding: 20px;
      span {
        display: inline-block;
        transform: translateY(-16px);
        line-height: 40px;
        font-weight: bolder;
        transition: all 0.7s;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }
  &:hover .mask {
    opacity: 1;
  }
  &:hover .mask span {
    transform: translateY(0px);
  }
}
</style>
