
<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">测试按钮</button>
    </div>
  </div>
</div>
</template>


<script>
  import './../assets/css/hichain.css'
  import axios from 'axios'
  export default{
    data(){
      return{
       content: ''
      }
    },
    methods: {
      submit(){
        axios.post('picture',{
          content: this.content
        }).then((res) => {

          console.log(res);
        })
      }
    }
  }
</script>
<style>
  
</style>