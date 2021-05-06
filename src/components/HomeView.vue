<template>
  <div>
    <nav>
      <h1>Home 🏡</h1>
      <ul>
        <li><button @click="add">Add</button></li>
        <li><button class="btn-danger" @click="signOut">Logout</button></li>
      </ul>
    </nav>
    <div class="container">
      <h2>My streaming list:</h2>
      <div v-for="item in items" v-bind:key="item.name" class="item">
        <input class="check" v-model="item.checked" type="checkbox">
        <p @click="edit(item)">{{item.name}}</p>
        <a><img src="../assets/remove.svg" width="35"></a>
      </div>
    </div>
    <transition name="bgIn">
      <div v-if="editing" @click="editing = false" class="modal"></div>
    </transition>
    <transition name="cardIn">
      <div v-if="editing" class="card-container">
        <div class="card">
          <div class="content">
            <div>
              <h1>Edit item</h1>
            </div>
            <input class="name" v-model="editingValue" type="text" placeholder="Name of movie/show">
          </div>
          <button @click="editing = false" class="action-btn btn-left btn-danger">Cancel</button>
          <button @click="save" class="action-btn btn-right">Save</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { auth } from "@/util/firebase";

export default {
  name: "HomeView",
  data() {
    return {
      editing: false,
      editingValue: "",
      items: [
        {
          "name": "Harry Potter",
          "checked": false,
        },
        {
          "name": "Peter Pan",
          "checked": true,
        },
      ]
    }
  },
  methods: {
    signOut() {
      auth.signOut()
    },
    add() {
      alert("I don't do anything for now ✌️")
      alert("Have a good day! ☀️")
    },
    edit(item) {
      this.editing = true
      this.editingValue = item.name
    },
    save() {
      this.editing = false
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
  .container {
    margin: 150px auto 0;
    max-width: 500px;
  }
  h2 {
    font-size: 28px;
    color: #018786;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 4px;
    background: #FFFFFF;
    box-shadow: 0 0 9px -3px rgba(0,0,0,0.50);
    border-radius: 9px;
    position: relative;
    margin-bottom: 20px;
  }
  .item .check {
    margin: 15px 10px 15px 11px;
  }
  .item a {
    cursor: pointer;
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 50px;
    background: red;
    border-bottom-right-radius: 9px;
    border-top-right-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .modal {
    position: fixed;
    z-index: 10;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(5px) brightness(90%);
    -webkit-backdrop-filter: blur(5px);
    top: 0;
    left: 0;
    animation-duration: .4s;
    animation-name: bgIn;
  }
  @keyframes bgIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px) brightness(100%);
      -webkit-backdrop-filter: blur(0px);
    }

    to {
      opacity: 1;
      backdrop-filter: blur(5px) brightness(90%);
      -webkit-backdrop-filter: blur(5px);
    }
  }
  @keyframes cardIn {
    from {
      opacity: 0;
      transform: scale(0.8);
      filter: blur(20px);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .card {
    border-radius: 20px;
    background: white;
    max-width: 400px;
    width: 100%;
    z-index: 999;
    animation: cardIn;
    animation-duration: .4s;
    box-shadow: 0 0 9px -3px rgba(0,0,0,0.50);
    transform: scale(1);
    opacity: 1;
    position: relative;

  }
  .bgIn-enter-active, .bgIn-leave-active {
    transition: all .4s;
  }
  .bgIn-enter, .bgIn-leave-to {
    backdrop-filter: blur(0px) brightness(100%);
    -webkit-backdrop-filter: blur(0px);
    opacity: 0;
  }
  .cardIn-enter-active, .cardIn-leave-active {
    transition: all .4s;
  }
  .cardIn-enter, .cardIn-leave-to {
    transform: scale(.8);
    filter: blur(20px);
    opacity: 0;
  }
  .card h1 {
    padding: 0;
    margin: 0 0 5px;
  }
  .content {
    width: 100%;
    margin: 20px;
    padding-bottom: 40px;
  }
  .name {
    max-width: 300px;
    width: 100%;
    margin: 9px 0 0;
    border: none;
    border-radius: 11px;
    background: #FFFFFF;
    box-shadow: 0 0 11px -4px rgba(0,0,0,0.50);
    padding: 10px;
  }
  .action-btn {
    z-index: 999;
    max-width: 200px;
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: auto;
  }
  .action-btn:hover {
    transform: scale(1);
  }
  .action-btn:active {
    filter: hue-rotate(-20deg);
  }
  .btn-right {
    right: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .btn-left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    left: 0;
  }
</style>