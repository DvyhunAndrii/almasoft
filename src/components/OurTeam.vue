<template>
  <section id="our-team" class="our-team">
    <div class="our-team-left">
      <div class="our-team-left__block-1">
        <div class="our-team-left__title title-1">Our team</div>
        <div class="our-team-left__subtitle">
          “A harmonious team is the key to success”
        </div>
        <div class="our-team-left__text">
          Our team is made up of passionate individuals who truly love what they
          do and do it with high quality.
        </div>
        <div class="our-team-left__btn" @click="consoleView">
          View our works
        </div>
      </div>
      <div class="our-team-left__block-2">
        <div class="our-team-left__title title-2">Experience</div>
        <div class="our-team-left__subtitle">
          “10 years of experience in IT Development”
        </div>
        <div class="our-team-left__text">
          We use the latest technologies and tools to ensure that our products
          are up-to-date and user-friendly. (або We stay up-to-date with the
          latest trends and technologies in web development to ensure that our
          clients stay ahead of the curve.
        </div>
        <div class="our-team-left__btn" @click="consoleView">meet the Team</div>
      </div>
      <div class="our-team-left__block-3">
        <div class="our-team-left__title title-3">Join us</div>
        <div class="our-team-left__subtitle">
          “We are always looking for talents and awesome people”
        </div>
        <div class="our-team-left__text">
          You can respond to one of our mail, we will definitely contact you.
        </div>
        <div class="our-team-left__btn" @click="consoleView">
          Become one of us
        </div>
      </div>
    </div>
    <div class="our-team-right">
      <div class="our-team-right__content content-1">
        <img src="@/assets/team/2.jpg" alt="team img" />
      </div>
      <div class="our-team-right__content content-2">
        <img src="@/assets/team/4.jpg" alt="team img" />
      </div>
      <div class="our-team-right__content content-3">
        <img src="@/assets/team/3.jpg" alt="team img" />
      </div>
      <div class="our-team-right__content content-4">
        <img src="@/assets/team/5.jpg" alt="team img" />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "OurTeam",
  data() {
    return {
      show1: false,
    };
  },
  methods: {
    consoleView() {
      console.log("click");
    },
    scrollAnimation() {
      let tl = gsap.timeline();
      const slide2 = document.querySelector(".slide-2");
      const slide3 = document.querySelector(".slide-3");
      // const slide4 = document.querySelector(".slide-4");
      // ScrollTrigger.create({
      //   trigger: slide3,
      //   start: "top",
      //   end: "+=2000",
      //   // pinSpacing: false,
      //   pin: true,
      // });
      tl.to(slide2, {
        scrollTrigger: {
          trigger: slide3,
          start: "top bottom",
          end: "+=2000",
          pinSpacing: false,
          pin: slide2,
          // markers: true,
        },
      });
      tl.to(slide3, {
        scrollTrigger: {
          trigger: slide3,
          start: "top",
          end: "+=2000",
          // pinSpacing: false,
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });
      tl.to(".our-team-left", {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".our-team",
          start: "top top",
          end: "40%",
          scrub: 2,
        },
      });
      tl.from(".our-team-right", {
        y: 900,
        scrollTrigger: {
          trigger: ".our-team",
          start: "top top",
          end: "30%",
          scrub: 2,
        },
      });
      tl.to(".our-team-left__block-2", {
        y: -240,
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team",
          start: "80%",
          end: "100%",
          scrub: 2,
        },
      });
      tl.to(".content-1", {
        y: -210,
        scrollTrigger: {
          trigger: ".our-team",
          start: "80%",
          end: "100%",
          scrub: 2,
        },
      });
      tl.to(".content-2", {
        y: -210,
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team",
          start: "80%",
          end: "100%",
          scrub: 2,
        },
      });
      tl.to(".content-3", {
        y: -210,
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team",
          start: "80%",
          end: "100%",
          scrub: 2,
        },
      });
      tl.to(".content-4", {
        y: -210,
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team",
          start: "110%",
          end: "130%",
          scrub: 1,
        },
      });
      tl.to(".our-team-left__block-3", {
        y: -548,
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team",
          start: "110%",
          end: "130%",
          scrub: 2,
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
.our-team {
  display: flex;
  height: 1080px;
  padding-top: 274px;
  overflow: hidden;
  position: relative;
  top: 0;
  background-color: #e0e0e0;
  .our-team-left {
    margin-left: 191px;
    position: relative;
    height: 100%;
    opacity: 0;
    .our-team-left__block-2,
    .our-team-left__block-3 {
      opacity: 0;
      position: relative;
      background-color: #e0e0e0;
    }

    .our-team-left__block-1 {
      z-index: 1;
    }
    .our-team-left__block-2 {
      z-index: 2;
    }
    .our-team-left__block-3 {
      z-index: 3;
    }
    .our-team-left__title {
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      // position: absolute;
      // top: 239px;
      width: 600px;
      margin-bottom: 10px;
    }
    .our-team-left__title_bottom {
      opacity: 30%;
      width: 500px;
    }
    .our-team-left__subtitle {
      font-weight: 700;
      font-size: 20px;
      color: #242424;
      text-transform: uppercase;
    }
    .our-team-left__text {
      font-weight: 400;
      font-size: 20px;
      color: #242424;
      margin-bottom: 40px;
      width: 494px;
    }
    .our-team-left__btn {
      // position: relative;
      // top: 636px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      width: 270px;
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
    .our-team-left__btn:hover {
      transition: 0.5s;
      background-color: #16449e;
    }
  }
  .our-team-right {
    // align-self: center;
    position: relative;
    right: 0.5px;
    top: 4%;
    display: flex;
    flex-direction: column;
    max-width: 1084px;
    width: 100%;
    .our-team-right__content:nth-child(1) {
      width: 490px;
      height: 325px;
      position: relative;
      left: 150px;
      z-index: 1;
    }
    .our-team-right__content:nth-child(2) {
      width: 493px;
      height: 338px;
      opacity: 0;

      position: relative;
      align-self: flex-end;
      z-index: 2;
      top: -100px;
    }
    .our-team-right__content:nth-child(3) {
      width: 420px;
      height: 294px;
      opacity: 0;
      position: relative;
      z-index: 1;
      top: -250px;
    }
    .our-team-right__content:nth-child(4) {
      width: 450px;
      height: 395px;
      opacity: 0;
      background-color: #ffffff;
      position: relative;
      align-self: flex-end;
      z-index: 2;
      top: -348px;
      margin-right: 257px;
      border-radius: 20px 2px 2px 2px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
