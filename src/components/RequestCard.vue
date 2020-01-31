<template>
  <div class="d-flex px-5 py-2">
    <div>
      {{req.department}}
    </div>

    <div class="ml-auto">
      Status: {{req.status}}
    </div>
    <router-link class="ml-3" :to="{name: 'requests', params: {id: id}}">Visit</router-link>
  </div>
</template>

<script>
  export default {
    name: "RequestCard",
    props: ['req', 'id']
  }
</script>

<style scoped>

</style>