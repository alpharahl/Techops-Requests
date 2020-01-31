<template>
  <div>
    <b-form @submit.prevent class="d-flex justify-content-center mt-4">
      <label>Do you need to present video?</label>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        value-field="item"
        text-field="name"
        id="presentVideoForm"
        class="ml-5"
        required
        :disabled="!isOwner"
      />
    </b-form>
    <div v-if="selected === 'no'">
      Ok, we will not be providing any projectors/tvs/etc...
    </div>
    <div v-else-if="selected === 'yes'">
      Please tell us what you are aiming to do with video
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
  import avMixin from "@/components/request/av/avMixin";

  export default {
    name: "PresentVideo",
    mixins: [avMixin],
    data(){
      return {
        selectName: 'presentSelected',
        descName: 'videoDesc'
      }
    },
  }
</script>

<style scoped>

</style>