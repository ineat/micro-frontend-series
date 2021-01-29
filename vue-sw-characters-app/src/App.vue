<template>
  <div id="app">
    <CharacterComponent />
  </div>
</template>

<script>
import CharacterComponent from './components/CharacterComponent.vue'

export default {
  name: 'App',
  components: {
    CharacterComponent
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
  margin-top: 60px;
}
</style>
