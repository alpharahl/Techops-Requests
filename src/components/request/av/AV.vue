<template>
  <div>
    <div>
      Please tell us about any av (audio/visual) gear you will need to rent from us.
    </div>
    <PresentVideo :av="avReq" :isOwner="isOwner"/>
    <Sound :av="avReq" :isOwner="isOwner"/>
  </div>
</template>

<script>
  import PresentVideo from "@/components/request/av/PresentVideo";
  import Sound from "@/components/request/av/Sound";

  export default {
    name: "AV",
    components: {Sound, PresentVideo},
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