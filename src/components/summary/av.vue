<template>
  <div>
    <av_col
      v-for="(req, id, reqInd) in requests"
      :key="req.id"
      :ind="reqInd"
      :req="req"
      :isOffice="isOffice"
      :isAdmin="isAdmin"
      :id="id"
    />
  </div>
</template>

<script>
  import firebase from "firebase";
  import av_col from "@/components/summary/av_col";

  export default {
    name: "av",
    components: {av_col},
    props: ['requests'],

    data(){
      return {
        isOffice: false,
        isAdmin: false,
        approvals: [],
      }
    },

    computed: {
    },

    methods: {
      init(){
        const id = firebase.auth().currentUser.uid
        firebase
          .database()
          .ref('office')
          .on('value', (snapshot) => {
            this.isOffice = snapshot.val()[id] ? snapshot.val()[id].value : false
          })
        firebase
          .database()
          .ref('admins')
          .on('value', (snapshot) => {
            this.isAdmin = snapshot.val()[id] ? snapshot.val()[id].value : false
          })
      },
    },

    mounted(){
      if (firebase.auth().currentUser){
        this.init();
      } else {
        firebase.auth().onAuthStateChanged(this.init)
      }
    }
  }
</script>

<style scoped>

  h3{
    font-size: 18px;
    font-weight: bold;
  }
</style>
