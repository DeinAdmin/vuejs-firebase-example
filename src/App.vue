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
    console.log(process.env.VUE_APP_FB_MESSAGING_ID)
    auth.onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  }
}
</script>

<style>
  @font-face {
    font-family: SFpro;
    src: url('assets/sfpro.otf') format('opentype');
  }
  @font-face {
    font-family: SFpro;
    font-weight: bold;
    src: url('assets/sfprobold.otf') format('opentype');
  }
  * {
    font-family: "SFpro", sans-serif;
    outline: none;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
