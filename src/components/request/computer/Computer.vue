<template>
  <div>
    <div>
      Please tell us about any laptops/desktops/tablets you will need to rent from us.
    </div>
    <Laptops :av="compReq" :isOwner="isOwner"/>
  </div>
</template>

<script>
  import Laptops from "@/components/request/computer/laptops";
  export default {
    name: "Computer",
    components: {Laptops},
    props: ['isOwner', 'req'],
    computed: {
      compReq(){
        return this.req.computer;
      }
    }
  }
</script>

<style scoped>

</style>