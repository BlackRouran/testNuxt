<template>
  <div>user page index

       <a href="/">a标签 会刷新页面</a>
       <router-link to="/">router-link 不刷新</router-link>  

       <p @click="jumpIndex">编程式导航</p>
  </div>
 
</template>

<script>
export default {
    name: "userPage",
    methods: {
        jumpIndex(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>