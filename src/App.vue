<template>
  <div id="app">
    <span id="home"></span>
    <nav class="main-nav">
      <div class="container">
        <div class="main-nav__logo">
          <a href="#home" class="main-nav-logo">
            <img alt="Home" src="@/assets/logo-big.svg" />
            <img alt="Home" src="@/assets/logo-small.svg" />
          </a>
        </div>
        <div class="main-nav__links">
          <a href="#about-us">About us</a>
          <a href="#our-team">Our team</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact-us">Contact us</a>
        </div>
      </div>
    </nav>
    <main>
      <main-view />
      <about-us />
      <our-team />
      <portfolio />
      <contact-us />
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
  background-color: #e0e0e0;
  max-width: 1920px;
  padding: 15px 0 0;
  overflow: hidden;
  margin: 0 auto;
}
.container {
  width: 1538px;
  margin: 0 auto;
}
.main-nav {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid #c2c2c2;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  max-width: 1920px;
}
.main-nav::after {
  content: "";
  filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .main-nav-logo {
    display: flex;
  }
  a {
    color: #004ca9;
    font-family: "inter";
    font-weight: bold;
    font-size: 24px;
  }
  .main-nav__links {
    max-width: 839px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
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
