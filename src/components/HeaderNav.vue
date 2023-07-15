<template>
  <nav class="header main-nav">
    <div class="container menu__body">
      <div @click="desLinks" class="main-nav__logo">
        <a href="#home" class="main-nav-logo">
          <div class="main-nav-logo__big"></div>
          <div class="main-nav-logo__small"></div>
        </a>
      </div>
      <div class="main-nav__links">
        <a @click="activeLink" class="about-us" href="#about-us">About us</a>
        <a @click="activeLink" class="our-team" href="#our-team">Our team</a>
        <a @click="activeLink" class="portfolio" href="#portfolio">Portfolio</a>
        <a @click="activeLink" class="contact-us" href="#contact-us"
          >Contact us</a
        >
      </div>
      <div
        @click="activeBurger"
        :class="{ active: visShow }"
        class="header__burger"
      >
        <span></span>
      </div>
    </div>
    <div :class="{ active: visShow }" class="menu-mob__body">
      <div class="main-nav__links">
        <a @click="activeLinkMob" class="about-us" href="#about-us">About us</a>
        <a @click="activeLinkMob" class="our-team" href="#our-team">Our team</a>
        <a @click="activeLinkMob" class="portfolio" href="#portfolio"
          >Portfolio</a
        >
        <a @click="activeLinkMob" class="contact-us" href="#contact-us"
          >Contact us</a
        >
      </div>
      <div class="main-nav__footer nav-footer">
        <div class="nav-footer__block1">Find us</div>
        <div class="nav-footer__block2">
          <div class="footer-up__subtitle">
            <div class="footer-up__flag">
              <img src="@/assets/flag-ukr.svg" alt="check img" />
            </div>
            <div class="footer-up__address">
              108, Malaya Morskaya, Mykolaiv, 54002 Ukraine
            </div>
          </div>
        </div>
        <div class="nav-footer__block3">Contact us</div>
        <div class="nav-footer__block4">
          <a href="mailto:info@alma-soft.com" class="footer-up__mail"
            >Info@alma-soft.com</a
          >
        </div>
        <div class="nav-footer__block5">
          <div class="footer-up__social-networks-block">
            <a href="https://twitter.com/" target="_blank">
              <div class="footer-up__social-network">
                <img src="@/assets/social-network/twitter.svg" alt=" img" />
              </div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <div class="footer-up__social-network">
                <img src="@/assets/social-network/in.svg" alt=" img" />
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <div class="footer-up__social-network">
                <img src="@/assets/social-network/facebook.svg" alt=" img" />
              </div>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <div class="footer-up__social-network">
                <img src="@/assets/social-network/instagram.svg" alt=" img" />
              </div>
            </a>
          </div>
        </div>
        <div class="nav-footer__block6">© Copyright Alma-Soft 2023</div>
      </div>
    </div>
  </nav>
