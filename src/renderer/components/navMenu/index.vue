<template>
  <!-- <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">Playlists</span>
      </template>
    </el-menu-item>
    <el-menu-item index="2">Artists</el-menu-item>
    <el-menu-item index="3">Albums</el-menu-item>
    <el-menu-item index="4">Songs</el-menu-item>
    <el-menu-item index="5">Discover</el-menu-item>
    <el-menu-item index="6">For You</el-menu-item>
  </el-menu>-->
  <ul class="nav_menu">
    <li index="1" class="active">
      <i class="el-icon-location"></i>
      <span slot="title">Playlists</span>
    </li>
    <li>
      <i class="el-icon-location"></i>
      <span slot="title">Artists</span>
    </li>
    <li>
      <i class="el-icon-location"></i>
      <span slot="title">Albums</span>
    </li>
    <li>
      <i class="el-icon-location"></i>
      <span slot="title">Songs</span>
    </li>
    <li>
      <i class="el-icon-location"></i>
      <span slot="title">Discover</span>
    </li>
    <li>
      <i class="el-icon-location"></i>
      <span slot="title">For You</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.nav_menu {
  width: 100%;
  background: rgba($color: #ffffff, $alpha: 0.8);
  height: 100px;
  display: flex;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    line-height: 20px;
    color: #1e3d43;
    text-align: center;
    cursor: pointer;
    i {
      line-height: 30px;
      font-size: 20px;
    }
    &.active {
      border-bottom: 4px solid #fb6d4c;
      background: rgba($color: #fb6d4c, $alpha: 0.3);
    }
  }
}
</style>