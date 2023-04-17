<template>
  <div class="wrapper">
        <div class="up">
            <h3>the weather app</h3>
        </div>
        <div class="bottom">
            <h1 class="cal">{{celsius}}<sup>0</sup></h1>
            <h2>{{location}}<small>{{dayName}}, {{ month }} '{{ year }}</small></h2>
            <p><span><i class="fa-solid fa-cloud"></i></span> <small>{{description}}</small></p>
        </div>
  </div>
</template>

<script>
export default {
    props: {
       location: String,
       celsius: String,
       description: String,
    },
    data() {
    return {
            currentDate: new Date(),
        };
    },
    computed: {
    dayName() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayIndex = this.currentDate.getDay();
      return days[dayIndex];
    },
    month() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthIndex = this.currentDate.getMonth();
      return months[monthIndex];
    },
    year() {
      return this.currentDate.getFullYear().toString().slice(-2);
    },
  },
}
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 25px;
    }

    h3{
        color: white;
        text-align: left;
        font-size: 12px;
    }

    .bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: left;
        gap: 15px;
    }

    .cal{
        font-size: 40px;
    }

    h2{
        text-transform: capitalize;
        font-size: 25px;
        display: flex;
        flex-direction: column;
    }
    h2 small{
        font-size: 10px;
    }
    p{
        display: flex;
        flex-direction: column;
    }
    p small{
        font-size: 10px;
    }

    p i{
        font-size: 22px;
    }

    @media (max-width: 820px){
    .wrapper{
        height: 300px;
    }
    }
</style>