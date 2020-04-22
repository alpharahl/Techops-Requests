<template>
  <div id="app">
    <Navbar v-if="signedIn" :signedIn="signedIn"/>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navbar from "@/components/Navbar";

export default {
  name: 'app',
  components: {Navbar},
  data(){
    return {
      signedIn: false
    }
  },

  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      this.signedIn = !!user
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
