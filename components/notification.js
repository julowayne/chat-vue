const notification = {
  props: ["username"],
  template: `
  <div class="row">
    <div class="col-md-5" id="title">
      <div class="p-3 ml-0"><span class="mdi mdi-18px mdi-chat"></span><strong> Connected users</strong></div>
    </div>
    <div class="col-md-7 border-left">
      <div class="p-2"> 
        <div v-if="username" class="col p-2 shadow-sm name bg-light"><span class="mdi mdi-18px mdi-bell"></span> <strong>Hey, {{ username }} as entered the conversation <span class="mdi mdi-24px mdi-emoticon-happy-outline"></span>
        !</strong> </div>
      </div>
    </div>
  </div>  
  `,
}

export default notification;