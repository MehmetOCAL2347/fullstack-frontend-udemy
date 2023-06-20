<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <TheMain></TheMain> -->
  <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="https://vuejs.org/">
                <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top"/>
                Vue
            </a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/home">
                        <i class="fa fa-home"/>
                        Home
                    </a>
                </li>
            </div>

            <div class="navbar-nav ml-auto" v-if="!user">
                <li class="nav-item">
                    <a class="nav-link" href="/register">
                        <i class="fa fa-user-plus"/>
                        Sign Up
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">
                        <i class="fa fa-sign-in"/>
                        Login
                    </a>
                </li>
            </div>

            <div class="navbar-nav ml-auto" v-if="user">
                <li class="nav-item">
                    <a class="nav-link" href="/profile">
                        <i class="fa fa-user"/>
                        {{user.name}}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="logOut">
                        <i class="fa fa-sign-out"/>
                        LogOut
                    </a>
                </li>
            </div>
        </nav>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheMain from "../components/TheMain.vue";

import vuex from 'vuex';
import UserService from '../services/user.service.js';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // TheMain
  },
  computed: {
    ...vuex.mapGetters(['getterForGetUser'])
    //this.$store.getters.getterForGetUser
  },
  methods: {
    ...vuex.mapActions(['actionForUpdateUser']),
    logOut(){
        UserService.logout().then(() => {
            this.actionForUpdateUser(null);
            this.$router.push('/login');
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
