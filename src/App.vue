<template>
  <div id="app">
    <navbar />
  <sidebar />
  <images />
 
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import sidebar from './components/sidebar.vue'
import images from './components/images.vue'

export default {
  name: 'App',
  components: {
 Navbar,
 sidebar,
 images,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
