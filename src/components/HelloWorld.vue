<template>
  <div class="main">
    <div class="left">
      <div class="left__title">
        Everything complicated is simple, if we take care of the code
      </div>
      <div class="left__btn">View our works</div>
    </div>
    <div class="right">
      <img src="@/assets/monitor/monitor.png" alt="monitor" />
      <div class="right__content">
        <img src="@/assets/monitor/monitor_img_1.png" alt="monitor img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  height: 980px;
  justify-content: space-between;
  background-image: url("@/assets/Vector.png");
  background-position: 0 32px;
  .left {
    align-self: center;
    margin-left: 191px;
    position: relative;
    height: 100%;
    .left__title {
      font-size: 70px;
      font-weight: 800;
      color: #004ca9;
      width: 600px;
      position: absolute;
      top: 239px;
    }
    .left__btn {
      position: relative;
      top: 636px;
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
    .right__content {
      position: absolute;
      top: 52px;
      right: 0;
    }
  }
}
</style>
