<template>
  <section id="contact-us" class="contact-us">
    <div class="contact-us__main">
      <transition name="fade">
        <div v-if="show1" class="left">
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
      </transition>
      <transition name="slide-fade">
        <form v-if="show1" class="right">
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
      </transition>
    </div>
    <footer-company />
  </section>
</template>

<script>
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

<style scoped lang="scss">
.vis {
  visibility: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(600px);
  opacity: 0;
}
.contact-us {
  background-image: url("@/assets/Vector.png");
  background-repeat: no-repeat;
  padding-top: 99px;
}
.contact-us__main {
  display: flex;
  height: 910px;

  .left {
    align-self: center;
    padding-left: 191px;

    height: 100%;
    width: 961px;
    margin-right: 19px;
    .left__title {
      font-size: 85px;
      font-weight: 800;
      color: #004ca9;
      margin-bottom: 82px;
      width: 600px;
      margin-top: 112px;
    }
    .left__subtitle {
      font-size: 40px;
      font-weight: 800;
      color: #004ca9;
      display: flex;
      align-items: center;
      .left__circle {
        background-color: #ffffff;
        border-radius: 50%;
        width: 107px;
        height: 107px;
        color: rgba(19, 120, 212, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2px;
      }
      .left__questions {
        display: flex;
        flex-direction: column;
        .left__question:nth-child(1) {
          font-size: 50px;
          color: #3777f3;
          margin-bottom: 19px;
        }
        .left__question:nth-child(2) {
          margin: 0 0 24px 56px;
        }
      }
    }
  }
  .right {
    .right__title {
      font-weight: 700;
      font-size: 24px;
      color: #004ca9;
      margin-top: 229px;
      margin-bottom: 19px;
    }
    .right-input {
      width: 650px;
      height: 47px;
      background-color: #ffffff;
      border-radius: 4px;
      position: relative;
    }
    .right__checking {
      position: absolute;
      right: 20px;
      top: 17px;
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
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 29px;
      resize: none;
    }
    .right__message::placeholder {
      font-size: 16px;
      line-height: 150%;
      color: #849dba;
    }
    .right__error {
      font-family: "Source Sans Pro";
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #dd7070;
    }
    .right__buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 27px;
      div {
        border-radius: 50px;
        text-transform: uppercase;
        padding: 20px 50px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .right__add {
        color: #3777f3;
        background-color: #ffffff;
        border: 3px solid #3777f3;
      }

      .right__submit {
        color: #ffffff;
        background-color: #3777f3;
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
      margin-right: 22px;
      color: #004ca9;
    }
    span {
      font-size: 16px;
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
