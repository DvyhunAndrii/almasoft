<template>
  <div class="main">
    <transition name="fade">
      <div v-if="show1" class="left">
        <div class="left__title">Alma-Soft</div>
        <div class="left__subtitle">
          is the Ukrainian outsourcing software development company,
          specializing in Web, App and Software development. One of our most
          important features that we are not just solid performer, but a
          reliable partner.
        </div>
        <div class="left__btn" @click="consoleView">More about us</div>
      </div>
    </transition>
    <transition name="slide-fade">
      <ul v-if="show2" class="info">
        <li class="info__block info__innovative">
          <div class="info__item">
            <div class="info__title">94%</div>
            <div class="info__subtitle">satisfied clients</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">Full Cycle</div>
            <div class="info__subtitle">Development</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">More 10 years</div>
            <div class="info__subtitle">experience</div>
          </div>
          <div class="info__item">
            <div class="info__title">Innovative</div>
            <div class="info__subtitle">solutions</div>
          </div>
        </li>
        <li class="info__block info__innovative">
          <div class="info__item">
            <div class="info__title">More 60</div>
            <div class="info__subtitle">success projects</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">Support</div>
            <div class="info__subtitle">and maintenance services</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">Permanent</div>
            <div class="info__subtitle">development</div>
          </div>
          <div class="info__item">
            <div class="info__title">High</div>
            <div class="info__subtitle">Performance Team</div>
          </div>
        </li>
        <li class="info__block info__innovative">
          <div class="info__item">
            <div class="info__title">53% clients</div>
            <div class="info__subtitle">turned to us again</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">Focus</div>
            <div class="info__subtitle">on long-term relationships</div>
          </div>
          <div class="info__item blue">
            <div class="info__title">Direct</div>
            <div class="info__subtitle">communication</div>
          </div>
          <div class="info__item">
            <div class="info__title">Well</div>
            <div class="info__subtitle">coordinated team</div>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      show1: false,
      show2: true,
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
.main {
  display: flex;
  flex-direction: column;

  .left {
    height: 980px;
    flex-direction: column;
    color: #ffffff;
    background-image: url("@/assets/laptop.png");
    background-repeat: no-repeat;
    .left__title {
      margin: 355px 0 0 191px;
      font-size: 85px;
      font-weight: 800;
      margin-bottom: 10px;
      line-height: 100%;
    }
    .left__subtitle {
      font-size: 20px;
      font-weight: 400;
      width: 500px;
      margin: 0 0 40px 191px;
      line-height: 145%;
    }
    .left__btn {
      font-size: 16px;
      font-weight: 600;
      width: 244px;
      height: 59px;
      background-color: #3777f3;
      border-radius: 50px;
      padding: 20px 50px;
      margin-left: 191px;
      text-transform: uppercase;
      cursor: pointer;
      justify-content: center;
      display: flex;
    }
    .left__btn:hover {
      transition: 0.5s;
      background-color: #ffffff;
      color: #3777f3;
    }
  }
  .info {
    height: 980px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    background-image: url("@/assets/laptop-next.png");
    background-repeat: no-repeat;
    padding-top: 256px;
    .info__block {
      display: flex;
      justify-content: space-between;
      margin: 0 254px 132px 191px;
      .info__item {
        display: flex;
        flex-direction: column;
        width: 330px;
        .info__title {
          font-weight: 700;
          font-size: 44px;
        }
        .info__subtitle {
          font-weight: 400;
          font-size: 30px;
        }
      }
    }
  }
  .blue {
    color: #004ca9;
  }
}
</style>
