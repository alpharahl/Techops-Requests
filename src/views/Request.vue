<template>
  <div class="container">
    <h1 class="pt-4">{{req.department}}</h1>
    <Information :is-owner="isOwner"/>
    <div class="mt-5">
      Department Requirements
    </div>
    <b-tabs content-class="mt-3">
      <b-tab title="AV">
        <AV :is-owner="isOwner" :req="req"/>
      </b-tab>
      <b-tab title="Computer">
        <Computer :is-owner="isOwner" :req="req"/>
      </b-tab>
      <b-tab title="Internet">
        <Internet :is-owner="isOwner" :req="req"/>
      </b-tab>
      <b-tab title="Power">
        <Power :is-owner="isOwner" :req="req"/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Information from "@/components/request/Information";
  import AV from "@/components/request/av/AV";
  import Computer from "@/components/request/computer/Computer";
  import Internet from "@/components/request/internet/Internet";
  import Power from "@/components/request/power/Power";

  export default {
    name: "Request",
    components: {Power, Internet, Computer, AV, Information},
    data(){
      return {
        req: {},
        uid: ""
      }
    },

    computed: {
      isOwner(){
        return this.req.owner === this.uid;
      }
    },

    mounted(){

      firebase.auth().onAuthStateChanged((user) => {
        this.uid = user.uid;

        firebase
          .database()
          .ref('requests/' + this.$route.params.id)
          .on('value', (snapshot) => {
            this.req = snapshot.val();
          })
      })
    }

  }
</script>

<style scoped>
  >>> .nav-link{
    color: #fff;
  }

  >>> .nav-link.active{
    color: #000
  }
</style>
