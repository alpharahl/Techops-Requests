<template>
  <b-row>
    <Workflow :workflow="workflows" type="AV"/>
    <Workflow :workflow="workflows" type="Laptops"/>
    <Workflow :workflow="workflows" type="Power"/>
    <Workflow :workflow="workflows" type="Network"/>
  </b-row>
</template>

<script>
  import firebase from 'firebase';
  import Workflow from "@/components/admin/Workflow";

  export default {
    name: "Workflows",
    components: {Workflow},
    data(){
      return {
        workflows: []
      }
    },

    mounted(){
      firebase
        .database()
        .ref('workflows')
        .on('value', (snapshot) => {
          this.workflows = snapshot.val();
        })
    }
  }
</script>

<style scoped>

</style>