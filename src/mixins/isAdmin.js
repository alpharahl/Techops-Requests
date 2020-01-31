import firebase from 'firebase';

export default {
  methods: {
    adminCheck() {
      const uid = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref('admins/' + uid)
        .on('value', (snapshot) => {
          this.admin = snapshot.val() ? snapshot.val().value : false

        })
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(() => this.adminCheck());
  },

  data(){
    return {
      admin: false,
    }
  }
}