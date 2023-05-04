<template>
  <div id="app">
    <nav class="main-nav">
      <div class="container">
        <div class="main-nav__logo">
          <router-link to="/">
            <div class="main-nav-logo">
              <img alt="Home" src="@/assets/logo-big.svg" />
              <img alt="Home" src="@/assets/logo-small.svg" />
            </div>
          </router-link>
        </div>
        <div class="main-nav__links">
          <router-link to="/services">Services</router-link>
          <router-link to="/services">Our specialists</router-link>
          <router-link to="/services">Featured projects</router-link>
          <router-link to="/services">Talk to us</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

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
  padding: 15px 0 22px;
  overflow: hidden;
  margin: 0 auto;
}
.container {
  width: 1572px;
  margin: 0 auto;
}
.main-nav {
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #c2c2c2;
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
</style>
