<template>
  <div id="app">
    <span id="home"></span>
    <header-nav />
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
import HeaderNav from "./components/HeaderNav.vue";
import MainView from "@/components/MainView.vue";
import AboutUs from "./components/AboutUs.vue";
import OurTeam from "./components/OurTeam.vue";
import Portfolio from "./components/Portfolio.vue";
import ContactUs from "./components/ContactUs.vue";

export default {
  components: {
    HeaderNav,
    MainView,
    AboutUs,
    Portfolio,
    OurTeam,
    ContactUs,
  },
  data() {
    return {
      aboutUs: false,
      ourTeam: false,
      portfolio: false,
      contactUs: false,
    };
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
  outline: none;
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
  overflow: hidden;
  margin: 0 auto;
  background-color: #e0e0e0;
  height: 100%;
}
.container {
  width: 75.391vw;
  margin: 0 auto;
}
.slide {
  position: relative;
}
.slide-1 {
  z-index: 20;
}
.slide-2 {
  z-index: 10;
  top: -100vh;
}
.slide-3 {
  z-index: 20;
}
.slide-4 {
  z-index: 10;
  top: 5vh;
}
.slide-5 {
  z-index: 20;
}
@media screen and (max-width: 2300px) {
  .container {
    width: 89.33vw;
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
