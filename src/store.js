import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: window.sessionStorage.getItem("isLogin") || false,
    userName: window.sessionStorage.getItem("userName") || ""
  },
  mutations: {
    handleLogin(state, userEmail) {
      window.sessionStorage.setItem("isLogin", true);
      window.sessionStorage.setItem("userName", userEmail);
      state.isLogin = window.sessionStorage.getItem("isLogin");
      state.userName = window.sessionStorage.getItem("userName");
    },
    handleLogout(state) {
      window.sessionStorage.removeItem("isLogin");
      window.sessionStorage.removeItem("userName");
      state.isLogin = false;
      state.userName = "";
    }
  },
  actions: {}
});
