const message = {
  data (){
    return {
      id: moment.now(),
      username: "",
      message: "",
      messages: [],
      date: moment().format('HH:mm'),
      loggedUser: "Jules TD"
    }
  },
  methods: {
    sendMessage(){
      if(!this.message){
          return
      }
      this.messages.push(this.message)
      this.message = ""
      console.log(this.messages)
    }
  },
  template: `
  <div class="col-md-7 border-left">
    <h4 class="text-center mb-3 p-3"><strong>Conversation <span class="mdi mdi-18px mdi-forum"></span></strong></h4>
    <h5><strong>{{ loggedUser }}</strong></h5>
    <div class="d-flex m-2 p-2 bg-info w-50 shadow-sm rounded justify-content-between" v-for="message in messages"><strong> {{ message }} </strong>
    <span>
     {{ date }}
      <span class="mdi mdi-18px mdi-check"></span>
     </span>
    </div>
    <form @submit.prevent="sendMessage">
    <div class="input-group mb-3">
      <input type="text" class="form-control shadow-sm" v-model="message" placeholder="Type your message here ..." aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-primary" type="submit" :disabled="!message">Send</button>
      </div>
    </div>
    </form>
  </div>
  `
}

export default message;