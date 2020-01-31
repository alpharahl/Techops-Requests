<template>
  <div>
    <div
      v-for="(user, id) in users"
      :key="id"
    >
      <User :user="user" :id="id"/>

    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import User from "@/components/admin/User";

  export default {
    name: "Users",
    components: {User},
    data(){
      return {
        users: {}
      }
    },

    mounted(){
      firebase
        .database()
        .ref('users')
        .on('value', (snapshot) => {
          this.users = snapshot.val();
        })
    }
  }
</script>

<style scoped>

</style>