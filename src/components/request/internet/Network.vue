<template>
  <Question
    select-name="networkNeeds"
    descName="networkDesc"
    question="Do you need internet access in your space?"
    negativeStatement="Ok, we will not be providing any wired and/or wireless internet to your departments rooms"
    information-req="Please tell us what you need internet for, and if you specifically need wired or wireless"
    :isOwner="isOwner"
    section="internet"
    :av="av"
  />
</template>

<script>
  import Question from "@/components/shared/question";
  export default {
    name: "Network",
    components: {Question},
    props: ['av', 'isOwner']
  }
</script>

<style scoped>

</style>
