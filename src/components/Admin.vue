<template>
  <div class="container">
    <h1>Admin</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Users">
        <Users/>
      </b-tab>
      <b-tab title="Workflows">
        <Workflows/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import Users from "@/components/admin/Users";
  import Workflows from "@/components/admin/Workflows";
  export default {
    name: "Admin",
    components: {Workflows, Users}
  }
</script>

<style scoped>

</style>