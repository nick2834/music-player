<!-- 搜索 -->
<template>
  <div class="search_container" :style="{'background-image':'url('+ coverUrl +')'}">
    <nav-menu></nav-menu>
    <main>
      <input type="text" class="search__input" placeholder="Search ..."/>
    </main>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  data() {
    return {};
  },
  computed: {
    coverUrl: {
      get() {
        return this.$store.state.music.coverUrl;
      }
    }
  },
  components: { NavMenu },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.search_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  background-size: center;
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0 32px;
    .search__input {
      width: 100%;
      color: #fff;
      height: 32px;
      border: 0;
      outline: 0;
      font-size: 32px;
      margin-top: 60px;
      background: none;
      line-height: 32px;
      font-weight: lighter;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
  }
}
</style>