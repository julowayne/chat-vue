const user = {
  data (){
    return {
      user : {
        id: moment.now(),
        username: "",
      }
    }
  },
  methods: {
    generateUser(){
      this.user.username = faker.fake("{{name.lastName}}, {{name.firstName}}");
      this.$emit('user', this.user.username);
    },
  },
  mounted() {
    this.generateUser()
  },

  template : `
      <div class="d-flex w-100 p-2 justify-content-between align-items-center" style='border-bottom:1px solid #ccc'
      >
        <div>
          <div>
            <strong> {{ user.username }} </strong>
          </div>
        </div>
        <div>
          <span class="mr-2">
            <span class="mdi mdi-24px mdi-account"></span>
          </span>
        </div>
      </div>
  `,
};

export default user;