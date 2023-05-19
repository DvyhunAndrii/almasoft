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
        <div class="footer-up__social-network">
          <img src="@/assets/social-network/twitter.svg" alt=" img" />
        </div>
        <div class="footer-up__social-network">
          <img src="@/assets/social-network/in.svg" alt=" img" />
        </div>
        <div class="footer-up__social-network">
          <img src="@/assets/social-network/facebook.svg" alt=" img" />
        </div>
        <div class="footer-up__social-network">
          <img src="@/assets/social-network/instagram.svg" alt=" img" />
        </div>
      </div>
      <div class="footer-up__find-us">
        <div class="footer-up__title">Contact us</div>
        <a class="footer-up__mail">Info@alma-soft.com</a>
      </div>
    </div>
    <div class="footer-down">© Copyright Alma-Soft 2023</div>
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
  height: 169px;
  position: relative;
  color: #1c2d41;
  font-size: 16px;
  padding: 34px 191px 24px;
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
    margin-left: -14%;
    .footer-up__social-network {
      width: 47px;
      height: 47px;
      background-color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
  }
  .footer-down {
    font-family: "Source Sans Pro";
    font-style: normal;
    line-height: 20px;
    text-align: center;
    opacity: 1;
  }
}
</style>
