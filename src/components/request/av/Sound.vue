<template>
  <div>
    <b-form @submit.prevent class="d-flex justify-content-center mt-4">
      <label>Do you need sound/microphones for your room?</label>
      <b-form-radio-group
        v-model="selected"
        :options="options"
        value-field="item"
        text-field="name"
        id="audioForm"
        class="ml-5"
        required
        :disabled="!isOwner"
      />
    </b-form>
    <div v-if="selected === 'no'">
      Ok, we will not be providing any microphones and or speakers...
    </div>
    <div v-else-if="selected === 'yes'">
      Please tell us what you are aiming to do with audio
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
    name: "Sound",
    mixins: [avMixin],
    data(){
      return {
        selectName: 'useAudio',
        descName: 'audioDesc'
      }
    }
  }
</script>

<style scoped>

</style>