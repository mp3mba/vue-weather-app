<template>
  <div class="container">
    <HelloWorld @weather-data="weatherData"/>
    <showResult :location = 'location' :celsius="celsius" :description="description" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import showResult from './components/showResult.vue'

export default {
  name: 'App',
  data(){
    return{
      location: '',
      celsius: '',
      description: '',
    }
  },
  components: {
    HelloWorld,
    showResult,
  },
  // created() {
  //   this.weatherData();
  // },
  methods: {
    weatherData(data, data1, data2) {
      this.location = data;
      this.celsius = data1;
      this.description = data2;
      console.log(this.location, this.celsius, this.description)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to left,  #9d6f0a , #dc7603);
}

.container{
  background-image: url('https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  height: 90vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

@media (max-width: 500px){
  .container{
    width: 100%;
  }
}

@media (max-width: 820px){
  .container{
    flex-direction: column;
  }
}
</style>
