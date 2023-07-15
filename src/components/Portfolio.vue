<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="left">
        <div class="left__title">Case Study</div>
        <div class="left__text">
          Click a title of project to get to the more detail description
        </div>
        <div class="left__btn" @click="consoleView">More about us</div>
        <div class="slider-block">
          <div @click="prev" class="slider-block__btn slider-block__prev"></div>
          <div class="slider-block__nums">
            <div class="slider-block__num">
              {{ num1 }}
            </div>
            <div class="slider-block__slesh"></div>
            <div class="slider-block__num">
              {{ num2 }}
            </div>
          </div>
          <div @click="next" class="slider-block__btn slider-block__next"></div>
        </div>
      </div>
    </div>
    <div class="right slider">
      <div class="slider-line">
        <div class="right__content slide1">
          <img src="@/assets/case/prometey.png" alt="prometey img" />
          <div class="right__text active-text">
            <div class="right__title">Prometey</div>
            <div class="right__subtitle">
              Website for the grain market of Ukraine
            </div>
          </div>
        </div>
        <div class="right__content slide2">
          <img src="@/assets/case/vodokanal.png" alt="vodokanal img" />
          <div class="right__text">
            <div class="right__title">Nikolaev water utility</div>
            <div class="right__subtitle">
              Website for the City Communal Enterprise
            </div>
          </div>
        </div>
        <div class="right__content slide3">
          <img src="@/assets/case/redbini.png" alt="redbini img" />
          <div class="right__text">
            <div class="right__title">RedBini</div>
            <div class="right__subtitle">Dating website</div>
          </div>
        </div>
        <div class="right__content slide4">
          <img src="@/assets/case/vodokanal_bot.png" alt="vodokanal_bot img" />
          <div class="right__text">
            <div class="right__title">Nikolaev water utility</div>
            <div class="right__subtitle">
              Chat bot for working with a personal account
            </div>
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
  data() {
    return {
      num1: 1,
      num2: 4,
      offset: 0,
    };
  },
  methods: {
    consoleView() {
      console.log("click");
    },
    removeActive() {
      const slider = document.querySelectorAll(".right__content");
      slider.forEach((el) => {
        el.classList.remove("active");
        el.classList.remove("new-active");
      });
    },
    removeActiveText() {
      const sliderText = document.querySelectorAll(
        ".right__content .right__text"
      );
      sliderText.forEach((el) => {
        el.classList.remove("active-text");
      });
    },
    next() {
      const slide = document.querySelector(".right__content");
      const sliderLine = document.querySelector(".slider-line");
      const slideWidth = slide.clientWidth;
      const slide1 = document.querySelector(".slide1");
      const slide2 = document.querySelector(".slide2");
      const slide3 = document.querySelector(".slide3");
      const slide4 = document.querySelector(".slide4");
      const slide1Text = document.querySelector(".slide1 .right__text");
      const slide2Text = document.querySelector(".slide2 .right__text");
      const slide3Text = document.querySelector(".slide3 .right__text");
      const slide4Text = document.querySelector(".slide4 .right__text");
      this.offset = this.offset + slideWidth + 40;
      this.num1++;
      if (this.offset > slideWidth * 4) {
        this.offset = 0;
        this.num1 = 1;
      }
      if (this.num1 == 1) {
        this.removeActiveText();
        console.log("1");
        slide4.classList.add("active");
        slide1.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide1Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 2) {
        this.removeActiveText();
        console.log("2");
        slide1.classList.add("active");
        slide2.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide2Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 3) {
        this.removeActiveText();
        console.log("3");
        slide2.classList.add("active");
        slide3.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide3Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 4) {
        this.removeActiveText();
        console.log("4");
        slide3.classList.add("active");
        slide4.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide4Text.classList.add("active-text");
        }, 1400);
      }
      sliderLine.style.left = -this.offset + "px";
      console.log("this.offset", this.offset);
    },
    prev() {
      const slide1 = document.querySelector(".slide1");
      const slide2 = document.querySelector(".slide2");
      const slide3 = document.querySelector(".slide3");
      const slide4 = document.querySelector(".slide4");
      const slide1Text = document.querySelector(".slide1 .right__text");
      const slide2Text = document.querySelector(".slide2 .right__text");
      const slide3Text = document.querySelector(".slide3 .right__text");
      const slide4Text = document.querySelector(".slide4 .right__text");
      const slide = document.querySelector(".right__content");
      const sliderLine = document.querySelector(".slider-line");
      const slideWidth = slide.clientWidth;
      this.offset = this.offset - slideWidth - 40;
      this.num1--;
      if (this.offset < 0) {
        this.offset = slideWidth * 3 + 120;
        this.num1 = 4;
      }
      if (this.num1 == 1) {
        this.removeActiveText();
        console.log("1");
        slide2.classList.add("active");
        slide1.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide1Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 2) {
        this.removeActiveText();
        console.log("2");
        slide3.classList.add("active");
        slide2.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide2Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 3) {
        this.removeActiveText();
        console.log("3");
        slide4.classList.add("active");
        slide3.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide3Text.classList.add("active-text");
        }, 1400);
      }
      if (this.num1 == 4) {
        this.removeActiveText();
        console.log("4");
        slide3.classList.add("active");
        slide4.classList.add("new-active");
        setTimeout(() => {
          this.removeActive();
        }, 700);
        setTimeout(() => {
          slide4Text.classList.add("active-text");
        }, 1400);
      }
      sliderLine.style.left = -this.offset + "px";
      console.log("this.offset", this.offset);
    },
    scrollAnimation() {
      const mainNav = document.querySelector(".main-nav");
      const slide3 = document.querySelector(".slide-3");
      const slide4 = document.querySelector(".slide-4");
      const slide3Heigth = slide3.clientHeight;

      const elLink = document.querySelector("a.portfolio");
      const allLinks = document.querySelectorAll(".main-nav__links a");
      function activeLink() {
        allLinks.forEach((el) => {
          el.classList.remove("active");
        });
        elLink.classList.add("active");
      }
      gsap.to(slide3, {
        scrollTrigger: {
          trigger: slide4,
          start: "bottom bottom",
          pin: slide4,
        },
      });
      gsap.from(slide3, {
        y: slide3Heigth,
        duration: 1.5,
        scrollTrigger: {
          trigger: slide4,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          onEnter: function () {
            mainNav.classList.add("white");
            activeLink();
          },
          onEnterBack: function () {
            mainNav.classList.add("white");
            activeLink();
          },
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
  // max-height: 1080px;
  height: 100vh;
  justify-content: space-between;
  background: linear-gradient(229.42deg, #0b0d0b 48.14%, #0b2a4b 79.15%);
  background-repeat: no-repeat;
  padding-top: 9.167vh;
  position: relative;
  overflow: hidden;
  // top: -1450px;
  .container {
    display: flex;
  }
  &:after {
    content: "";
    position: absolute;
    top: 81vh;
    left: 0;
    background-image: url("@/assets/AlmaSoft.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    height: 27.222vh;
  }
  .left {
    // margin-left: 9.948vw;
    position: relative;
    top: 23.611vh;
    height: 100%;
    .left__title {
      font-size: 4.375em;
      font-weight: 800;
      color: #ffffff;
      // position: absolute;
      // top: 239px;
      width: 600px;
      margin-bottom: 10px;
    }
    .left__text {
      font-weight: 400;
      font-size: 1.25em;
      color: #ffffff;
      margin-bottom: 40px;
      width: 22.344vw;
    }
    .left__btn {
      // position: relative;
      // top: 636px;
      font-size: 1em;
      font-weight: 600;
      color: #ffffff;
      width: fit-content;
      background-color: #3777f3;
      border-radius: 50px;
      padding: 20px 50px;
      text-transform: uppercase;
      cursor: pointer;
      justify-content: center;
      display: flex;
      align-items: center;
      margin-bottom: 20.648vh;
      transition: 0.5s;
    }
    .left__btn:hover {
      transition: 0.5s;
      background-color: #16449e;
    }
    .slider-block {
      display: flex;
      font-weight: 600;
      font-size: 1.875em;
      color: #ffffff;
      align-items: center;
      .slider-block__btn {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid #1378d4;
        background-image: url("@/assets/case/prev-next.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        cursor: pointer;
        position: relative;
        z-index: 20;
        transition: 0.5s;
        white-space: nowrap;
      }
      .slider-block__btn:hover {
        background-color: #3777f3;
        transition: 0.5s;
      }
      .slider-block__next {
        transform: rotateY(180grad);
      }
      .slider-block__nums {
        display: flex;
        margin: 0 0.9vw;
        .slider-block__slesh {
          background-image: url("@/assets/case/slesh.svg");
          background-repeat: no-repeat;
          background-position: 50% 50%;
          height: 5.37vh;
          width: 1.4vw;
        }
        .slider-block__num {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .right {
    /* margin-top: 12.963vh; */
    margin-top: -6vh;
    color: #ffffff;
    overflow-x: hidden;
    width: 60%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    height: 100vh;
    // padding-left: 50px;

    .slider-line {
      display: flex;
      position: relative;
      left: 0;
      overflow: visible;
      transition: all ease 0.7s;
    }
    .active {
      transition: all ease 0.2s;
      opacity: 0;
    }
    .new-active {
      scale: 1.07;
      transition: all ease 0.7s;
    }
    .right__content {
      margin-right: 40px;
      transition: all ease 0.7s;
      overflow: visible;

      img {
        width: 100%;
        max-width: 954px;
        max-height: 620px;
        width: 49.688vw;
        height: 57.407vh;
        margin-bottom: 20px;
      }
      .right__text {
        transition: all ease 0.5s;
        opacity: 0;
        .right__title {
          font-weight: 700;
          font-size: 2.125em;
        }
        .right__subtitle {
          font-weight: 400;
          font-size: 1.25em;
        }
      }
      .active-text {
        opacity: 1;
        transition: all ease 0.5s;
      }
    }
  }
}
</style>
