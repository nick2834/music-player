<!-- 首页推荐歌单 -->
<template>
  <section class="list">
    <figure class="item favorite" v-for="(item, index) in recommend" :key="index">
      <figure class="cover__item">
        <img class="cover_back isLoad" :src="item.picUrl" alt />
      </figure>
      <figcaption>
        <figure>
          <img class="cover" :src="item.creator.avatarUrl" alt />
        </figure>
        <summary>
          <p>{{item.name}}</p>
        </summary>
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  props: {
    recommend: {
      required: false,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.list {
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  // padding-left: 16px;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: auto;
  cursor: pointer;
  // background: #ea4c89;
  .item {
    position: relative;
    height: 160px;
    padding: 0px;
    margin: 0px;
    font-family: "Roboto";
    font-weight: lighter;
    color: white;
    overflow: hidden;
    &:hover {
      .cover__item {
        transform: translateY(-50%) scale(1.1);
      }
    }
    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      z-index: 1;
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
    }
    .cover__item {
      margin: 0;
      padding: 0;
      position: relative;
      overflow: hidden;
      background: #ddd;
      transform: translateY(-50%) scale(1);
      transition: 0.2s;
    }
    img.cover_back {
      display: block;
      opacity: 0;
      transition: opacity 0.5s ease-out;
      width: 360px;
    }
    figcaption {
      top: 50%;
      left: 50px;
      display: flex;
      z-index: 2;
      position: absolute;
      margin-top: -25px;
      flex-direction: row;
      figure {
        margin: 0;
        padding: 0;
        position: relative;
        overflow: hidden;
        background: #ddd;
        height: 50px;
        width: 50px;
        box-shadow: rgb(12, 11, 11) 0px 0px 24px;
        .cover{
            width: 100%;
        }
      }
      summary {
        display: flex;
        margin-left: 10px;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        color: #000000;
      }
    }
  }
}
</style>