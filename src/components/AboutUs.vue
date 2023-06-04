<template>
  <section id="about-us" class="about-us">
    <div class="about-us__left about-us-left">
      <div class="about-us__left about-us-left__container">
        <div class="about-us-left__title">Alma-Soft</div>
        <div class="about-us-left__subtitle">
          We are the Ukrainian software company.
        </div>
        <div class="about-us-left__text">
          We specializing in Web, App and Software development. One of our most
          important features that we are not just solid performer, but a
          reliable partner.
        </div>
        <div class="about-us-left__btn" @click="consoleView">More about us</div>
      </div>
    </div>
    <ul class="info">
      <li class="info__block info__1">
        <div class="info__item info__item-1">
          <div class="info__icon info__icon-1"></div>
          <div class="info__text">
            <div class="info__title">100%</div>
            <div class="info__subtitle">satisfied clients</div>
          </div>
        </div>
        <div class="info__item info__item-2">
          <div class="info__icon info__icon-2"></div>
          <div class="info__text">
            <div class="info__title">Full Cycle</div>
            <div class="info__subtitle">Development</div>
          </div>
        </div>
        <div class="info__item info__item-3">
          <div class="info__icon info__icon-3"></div>
          <div class="info__text">
            <div class="info__title">Innovative</div>
            <div class="info__subtitle">solutions</div>
          </div>
        </div>
      </li>
      <li class="info__block info__2">
        <div class="info__item info__item-4">
          <div class="info__icon info__icon-4"></div>
          <div class="info__text">
            <div class="info__title">More 60</div>
            <div class="info__subtitle">success projects</div>
          </div>
        </div>
        <div class="info__item info__item-5">
          <div class="info__icon info__icon-5"></div>
          <div class="info__text">
            <div class="info__title">Support and maintenance</div>
            <div class="info__subtitle">services</div>
          </div>
        </div>
        <div class="info__item info__item-6">
          <div class="info__icon info__icon-6"></div>
          <div class="info__text">
            <div class="info__title">Permanent</div>
            <div class="info__subtitle">development</div>
          </div>
        </div>
      </li>
      <li class="info__block info__3">
        <div class="info__item info__item-7">
          <div class="info__icon info__icon-7"></div>
          <div class="info__text">
            <div class="info__title">53% clients</div>
            <div class="info__subtitle">turned to us again</div>
          </div>
        </div>
        <div class="info__item info__item-8">
          <div class="info__icon info__icon-8"></div>
          <div class="info__text">
            <div class="info__title">Focus</div>
            <div class="info__subtitle">on long-term relationships</div>
          </div>
        </div>
        <div class="info__item info__item-9">
          <div class="info__icon info__icon-9"></div>
          <div class="info__text">
            <div class="info__title">Well</div>
            <div class="info__subtitle">coordinated team</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="about-us__alma-soft"></div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "AboutUs",
  data() {
    return {
      show1: false,
      show2: true,
    };
  },
  methods: {
    consoleView() {
      console.log("click");
    },
    scrollAnimation() {
      // const home = document.querySelector(".home");
      const slide1 = document.querySelector(".slide-1");
      const slide2 = document.querySelector(".slide-2");
      // gsap.from(".about-us__alma-soft", {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: ".slide-2",
      //     scrub: true,
      //     start: "-1080px",
      //     pin: ".about-us__alma-soft",
      //     pinSpacing: false,
      //   },
      // });
      let tl = gsap.timeline();
      tl.to(slide2, {
        scrollTrigger: {
          trigger: slide1,
          start: "0",
          end: "+=1780",
          scrub: true,
          pinSpacing: false,
          pin: slide2,
        },
      });
      tl.to(".about-us__left", {
        opacity: 1,
        y: -400,
        scrollTrigger: {
          trigger: slide1,
          start: "1080",
          end: "+=600",
          scrub: 1,
        },
      });
      tl.to(".info", {
        opacity: 1,
        y: 950,
        scrollTrigger: {
          trigger: slide1,
          start: "2300 top",
          end: "+=1400",
          scrub: 1,
          // markers: true,
        },
      });
      tl.to(".about-us__alma-soft", {
        opacity: 0.6,
        y: 1350,
        scrollTrigger: {
          trigger: slide1,
          start: "1800 top",
          end: "+=1850",
          scrub: 0.1,
        },
      });
      tl.to(".info__1", {
        opacity: 1,
        duration: 1,
        // y: -400,
        scrollTrigger: {
          trigger: ".about-us",
          start: "2300 top",
          end: "+=200",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".info__2", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-us",
          start: "2500 top",
          end: "+=200",
          scrub: true,
        },
      });
      tl.to(".info__3", {
        opacity: 1,
        duration: 1,
        pin: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "2700 top",
          end: "+=200",
          scrub: true,
        },
      });

      // tl.to(".about-us-left__container", {
      //   // opacity: 1,
      //   y: -400,
      //   scrollTrigger: {
      //     trigger: ".about-us",
      //     start: "top 30%",
      //     // end: "+=800",
      //     scrub: 1,
      //     markers: true,
      //   },
      // });
      // tl.from(".about-us__alma-soft", {
      //   opacity: 0,
      //   y: -2000,
      //   scrollTrigger: {
      //     trigger: home,
      //     scrub: true,
      //     start: "1080px",
      //   },
      // });
    },
  },
  mounted: function () {
    this.scrollAnimation();
  },
};
</script>

