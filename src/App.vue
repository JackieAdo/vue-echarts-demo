<template>
<div id="app">
  <h1 class="main-h1">
    <router-link :to="{ name: 'index', params: {} }">  首页</router-link>
    <router-link :to="{ name: 'hello'}">图表</router-link>
  </h1>

  <transition name="fade">
    <router-view/>
  </transition>
  <router-view name="hello" />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-h1 {
  margin: 0;
  padding: 20px;
  background-color: #f6f8fa;
  color: #6a737d;
  font-weight: normal;
}

a {
  color: #6a737d;
  text-decoration: none;
}

a:hover {
  color: #e87c25;
  text-decoration: underline;
}

.container h1 {
  margin: 0;
  padding: 20px;
  color: #6a737d;
  font-weight: normal;
}

.linkActiveClass {
  color: #e87c25;
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

  {
  opacity: 0;
}
</style>
