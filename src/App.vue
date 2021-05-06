<template>
  <div>
    <div v-if="loaded">
      <LoginView v-if="user === null" />
      <HomeView :user="user" v-else />
    </div>
  </div>
</template>

<script>
import LoginView from './components/LoginView';
import { auth, db } from '@/util/firebase.js'
import HomeView from "@/components/HomeView";


export default {
  name: 'App',
  components: {
    HomeView,
    LoginView
  },
  data() {
    return {
      user: null,
      loaded: false
    }
  },
  created() {
    let that = this
    auth.onAuthStateChanged(async (user) => {
      if(user) {

        await db.collection("profiles").doc(user.uid).get().then(doc => {
          if(!doc.data()) {
            db.collection("profiles").doc(user.uid).set({
              email: user.email,
              items: [],
            }).then(() => {
              that.user = user
              this.loaded = true

            })
          } else {
            that.user = user
            this.loaded = true

          }
        })
      } else {
        this.user = null
        this.loaded = true

      }
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
