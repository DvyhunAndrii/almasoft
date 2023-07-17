<template>
  <section class="home">
    <div class="container">
      <div class="home-left">
        <div class="home-left__title">
          Everything complicated is simple, if we take care of the code
        </div>
        <div class="home-left__btn">View our works</div>
      </div>
      <div class="home-right">
        <img src="@/assets/monitor/monitor-full.png" alt="monitor" />
        <div class="home-right__content">
          <img src="@/assets/monitor/monitor_img_1.gif" alt="monitor img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import "@/styles/main.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "@/assets/js/animation.js";
gsap.registerPlugin(ScrollTrigger);
import { Power4 } from "gsap";
export default {
  name: "MainView",
  // data() {
  //   return {
  //     st: false,
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
      });
      tl.from(
        ".home-right",
        {
          duration: 2.5,
          left: 1700,
          opacity: 0,
          ease: Power4.easeOut,
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
$maxWidth: 1920;
@mixin adaptiv-font($pcSize, $mobSize) {
  $addSize: $pcSize - $mobSize;
  $maxWidth: $maxWidth - 390;
  font-size: calc(
    #{$mobSize + px} + #{$addSize} * ((100vw - 375px) / #{$maxWidth})
  );
}
canvas {
  width: 100%;
  height: 100%;
}
.home {
  // max-height: 1080px;
  height: 100vh;
  width: 100%;
  // height: 1080px;
  display: flex;
  background-color: #e0e0e0;

  position: relative;
  opacity: 0;
  overflow: hidden;
  z-index: 2;
  overflow-x: hidden;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .home-left {
    align-self: center;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    /* margin-top: 22.13vh; */
    // left: 3vw;
    .home-left__title {
      // @include adaptiv-font(70, 38);
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      position: absolute;
      // top: 22.13vh;
      // width: 31.25vw;
      // width: 23.438vw;
      width: 600px;
      margin-bottom: 4.63vh;
    }
    .home-left__btn {
      // position: relative;
      // top: 65.88vh;
      // @include adaptiv-font(16, 12);
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      width: fit-content;
      height: 59px;
      background-color: #3777f3;
      border-radius: 50px;
      padding: 20px 50px;
      text-transform: uppercase;
      cursor: pointer;
      justify-content: center;
      display: flex;
      align-items: center;
      z-index: 10;
      transition: 0.5s;
      white-space: nowrap;
      position: absolute;
      top: 70vh;
    }
    .home-left__btn:hover {
      transition: 0.5s;
      background-color: #16449e;
    }
  }
  .home-right {
    align-self: flex-end;
    position: relative;
    // overflow: hidden;
    // margin-top: 15.13vh;
    margin-right: -5.961vw;
    margin-left: auto;
    img {
      max-width: 62.852vw;
      width: 61vw;
      max-height: 1025px;
      height: 85vh;
      overflow: hidden;
    }
    .home-right__content {
      position: absolute;
      top: 4.9vh;
      right: 6.328vw;
      overflow: hidden;
      border-radius: 20px 0 0 20px;
    }
    .home-right__content img {
      // width: 52.4vw;
      max-width: 48.242vw;
      width: 48.242vw;
      // max-height: 791px;
      height: 72vh;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 2300px) {
    .home-right {
      margin-right: -17vw;
      img {
        max-width: 1250px;
        width: 65.104vw;
      }
      .home-right__content {
        top: 3vh;
      }
      .home-right__content img {
        max-width: 1000px;
        width: 52vw;
        height: 76vh;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      flex-direction: column;
    }
    .home-left {
      margin-top: 14vh;
      align-self: auto;
      justify-content: flex-start;
      margin-left: 20px;
    }
    .home-left .home-left__title {
      font-size: 38px;
      position: relative;
      width: auto;
    }
    .home-left .home-left__btn {
      font-size: 12px;
      position: relative;
      top: 0;
      padding: 16px 30px;
    }
    .container .home-right {
      margin-right: -22vw;
      left: -15px;
    }
    .home-right img {
      height: 43vh;
      width: 182vw;
      position: relative;
      left: 3vw;
    }
    .home-right .home-right__content {
      top: 1vh;
      left: 19.3vw;
    }
    .home-right .home-right__content img {
      width: 100vw;
      height: 39vh;
    }
  }
}
</style>
