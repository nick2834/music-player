<!-- Home -->
<template>
  <div class="container">
    <main>
      <aside class="navs">
        <el-avatar :size="50" icon="el-icon-user-solid">登录</el-avatar>
        <nav class="menu">
          <p>
            <router-link tag="a" to="/search">
              <i class="el-icon-search"></i> 搜索
            </router-link>
          </p>
          <p>
            <router-link tag="a" to="/playlist">Playlist</router-link>
          </p>
          <p>
            <router-link tag="a" to="/podcasts">Top podcasts</router-link>
          </p>
          <p>
            <router-link tag="a" to="/user">
              <i class="el-icon-s-custom"></i> 用户中心
            </router-link>
          </p>
        </nav>
      </aside>
      <recommend-list :recommend="recommend"></recommend-list>
    </main>
  </div>
</template>

<script>
import { resource } from "@/api/recommend";
import RecommendList from "@/components/recommend";
export default {
  data() {
    return {
      recommend: []
    };
  },
  components: { RecommendList },

  computed: {},

  mounted() {
    this.$http.get("http://45.77.178.84:3000/recommend/songs").then(res => {
      console.log(res);
    });
    resource().then(({ data }) => {
      console.log(data);
      this.recommend = data.recommend;
    });
  },

  methods: {}
};
</script>
<style scoped lang="scss">
.container {
  background: rebeccapurple;
  width: 100vw;
  height: 100vh;

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
</style>