<template>
<div class="container">
  <h1>hello {{authId}}</h1>
</div>
</template>

<script>
export default {
  name: 'Auth',
  props: {
    name: {
      default: 'xiaomi',
      type: String
    }
  },
  data() {
    return {
      authId: this.$route.params.authId
    }
  },
  mounted() {}
}
</script>

<style>
</style>
