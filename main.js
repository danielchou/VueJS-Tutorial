
var vm = new Vue({  /* ==> view model */
  el: "body",       /* ==> view  */
  data: {           /* ==> model */
    user:"Daniel",
	member:""
  },
  methods:{
	AddNewMember:function(){
		this.member=this.user;
	}
  }
});
