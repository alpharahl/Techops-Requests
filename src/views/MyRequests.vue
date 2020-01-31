<template>
  <div class="container mt-5">
    <h1>My Requests</h1>
    <RequestCard
      v-for="(req, id, ind) in requests"
      :key="ind"
      :req="req"
      :id="id"
    />
    <div class="mt-5 px-3">
      <div>
        Create a new request to get started
      </div>
        <b-form @submit="addRequest" @submit.prevent class="d-flex">
          <b-form-input
            v-model="department"
            placeholder="Department Name"
          />
          <b-button :disabled="department === ''" type="submit" class="ml-3">
            Add
          </b-button>

        </b-form>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import {isEmpty} from 'lodash';
  import RequestCard from "@/components/RequestCard";
  export default {
    name: "MyRequests",
    components: {RequestCard},
    data() {
      return {
        requests: {},
        department: ""
      }
    },

    computed: {
      hasRequests(){
        return !isEmpty(this.requests)
      }
    },

    methods: {
      getRequests(){
        firebase
          .database()
          .ref('requests/')
          .orderByChild('owner')
          .equalTo(firebase.auth().currentUser.uid)
          .on('value', (snapshot) => {
            this.requests = snapshot.val();
          })
      },

      addRequest(){
        firebase
          .database()
          .ref('requests')
          .push({
            owner: firebase.auth().currentUser.uid,
            status: 'created',
            department: this.department
          }, (error) => {
            if (error){
              alert('Sorry something went wrong, please try again later')
            }
            this.department = "";
          })
      }
    },

    mounted(){
      firebase.auth().onAuthStateChanged(() => {
        if (firebase.auth().currentUser){
          this.getRequests();
        }
      })
    }
  }
</script>

<style scoped>

</style>