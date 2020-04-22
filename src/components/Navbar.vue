<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark"
  >
    <b-navbar-toggle target="nav-collapse"/>
    <b-navbar-brand>
      Techops Requests
    </b-navbar-brand>

    <b-navbar-nav v-if="signedIn">
      <b-nav-item :to="{name: 'myRequests'}">
        My Requests
      </b-nav-item>

      <b-nav-item :to="{name: 'reviewRequests'}" v-if="techops">
        Review Requests
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto" v-if="signedIn">
      <b-nav-item v-if="admin" :to="{name: 'admin'}">
        Admin
      </b-nav-item>

      <b-nav-item>
        <b-button size="sm" class="my-2 my-sm-0" @click="logout">
          Logout
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  import firebase from 'firebase';
  import isAdmin from "@/mixins/isAdmin";
  import isTechops from "@/mixins/isTechops";

  export default {
    name: "Navbar",
    mixins: [isAdmin, isTechops],
    props: ['signedIn'],
    methods: {
      logout(){
        firebase.auth().signOut();
        this.$router.push("/")
      }
    },
  }
</script>

<style scoped>

</style>
