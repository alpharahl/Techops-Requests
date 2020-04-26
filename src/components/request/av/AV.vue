<template>
  <div>
    <div class="m-5 p-3 border">
      Current Status:
      <span v-if="avReq">
        {{avReq.status}}
      </span>
      <span v-else>None</span>

    </div>
    <div>
      Please tell us about any av (audio/visual) gear you will need to rent from us.
    </div>
    <PresentVideo :av="avReq" :isOwner="isOwner"/>
    <Sound :av="avReq" :isOwner="isOwner"/>
    <drape :av="avReq" :is-owner="isOwner"/>
  </div>
</template>

<script>
  import PresentVideo from "@/components/request/av/PresentVideo";
  import Sound from "@/components/request/av/Sound";
  import Drape from "@/components/request/av/Drape";

  export default {
    name: "AV",
    components: {Drape, Sound, PresentVideo},
    props: ['isOwner', 'req'],
    computed: {
      avReq(){
        return this.req.av;
      }
    }
  }
</script>

<style scoped>

</style>
