<template>
  <div class="login-container">
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
    data() {
      return {
        loggingIn: false,
      }
    },
    methods: {
      signIn() {
        this.loggingIn = true;
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(err => {
          if(err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") return
          alert("Something went wrong, check console.")
          console.log("An error appeared while trying to sign in with Google:\n" + err.code)
        })
      }
    }
  }

</script>

<style scoped>

  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80VH;
  }
  h1 {
    margin: 0;
    font-size: 80px;
    color: #0080EE;
  }
  p {
    margin-top: 0;
    font-size: 25px;
    color: #008EC5;
  }
  button {
    background-image: linear-gradient(225deg, #03DAC6 0%, #018786 100%);
    border: 1px solid #018786;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 25px;
    color: white;
    outline: none;
    cursor: pointer;
    transition: .3s;
    user-select: none;
  }
  button:hover {
    border: 1px solid #03DAC6;
    filter: hue-rotate(15deg);
    transform: scale(1.05);
  }
  button:active {
    transform: scale(.98);
  }

</style>