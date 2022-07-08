const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue=''
    },

    removeGoal(){

    }
  },

  

      
});

app.mount("#user-goals");
