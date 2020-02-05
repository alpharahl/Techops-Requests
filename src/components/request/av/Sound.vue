<template>
  <Question
    selectName="useAudio"
    descName="audioDesc"
    question="Do you need sound/microphones for your room?"
    negativeStatement="Ok, we will not be providing any microphones or sound support"
    informationReq="Please tell us what sound needs you have"
    :isOwner="isOwner"
    :av="av"
  />
</template>

<script>
  import Question from "@/components/shared/question";

  export default {
    name: "Sound",
    components: {Question},
    props: ['av', 'isOwner'],
  }
</script>

<style scoped>

</style>