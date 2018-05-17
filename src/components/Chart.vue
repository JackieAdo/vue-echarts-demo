<template>
<div>
  <span>{{name}}</span>
  <router-link :to="{ name: 'user', params: {userId:1} }">用户</router-link>
  <router-link :to="{ name: 'role', query: {roleId:2} }">角色</router-link>
  <router-link :to="{ name: 'auth', params: {authId:3} }">权限</router-link>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'Chart',
  
  data() {
    return {}
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
    }
  },
  mounted() {}
}
</script>

<style>
</style>
