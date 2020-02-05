<template>

  <div>
    <b-form @submit.prevent class="d-flex justify-content-center mt-4">
      <label>{{question}}</label>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        value-field="item"
        text-field="name"
        :id="selectName"
        class="ml-5"
        required
        :disabled="!isOwner"
      />
    </b-form>
    <div v-if="selected === 'no'">
      {{negativeStatement}}
    </div>
    <div v-else-if="selected === 'yes'">
      {{informationReq}}
      <b-textarea
        v-model="description"
        :disabled="!isOwner"
      />
      <div class="d-flex">
        <small class="ml-auto">{{descSaveStatus}}</small>
      </div>
    </div>
  </div>
</template>

<script>
  import avMixin from "@/components/shared/avMixin";

  export default {
    name: "question",
    mixins: [avMixin],
    props: [
      'selectName',
      'descName',
      'question',
      'negativeStatement',
      'informationReq'
    ],
  }
</script>

<style scoped>

</style>