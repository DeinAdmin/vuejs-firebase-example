<template>
  <div>
    <h1>Doesn't this feel like home? 🏡</h1>
    <button @click="signOut">I wanna leave this beautiful place. ✌️</button>
  </div>
</template>

<script>
import { auth } from "@/util/firebase";

export default {
    name: "HomeView",
    methods: {
      signOut() {
        auth.signOut()
      }
    }
}

</script>

<style scoped>

</style>