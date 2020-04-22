<template>
  <div>
    <div>
      Please tell us what power cable needs you will have.
    </div>
    <strips :av="powerReq" :isOwner="isOwner"/>
  </div>
</template>

<script>
  import Strips from "@/components/request/power/strips";
  export default {
    name: "Power",
    components: {Strips},
    props: ['isOwner', 'req'],
    computed: {
      powerReq(){
        return this.req.power
      }
    }
  }
</script>

<style scoped>

</style>
