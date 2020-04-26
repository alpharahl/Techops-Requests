<template>
  <div :class="ind % 2 !== 0 ? 'alternate' : ''" class="p-3">
    <h3 class="mb-5">{{req.department}}</h3>
    <div class="d-flex">
      <div class="mr-auto">
        <div class="d-flex">
          <div class="pr-3">
            Video
          </div>
          <div>
            {{req.av.videoDesc}}
          </div>
        </div>
        <div class="d-flex">
          <div class="pr-3">
            Audio
          </div>
          <div>
            {{req.av.audioDesc}}
          </div>
        </div>
        <div class="d-flex">
          <div class="pr-3">
            Pipe & Drape
          </div>
          <div>
            {{req.av.drapeDesc}}
          </div>
        </div>
      </div>
      <div>
        <div class="ml-3 mb-3 border p-2" v-if="isOffice">
          <div>Office</div>
          <b-button v-if="avApproval" variant="success" @click="remove">
            Remove Approval
          </b-button>
          <b-button v-else variant="danger" @click="grant">
            Grant Approval
          </b-button>
        </div>
        <div class="ml-3" v-if="isAdmin">
          Status
          <b-form-select v-model="selected" :options="options" size="sm" @change="updateStatus">

          </b-form-select>
        </div>
      </div>
      <div class="ml-3" v-if="true ">
<!--        //!isAdmin && !isOffice">-->
        <div class="d-flex">
          <div class="mr-2">Office Status:</div>
          <div class="ml-auto">
            <span v-if="avApproval">Approved</span>
            <span v-else>Pending</span>
          </div>
        </div>
        <div class="d-flex">
          <div class="mr-2">Request Status:</div>
          <div class="ml-auto">
            <span>Status</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "av_col",
    props: ['ind', 'req', 'isOffice', 'isAdmin', 'id'],
    data(){
      return {
        avApproval: false,
        steps: [],
        selected: null,
      }
    },

    computed: {
      options(){
        return this.steps.map((step) => {
          return {
            value: step,
            text: step
          }
        })
      }
    },

    methods: {
      grant(){
        firebase
          .database()
          .ref(`officeApprovals/${this.id}`)
          .update({av: true})
      },

      remove(){
        firebase
          .database()
          .ref(`officeApprovals/${this.id}`)
          .update({av: false})
      },

      updateStatus(){
        if (!this.selected){
          return;
        }
        firebase
          .database()
          .ref(`requests/${this.id}/av`)
          .update({status: this.selected})
      }
    },

    mounted(){
      firebase
        .database()
        .ref(`officeApprovals/${this.id}`)
        .on('value', (snapshot) => {
          const val = snapshot.val();
          if (val){
            this.avApproval = val.av;
          }
        })
      firebase
        .database()
        .ref('workflows/AV')
        .on('value', (snapshot) => {
          this.steps = snapshot.val().steps
        })
      this.selected = this.req.av.status
    },
  }
</script>

<style scoped>

  .alternate{
    background-color: rgba(55,55,55, 0.8);
    color: white;
  }

</style>
