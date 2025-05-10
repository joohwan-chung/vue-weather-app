import { createStore } from 'vuex'

export default createStore({
  state: {
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul'
    },
    toggle: false
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = Math.round(payload.main.temp - 273.15);
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    setCity(state, payload) {
      state.weatherData.city = payload;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    }
  },
  actions: {
    // 앱이 실행되면 날씨 데이터 가져오기
    getWeatherData(context) {
      const API_KEY = import.meta.env.VITE_API_KEY
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          context.commit('setWeatherData', data)
        })
        .catch(err => {
          alert('지역을 찾을 수 없습니다.')
        })
    }
  }
})