<!-- 播放器 -->
<template>
  <div class="audio__bar" @click.stop="showD">
    <figure>
      <figcaption :style="{'background-image':'url('+ coverUrl +')'}"></figcaption>
    </figure>
    <section>
      <div class="avatar">
        <el-avatar shape="square" :src="coverUrl"></el-avatar>
      </div>
      <aside>
        <div class="music__title">
          <p class="title" title="无与伦比的美丽">
            <a href>无与伦比的美丽</a>
          </p>
          <p class="author" title="苏打绿">
            <a href>苏打绿</a>
          </p>
        </div>
        <div class="control__bar">
          <div class="control__group-btn">
            <i class="ion-ios-rewind"></i>
            <i :class="!isPlay? 'ion-ios-play' : 'ion-ios-pause'" @click="handlePlay"></i>
            <i class="ion-ios-fastforward"></i>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: false,
      drawer: false
    };
  },
  computed: {
    coverUrl: {
      get() {
        return this.$store.state.music.coverUrl;
      }
    }
  },
  methods: {
    showD() {
      this.drawer = true;
    },
    handlePlay() {
      this.isPlay = !this.isPlay;
    },
    handleClose() {}
  }
};
</script>
<style scoped lang="scss">
.audio__bar {
  left: 0;
  width: 100vw;
  color: #000;
  bottom: 0;
  height: 50px;
  z-index: 99;
  position: fixed;
  background: none;
  figure {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    figcaption {
      position: absolute;
      left: 0px;
      top: -470px;
      width: 800px;
      height: 800px;
      padding: 0px;
      margin: 0px;
      background-size: 800px 800px;
      filter: blur(10px);
      z-index: -1;
    }
  }
  section {
    display: flex;
    z-index: 1;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
    .avatar {
      display: flex;
      height: 50px;
      width: 50px;
      justify-content: center;
      align-items: center;
    }
    aside {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 32px;
      justify-content: space-between;
      .music__title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          margin: 0;
          padding: 0;
        }
        a {
          display: inline-block;
          transition: 0.2s;
          border-bottom: thin solid rgba(255, 255, 255, 0);
          padding-bottom: 2px;
        }
        .title {
          margin-bottom: 3px !important;
          a {
            color: #081600;
            overflow: hidden;
            max-width: 200px;
            font-size: 13px;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-bottom: 1px;
          }
        }
        .author {
          overflow: hidden;
          font-size: 11px;
          max-width: 200px;
          margin-top: 2px;
          white-space: nowrap;
          text-overflow: ellipsis;
          a {
            font-size: 11px;
            color: #000;
          }
        }
      }
      .control__bar {
        .control__group-btn {
          color: #000;
          display: inline-block;
          margin-left: 16px;
          i {
            width: 24px;
            color: #000;
            height: 24px;
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            text-align: center;
            transition: 0.2s;
            line-height: 24px;
            margin-right: 16px;
            &:hover {
              color: #3571fb;
            }
          }
        }
      }
    }
  }
}
</style>