<style scoped lang="scss">
.about-us {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/laptop.jpg");
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: 2160px;
  z-index: 1;

  .about-us__alma-soft {
    content: "";
    position: fixed;
    top: 27%;
    // left: 12%;
    opacity: 0;
    background-image: url("@/assets/AlmaSoft.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .about-us-left {
    opacity: 0;
    margin: 800px 0 0 191px;
    position: relative;
    z-index: 1;
    top: 300px;

    .about-us-left__container {
      color: #ffffff;
      // top: -500px;
      .about-us-left__title {
        // margin-top: 355px;
        font-size: 75px;
        font-weight: 800;
        margin-bottom: 30px;
        line-height: 103%;
      }
      .about-us-left__subtitle {
        font-size: 20px;
        font-weight: 700;
        line-height: 29px;
        text-transform: uppercase;
        width: 500px;
        margin-left: 25px;
      }
      .about-us-left__text {
        font-size: 20px;
        font-weight: 300;
        width: 500px;
        margin: 0 0 40px 25px;
        line-height: 29px;
      }
      .about-us-left__btn {
        font-size: 16px;
        font-weight: 600;
        background-color: #3777f3;
        border-radius: 50px;
        padding: 20px 50px;
        text-transform: uppercase;
        cursor: pointer;
        justify-content: center;
        display: flex;
        width: 234px;
      }
      .about-us-left__btn:hover {
        transition: 0.5s;
        background-color: #16449e;
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    opacity: 1;
    position: relative;
    top: -25%;
    // transform: translateY(-200px) !important;
    // left: 12%;
    margin-left: 191px;
    z-index: 5;
    .info__block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 130px;
      opacity: 0;
      .info__item {
        display: flex;
        margin-right: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 1s;
        &:hover .info__text {
          color: #ffffff;
          transition: 1s;
        }
        .info__icon {
          background-repeat: no-repeat;
          margin-right: 25px;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-position: top;
          transition: 1s;
        }
        .info__icon-1 {
          background-image: url("@/assets/about-us/1.svg");
          transition: 1s;
        }
        .info__icon-2 {
          background-image: url("@/assets/about-us/2.svg");
          transition: 1s;
        }
        .info__icon-3 {
          background-image: url("@/assets/about-us/3.svg");
          transition: 1s;
        }
        .info__icon-4 {
          background-image: url("@/assets/about-us/4.svg");
          transition: 1s;
        }
        .info__icon-5 {
          background-image: url("@/assets/about-us/5.svg");
          transition: 1s;
        }
        .info__icon-6 {
          background-image: url("@/assets/about-us/6.svg");
          transition: 1s;
        }
        .info__icon-7 {
          background-image: url("@/assets/about-us/7.svg");
          transition: 1s;
        }
        .info__icon-8 {
          background-image: url("@/assets/about-us/8.svg");
          transition: 1s;
        }
        .info__icon-9 {
          background-image: url("@/assets/about-us/9.svg");
          transition: 1s;
        }

        .info__text {
          width: 310px;
          display: flex;
          flex-direction: column;
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          color: #84aeff;
          transition: 1s;
        }
      }
    }
    .info__item-1 .info__icon {
    }
    .info__item-1:hover .info__icon-1 {
      background-image: url("@/assets/about-us/11.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-2:hover .info__icon-2 {
      background-image: url("@/assets/about-us/22.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-3:hover .info__icon-3 {
      background-image: url("@/assets/about-us/33.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-4:hover .info__icon-4 {
      background-image: url("@/assets/about-us/44.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-5:hover .info__icon-5 {
      background-image: url("@/assets/about-us/55.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-6:hover .info__icon-6 {
      background-image: url("@/assets/about-us/66.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-7:hover .info__icon-7 {
      background-image: url("@/assets/about-us/77.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-8:hover .info__icon-8 {
      background-image: url("@/assets/about-us/88.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
    .info__item-9:hover .info__icon-9 {
      background-image: url("@/assets/about-us/99.svg");
      transition: background-image 0.25s ease-in-out 0.1s;
    }
  }
  .blue {
    color: #004ca9;
  }
}
</style>
