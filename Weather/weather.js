$(document).ready($('#search').on('keyup', (event) => {
  if(event.keyCode === 13){
    getWeather()
  }
}));



function getWeather() {
    const api_key = '818039c2c15cea97465604f0ede2a026'
    const city = getCity()

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&id=524901&units=imperial&APPID=${api_key}`)
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        console.log(weather);
        display(weather);
      });

  };

  function display(weather){
      $('#city').text(weather.name);
      $('#temp').text(weather.main.temp)
      $('#weatherType').text(weather.weather[0].description);
      if(weather.weather[0].description = 'clouds'){
          $('body').addClass('cloudy')
      }
    }

  function getCity() {
    const city = $('#search').val();
    $('#search').val('');
    return city;
  }

