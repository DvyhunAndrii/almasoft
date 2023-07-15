<template>
  <footer>
    <div class="footer-up">
      <div class="footer-up__find-us">
        <div class="footer-up__title">Find us</div>
        <div class="footer-up__subtitle">
          <div class="footer-up__flag">
            <img src="@/assets/flag-ukr.svg" alt="check img" />
          </div>
          <div class="footer-up__address">
            108, Malaya Morskaya, Mykolaiv, 54002 Ukraine
          </div>
        </div>
      </div>
      <div class="footer-up__social-networks">
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
        <div class="footer-down"><span>© Copyright Alma-Soft 2023</span></div>
      </div>
      <div class="footer-up__find-us">
        <div class="footer-up__title">Contact us</div>
        <a href="mailto:info@alma-soft.com" class="footer-up__mail"
          >Info@alma-soft.com</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-company",
};
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  // height: 169px;
  height: 100vh;
  position: relative;
  color: #1c2d41;
  font-size: 16px;
  padding: 34px 191px 24px;
  background-color: #e0e0e0;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000;
    opacity: 0.1;
  }
  .footer-up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 24px;
  }
  .footer-up__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #004ca9;
    margin-bottom: 18px;
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
  .footer-up__social-networks {
    display: flex;
    align-items: center;
    margin-left: -2vw;
    flex-direction: column;
    position: relative;
    top: 25px;
    .footer-up__social-networks-block {
      display: flex;
      margin-bottom: 30px;
      .footer-up__social-network {
        position: relative;
        z-index: 10;
        cursor: pointer;
        // transition: 0.7s;
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
      a:not(:last-child) {
        margin-right: 20px;
      }
      .footer-up__social-network:hover {
        width: 51px;
        height: 51px;
        // transition: 0.1s;
      }
    }
  }
  .footer-up__mail {
    color: #1378d5;
    font-size: 16px;
    line-height: 150%;
    cursor: pointer;
    position: relative;
    z-index: 10;
    transition: 0.5s;
  }
  .footer-up__mail:hover {
    color: #004ca9;
    transition: 0.5s;
  }
  .footer-down {
    font-family: "Source Sans Pro";
    font-style: normal;
    line-height: 20px;
    // text-align: center;
    display: flex;
    justify-content: center;
    opacity: 1;
    width: 100%;
  }
}
</style>
