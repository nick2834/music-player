<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "@/components/navMenu";
export default {
  name: "musicplayer",
  components: { NavMenu }
};
</script>

<style>
@import './assets/css/reset.css';
/* CSS */
</style>
