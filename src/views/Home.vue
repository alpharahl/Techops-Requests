<template>
  <div>
    <Login v-if="!signedIn" class="mt-5"/>
    <div v-else>
      Welcome
    </div>
  </div>
</template>

<script>
  import Login from "@/components/Login";
  import firebase from "firebase";
  export default {
    name: "Home",
    components: {Login},
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

<style scoped>

</style>