<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="profile">
        <img
          src="https://www.shutterstock.com/image-photo/grass-flowers-during-sunset-shadow-260nw-1433901557.jpg"/>
          <h3>Name</h3>
        <p>Email</p>
      </div>
      <div class="menu">
        <ul>
          <li>
             
            <router-link to="/friendcontacts"><span><BootstrapIcon icon="person"/></span><span>Friends</span></router-link>
          </li>
          <li>
            <router-link to="/addfriend"><span><BootstrapIcon icon="person-add"/></span><span>Add Friend</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <!-- <router-link to="/friendcontacts">Friends</router-link>
    <router-link to="/addfriend">Add Friend</router-link>
    <input type="text" placeholder="Search" v-model="searchedContact" />
    <button @click="seinline-archContact">Search</button> -->
  </div>
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchedContact: "",
    };
  },
  provide() {
    return {
      getContacts: this.getContacts,
    };
  },
  watch: {
    searchedContact(changes) {
      if (changes === "") {
        this.getContacts();
      }
    },
  },

  methods: {
    async getContacts() {
      if (this.searchedContact === "") {
        this.$store.state.friends = (
          await axios.get("http://localhost:3000/select")
        ).data;
      }
    },
    async searchContact() {
      this.$store.state.friends = [];
      this.$store.state.friends.push(
        (
          await axios.get(
            `http://localhost:3000/select/${this.searchedContact}`
          )
        ).data
      );
    },
  },
};
</script>

<style scoped>
div {
  /* border-radius: 12px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem; 
  margin: auto;  
  max-width: 40rem;
}
a { 
  text-decoration: none;
  /* padding: 0.75rem 1.5rem; */
  /* font-family: inherit; */
  /* background-color: #ff0077; */
  /* border: 1px solid #ff0077; */
  /* color: white; */
  /* cursor: pointer; */
  /* border-radius: 6px; */
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: rgb(241, 237, 237);
  font-size: 16px;
  /* position: relative; */
}

a:hover,
a:active,
a.router-link-active {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #000000;

    /*background:white;
    border-right: 2px solid rgb(5, 68, 104); */
}
/* input {
  margin-left: 45px;
  margin-right: 3px;
} */

button {
  font: inherit;    
  cursor: pointer;
  border: 10px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.wrapper .sidebar {
  background: #020c22;
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  /* transition: all 0.5s ease; */
}

.wrapper .sidebar .profile img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

.wrapper .sidebar .profile h3 {
  color: #ffffff;
  margin: 10px 0 5px;
  font-size: 20px;
}

.wrapper .sidebar .profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.wrapper .sidebar .profile {
  /* margin-bottom: 30px; */
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  /* box-shadow: 0 2px 8px rgba(255, 255, 255, 0.26); */
}

.bi {
  margin-right: 10px;
}

.wrapper .sidebar  li{
    color: #dee4ec;
    width: 30px;
    display: block;
    width: 100%;
}

.wrapper .sidebar ul li a{
    display: block;
    padding: 13px 30px;
    border-bottom: 1px solid #10558d;
    /* color: rgb(241, 237, 237); */
    font-size: 16px;
    position: relative;
    
}
.wrapper .sidebar .menu{
  margin-left:-45px;
}
/* .wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before{
    display: block;
} */


</style>
