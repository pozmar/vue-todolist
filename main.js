const myList = new Vue({
  el: "#root",
  data: {
    itemList: [],
    inputItem: "",

  },
  methods: {
    takeInput: function(){
      this.itemList.push(this.inputItem)
    },
    removeItem: function(index){
      this.itemList.splice(index, 1)
    }
  }
})
