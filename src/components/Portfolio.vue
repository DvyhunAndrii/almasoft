<template>
  <section id="portfolio" class="portfolio">
    <div class="left">
      <div class="left__title">Case Study</div>
      <div class="left__text">
        Click a title of project to get to the more detail description
      </div>
      <div class="left__btn" @click="consoleView">More about us</div>
    </div>
    <div class="right">
      <div class="slide right__content">
        <img src="@/assets/case/prometey.png" alt="prometey img" />
        <div class="right__text">
          <div class="right__title">Prometey</div>
          <div class="right__subtitle">
            Website for the grain market of Ukraine
          </div>
        </div>
      </div>
      <div class="slide right__content">
        <img src="@/assets/case/vodokanal.png" alt="vodokanal img" />
        <div class="right__text">
          <div class="right__title">Nikolaev water utility</div>
          <div class="right__subtitle">
            Website for the City Communal Enterprise
          </div>
        </div>
      </div>
      <div class="slide right__content">
        <img src="@/assets/case/redbini.png" alt="redbini img" />
        <div class="right__text">
          <div class="right__title">RedBini</div>
          <div class="right__subtitle">Dating website</div>
        </div>
      </div>
      <div class="slide right__content">
        <img src="@/assets/case/vodokanal_bot.png" alt="vodokanal_bot img" />
        <div class="right__text">
          <div class="right__title">Nikolaev water utility</div>
          <div class="right__subtitle">
            Chat bot for working with a personal account
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "CaseStudy",
  data() {},
  methods: {
    consoleView() {
      console.log("click");
    },
    scrollAnimation() {
      let tl = gsap.timeline();
      const slide3 = document.querySelector(".slide-3");
      const slide4 = document.querySelector(".slide-4");
      tl.to(slide4, {
        scrollTrigger: {
          trigger: slide3,
          start: "bottom bottom",
          end: "+=2000",
          pinSpacing: false,
          pin: slide4,
          // markers: true,
        },
      });
    },
  },
  mounted: function () {
    this.scrollAnimation();
  },
};
</script>

<style scoped lang="scss">
.portfolio {
  display: flex;
  height: 1080px;
  justify-content: space-between;
  background: linear-gradient(229.42deg, #0b0d0b 48.14%, #0b2a4b 79.15%);
  background-repeat: no-repeat;
  padding-top: 99px;
  position: relative;
  overflow: hidden;
  // top: -1450px;
  &:after {
    content: "";
    position: absolute;
    top: 67%;
    left: 0;
    background-image: url("@/assets/AlmaSoft.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .left {
    margin-left: 191px;
    position: relative;
    top: 255px;
    height: 100%;
    .left__title {
      font-size: 70px;
      font-weight: 800;
      color: #ffffff;
      // position: absolute;
      // top: 239px;
      width: 600px;
      margin-bottom: 10px;
    }
    .left__text {
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
      margin-bottom: 40px;
      width: 429px;
    }
    .left__btn {
      // position: relative;
      // top: 636px;
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
      margin-bottom: 60px;
    }
    .left__btn:hover {
      transition: 0.5s;
      background-color: #16449e;
    }
  }
  .right {
    margin-top: 140px;
    display: flex;
    color: #ffffff;

    .right__content {
      margin-right: 40px;
      width: 954px;
      height: 620px;
      img {
        width: 100%;
      }
    }
    .right__title {
      font-weight: 700;
      font-size: 34px;
    }
    .right__subtitle {
      font-weight: 400;
      font-size: 20px;
    }
  }
}
</style>
