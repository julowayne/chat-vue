import user from "/components/user.js";

const users = {
  data (){
    return {
      user: 0,
    }
  },
  components: {
    user
  },
  methods: {
    userConnexion (){
      setInterval(() => {
        this.user ++;
      }, 2000);
    },
    getUser(user){
      this.$emit('sendUser', user)
    }
  },
  mounted(){
    this.userConnexion()
  },
  template: `
  <div class="col-md-5 m-0 sidebar">
    <div>
      <div class="row d-flex justify-content-center">
        <user v-if="user" @user="getUser" v-for="i in user"></user>
        <div v-else class="mt-3">
          <div>
            There is no user connected for the moment
            <span class="mdi mdi-24px mdi-emoticon-sad-outline"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

export default users;