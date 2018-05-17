<template>
<div class="container">
  <h1>hello {{userId}}</h1>
  <router-link :to="{ name: 'userInfo', params: {userId} }">查看</router-link>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      userId: this.$route.params.userId
    }
  },
  mounted() {}
}
</script>

<style>
</style>
