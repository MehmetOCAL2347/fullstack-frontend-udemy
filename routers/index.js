import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import UnAuthorizedView from "../views/UnAuthorizedView.vue";

// import Store from "../stores/modules/index.js";
import Role from "../models/Role.js";
// import User from "../models/User.js";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/404",
      component: NotFoundView,
    },
    {
      path: "/401",
      component: UnAuthorizedView,
    },

    // User + Admin both pages
    {
      path: "/profile",
      component: ProfileView,
      meta: { roles: [Role.ADMIN, Role.USER] },
    },

    //Only Admin pages
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { roles: [Role.ADMIN] },
    },
  ],
});

// router.beforeEach((to, next) => {
//   const { roles } = to.meta;

//   const currentUser = Store.getters.getterForGetUser;
//   console.log(currentUser);

//   if(roles){
//     if(!currentUser){
//       return next({ path: "/login" });
//     }

//     if(roles.length && !roles.includes(currentUser.role)){
//       return next({path: "/401"});
//     }
//   }


// })

// router.beforeEach((to, from, next) => {
  // const { roles } = to.meta;
  // const currentUser = this.$store.getters.getterForGetUser;

  // if (roles) {
  //   if (!currentUser) {
  //     return next({ path: "/login" });
  //   }

  //   if (roles.length && !roles.includes(currentUser.role)) {
  //     return next({ path: "/401" });
  //   }
  // }
  // next();
// });

export default router;
