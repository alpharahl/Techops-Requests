<template>
  <div class="container">
    <h1>Review Requests</h1>
    <b-tabs>
      <b-tab title="Requests" active>
        <RequestCard
          v-for="(req, id, ind) in reqs"
          :key="ind"
          :req="req"
          :id="id"
        />
      </b-tab>
      <b-tab title="Av">
        <AV :requests="reqs"/>
      </b-tab>
      <b-tab title="Computer">

      </b-tab>
      <b-tab title="Internet">

      </b-tab>
      <b-tab title="Power">

      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import RequestCard from "@/components/RequestCard";
  import AV from "@/components/summary/av";

  export default {
    name: "ReviewRequests",
    components: {AV, RequestCard},
    data(){
      return {
        reqs: {}
      }
    },

    methods: {

    },

    mounted(){
      firebase
        .database()
        .ref('requests')
        .on('value', (snapshot) => {
          this.reqs = snapshot.val();
        })
    }
  }
</script>

<style scoped>

</style>