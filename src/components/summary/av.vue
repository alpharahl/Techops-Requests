<template>
  <div>
    <b-row v-for="(req, reqInd) in avReqs"
         :key="req.id"
         :class="{alternate: reqInd % 2 === 0}"
         class="p-3"
    >
      <b-col md="3" class="m-auto">
        {{req.department}}
      </b-col>
      <b-col md="9" v-if="req.av">
        <div>Video</div>
        <div v-if="req.av.presentSelected">
          {{req.av.videoDesc}}
        </div>
        <div v-else>
          N/A
        </div>
        <div class="mt-2">Audio</div>
        <div v-if="req.av.useAudio">
          {{req.av.audioDesc}}
        </div>
        <div v-else>
          N/A
        </div>
        <div class="mt-2">Drape</div>
        <div v-if="req.av.useDrape">
          {{req.av.drapeDesc}}
        </div>
        <div v-else>
          N/A
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "av",
    props: ['requests'],

    computed: {
      avReqs(){
        return Object.keys(this.requests).map((id) => {
          const req = this.requests[id]
          if (req.av){
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
    background-color: rgba(26,26,26, 0.8);
    color: white;
  }
</style>