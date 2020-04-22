<template>
  <div>
    <div>
      Please tell us about your internet needs
    </div>
    <Network :av="internetReq" :isOwner="isOwner"/>
  </div>
</template>

<script>
  import Network from "@/components/request/internet/Network";
  export default {
    name: "Internet",
    components: {Network},
    props: ['isOwner', 'req'],
    computed: {
      internetReq(){
        return this.req.internet;
      }
    }
  }
</script>

<style scoped>

</style>
