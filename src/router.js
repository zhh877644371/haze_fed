import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/UserManage/Register.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/UserManage/Login.vue")
    },
    {
      path: "/userInfChange",
      name: "userInfChange",
      component: () => import("./views/UserManage/UserInfChange.vue")
    },
    {
      path: "/picDataStorage1",
      name: "picDataStroage1",
      component: () => import("./views/DataUpload/PicDataStorage.vue")
    },
    {
      path: "/picDataStorage2",
      name: "picDataStroage2",
      component: () => import("./views/DataUpload/ScatterPicture.vue")
    },
    {
      path: "/txtDataStorage",
      name: "txtDataStroage",
      component: () => import("./views/DataUpload/TxtDataStorage.vue")
    },
    {
      path: "/dataSearch",
      name: "dataSearch",
      component: () => import("./views/DataSearch/DataSearch.vue")
    },
    {
      path: "/paperSearch",
      name: "paperSearch",
      component: () => import("./views/DataSearch/PaperSearch.vue")
    },
    {
      path: "/ChinaMap",
      name: "ChinaMap",
      component: () => import("./views/DataScene/ChinaMap.vue")
    },
    {
      path: "/WorldMap",
      name: "WorldMap",
      component: () => import("./views/DataScene/WorldMap.vue")
    },
    {
      path: "/dataAnalysis1",
      name: "dataAnalysis1",
      component: () => import("./views/DataScene/DBAnalysis.vue")
    },
    {
      path: "/lidarAnalysis1/:country/:province",
      name: "lidarAnalysis1",
      component: () => import("./views/DataScene/LidarAnalysis1.vue")
    },
    {
      path: "/lidarAnalysis2/:country",
      name: "lidarAnalysis2",
      component: () => import("./views/DataScene/LidarAnalysis2.vue")
    },
    {
      path: "/lidarAnalysis3",
      name: "lidarAnalysis3",
      component: () => import("./views/DataScene/LidarAnalysis3.vue")
    }
  ]
});
