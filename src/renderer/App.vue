<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { checkStatus } from "@/api/user";
export default {
  name: "musicplayer",
  mounted() {
    // checkStatus().then(res => {
    //   console.log(res);
    // }).catch(err =>{
    //   console.log(err)
    // });
  }
};
</script>

<style>
@import "./assets/css/reset.css";
/* CSS */
.isLoad {
  opacity: 1 !important;
}
</style>
