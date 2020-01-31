<template>
  <div>
    <h1>Techops Requests System</h1>
    <small>Welcome to the techops request system for MAGFest 2021</small>

    <div>
      Please login to gain access to the tool.
    </div>

    <b-button @click="login">
      Login
    </b-button>
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: "Login",

    methods: {
      login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            const user = result.user;
            firebase
              .database()
              .ref('users/' + user.uid)
              .update({
                email: user.email,
                lastLogin: Date.now(),
                name: user.displayName
              })
            // ...
        }).catch(function (error) {
          console.log(error)
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
      }
    }
  }
</script>

<style scoped>

</style>