<template>
  <div class="d-flex mt-3">
    <div class="name">
      {{user.name}}
      <br/>
      {{user.email}}
    </div>
    <div class="ml-auto">
      <b-button
        v-if="techops"
        variant="success"
        @click="toggleTechops"
      >
        Techops
      </b-button>
      <b-button
        v-else
        variant="danger"
        @click="toggleTechops"
      >
        Techops
      </b-button>
    </div>
    <div class="ml-2">
      <b-button
        v-if="admin"
        variant="success"
        @click="toggleAdmin"
      >
        Admin
      </b-button>
      <b-button
        v-else
        variant="danger"
        @click="toggleAdmin"
      >
        Admin
      </b-button>
    </div>
    <div class="ml-2">
      <b-button
        v-if="office"
        variant="success"
        @click="toggleOffice"
      >Office</b-button>
      <b-button
        v-else
        variant="danger"
        @click="toggleOffice"
      >
        Office
      </b-button>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: "User",
    props: ['user', 'id'],
    data(){
      return {
        admin: false,
        techops: false,
        office: false
      }
    },

    methods: {
      toggleTechops(){
        firebase
          .database()
          .ref('techops/' + this.id)
          .update({
            value: !this.techops
          }, (error) => {
            if (error){
              alert('somethign went wrong, please try again')
            }
          })
      },

      toggleAdmin(){
        firebase
          .database()
          .ref('admins/' + this.id)
          .update({
            value: !this.admin
          }, (error) => {
            if (error){
              alert('somethign went wrong, please try again')
              console.log(error);
            }
          })
      },

      toggleOffice(){
        firebase
          .database()
          .ref(`office/${this.id}`)
          .update({
            value: !this.office
          }, (error) => {
            if (error){
              alert('Something went wrong, please try again')
              console.log(error)
            }
          })
      }
    },

    mounted(){

      firebase
        .database()
        .ref('admins')
        .on('value', (snapshot) => {
          this.admin = snapshot.val()[this.id] ? snapshot.val()[this.id].value : false
        })
      firebase
        .database()
        .ref('techops')
        .on('value', (snapshot) => {
          this.techops = snapshot.val()[this.id] ? snapshot.val()[this.id].value : false
        })
      firebase
        .database()
        .ref('office')
        .on('value', (snapshot) => {
          this.office = snapshot.val()[this.id] ? snapshot.val()[this.id].value : false
        })
    }
  }
</script>

<style scoped>
  .name{
    text-align: left;
  }
</style>
