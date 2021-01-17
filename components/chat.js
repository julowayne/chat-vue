import users from "/components/users.js";
import message from "/components/message.js";


const chat = {
  components: {
    users,
    message,
  },
  methods: {
    getUser(user){
      this.$emit('sendUser', user)
    }
  },
  template: `
  <div class="row shadow-sm p-0">
    <users @send-user="getUser"></users>
    <message></message>
  </div>
  `
}

export default chat;