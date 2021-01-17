import chat from "./components/chat.js";
import notification from "./components/notification.js";


const app = Vue.createApp({
    components: {
      chat,
      notification,
    },
    data(){
      return {
        username: ""
      }
    },
    methods: {
      getUser(user){
        this.username = user
      }
    },
  });
  
app.mount('#app')