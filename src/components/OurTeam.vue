<template>
  <div class="main">
    <transition name="fade">
      <div v-if="show1" class="left">
        <div class="left__title">Our team</div>
        <div class="left__subtitle">
          “A harmonious team is the key to success”
        </div>
        <div class="left__text">
          Our team is made up of passionate individuals who truly love what they
          do and do it with high quality.
        </div>
        <div class="left__btn" @click="consoleView">View our works</div>
        <div class="left__title left__title_bottom">Join us Experience</div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="right">
        <div v-if="show1" class="right__content">
          <img src="@/assets/team/2.png" alt="team img" />
        </div>
        <div class="right__content">
          <img src="@/assets/team/4.png" alt="team img" />
        </div>
        <div class="right__content">
          <img src="@/assets/team/3.png" alt="team img" />
        </div>
        <div class="right__content">
          <img src="@/assets/team/5.png" alt="team img" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "OurTeam",
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

<style scoped lang="scss">
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
.main {
  display: flex;
  height: 1080px;
  background-image: url("@/assets/Vector.png");
  background-position: 0 32px;
  background-repeat: no-repeat;
  margin-top: 450px;
  .left {
    margin-left: 191px;
    position: relative;
    height: 100%;
    .left__title {
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      // position: absolute;
      // top: 239px;
      width: 600px;
      margin-bottom: 10px;
    }
    .left__title_bottom {
      opacity: 30%;
      width: 500px;
    }
    .left__subtitle {
      font-weight: 700;
      font-size: 20px;
      color: #242424;
      text-transform: uppercase;
    }
    .left__text {
      font-weight: 400;
      font-size: 20px;
      color: #242424;
      margin-bottom: 40px;
      width: 494px;
    }
    .left__btn {
      // position: relative;
      // top: 636px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      width: 244px;
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
    .left__btn:hover {
      transition: 0.5s;
      background-color: #ffffff;
      color: #3777f3;
    }
  }
  .right {
    align-self: flex-end;
    position: relative;
    right: 0.5px;
    top: 140px;
    display: flex;
    flex-direction: column;
    max-width: 1084px;
    width: 100%;
    .right__content:nth-child(1) {
      width: 490px;
      height: 325px;
      position: relative;
      left: 150px;
      z-index: 1;
    }
    .right__content:nth-child(2) {
      width: 493px;
      height: 338px;
      position: relative;
      align-self: flex-end;
      z-index: 2;
      top: -100px;
    }
    .right__content:nth-child(3) {
      width: 420px;
      height: 294px;
      position: relative;
      z-index: 1;
      top: -250px;
    }
    .right__content:nth-child(4) {
      width: 600px;
      height: 466px;
      background-color: #ffffff;
      position: relative;
      align-self: flex-end;
      z-index: 2;
      top: -326px;
      margin-right: 110px;
      border-radius: 20px 2px 2px 2px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
