<template>
  <div id="app">
    <span id="home"></span>
    <nav class="main-nav">
      <div class="container">
        <div class="main-nav__logo">
          <a href="#home" class="main-nav-logo">
            <div class="main-nav-logo__big"></div>
            <div class="main-nav-logo__small"></div>
          </a>
        </div>
        <div class="main-nav__links">
          <a @click="activeLink" class="about-us" href="#about-us">About us</a>
          <a @click="activeLink" class="our-team" href="#our-team">Our team</a>
          <a @click="activeLink" class="portfolio" href="#portfolio"
            >Portfolio</a
          >
          <a @click="activeLink" class="contact-us" href="#contact-us"
            >Contact us</a
          >
        </div>
      </div>
    </nav>
    <main>
      <div class="slide slide-1">
        <main-view />
      </div>
      <div class="slide slide-2">
        <about-us />
      </div>
      <div class="slide slide-3">
        <our-team />
      </div>
      <div class="slide slide-4">
        <portfolio />
      </div>
      <div class="slide slide-5">
        <contact-us />
      </div>
    </main>

    <!-- <router-view /> -->
  </div>
</template>
<script>
import MainView from "@/components/MainView.vue";
import AboutUs from "./components/AboutUs.vue";
import OurTeam from "./components/OurTeam.vue";
import Portfolio from "./components/Portfolio.vue";
import ContactUs from "./components/ContactUs.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "@/assets/js/DrawSVGPlugin3.min.js";
import { MotionPathPlugin } from "@/assets/js/MotionPathPlugin.min.js";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default {
  components: {
    MainView,
    AboutUs,
    Portfolio,
    OurTeam,
    ContactUs,
  },
  data() {
    return {
      show1: false,
      active: false,
      aboutUs: false,
      ourTeam: false,
      portfolio: false,
      contactUs: false,
    };
  },
  methods: {
    activeLink(e) {
      const links = document.querySelectorAll(".main-nav__links a");
      // console.log(links);
      console.log(e.target);
      links.forEach(function (a) {
        console.log(a);
        a.classList.remove("active");
        e.target.classList.add("active");
      });
      // if (event.target.classlist.contains("our-team")) {
      //   console.log("true");
      // }
      // links.forEach((event) => {
      //   console.log(target);
      // });
    },
    scrollAnimation() {
      // const slide1 = document.querySelector(".slide-1");
      // const home = document.querySelector(".home");
      // const slide2 = document.querySelector(".slide-2");
      // const slide3 = document.querySelector(".slide-3");
      // const slide4 = document.querySelector(".slide-4");
      // const slide5 = document.querySelector(".slide-5");

      // старая врерсия
      // ScrollTrigger.create({
      //   trigger: slide1,
      //   start: "top",
      //   end: "+=1080",
      //   pinSpacing: false,
      //   pin: true,
      // });
      // старая врерсия

      // ScrollTrigger.create({
      //   trigger: slide2,
      //   start: "top",
      //   end: "+=3160",
      //   pinSpacing: false,
      //   pin: true,
      // });

      // ScrollTrigger.create({
      //   trigger: slide3,
      //   start: "top",
      //   end: "+=1080",
      //   markers: true,
      //   pinSpacing: false,
      //   pin: true,
      // });

      // ScrollTrigger.create({
      //   trigger: slide2,
      //   start: "top center",
      //   end: "+=200", // 200px past the start
      //   pin: slide2,
      // });

      let tl = gsap.timeline();
      tl.to(".main-nav", {
        duration: 1,
        scrollTrigger: {
          trigger: ".main-nav",
          toggleClass: "white",
          start: "10px",
          end: "1680px",
          // markers: true,
        },
      });
      tl.to(".main-nav", {
        duration: 1,
        scrollTrigger: {
          trigger: ".main-nav",
          toggleClass: "white",
          start: "6850px",
          end: "7900px",
        },
      });
      tl.fromTo(
        ".main-nav__links a",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "SlowMo" },
        0.7
      );
      tl.fromTo(
        ".main-nav__logo",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        0.5
      );
      // });
    },
  },
  mounted() {
    this.scrollAnimation();
  },
};
</script>
<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  border: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
:focus,
:active {
  /*outline: none;*/
}
a:focus,
a:active {
  /* outline: none;*/
}
/* Links */
a,
a:link,
a:visited {
  /* color: inherit; */
  text-decoration: none;
  /* display: inline-block; */
}
a:hover {
  /* color: inherit; */
  text-decoration: none;
}
/* Common */
aside,
nav,
footer,
header,
section,
main {
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: inherit;
  font-weight: inherit;
}
ul,
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
img,
svg {
  max-width: 100%;
  height: auto;
}
address {
  font-style: normal;
}
/* Form */
input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}
input::-ms-clear {
  display: none;
}
button,
input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
label {
  cursor: pointer;
}
legend {
  display: block;
}
#app {
  font-family: "Inter";
  // background-color: #e0e0e0;
  max-width: 1920px;
  // padding: 15px 0 0;
  overflow: hidden;
  margin: 0 auto;
  background-color: #e0e0e0;
}
.container {
  width: 1538px;
  margin: 0 auto;
}
.main-nav {
  display: flex;
  justify-content: center;
  padding: 15px 0;

  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  max-width: 1920px;
}
.main-nav::after {
  content: "";
  filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
  z-index: -1;
  box-shadow: 0 2px 3px -2px #c2c2c2;
  border-bottom: 1px solid #c2c2c2;
}
nav.white .container a {
  color: #ffffff;
  transition: 1s;
  .main-nav-logo__big {
    width: 68px;
    height: 68px;
    margin-right: 8px;
    background-image: url("@/assets/logo-big-white.png");
    background-repeat: no-repeat;
    transition: 1s;
  }
  .main-nav-logo__small {
    width: 46.39px;
    height: 35.2px;
    background-image: url("@/assets/logo-small-white.png");
    background-repeat: no-repeat;
    transition: 1s;
  }
}
nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .main-nav-logo {
    display: flex;
    align-items: center;
    .main-nav-logo__big {
      width: 68px;
      height: 68px;
      margin-right: 8px;
      background-image: url("@/assets/logo-big.png");
      background-repeat: no-repeat;
      transition: 1s;
    }
    .main-nav-logo__small {
      width: 46.39px;
      height: 35.2px;
      background-image: url("@/assets/logo-small.png");
      background-repeat: no-repeat;
      transition: 1s;
    }
  }
  a {
    color: #004ca9;
    font-family: "inter";
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    transition: 1s;
    position: relative;
  }
  a.active::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 109px;
    background-color: #3777f3;
    bottom: -36px;
    transition: width 0.35s;
  }
  a.active.portfolio::before {
    width: 102px;
  }
  a.active.contact-us::before {
    width: 129px;
  }
  .main-nav__links {
    max-width: 839px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.slide {
  position: relative;
}
.slide-1 {
  z-index: 20;
  // top: 1080px;
}
.slide-2 {
  z-index: 10;
  top: -1080px;
}
.slide-3 {
  top: -780px;
  z-index: 20;
}
.slide-4 {
  // top: -2050px;
  z-index: 10;
}
.slide-5 {
  top: 1500px;
  z-index: 20;
}

@font-face {
  font-family: "Inter";
  font-weight: 300;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-weight: 500;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-weight: 600;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-weight: 800;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Inter"), url("@/fonts/Inter-ExtraBold.ttf") format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Source Sans Pro"),
    url("@/fonts/SourceSansPro-Regular.ttf") format("truetype");
}
</style>

<!-- tl.to(slide2, {
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
  y: 1050,
  scrollTrigger: {
    trigger: slide1,
    start: "2300 top",
    end: "+=1400",
    scrub: 0.1,
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
}); -->

<!-- // tl.to(slide2, { 
  //   scrollTrigger: {
  //     trigger: slide3,
  //     start: "top",
  //     end: "+=1080",
  //     pinSpacing: false,
  //     pin: slide2,
  //     // markers: true,
  //   },
  // });
  // tl.to(slide3, {
  //   scrollTrigger: {
  //     trigger: slide3,
  //     start: "top top",
  //     end: "+=4000",
  //     pinSpacing: false,
  //     pin: slide3,
  //     markers: true,
  //   },
  // }); -->
