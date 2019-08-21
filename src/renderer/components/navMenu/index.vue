<!-- 导航 -->
<template>
  <header>
    <section>
      <span class="menu"></span>
      <div>
        <i class="ion-stats-bars"></i>
        <i class="ion-android-more-vertical" @click="back"></i>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    back(){
      this.$router.push('/')
    }
  }
};
</script>
<style scoped lang="scss">
header {
  top: 0;
  left: 0;
  z-index: 99;
  position: absolute;
  section {
    width: calc(100vw - 32px);
    height: 38px;
    display: flex;
    padding: 0 16px;
    z-index: 1;
    position: relative;
    background: transparent;
    align-items: center;
    justify-content: space-between;
    i {
      width: 32px;
      color: #eee;
      cursor: pointer;
      display: inline-block;
      font-size: 20px;
      text-align: center;
      margin-right: 4px;
      &:last-child{
        margin-right: 0;
      }
    }
    .menu {
      width: 12px;
      height: 12px;
      border: thin solid #ddd;
      background: #eee;
      box-sizing: border-box;
      margin-left: 58px;
      border-radius: 12px;
    }
  }
}
</style>