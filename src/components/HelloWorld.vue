<template>
  <div class="box">
    <div class="top">
      <input id="location" v-model="location" type="text">
      <button @click="getWeather"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div v-if="weather" class="weather-desc">
      <h3>weather description</h3>
      <p><span>Temperature:</span> <span>{{ celsius }}<sup>0</sup> C</span></p>
      <p><span>Description:</span> <span>{{ weather.weather[0].description }}</span></p>
      <p><span>Clouds:</span> <span>{{ weather.clouds.all }}%</span></p>
      <p><span>Humidity:</span> <span>{{ weather.main.humidity }}%</span></p>
      <p><span>Pressure:</span> <span>{{ weather.main.pressure }}Pa</span></p>
    </div>
    <hr>
 </div>
</template>

<script>
import WeatherService from '@/services/WeatherService';

export default {
  name: 'HelloWorld',
  data(){
    return{
      location: 'mwanza',
      weather: null,
      temperature: '',
      description: '',
    }
  },
  computed: {
    celsius() {
      return Math.round((this.temperature - 270) * 5/9);
    }
  },
  created(){
    this.getWeather();
  },
  methods: {
    getWeather() {
      WeatherService.getCurrentWeather(this.location)
        .then(response => {
          this.weather = response.data;
          this.temperature = this.weather.main.temp
          this.description = this.weather.weather[0].description;
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });

        this.$emit('weather-data',  this.location, this.celsius, this.description);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    background-color: rgba(0,0,0,.7);
    padding-left: 25px;
  }
  .top{
    text-align: left;
  }
  input{
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 15px;
    outline: none;
    background-color: transparent;
    color: #ddd;
    font-weight: 900;
    font-size: 15px;
  }

  input:focus{
    outline: none;
  }

  button{
    padding: 15px;
    color: black;
    background: #dc7603;
    border: none;
    cursor: pointer;
    width: 70px;
  }
  button i{
    font-size: 20px;
  }

  .weather-desc{
    text-align: left;
    color: #ddd;
  }

  h3{
    font-weight: 900;
  }

  p{
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
  }

  hr{
    margin-top: 90px;
  }

  @media (max-width: 820px){
  .top{
    width: 100%;
  }
}

</style>
