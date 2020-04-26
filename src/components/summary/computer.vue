<template>
  <div>
    <b-row
      v-for="(req, reqInd) in comptuerReqs"
      :key="req.id"
      :class="{alternate: reqInd % 2 === 0}"
      class="p-3"
    >
      <b-col class="m-auto" md="3">
        {{req.department}}
      </b-col>
      <b-col md="9" v-if="req.computer">

      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "computer",
    props: ['requests'],

    computed: {
      comptuerReqs(){
        return Object.keys(this.requests).map((id) => {
          const req = this.requests[id]
          if (req.computer){
            return req
          } else {
            return {}
          }
        })
      }
    }
  }
</script>

<style scoped>
  .alternate{
    background-color: rgba(55,55,55, 0.8);
    color: white;
  }
</style>