</template>
<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "@/assets/js/DrawSVGPlugin3.min.js";
import { MotionPathPlugin } from "@/assets/js/MotionPathPlugin.min.js";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      show: false,
      active: false,
    };
  },
  computed: {
    visShow() {
      return this.$store.getters.visShow;
    },
  },
  methods: {
    ...mapMutations(["changeShow"]),
    activeLinkMob(e) {
      const links = document.querySelectorAll(
        ".menu-mob__body .main-nav__links a"
      );
      console.log(e.target);
      links.forEach(function (a) {
        a.classList.remove("active");
        e.target.classList.add("active");
      });
      this.changeShow();
    },
    activeLink(e) {
      const links = document.querySelectorAll(".main-nav__links a");
      console.log(e.target);
      links.forEach(function (a) {
        a.classList.remove("active");
        e.target.classList.add("active");
      });
    },
    desLinks() {
      const mainNav = document.querySelector(".main-nav");
      mainNav.classList.remove("white");
      const links = document.querySelectorAll(".main-nav__links a");
      links.forEach(function (a) {
        a.classList.remove("active");
      });
    },
    activeBurger() {
      this.changeShow();
    },
    scrollAnimation() {
      let tl = gsap.timeline();

      tl.fromTo(
        ".main-nav__links a",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        0.7
      );
      tl.fromTo(
        ".main-nav__logo",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        0.5
      );
      tl.fromTo(
        ".header__burger",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.7
      );
      // });
    },
  },
  mounted() {
    this.scrollAnimation();
  },
};
</script>
<style scoped lang="scss">
.menu-mob__body {
  content: "";
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  opacity: 0.98;
  z-index: 2;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-mob__body.active {
  right: 0;
  transition: all 0.3s ease 0s;
}
.main-nav {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 0 auto;
  position: fixed;
  z-index: 100;
  top: 0;
  // width: 100%;
  // max-width: 1920px;
  width: 100vw;
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
.header__burger {
  display: none;
}
.header__burger {
  position: relative;
  width: 24px;
  height: 22px;
  position: relative;
  z-index: 3;
}
.header__burger span {
  position: absolute;
  background-color: #004ca9;
  position: absolute;
  right: 0;
  width: 80%;
  height: 2px;
  top: 10px;
  transition: all 0.2s ease 0s;
}
.header__burger:before,
.header__burger:after {
  content: "";
  background-color: #004ca9;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  transition: all 0.2s ease 0s;
}
.header__burger:before {
  top: 0;
}
.header__burger:after {
  bottom: 0;
}

.header__burger.active span {
  transform: scale(0);
}

.header__burger.active:before {
  transform: rotate(45deg);
  top: 10px;
}
.header__burger.active:after {
  transform: rotate(-45deg);
  bottom: 10px;
}
nav.white .container a {
  color: #ffffff;
  transition: 1s;
  .main-nav-logo__big {
    // max-width: 68px;
    // width: 3.542vw;
    // max-height: 68px;
    // height: 6.296vh;
    margin-right: 8px;
    background-image: url("@/assets/logo-big-white.png");
    background-repeat: no-repeat;
    transition: 1s;
  }
  .main-nav-logo__small {
    background-image: url("@/assets/logo-small-white.png");
    background-repeat: no-repeat;
    transition: 1s;
  }
}
nav.white .header__burger span {
  background-color: #ffffff;
}
nav.white .header__burger:before {
  background-color: #ffffff;
}
nav.white .header__burger:after {
  background-color: #ffffff;
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
      // width: 3.542vw;
      height: 68px;
      // height: 6.296vh;
      margin-right: 8px;
      background-image: url("@/assets/logo-big.png");
      background-repeat: no-repeat;
      transition: 1s;
    }
    .main-nav-logo__small {
      width: 46.39px;
      // width: 2.416vw;
      height: 38px;
      // height: 3.519vh;
      background-image: url("@/assets/logo-small.png");
      background-repeat: no-repeat;
      transition: 1s;
    }
  }
  a {
    color: #004ca9;
    font-family: "inter";
    font-weight: 700;
    font-size: 1.5em;
    line-height: 29px;
    transition: 1s;
    position: relative;
  }
  a.active::before {
    content: "";
    position: absolute;
    height: 4px;
    max-width: 109px;
    width: 5.677vw;
    background-color: #3777f3;
    bottom: -3.333vh;
    transition: width 0.35s;
  }
  a.active.portfolio::before {
    max-width: 102px;
    width: 5.313vw;
  }
  a.active.contact-us::before {
    max-width: 129px;
    width: 6.719vw;
  }
  .main-nav__links {
    width: 37.5vw;
    max-width: 687px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 767px) {
  .header__burger {
    display: block;
  }
  nav .container .main-nav__links {
    display: none;
  }
  nav .container .main-nav-logo .main-nav-logo__big {
    width: 50px;
    height: 50px;
    background-size: cover;
  }
  nav .container .main-nav-logo .main-nav-logo__small {
    width: 34px;
    height: 26px;
    background-size: cover;
  }
  .nav .container a {
    font-size: 24px;
  }
  .main-nav__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 17vh;
  }
  .main-nav__links a {
    color: #004ca9;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    position: relative;
  }
  .menu-mob__body a.active::before {
    content: "";
    position: absolute;
    height: 4px;
    max-width: 109px;
    width: 27.677vw;
    background-color: #3777f3;
    bottom: -1.333vh;
    transition: width 0.35s;
  }
  .menu-mob__body a.active.portfolio::before {
    max-width: 102px;
    width: 35.7vw;
  }
  .menu-mob__body a.active.contact-us::before {
    max-width: 129px;
    width: 35.7vw;
  }
  .nav-footer {
    height: 35vh;
    background: #e3e3e3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .nav-footer__block1,
  .nav-footer__block3 {
    color: #004ca9;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 4px;
  }
  .nav-footer__block2 {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 26px;
  }
  .nav-footer__block4 {
    color: #1378d4;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 20px;
  }
  .nav-footer__block5 {
    display: flex;
    align-items: center;
    .footer-up__social-networks-block {
      display: flex;
      margin-bottom: 30px;
      .footer-up__social-network {
        position: relative;
        z-index: 10;
        cursor: pointer;
        width: 47px;
        height: 47px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 50%;
      }
      a {
        width: 52px;
        height: 52px;
      }
    }
  }
  .nav-footer__block6 {
    color: #1c2d41;
    font-size: 16px;
    line-height: 20px;
    font-family: "Source Sans Pro";
  }
  .footer-up__subtitle {
    line-height: 150%;
    display: flex;
    align-items: center;
    .footer-up__flag {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
