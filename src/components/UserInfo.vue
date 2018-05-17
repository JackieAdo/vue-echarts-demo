<template>
<div class="container">
  <h1>userId: {{userId}}</h1>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
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
