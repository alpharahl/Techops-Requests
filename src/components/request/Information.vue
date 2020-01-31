<template>
  <div>
    <div v-if="editing && isOwner">
      <b-form-textarea
        v-model="info"
        placeholder="Please tell us about the programming you will be providing during MAGFest"
        rows="3"
        max-rows="10"/>
      <div v-if="status !== ''" class="d-flex">
        <small :class="{success: status === 'saved'}" class="ml-auto">
          {{status}}
        </small>
      </div>
      <small class="ml-auto">We use this information to help us determine a baseline for what gear you will need.</small>
      <b-button
        variant="link"
        @click="editing = !editing"
      >
        <small>Stop Editing</small>
      </b-button>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div v-if="!editing && isOwner && !req.info">
        <div>Please tell us about the programming your department will be providing during MAGFest</div>
        <small>We use this information to help us determine a baseline for what gear you will need</small>
      </div>
      <div v-else>
        {{req.info}}
      </div>
      <div class="ml-auto" v-if="isOwner">
        <b-button
          variant="link"
          @click="makeEditing"
        >
          Edit
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import firebase from 'firebase';

  export default {
    name: "Information",
    data(){
      return {
        editing: false,
        info: "",
        status: "",
        req: {},
        isOwner: false
      }
    },

    methods: {
      makeEditing(){
        this.info = this.req.info;
        this.editing = true;
      },

      endEditing(){
        this.editing = false
      },

      updateInfo: _.debounce(function() {
        this.status  = 'saving...';
        firebase
          .database()
          .ref('requests/' + this.$route.params.id)
          .update({
            info: this.info
          }, (error) => {
            if (error){
              alert('Something went wrong updating your request.');
              return;
            }

            this.status = 'saved';
            setTimeout(() => {
              this.status = "";
            }, 5000)
          })
      }, 200)
    },

    watch: {
      info(){
        if (this.editing){
          this.updateInfo();
        }
      }
    },

    mounted(){
      firebase
        .database()
        .ref('requests/' + this.$route.params.id)
        .on('value', (snapshot) => {
          this.req = snapshot.val();
          this.isOwner = firebase.auth().currentUser.uid === this.req.owner;
        })
    },
  }
</script>

<style scoped>
  .success{
    color: rgba(30,240,30,0.7)
  }
</style>