<template>
  <section id="our-team" class="our-team">
    <div class="container">
      <div class="our-team-left">
        <div class="our-team-left__block our-team-left__block-1 active">
          <div class="our-team-left__title title-1">Our team</div>
          <div class="our-team-left__description our-team-left__description-1">
            <div class="our-team-left__subtitle">
              “A harmonious team is the key to success”
            </div>
            <div class="our-team-left__text">
              Our team is made up of passionate individuals who truly love what
              they do and do it with high quality.
            </div>
            <div class="our-team-left__btn" @click="consoleView">
              View our works
            </div>
          </div>
        </div>
        <div class="our-team-left__block our-team-left__block-2">
          <div class="our-team-left__title title-2">Experience</div>
          <div class="our-team-left__description our-team-left__description-2">
            <div class="our-team-left__subtitle">
              “10 years of experience in IT Development”
            </div>
            <div class="our-team-left__text">
              We use the latest technologies and tools to ensure that our
              products are up-to-date and user-friendly. We stay up-to-date with
              the latest trends and technologies in web development to ensure
              that our clients stay ahead of the curve.
            </div>
            <div class="our-team-left__btn" @click="consoleView">
              meet the Team
            </div>
          </div>
        </div>
        <div class="our-team-left__block our-team-left__block-3">
          <div class="our-team-left__title title-3">Join us</div>
          <div class="our-team-left__description our-team-left__description-3">
            <div class="our-team-left__subtitle">
              “We are always looking for talents and awesome people”
            </div>
            <div class="our-team-left__text">
              You can respond to one of our mail, we will definitely contact
              you.
            </div>
            <div class="our-team-left__btn" @click="consoleView">
              Become one of us
            </div>
          </div>
        </div>
      </div>
      <div class="our-team-right">
        <div class="our-team-right__content content-1">
          <img src="@/assets/team/2.jpg" alt="team img" />
        </div>
        <div class="our-team-right__content content-2">
          <svg class="flower-icon" viewBox="0 0 1041.5167236 1041.5167236">
            <circle
              class="circle"
              style="opacity: 0.15; fill: #004ca9"
              cx="520.7583618"
              cy="520.7583618"
              r="520.7583618"
            />
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M715.6937256,108.5333633l-165.4295044,95.5107651     c-30.4430542,17.5763092-30.4430542,61.5170898,0,79.0933838l165.4295044,95.5107727     c30.4430542,17.5762939,68.4968872-4.3940735,68.4968872-39.5466919V148.0800476     C784.1906128,112.9274368,746.1367798,90.9570541,715.6937256,108.5333633z"
              />
            </g>
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M979.1259766,485.7179871l-165.4295044-95.5107727     c-30.4430542-17.5762939-68.4968872,4.3940735-68.4968872,39.5466919v191.0215454     c0,35.1525879,38.053833,57.1229858,68.4968872,39.5466919l165.4295044-95.5108032     C1009.5690308,547.2350464,1009.5690308,503.294281,979.1259766,485.7179871z"
              />
            </g>
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M784.1906128,902.4492798V711.4277344c0-35.1525879-38.053833-57.1229858-68.4968872-39.5466919     l-165.4295044,95.5108032c-30.4430542,17.5762939-30.4430542,61.5170898,0,79.0933838l165.4295044,95.5107422     C746.1367798,959.5723267,784.1906128,937.6019287,784.1906128,902.4492798z"
              />
            </g>
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M325.8230286,941.9959717l165.4295044-95.5107422c30.4430847-17.5762939,30.4430847-61.5170898,0-79.0933838     l-165.4295044-95.5108032c-30.4430542-17.5762939-68.4968872,4.394104-68.4968872,39.5466919v191.0215454     C257.3261414,937.6019287,295.3799744,959.5723267,325.8230286,941.9959717z"
              />
            </g>
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M62.3908043,564.8113403l165.4295044,95.5108032     c30.4430542,17.5762939,68.4968872-4.394104,68.4968872-39.5466919V429.7539062     c0-35.1526184-38.053833-57.1229858-68.4968872-39.5466919L62.3908043,485.7179871     C31.9477482,503.294281,31.9477482,547.2350464,62.3908043,564.8113403z"
              />
            </g>
            <g>
              <path
                class="petal"
                fill="#004CA9"
                d="M257.3261414,148.0800476V339.101593c0,35.1526184,38.053833,57.1229858,68.4968872,39.5466919     l165.4295044-95.5107727c30.4430847-17.5762939,30.4430847-61.5170746,0-79.0933838l-165.4295044-95.5107651     C295.3799744,90.9570541,257.3261414,112.9274368,257.3261414,148.0800476z"
              />
            </g>
            <g class="petal-center">
              <path
                class=""
                fill="#004CA9"
                d="M495.9734497,295.4830933l-161.8193054,93.4264221   c-15.3369446,8.8547974-24.7849121,25.2191467-24.7849121,42.9287415v186.8528442   c0,17.7095947,9.4479675,34.0739136,24.7849121,42.9287109l161.8193054,93.4264526   c15.3369751,8.8547974,34.2329102,8.8547974,49.5698242,0l161.8193359-93.4264526   c15.3369751-8.8547974,24.7849121-25.2191162,24.7849121-42.9287109V431.8382568   c0-17.7095947-9.447937-34.0739441-24.7849121-42.9287415l-161.8193359-93.4264221   C530.2063599,286.6282959,511.3104248,286.6282959,495.9734497,295.4830933z"
              />
            </g>

            <text
              class="text-center st4 st5"
              transform="matrix(1 0 0 1 372.8415222 573.2819214)"
              fill="#FFFFFF"
              style="font-size: 147.5623779px; letter-spacing: -7"
            >
              OOP
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 584.3860474 249.6843872)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Composition
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 793.5593262 530.3676147)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Abstraction
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 572.2627563 815.8132324)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Polymorphism
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 297.5329285 815.8127441)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Inheritance
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 81.3858795 530.3677368)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Encapsulation
            </text>
            <text
              class="text"
              transform="matrix(1 0 0 1 297.5331421 249.684433)"
              fill="#FFFFFF"
              style="font-size: 28px"
            >
              Association
            </text>
          </svg>
        </div>
        <div class="our-team-right__content content-3">
          <img src="@/assets/team/3.jpg" alt="team img" />
        </div>
        <div class="our-team-right__content content-4">
          <img src="@/assets/team/4.jpg" alt="team img" />
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
      const mainNav = document.querySelector(".main-nav");
      const slide3 = document.querySelector(".slide-3");
      const slide3Heigth = slide3.clientHeight;
      const block1 = document.querySelector(".our-team-left__block-1");
      const block2 = document.querySelector(".our-team-left__block-2");
      const block3 = document.querySelector(".our-team-left__block-3");

      const elLink = document.querySelector("a.our-team");
      const allLinks = document.querySelectorAll(".main-nav__links a");
      function activeLink() {
        allLinks.forEach((el) => {
          el.classList.remove("active");
        });
        elLink.classList.add("active");
      }

      gsap.to(slide3, {
        y: -slide3Heigth,
        duration: 1,
        scrollTrigger: {
          trigger: slide3,
          start: "top bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          // markers: true,
          toggleActions: "play none none reverse",
          onEnter: function () {
            block1.classList.add("active");
            block2.classList.remove("active");
            block3.classList.remove("active");
            console.log("remove white");
            mainNav.classList.remove("white");
            activeLink();
          },
          onEnterBack: function () {
            block1.classList.add("active");
            block2.classList.remove("active");
            block3.classList.remove("active");
            console.log("remove white");
            mainNav.classList.remove("white");
            activeLink();
          },
        },
      });

      gsap.to(".our-team-left", {
        opacity: 1,
        duration: 0.7,
        delay: 1,
        scrollTrigger: {
          trigger: slide3,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".our-team-right", {
        y: slide3Heigth * 0.5,
        opacity: 0,
        duration: 0.7,
        delay: 1,
        scrollTrigger: {
          trigger: slide3,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
      tl.to(".our-team-left__block-2", {
        y: "-70%",
        scrollTrigger: {
          trigger: ".our-team-right",
          start: "-50% 80%",
          end: "top 70%",
          scrub: 2,
          onEnter: function () {
            block2.classList.add("active");
            block1.classList.remove("active");
          },
        },
      }).to(".our-team-left__block-3", {
        y: "-90%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".our-team-right",
          start: "-40% 10%",
          end: "top 0",
          scrub: 2,
          onEnter: function () {
            block3.classList.add("active");
            block1.classList.remove("active");
            block2.classList.remove("active");
          },
        },
      });

      tl.to(".content-1", {
        y: "-80%",
        scrollTrigger: {
          trigger: ".our-team-right",
          start: "-40% 80%",
          end: "top 70%",
          scrub: 2,
        },
      })
        .to(".content-2", {
          y: "-80%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".our-team-right",
            start: "-50% 80%",
            end: "top 70%",
            scrub: 2,
          },
        })
        .to(".content-3", {
          y: "-80%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".our-team-right",
            start: "-50% 80%",
            end: "top 70%",
            scrub: 2,
          },
        })
        .to(".content-4", {
          y: "-80%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".our-team-right",
            start: "-50% 10%",
            end: "top 0",
            scrub: 2,
            onEnter: function () {
              flowerIconAnimation();
            },
          },
        });

      function flowerIconAnimation() {
        const colours = ["#ca4234", "#cec6be", "#004CA9"];

        const colorsTl = gsap.timeline({
          repeat: -1,
          paused: true,
          yoyo: true,
          onRepeat: function () {
            this.invalidate();
          },
        });

        colours.forEach(function (item) {
          colorsTl.to(".flower-icon .circle", 5, {
            fill: item,
          });
        });

        const tlIcon = gsap.timeline({ repeat: false, paused: true });

        tlIcon.play();

        tlIcon
          .from(".flower-icon .circle", { opacity: 0, duration: 1 })
          .from(".flower-icon .petal-center", {
            scale: 0,
            transformOrigin: "50% 50%",
            duration: 0.5,
            ease: "back.out(3)",
          })
          .from(".flower-icon .petal", {
            opacity: 0,
            scale: 0,
            transformOrigin: "50% 50%",
            duration: 0.5,
            stagger: 0.075,
            ease: "back.out(1)",
          })
          .from(".flower-icon .text-center", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          })
          .from(".flower-icon .text", {
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power2.out",
            onComplete: () => {
              colorsTl.play();
              tl.to(".flower-icon .petal", {
                opacity: 0.5,
                transformOrigin: "50% 50%",
                duration: 0.5,
                stagger: 0.3,
                ease: "none",
                yoyo: true,
                repeat: -1,
              });
            },
          });
      }

      document
        .querySelector(".content-4")
        .addEventListener("mouseenter", flowerIconAnimation);
    },
  },
  mounted: function () {
    this.scrollAnimation();
  },
  function() {
    this.flowerIconAnimation();
  },
};
</script>

