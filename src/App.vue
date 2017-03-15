<template>
  <div id="app">
	<transition name="fade" mode="out-in">
	    <router-view></router-view>
	</transition>
	<main-nav></main-nav>
  </div>
</template>

<script>
import mainNav from "@/components/main-nav"
export default {
  name: 'app',
  components: {
	  "main-nav": mainNav
  }
}
</script>

<style lang="scss">
@import "./lib/sass/reset";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
