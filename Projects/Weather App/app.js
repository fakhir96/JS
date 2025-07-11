const img = document.querySelector("#image");
const mainText = document.querySelector("#weather-text");
const searchBtn = document.querySelector("#search-icon");
const cName = document.querySelector("#cName");
const temp = document.querySelector("#temp");
const humidityP = document.querySelector("#humidity");
const windspeedP = document.querySelector("#windSpeed");
const detailsBox = document.querySelector(".wind")
const cityInput = document.querySelector("#city_name");

// Prevent numbers & special characters
cityInput.addEventListener("input", () => {
  cityInput.value = cityInput.value.replace(/[^a-zA-Z\s]/g, "");
});

// Trigger getWeather() on Enter key press
cityInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
	  getWeather();
	}
});

// Click Search Icon To Call getWeather()
searchBtn.addEventListener("click", ()=>{
	getWeather();
})

async function getWeather() {
	try {
		const cityName = document.querySelector("#city_name") // Accessing The Input City
		const exists = cities.some(item => item.toLowerCase() === cityName.value.toLowerCase());
		
		if (cityName.value.trim() === "") {
			alert("Please enter a city name.");
			return;
		}
		
		if(exists){
			const url = `https://api.weatherapi.com/v1/current.json?key=e4c01727e5af452687a135758250907&q=${cityName.value}&aqi=no`;
			const response = await fetch(url);
			const result = await response.json();
			if (result.error) {
				alert("City not found. Please enter a valid city name.");
				return;
			}
			console.log(result);
			// const data = result.current.condition.text
			const temperature = result.current.temp_c; 
			const humidity = result.current.humidity;
			const windspeed = result.current.wind_kph;

			temp.innerText = `${temperature}°C`
			img.src = result.current.condition.icon
			mainText.innerText = result.current.condition.text
			cName.innerText = cityName.value
			img.classList.add("sizing")
			humidityP.innerText = `${humidity}%`
			windspeedP.innerText = `${windspeed} kph`
			detailsBox.classList.add("unhide")

			cityInput.value = ""
		}

		else{
			alert("Invalid City")
		}
	} catch (error) {
		console.error(error);
	}
}
