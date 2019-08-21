<!-- 登录 -->
<template>
  <div class="login-container">
    <div class="login__cover"></div>
    <div class="login_content">
      <router-link to="/home" class="nav__back" tag="a">
        <i class="ion-android-arrow-back"></i>
        Discover music
      </router-link>
      <div class="content">
        <header>
          <h1>Sign in</h1>
          <p>Hello there! Sign in and start playing with Music</p>
        </header>
        <section>
          <input
            type="text"
            placeholder="Your phone number"
            v-model="formData.phone"
            value="phone"
            @focus="handleFocus"
          />
          <input
            placeholder="Password"
            type="password"
            v-model="formData.psw"
            value="psw"
            @focus="handleFocus"
          />
          <p class="error__msg" v-if="isErr">Invalid username or password, Please try again.</p>
        </section>
        <footer>
          <button @click="loginBtn">
            <span>登录</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      formData: {
        phone: "18968038986",
        psw: "xuyong000.."
      },
      isErr: false
    };
  },

  mounted() {},

  methods: {
    handleFocus(e) {
      this.isErr = false;
    },
    loginBtn(e) {
      let _this = this;
      let formData = Object.assign({}, _this.formData);
      if (formData.phone == "" || formData.psw == "") {
        _this.isErr = true;
        return;
      }
      this.$store.dispatch("login", formData).then(res => {
        this.$router.push("/home");
      });
    }
  }
};
</script>
<style scoped lang="scss">
.login-container {
  height: 100vh;
  width: 100%;
  .login__cover {
    background: url("https://p2.music.126.net/_mn6wZ4l8MNjra2_PI_xAA==/109951164252798682.jpg");
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  .nav__back {
    top: 0;
    right: 12px;
    height: 40px;
    z-index: 9;
    position: fixed;
    font-size: 12px;
    transition: 0.2s;
    line-height: 40px;
    text-transform: uppercase;
    color: #000;
    &:hover {
      color: #6496f0;
    }
  }
  .login_content {
    width: 100%;
    height: 100vh;
    .content {
      display: flex;
      text-align: center;
      align-items: center;
      padding-top: 8vh;
      flex-direction: column;
      justify-content: space-between;
      &::before {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        content: "";
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
      }
      header {
        z-index: 1;
        h1 {
          color: #ea4c89;
          font-size: 44px;
          font-family: HelveticaNeue-UltraLight;
          font-weight: lighter;
          word-spacing: 6px;
          letter-spacing: 2px;
        }
        p {
          color: #000;
          font-size: 12px;
          max-width: 300px;
          line-height: 24px;
          word-spacing: 2px;
        }
      }
      section {
        z-index: 1;
        margin-top: 5vh;
        input {
          color: #000;
          width: 270px;
          height: 36px;
          border: 0;
          display: block;
          outline: 0;
          font-size: 14px;
          background: none;
          text-align: center;
          transition: 0.2s;
          line-height: 36px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 32px;
          &:focus {
            border-bottom-color: #ff6470;
          }
        }
        .error__msg {
          color: #e0245e;
          font-size: 12px;
          max-width: 300px;
          line-height: 24px;
          word-spacing: 2px;
          transition: 0.2s;
        }
      }
      footer {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        button {
          width: 120px;
          color: #fff;
          height: 40px;
          cursor: pointer;
          border: none;
          outline: 0;
          position: relative;
          overflow: hidden;
          font-size: 14px;
          transition: 0.4s;
          background: #5090fb;
          font-weight: 300;
          line-height: 40px;
          border-radius: 1px;
          letter-spacing: 1px;
          &::before {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
            display: block;
            opacity: 0;
            position: absolute;
            transition: 0.4s;
            background-image: linear-gradient(to right, #c2e59c, #64b3f4);
          }
          &:hover {
            box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.5);
            &::before {
              opacity: 1;
            }
          }
          span {
            z-index: 1;
            position: relative;
          }
        }
      }
    }
  }
}
</style>