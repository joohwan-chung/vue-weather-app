<script setup>
import Navbar from './components/Navbar.vue'
import MainComp from './components/MainComp.vue'
import About from './components/About.vue'
import { onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useWeatherStore } from './store/store'
import { storeToRefs } from 'pinia'

// const store = useStore()
// onMounted(() => {
//   store.dispatch('getWeatherData', 'Seoul')
// })

// const search = (city) => {
//   store.dispatch('getWeatherData', city)
// }


const store = useWeatherStore()
const { toggle } = storeToRefs(store)

onMounted(() => {
  store.getWeatherData()
})

</script>

<template>
  <Navbar />

  <!-- <div v-if="!$store.state.toggle"> -->
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style scoped lang="scss">

</style>
