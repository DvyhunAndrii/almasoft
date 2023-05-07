<template>
  <div class="main">
    <transition name="fade">
      <div v-if="show1" class="left">
        <div class="left__title">Our team</div>
        <div class="left__subtitle">
          “A harmonious team is the key to success”
        </div>
        <div class="left__text">
          Our team is made up of passionate individuals who truly love what they
          do and do it with high quality.
        </div>
        <div class="left__btn" @click="consoleView">View our works</div>
        <div class="left__title left__title_bottom">Join us Experience</div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show1" class="right">
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
  name: "CaseStudy",
  data() {
    return {
      show1: false,
    };
  },
  methods: {
    consoleView() {
      console.log(this.show, "hei");
    },
    onScroll() {
      console.log("onScroll");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    setTimeout(() => {
      this.show1 = true;
    }, "500");
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
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
  margin-top: 99px;
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
    .left__title_bottom {
      opacity: 30%;
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
      justify-content: center;
      display: flex;
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
    right: 0.5px;
    .right__content {
      position: absolute;
      top: 52px;
      right: 0;
    }
  }
}
</style>
