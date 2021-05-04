<template>
  <div>
    <nav>
      <h1>Home</h1>
      <ul>
        <li><button @click="add">Add</button></li>
        <li><button class="btn-danger" @click="signOut">Logout</button></li>
      </ul>
    </nav>

  </div>
</template>

<script>
import { auth } from "@/util/firebase";

export default {
    name: "HomeView",
    methods: {
      signOut() {
        auth.signOut()
      },
      add() {
        alert("I don't do anything for now ✌️")
        alert("Have a good day! ☀️")
      }
    }
}

</script>

<style scoped>

  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0 -3px 11px 0 rgba(0,0,0,0.50);
  }
  nav h1 {
    font-size: 40px;
    margin-left: 30px;
  }
  nav ul {
    display: flex;
    list-style: none;
    margin-right: 30px;
  }
  button {
    background-image: linear-gradient(225deg, #03DAC6 0%, #018786 100%);
    border: 1px solid #018786;
    border-radius: 8px;
    padding: 8px 15px;
    font-size: 20px;
    color: white;
    outline: none;
    cursor: pointer;
    transition: .3s;
    user-select: none;
    margin-left: 20px;
  }
  button:hover {
    border: 1px solid #03DAC6;
    filter: hue-rotate(15deg);
    transform: scale(1.05);
  }
  button:active {
    transform: scale(.98);
  }
  .btn-danger {
    background-image: linear-gradient(225deg, #FF0000 0%, #A00000 100%);
    border: 1px solid #A00000;
  }
  .btn-danger:hover {
    border: 1px solid #FF0000;
    filter: hue-rotate(30deg);
  }

</style>