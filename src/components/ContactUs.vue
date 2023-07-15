<template>
  <section id="contact-us" class="contact-us">
    <div class="container">
      <div class="contact-us__main">
        <!-- <transition> -->
        <div class="left">
          <div class="left__title">Contact us</div>
          <div class="left__subtitle">
            <div class="left__circle">or</div>
            <div class="left__questions">
              <div class="left__question">Have a question?</div>
              <div class="left__question">Need a new project?</div>
              <div class="left__question">Just say hello?</div>
            </div>
          </div>
        </div>
        <!-- </transition> -->
        <!-- <transition name="slide-fade"> -->
        <form class="right">
          <div class="right__title">Send Us a Message</div>
          <div class="right__name right-input">
            <input type="text" class="name" />
            <div class="right__checking">
              <div v-if="name" class="check">
                <img src="@/assets/check.svg" alt="check img" />
              </div>
              <div v-else class="uncheck">
                <img src="@/assets/uncheck.svg" alt="check img" />
              </div>
            </div>
          </div>
          <div class="right__mail right-input">
            <input type="text" class="mail" />
            <div class="right__checking">
              <div v-if="mail" class="check">
                <img src="@/assets/check.svg" alt="check img" />
              </div>
              <div v-else class="uncheck">
                <img src="@/assets/uncheck.svg" alt="check img" />
              </div>
            </div>
          </div>
          <div class="right__error">Проверте правильность написания адреса</div>
          <textarea rows="3" class="right__message" placeholder="Message">
          </textarea>
          <div class="right__buttons">
            <div class="right__add">add file for upload</div>
            <div class="right__submit">SUBMIT</div>
          </div>
          <div class="right__photos">
            <div class="right__photo">
              <span>Our company photo.jpg</span>
              <span class="right__remove"
                ><img src="@/assets/x.svg" alt="x img"
              /></span>
            </div>
            <div class="right__photo">
              <span>Photo.jpg</span>
              <span class="right__remove"
                ><img src="@/assets/x.svg" alt="x img"
              /></span>
            </div>
            <div class="right__photo">
              <span>Photo.jpg</span>
              <span class="right__remove"
                ><img src="@/assets/x.svg" alt="x img"
              /></span>
            </div>
          </div>
        </form>
        <!-- </transition> -->
      </div>
    </div>
    <footer-company />
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import FooterCompany from "@/components/FooterCompany.vue";
export default {
  name: "ContactUs",
  components: {
    FooterCompany,
  },
  data() {
    return {
      show1: false,
      name: true,
      mail: false,
    };
  },
  methods: {
    consoleView() {
      console.log("click");
    },
    scrollAnimation() {
      const mainNav = document.querySelector(".main-nav");
      const slide4 = document.querySelector(".slide-4");
      const slide5 = document.querySelector(".slide-5");
      const slide4Heigth = slide4.clientHeight;

      const elLink = document.querySelector("a.contact-us");
      const allLinks = document.querySelectorAll(".main-nav__links a");
      function activeLink() {
        allLinks.forEach((el) => {
          el.classList.remove("active");
        });
        elLink.classList.add("active");
      }

      gsap.to(slide5, {
        y: -slide4Heigth,
        duration: 1,
        scrollTrigger: {
          trigger: slide5,
          start: "top bottom",
          // end: "+=200",
          pin: slide5,
          pinSpacing: false,
          toggleActions: "play none none reverse",
          // markers: true,
          onEnter: function () {
            mainNav.classList.remove("white");
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
$maxWidth: 1920;
@mixin adaptiv-font($pcSize, $mobSize) {
  $addSize: $pcSize - $mobSize;
  $maxWidth: $maxWidth - 375;
  font-size: calc(
    #{$mobSize + px} + #{$addSize} * ((100vw - 375px) / #{$maxWidth})
  );
}
.contact-us {
  background-color: #e0e0e0;
  padding-top: 9.167vh;
  height: 100vh;
  .container {
    display: flex;
  }
}
.contact-us__main {
  display: flex;
  height: 73.259vh;
  justify-content: space-between;
  width: 100%;
  // padding-top: 13.889vh;

  .left {
    align-self: center;
    // padding-left: 9.948vw;
    height: 100%;
    width: 46vw;
    max-width: 968px;
    margin-right: 19px;
    .left__title {
      // font-size: 5.313em;
      @include adaptiv-font(70, 20);
      font-weight: 800;
      color: #004ca9;
      margin-bottom: 11.5vh;
      width: fit-content;
      margin-top: 10.37vh;
    }
    .left__subtitle {
      font-size: 2.5em;
      font-weight: 800;
      color: #004ca9;
      display: flex;
      align-items: center;
      position: relative;
      top: 4.63vh;
      padding-left: 1.875vw;
      .left__circle {
        background-color: #ffffff;
        border-radius: 50%;
        width: 107px;
        // height: 9.907vh;
        height: 107px;
        color: rgba(19, 120, 212, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2px;
        transition: 0.5s;
      }
      .left__questions {
        display: flex;
        flex-direction: column;
        padding-left: 5.208vw;
        position: absolute;
        .left__question:nth-child(1) {
          margin-bottom: 1.759vh;
        }
        .left__question:nth-child(2) {
          margin: 0 0 2.222vh 2.917vw;
        }
        .left__question {
          transition: 0.3s;
          height: 6.63vh;
        }
        .left__question:hover {
          cursor: pointer;
          font-size: 50px;
          color: #3777f3;
          transition: 0.3s;
          transform: translateX(10px);
        }
      }
    }
  }
  .right {
    width: 33.854vw;
    max-width: 650px;
    .right__title {
      font-weight: 700;
      font-size: 1.5em;
      color: #004ca9;
      margin-top: 21.204vh;
      margin-bottom: 1.759vh;
    }
    .right-input {
      width: 33.854vw;
      max-width: 650px;
      height: 4.352vh;
      background-color: #ffffff;
      border-radius: 4px;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 1.042vw;
    }
    .right__checking {
      position: absolute;
      right: 1.042vw;
      top: 1.4vh;
      div {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .right__name,
    .right__error {
      margin-bottom: 9px;
    }
    .right__mail {
      margin-bottom: 1px;
    }
    .right__message {
      background-color: #ffffff;
      border-radius: 4px;
      width: 100%;
      padding: 12px 18px;
      font-size: 1em;
      line-height: 24px;
      margin-bottom: 29px;
      resize: none;
    }
    .right__message::placeholder {
      font-size: 1em;
      line-height: 150%;
      color: #849dba;
    }
    .right__error {
      font-family: "Source Sans Pro";
      font-weight: 400;
      font-size: 0.875em;
      line-height: 150%;
      color: #dd7070;
    }
    .right__buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.5vh;
      div {
        border-radius: 50px;
        text-transform: uppercase;
        padding: 1.85vh 2.604vw;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        white-space: nowrap;
      }
      .right__add {
        color: #3777f3;
        background-color: #ffffff;
        border: 3px solid #3777f3;
      }

      .right__submit {
        color: #ffffff;
        background-color: #3777f3;
        transition: 0.5s;
        &:hover {
          transition: 0.5s;
          background-color: #16449e;
        }
      }
    }
    .right__photos {
      display: flex;
    }
    .right__photo {
      display: flex;
      align-items: center;
      margin-right: 1.146vw;
      color: #004ca9;
    }
    span {
      font-size: 1em;
      line-height: 150%;
      margin-right: 6px;
    }
    .right__remove {
      border-radius: 50%;
      border: 2px solid #004ca9;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background-color: #ffffff;
      }
    }
  }
}
</style>
