<!-- Home -->
<template>
  <div
    class="container"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 1)"
  >
    <main>
      <aside class="navs">
        <router-link to="/login" v-if="!userInfo">
          <el-avatar :size="50" icon="el-icon-user-solid">登录</el-avatar>
        </router-link>
        <el-avatar v-else :size="50" :src="userInfo.profile.avatarUrl"></el-avatar>
        <nav class="menu">
          <p>
            <router-link tag="a" to="/search">
              <i class="ion-ios-search"></i> 搜索
            </router-link>
          </p>
          <p>
            <router-link tag="a" to="/playlist">
              <i class="ion-ios-musical-note"></i> 歌单
            </router-link>
          </p>
          <p>
            <router-link tag="a" to="/podcasts">Top podcasts</router-link>
          </p>
          <p>
            <router-link tag="a" to="/user">
              <i class="ion-android-person"></i> 用户中心
            </router-link>
          </p>
        </nav>
      </aside>
      <recommend-list :recommend="recommend"></recommend-list>
    </main>
    <div class="back__cover" v-if="!loading && recommend.length > 0">
      <img :src="coverUrl" alt />
    </div>
    <audio-bar></audio-bar>
  </div>
</template>

<script>
import { resource } from "@/api/recommend";
import RecommendList from "@/components/recommend";
import AudioBar from "@/components/audioBar";
export default {
  data() {
    return {
      recommend: [],
      loading: true
    };
  },
  computed: {
    userInfo: {
      get() {
        return this.$store.state.user.userInfo;
      }
    },
    coverUrl: {
      get() {
        return this.$store.state.music.coverUrl;
      }
    }
  },
  components: { RecommendList, AudioBar },
  // mounted() {
  //   resource().then(({ data }) => {
  //     this.loading = false;
  //     this.recommend = data.recommend;
  //     // this.coverUrl = data.recommend[5].picUrl;
  //     this.$store.commit("SET_COVER", data.recommend[0].picUrl);
  //   });
  // },
  created(){
    resource().then(({ data }) => {
      this.loading = false;
      this.recommend = data.recommend;
      // this.coverUrl = data.recommend[5].picUrl;
      this.$store.commit("SET_COVER", data.recommend[0].picUrl);
    });
  }
};
</script>
<style scoped lang="scss">
.container {
  // background: rebeccapurple;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  .navs {
    padding-left: 50px;
    padding-top: 80px;
    font-weight: 300;
    color: white;
    p {
      margin: 0;
      margin-bottom: 24px;
      &:hover a {
        &::after {
          opacity: 1;
          width: 110%;
        }
      }
    }
    a {
      color: inherit !important;
      &.login {
        font-size: 14px;
        letter-spacing: 2px;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 20px;
        width: 0;
        background: #ea4c89;
        transform: translateY(10px);
        opacity: 0;
        transition: 0.2s ease-out;
        z-index: -1;
      }
    }
  }
  .menu {
    margin-top: 100px;
    a {
      position: relative;
      font-size: 20px;
      text-indent: 4px;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }

  .clearfix {
    position: relative;
    display: block;
  }
  .hovered {
    position: absolute;
    top: 50%;
    left: -16px;
    margin-top: -16px;
    display: flex;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    background: rgb(92, 188, 125);
    color: white;
    z-index: 3;
    opacity: 0;
    transform: scale(0.8);
    transition: 0.5s;
  }
}
.back__cover {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -999;
}
</style>