<template>
  <Question
    select-name="powerNeeds"
    descName="powerDesc"
    question="Do you need power strips/extension cords for your department"
    negative-statement="Ok, we will not be providing any power strips/extension cords for your department"
    information-req="Please tell us about what you need powered for your department. If you know exactly what you need, even better."
    :isOwner="isOwner"
    section="power"
    :av="av"
  />
</template>

<script>
  import Question from "@/components/shared/question";
  export default {
    name: "strips",
    components: {Question},
    props: ['av', 'isOwner']
  }
</script>

<style scoped>

</style>
