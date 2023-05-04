<template>
  <div class="main">
    <transition name="fade">
      <div v-if="show" class="left">
        <div class="left__title">
          Everything complicated is simple, if we take care of the code
        </div>
        <div class="left__btn" @click="consoleView">View our works</div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show" class="right">
        <img src="@/assets/monitor/monitor.png" alt="monitor" />
        <div class="right__content">
          <img src="@/assets/monitor/monitor_img_1.png" alt="monitor img" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    consoleView() {
      console.log(this.show, "hei");
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, "500");
  },
};
</script>

<style scoped lang="scss">
.vis {
  visibility: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(600px);
  opacity: 0;
}
.main {
  display: flex;
  height: 980px;
  justify-content: space-between;
  background-image: url("@/assets/Vector.png");
  background-position: 0 32px;
  background-repeat: no-repeat;
  .left {
    align-self: center;
    margin-left: 191px;
    position: relative;
    height: 100%;
    .left__title {
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      position: absolute;
      top: 239px;
      width: 600px;
    }
    .left__btn {
      position: relative;
      top: 636px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      width: 244px;
      height: 59px;
      background-color: #3777f3;
      border-radius: 50px;
      padding: 20px 50px;
      text-transform: uppercase;
      cursor: pointer;
    }
    .left__btn:hover {
      transition: 0.5s;
      background-color: #ffffff;
      color: #3777f3;
    }
  }
  .right {
    align-self: flex-end;
    position: relative;
    .right__content {
      position: absolute;
      top: 52px;
      right: 0;
    }
  }
}
</style>
