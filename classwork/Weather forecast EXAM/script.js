$(document).ready(function () {
  getWeatherOnLoad();
  $('#btnToday').hide()
  $('#searchBtn').click(function () {
      getWeather();
  });

  $('#btnToday').click(function () {
     
      $('#searchBtn').show();
      $('#btnToday').hide()     
     
      $('#btnFivedays').text('5-DAY');      
      
      $('#searchBtn').insertAfter($(this));
      
      $('#fiveDayContainer').empty();
      $('#weather-container').css('max-width', '400px');
      var weatherIcon = $('<img>').attr('id', 'weather-icon').attr('alt', 'Weather Icon');
      $('#weather-container').append(weatherIcon);  
      weatherIcon.insertAfter($('#buttons'));
      
      getWeather();       
  });

  $('#btnFivedays').click(function () {
      $('#searchBtn').hide();
      $('#btnToday').show()
      
      $(this).text('Search');
      
      get5DayForecast();
  });
});





function getWeatherOnLoad() {
  getDefaultCityWeather();
}

function getDefaultCityWeather() {
  const apiKey = '2474d84397be9036a63bb9c767aa885e';
  const defaultCity = 'Lviv';

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${apiKey}`;

  $.when(
      $.getJSON(currentWeatherUrl),
      $.getJSON(forecastUrl)
  ).done(function (currentWeatherData, forecastData) {
      displayWeather(currentWeatherData[0]);
      displayHourlyForecast(forecastData[0].list);
  }).fail(function (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again.');
  });
}

function getWeather() {
  const apiKey = '2474d84397be9036a63bb9c767aa885e';
  const city = $('#city').val();

  if (!city) {
      alert('Please enter a city');
      return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  $.when(
      $.getJSON(currentWeatherUrl),
      $.getJSON(forecastUrl)
  ).done(function (currentWeatherData, forecastData) {
      displayWeather(currentWeatherData[0]);

      displayHourlyForecast(forecastData[0].list);

      showImage();
      showHourlyForecastTitle();

     
  }).fail(function (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again.');
  });
}

function showImage() {
  const weatherIcon = $('#weather-icon');
  weatherIcon.css('display', 'block');
}

function showHourlyForecastTitle() {
  const hourlyForecastTitle = $('#title');
  hourlyForecastTitle.html('Hourly forecast');
}


function displayWeather(data) {
  const tempDivInfo = $('#temp-div');
  const weatherInfoDiv = $('#weather-info');
  const weatherIcon = $('#weather-icon');
  const hourlyForecastDiv = $('#hourly-forecast');

  weatherInfoDiv.empty();
  hourlyForecastDiv.empty();
  tempDivInfo.empty();

  if (data.cod === '404') {
      weatherInfoDiv.html(`<p>${data.message}</p>`);
  } else {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

      const temperatureHTML = `<p>${temperature}°C</p>`;
      const weatherHtml = `<p>${cityName}</p><p>${description}</p>`;

      tempDivInfo.html(temperatureHTML);
      weatherInfoDiv.html(weatherHtml);
      weatherIcon.attr('src', iconUrl);
      weatherIcon.attr('alt', description);

      showImage();
  }
}

function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = $('#hourly-forecast');

  const next24Hours = hourlyData.slice(0, 8);

  next24Hours.forEach(item => {
      const dateTime = new Date(item.dt * 1000);
      const hour = dateTime.getHours();
      const temperature = Math.round(item.main.temp - 273.15);
      const iconCode = item.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

      const hourlyItemHtml = `<div class="hourly-item">
          <span>${hour}:00</span>
          <img src="${iconUrl}" alt="Hourly Weather Icon">
          <span>${temperature}°C</span>
      </div>`;

      hourlyForecastDiv.append(hourlyItemHtml);
  });
}




function get5DayForecast() {
  var cityName = $("#city").val();   

  $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=2474d84397be9036a63bb9c767aa885e',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
          $("#temp-div, #title, #weather-info, #hourly-forecast").empty();
          $("#fiveDayContainer").empty();
          $('#weather-icon').remove();
          $('#weather-container').css('max-width', '600px');          

          

          for (var i = 0; i < 5; i++) {
              var dayDiv = $("<div>").addClass("day-container");               

              dayDiv.append("<p class='weather' id='fiveDay" + (i + 1) + "'>" + weekday[CheckDay(i)] + "</p>");
              dayDiv.append("<div class='image'><img src='http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png' class='imgClass' id='fiveDayImg" + (i + 1) + "'></div>");
              dayDiv.append("<p class='minValues' id='fiveDay" + (i + 1) + "Min'>Min: " + (Number(data.list[i].main.temp_min - 273.15).toFixed(1)) + "°</p>");
              dayDiv.append("<p class='maxValues' id='fiveDay" + (i + 1) + "Max'>Max: " + (Number(data.list[i].main.temp_max - 273.15).toFixed(2)) + "°</p>");

              $("#fiveDayContainer").append(dayDiv);
          }
      },
      error: function () {
          alert("Enter city.");
      }
  });
}


let d = new Date();
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
if (day + d.getDay() > 6) {
  return day + d.getDay() - 7;
} else {
  return day + d.getDay();
}
}

for (var i = 0; i < 5; i++) {
$("#day" + (i + 1)).html(weekday[CheckDay(i)]);
}

function DefaultScreen() {
$("#cityInput").val("Lviv");
GetInfo();
}

