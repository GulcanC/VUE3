// APP 1- THIS IS JUST JAVASCRIPT NOT VUE
// APP-1 JAVASCRIPT CREATING LIST
/*
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal); */

// APP 1 AND APP 2 - THE SAME APP WITH VUE JS

// APP 1
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

//  APP 2
Vue.createApp({
  data() {
    return {
      prgs: [],
      enteredValue: "",
    };
  },
  methods: {
    addPrg() {
      this.prgs.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app2");

//  APP 3

const app3 = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue.js!",
      courseGoalB: "Master Vue and building amazing Vue Apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app3.mount("#app3");

//  APP 4

const app4 = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  competed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "COSKUN";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + 5;
    },
    reduce(num) {
      this.counter = this.counter - 5;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app4.mount("#app4");

// APP5

const app5 = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
  computed: {
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
});
app5.mount("#app5");

// APP 6

const app6 = Vue.createApp({
  data() {
    return {
      yourEnteredGoal: "",
      yourGoals: [],
    };
  },

  methods: {
    addYourGoals() {
      this.yourGoals.push(this.yourEnteredGoal);
    },
    removeYourGoals(index) {
      this.yourGoals.splice(index, 1);
    },
  },
});

app6.mount("#app6");

// APP 7

const app7 = Vue.createApp({
  data() {
    return {
      currentUsreInput: "",
      message: "Vue is great!",
    };
  },

  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});
app7.mount("#app7");

const app8 = Vue.createApp({
  template: `
  <h2>Add HTML Template via back tick</h2>
  <h3> {{ myTitle }} </h3>
  <p> {{ myP }} </p>

  <ul> 
  <li> {{myList1}} </li>
  <li> {{myList2}} </li>
  </ul>

  `,

  data() {
    return {
      myTitle: "Gulcan COSKUN",
      myP: "I am a web developper",
      myList1: "Java Script",
      myList2: "php",
    };
  },
});

app8.mount("#app8");

const app9 = Vue.createApp({
  data() {
    return {
      myInput: "",
      myMessage: "this.myMessage = this.$refs.userText.value;",
    };
  },

  methods: {
    saveMyInput(event) {
      this.myInput = event.target.value;
    },
    setMyText() {
      this.myMessage = this.$refs.userText.value;
    },
  },
});

app9.mount("#app9");

const app10 = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      persons: [
        {
          id: "gulcan",
          name: "Gulcan COSKUN",
          phone: "07 61 85 30 59",
          email: "gulcancoskun.a@gmail.com",
        },

        {
          id: "joe",
          name: "Joe ROY",
          phone: "06 75 23 30 59",
          email: "joeroy@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app10.mount("#app10");

// APP 11 COMPONENTS

const app11 = Vue.createApp({});

app11.component("contact-information", {
  template: `
  <li>
  <h2>{{personA.fullName }}</h2>
  <button @click="toggleInformations()">
  {{ informationsAreVisible ? 'Hide' :'Show'}} Informations
  </button>
  
  <ul v-if = "informationsAreVisible">
  <li><strong>Age : </strong> {{personA.age }} </li>
  <li><strong>Job : </strong> {{personA.job }} </li>
  </ul>
  </li>`,

  data() {
    return {
      informationsAreVisible: false,
      personA: {
        id: "clara",
        fullName: "Clara Martin",
        age: "40",
        job: "Engineer",
      },
    };
  },

  methods: {
    toggleInformations() {
      this.informationsAreVisible = !this.informationsAreVisible;
    },
  },
});
app11.mount("#app11");
