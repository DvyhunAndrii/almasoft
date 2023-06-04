<template>
  <section class="home">
    <!-- <transition name="fade">
      <div v-if="show1" class="left">
        <div class="left__title">
          Everything complicated is simple, if we take care of the code
        </div>
        <div class="left__btn" @click="consoleView">View our works</div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show1" class="right">
        <img src="@/assets/monitor/monitor.png" alt="monitor" />
        <div class="right__content">
          <img src="@/assets/monitor/monitor_img_1.png" alt="monitor img" />
        </div>
      </div>
    </transition> -->
    <div class="home-left">
      <div class="home-left__title">
        Everything complicated is simple, if we take care of the code
      </div>
      <div class="home-left__btn">View our works</div>
    </div>
    <div class="home-right">
      <img src="@/assets/monitor/monitor.png" alt="monitor" />
      <div class="home-right__content">
        <img src="@/assets/monitor/monitor_img_1.gif" alt="monitor img" />
      </div>
    </div>
    <!-- <div class="alma-soft"></div> -->
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "MainView",
  // data() {
  //   return {
  //     show1: false,
  //   };
  // },
  methods: {
    homeTL() {
      const navMenu = document.querySelector(".main-nav");
      let tl = gsap.timeline();
      tl.to(navMenu, { duration: 1, ease: "slow" });
      tl.to(
        ".home",
        {
          opacity: 1,
          duration: 1,
          ease: "slow",
        },
        "-=2"
      );
      tl.to(".home-left", {
        opacity: 1,
        duration: 1,
        ease: "slow",
        // scrollTrigger: {
        // trigger: ".contact-us",
        // start: "top 20%",
        // end: "top 20%",
        // },
      });
      tl.from(
        ".home-right",
        {
          duration: 1,
          left: 1100,
        },
        "-=1"
      );
      return tl;
    },
  },
  mounted: function () {
    this.homeTL().play();
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 1080px;
  // height: 100vh;
  justify-content: space-between;
  background-color: #e0e0e0;
  padding-top: 99px;
  position: relative;
  opacity: 0;
  overflow: hidden;
  z-index: 2;
  .alma-soft {
    content: "";
    position: absolute;
    top: 20%;
    left: 0;
    opacity: 0.6;
    background-image: url("@/assets/AlmaSoft.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 20%;
  //   opacity: 0.6;
  //   left: 0;
  //   background-image: url("@/assets/AlmaSoft.png");
  //   background-repeat: no-repeat;
  //   width: 100%;
  //   height: 100%;
  // }
  .home-left {
    align-self: center;
    margin-left: 191px;
    position: relative;
    height: 100%;
    opacity: 0;
    .home-left__title {
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      position: absolute;
      top: 239px;
      width: 600px;
    }
    .home-left__btn {
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
      z-index: 10;
    }
    .home-left__btn:hover {
      transition: 0.5s;
      background-color: #16449e;
    }
  }
  .home-right {
    align-self: flex-end;
    position: relative;
    right: 0.5px;

    .home-right__content {
      position: absolute;
      top: 52px;
      right: 0;
    }
    .home-right__content img {
      width: 1030px;
    }
  }
}
</style>
