<template>
  <div>
    <div>
      Please tell us about your internet needs
    </div>
  </div>
</template>

<script>
  export default {
    name: "Internet",
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