<style scoped lang="scss">
.our-team {
  // max-height: 1080px;
  height: 100vh;
  padding-top: 30vh;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  top: 0;
  background-color: #e0e0e0;
  .container {
    display: flex;
  }

  .our-team-left {
    // margin-left: 9.948vw;
    position: relative;
    height: 100%;
    opacity: 0;
    .our-team-left__block-2,
    .our-team-left__block-3 {
      opacity: 1;
      position: relative;
      background-color: #e0e0e0;
    }
    .active.our-team-left__block .our-team-left__title {
      opacity: 1;
      transition: 1s;
    }
    .active.our-team-left__block .our-team-left__description {
      opacity: 1;
      transition: 1s;
    }
    .our-team-left__block .our-team-left__title {
      opacity: 0.5;
      transition: 1s;
    }
    .our-team-left__block .our-team-left__description {
      opacity: 0;
      transition: 1s;
    }
    .our-team-left__block-1 {
      z-index: 1;
      margin-bottom: 4.63vh;
    }
    .our-team-left__block-2 {
      z-index: 2;
      margin-bottom: 4.63vh;
    }

    .our-team-left__block-3 {
      z-index: 3;
      margin-top: -280px;
    }
    .our-team-left__title {
      font-size: 4.375em;
      font-weight: 800;
      color: #004ca9;
      // position: absolute;
      // top: 239px;
      width: 31.25vw;
      margin-bottom: 10px;
      opacity: 0.5;
      transition: all 1s opacity;
    }
    .our-team-left__title_bottom {
      opacity: 30%;
      width: 26.042vw;
    }
    .our-team-left__subtitle {
      font-weight: 700;
      font-size: 1.25em;
      color: #242424;
      text-transform: uppercase;
    }
    .our-team-left__text {
      font-weight: 400;
      font-size: 1.25em;
      color: #242424;
      margin-bottom: 3.704vh;
      width: 25.729vw;
    }
    .our-team-left__btn {
      // position: relative;
      // top: 636px;
      font-size: 1em;
      font-weight: 600;
      color: #ffffff;
      width: fit-content;
      height: auto;
      background-color: #3777f3;
      border-radius: 50px;
      padding: 20px 50px;
      text-transform: uppercase;
      cursor: pointer;
      justify-content: center;
      display: flex;
      transition: 0.5s;
      white-space: nowrap;
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
    top: 5vh;
    display: flex;
    flex-direction: column;
    max-width: 56.458vw;
    width: 100%;
    img {
      width: inherit;
    }
    .our-team-right__content:nth-child(1) {
      width: 490px;
      height: 326px;
      position: relative;
      left: 7.813vw;
      z-index: 1;
    }
    .our-team-right__content:nth-child(2) {
      width: 440px;
      opacity: 0;
      position: relative;
      align-self: flex-end;
      z-index: 3;
      top: 2vh;
    }
    .our-team-right__content:nth-child(3) {
      width: 420px;
      height: 294px;
      opacity: 0;
      position: relative;
      z-index: 1;
      top: -36vh;
    }
    .our-team-right__content:nth-child(4) {
      width: 493px;
      height: 339px;
      opacity: 0;
      // background-color: #ffffff;
      position: relative;
      align-self: flex-end;
      z-index: 2;
      top: -36vh;
      margin-right: 10.385vw;
      border-radius: 20px 2px 2px 2px;
      display: flex;
      justify-content: space-between;
    }
    @media screen and (max-width: 2000px) {
      .our-team-right__content:nth-child(4) {
        top: -42vh;
        margin-right: 2vw;
      }
    }
  }
}
.active-block2 {
  transition: 1;
  .our-team-left .our-team-left__block-2 .our-team-left__description-2 {
    opacity: 1;
    transition: 1;
  }
  .our-team-left .our-team-left__block-2 .our-team-left__title {
    opacity: 1;
    transition: 1;
  }
}
.active-block3 {
  transition: 1;
  .our-team-left .our-team-left__block-3 .our-team-left__description-3 {
    opacity: 1;
    transition: 1;
  }
  .our-team-left .our-team-left__block-3 .our-team-left__title {
    opacity: 1;
    transition: 1;
  }
}
</style>
