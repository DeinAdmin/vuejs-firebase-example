<template>
  <div>
    <div v-if="loggedIn !== null">
      <LoginView v-if="!loggedIn" />
      <HomeView v-else />
    </div>
  </div>
</template>

<script>
import LoginView from './components/LoginView';
import { auth } from '@/util/firebase.js'
import HomeView from "@/components/HomeView";

export default {
  name: 'App',
  components: {
    HomeView,
    LoginView
  },
  data() {
    return {
      loggedIn: null,
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
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
