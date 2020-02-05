<template>
  <Question
    selectName="useDrape"
    descName="drapeDesc"
    question="Do you need pipe and drape in your room?"
    negative-statement="Ok, we wont be providing any pipe and drape"
    information="Please explain what pipe and drape you need, and how much of it (ft)"
    :isOwner="isOwner"
    :av="av"
    section="av"
  />
</template>

<script>

  import Question from "@/components/shared/question";
  export default {
    name: "Drape",
    components: {Question},
    props:['av', 'isOwner']
  }
</script>

<style scoped>

</style>