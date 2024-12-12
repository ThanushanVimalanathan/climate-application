const apikey = "0599eab7f34c57815382b0b3d8008c3a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searcBtn1 = document.getElementById("b1");
const searcBtn2 = document.getElementById("b2");
const searcBtn3 = document.getElementById("b3");
const searcBtn4 = document.getElementById("b4");
const searcBtn5 = document.getElementById("b5");

const weatherIcon = document.querySelector(".weathericon");



 async function  checkweather(city) {

   const response = await fetch(apiurl + city + `&appid=${apikey}`);
   var data = await response.json();

   

   document.querySelector(".city").innerHTML =data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
   document.querySelector(".wind").innerHTML =data.wind.speed + " kmph";

   if(data.weather[0].main == "Clouds"){

     weatherIcon.src = "https://www.freeiconspng.com/uploads/cloud-sun-weather-icon-32.png";
     

   }

   else if(data.weather[0].main == "Clear"){

    weatherIcon.src = "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/medium_Clear-1024.png";

  }

  else if(data.weather[0].main == "Rain"){

    weatherIcon.src = "https://th.bing.com/th/id/R.d6cf91b30eb0b14f842b7ef8ccb9573e?rik=7Hrftd0LX15Fvw&riu=http%3a%2f%2fdownload.spinetix.com%2fcontent%2fwidgets%2ficons%2fweather%2f11d.png&ehk=SmDu8G%2fx04UgJL0XaVCwDGMRwn4JaqDC%2f%2fCnWXE8Wfo%3d&risl=&pid=ImgRaw&r=0";

  }

  else if(data.weather[0].main == "Drizzle"){

    weatherIcon.src = "https://th.bing.com/th/id/R.6291ee9c96a4fa247f8981d2ec19e630?rik=EvtLGLNYt7XyRg&pid=ImgRaw&r=0";

  }
  else if(data.weather[0].main == "Mist"){
     weatherIcon.src ="https://th.bing.com/th/id/OIP.lhCEVWKWBsWeZd27jyDQQAHaHa?rs=1&pid=ImgDetMain";
  }

  else{
        weatherIcon.src = "https://th.bing.com/th/id/R.4895a9d78cac993ddf19053feb2043f6?rik=QXSLpbN572yODQ&pid=ImgRaw&r=0"
  }
   
}

  searcBtn1.addEventListener("click", ()=>{
    checkweather("New York");
  })

  searcBtn2.addEventListener("click", ()=>{
    checkweather("London");
  })

  searcBtn3.addEventListener("click", ()=>{
    checkweather("Tokyo");
  })

  searcBtn4.addEventListener("click", ()=>{
    checkweather("Colombo");
  })

  searcBtn5.addEventListener("click", ()=>{
    checkweather("Dubai");
  })
  


