const myList = new Vue({
  el: "#root",
  data: {
    itemList: [],
    actives: [],
    inputItem: "",

  },
  methods: {
    takeInput: function(){
      if(this.inputItem == ""){
        this.itemList.push("--VUOTO--")
      }else{
      this.itemList.push(this.inputItem);
      this.inputItem = "";
      this.actives.push(false)
      }
    },
    removeItem: function(index){
      this.itemList.splice(index, 1)
      this.actives.splice(index, 1)
    },
    activate: function(index){
      const prev = this.actives[index];
      this.$set(this.actives, index, ! prev)
    }
  }
})
