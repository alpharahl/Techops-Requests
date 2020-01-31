import firebase from 'firebase';

export default {
  methods: {
    techopsCheck() {
      const uid = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref('techops/' + uid)
        .on('value', (snapshot) => {
          this.techops = snapshot.val() ? snapshot.val().value : false
        })
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(() => this.techopsCheck());
  },

  data(){
    return {
      techops: false,
    }
  }
}