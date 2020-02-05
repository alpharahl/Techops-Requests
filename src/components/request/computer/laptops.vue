<template>
  <Question
    selectName="useLaptops"
    descName="laptopDesc"
    question="Will you need any laptops for your room?"
    negative-statement="Ok, we will not be providing any laptops"
    information-req="Please tell us what you intend to use the laptops for, and how many you need"
    :is-owner="isOwner"
    :av="av"
    section="computer"
  />
</template>

<script>
  import Question from "@/components/shared/question";
  export default {
    name: "laptops",
    components: {Question},
    props: ['isOwner', 'av']
  }
</script>

<style scoped>

</style>