import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul'
    },
    toggle: false
  }),
  actions: {
    setWeatherData(payload) {
      this.weatherData = payload;
      this.weatherData.icon = payload.weather[0].icon;
      this.weatherData.temp = Math.round(payload.main.temp - 273.15);
      this.weatherData.text = payload.weather[0].description;
      this.weatherData.location = payload.sys.country;
      this.weatherData.city = payload.name;
    },
    setCity(payload) {
      this.weatherData.city = payload;
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },

    async getWeatherData() {
      const API_KEY = import.meta.env.VITE_API_KEY
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`
      await fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          this.setWeatherData(data)
        })
        .catch(err => {
          alert('지역을 찾을 수 없습니다.')
        })
    }
  }
})