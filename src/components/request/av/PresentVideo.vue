<template>
  <Question
    select-name="presentSelected"
    descName="videoDesc"
    question="Do you need to present video?"
    negativeStatement="Ok, we will not be providing any projectors/tvs/etc..."
    information-req="Please tell us what you are aiming to do with video"
    :isOwner="isOwner"
    :av="av"
  />
</template>

<script>
  import Question from "@/components/shared/question";

  export default {
    name: "PresentVideo",
    components: {Question},
    props:['av','isOwner']
  }
</script>

<style scoped>

</style>