<template>
  <div>
    <h1>Welcome!</h1>
    <p>Please login to use this app.</p>
    <button @click="signIn">Sign in using Google</button>
  </div>
</template>

<script>
import { auth } from "@/util/firebase";
import firebase from 'firebase'

export default {
    name: "LoginView",
    methods: {
      signIn() {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(err => {
          alert("Something went wrong, check console.")
          console.log("An error appeared while trying to sign in with Google:\n" + err)
        })
      }
    }
  }

</script>