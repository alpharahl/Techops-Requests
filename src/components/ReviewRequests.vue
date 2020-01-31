<template>
  <div>
    <h1>Review Requests</h1>
    <RequestCard
      v-for="(req, id, ind) in reqs"
      :key="ind"
      :req="req"
      :id="id"
    />
  </div>
</template>

<script>
  import firebase from 'firebase';
  import RequestCard from "@/components/RequestCard";

  export default {
    name: "ReviewRequests",
    components: {RequestCard},
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