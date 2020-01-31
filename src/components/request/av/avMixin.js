import firebase from "firebase";
import _ from 'lodash';

export default {
  props: ['av', 'isOwner'],
  data() {
    return {
      selected: null,
      options: [
        {item: 'yes', name: 'Yes'},
        {item: 'no', name: 'No'}
      ],
      description: "",
      descSaveStatus: ""
    }
  },

  methods: {
    updateDescription: _.debounce(function(desc){
      this.descSaveStatus = 'saving...'
      const values = {}
      values[desc] = this.description
      firebase
        .database()
        .ref('requests/' + this.$route.params.id + '/av')
        .update(values, (error) => {
          if (error){
            console.log(error)
            return;
          }
          this.descSaveStatus = 'saved';
          setTimeout(() => {
            this.descSaveStatus = "";
          }, 5000)
        })
    }, 2000),

    updateSelected(name){
      const values = {};
      values[name] = this.selected;
      firebase
        .database()
        .ref('requests/' + this.$route.params.id + '/av')
        .update(values)
    }
  },

  watch: {
    selected(){
      this.updateSelected(this.selectName)
    },

    av: {
      deep: true,
      handler(){
        if (!this.av){
          return
        }
        if (this.av[this.selectName]){
          this.selected = this.av[this.selectName]
        }
        if (this.av[this.descName]){
          this.description = this.av[this.descName]
        }
      }
    },

    description(){
      if (this.description !== this.av[this.descName]){
        this.updateDescription(this.descName)
      }
    }
  },

  mounted(){
    if (this.av){
      if (this.av[this.selectName]){
        this.selected = this.av[this.selectName]
      }
    }
  }
}