var weatherRequest = new XMLHttpRequest();
var key = "8372e22f9dc216c935396b2f059e5711";
var cityId = '295328';

weatherRequest.open("get","http://api.openweathermap.org/data/2.5/weather?id="+cityId + '&appid=' + key);
weatherRequest.send();


const drowWeather = (element) => {
    document.getElementById('description').innerHTML = element.weather[0].description;
    document.getElementById('temp').innerHTML = element.main.temp;
    document.getElementById('location').innerHTML = element.name;
}

weatherRequest.onreadystatechange = function(){
    if(weatherRequest.readyState == 1){
        console.log("Established server connection.");
    }
    else if(weatherRequest.readyState == 2){
        console.log("Request received by server.");
    }
    else if(weatherRequest.readyState == 3){
        console.log("Processing request.");
    }
    else if(weatherRequest.readyState == 4){
        console.log("Done loading!");
    }
    else{console.log("Something went wrong. :(");}
    console.log("ready state changed!");

    if(weatherRequest.readyState == 4 && weatherRequest.status == 200){
        var jsonObj = JSON.parse(weatherRequest.responseText);
        drowWeather(jsonObj);
    }
}

