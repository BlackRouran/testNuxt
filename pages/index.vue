<template>
  <div>
     这里是app主页
      <div>
        <a href="/user">A标签跳转，会刷新页面</a>
      </div>
      <div>
        <router-link to="/user">router-link 跳转，不刷新页面</router-link>
      </div>
      <div @click="jumpUser">
        编程式导航和vue一样
      </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
      jumpUser(){
        this.$router.push('/user')
      }
    }
}
</script>

<style>

</style>