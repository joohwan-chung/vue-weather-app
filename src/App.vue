<script setup>
import Navbar from './components/Navbar.vue'
import MainComp from './components/MainComp.vue'
import About from './components/About.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
onMounted(() => {
  store.dispatch('getWeatherData', 'Seoul')
})

const search = (city) => {
  store.dispatch('getWeatherData', city)
}
</script>

<template>
  <Navbar />

  <div v-if="!$store.state.toggle">
    <MainComp @search="search" />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style scoped lang="scss">

</style>
