
function getWeather() {

    var city = document.getElementById("city").value;

    if (city == "") {
        alert("Please enter city name");
    }
    else {

        document.getElementById("cityName").innerHTML = city;

        document.getElementById("temperature").innerHTML = "25°C";

        document.getElementById("condition").innerHTML = "Sunny";

        document.getElementById("weatherImage").src =
        "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
}
