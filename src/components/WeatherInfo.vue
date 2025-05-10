<script setup>
import { useWeatherStore } from '../store/store'
import { storeToRefs } from 'pinia'

const store = useWeatherStore()
const { weatherData } = storeToRefs(store)
</script>

<template>
  <div class="weather-info">
    <div class="icon">
      <!-- <img 
      :src="`http://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`" 
      :alt="$store.state.weatherData.text"> -->
      <img 
      :src="`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" 
      :alt="weatherData.text">
    </div>
    <!-- <div class="temp">{{ $store.state.weatherData.temp }}°C</div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">{{ $store.state.weatherData.city }}, {{ $store.state.weatherData.location }}</div> -->
    <div class="temp">{{ weatherData.temp }}°C</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">{{ weatherData.city }}, {{ weatherData.location }}</div>
  </div>
</template>

<style lang="scss" scoped>
.weather-info {
  padding: 20px;

  &>div {
    margin-bottom: 20px;
    padding: 20px;
    // border: 1px solid #ccc;
  }

  .icon img {
    width: 140px;
  }

  .temp {
    font-size: 4em;
  }

  .text {
    font-size: 2em;
  }
}
</style>