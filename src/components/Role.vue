<template>
<div class="container">
  <h1>hello {{roleId}}</h1>
</div>
</template>

<script>
export default {
  name: 'Role',
  data() {
    return {
      roleId: this.$route.query.roleId
    }
  },
  mounted() {}
}
</script>

<style>
</style>
