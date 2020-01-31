<template>
  <b-col>
    <h2>{{type}}</h2>
    <div
      v-for="(step, ind) in steps"
      :key="ind"
      class="d-flex mt-2"
    >
      <div>{{step}}</div>
      <div class="ml-auto d-flex buttons">
        <div v-if="ind > 0">
          <b-button
            variant="link"
            @click="() => {moveStepUp(step)}"
            class="px-0"
          >
            u
          </b-button>
        </div>
        <div v-if="ind < steps.length - 1">
          <b-button
            variant="link"
            @click="() => (moveStepDown(step))"
            class="pl-1"
          >
            d
          </b-button>
        </div>
        <div>
          <b-button
            variant="link"
            @click="() => {remove(step)}"
            class="pl-1"
          >
            x
          </b-button>
        </div>
      </div>

    </div>

    <b-form @submit.prevent @submit="addStep" class="d-flex">
      <b-form-input v-model="addedStep"/>
      <b-button type="submit" variant="link">Add</b-button>
    </b-form>
  </b-col>
</template>

<script>
  import firebase from 'firebase';
  import move from 'lodash-move';

  export default {
    name: "Workflow",
    props: ['workflow', 'type'],
    computed: {
      steps(){
        if (!this.workflow){
          return [];
        }
        const wf = this.workflow[this.type];
        if (wf){
          return this.workflow[this.type].steps;
        }
        return [];
      }
    },
    data(){
      return {
        addedStep: ""
      }
    },

    methods: {
      sendToFirebase(steps){
        firebase
          .database()
          .ref('workflows/' + this.type)
          .update({
            steps: steps
          }, (error) => {
            if (error){
              console.log(error);
              alert('Something went wrong');
              return;
            }
            this.addedStep = ""
          })
      },

      addStep(){
        this.sendToFirebase(this.steps.concat(this.addedStep));
      },

      moveStepUp(value){
        const ind = this.steps.indexOf(value)
        this.sendToFirebase(move(this.steps, ind, ind-1));
      },

      moveStepDown(value){
        const ind = this.steps.indexOf(value)
        this.sendToFirebase(move(this.steps, ind, ind+1))
      },

      remove(value){
        const ind = this.steps.indexOf(value)
        this.steps.splice(ind, 1);
        this.sendToFirebase(this.steps)
      }
    }
  }
</script>

<style scoped>
  h2{
    font-size: 18px;
  }

  .buttons{
    font-size: 10px;
  }
</style>