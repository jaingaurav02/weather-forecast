let apiKey = "dfa31a462ebd046e55988a0ed2cfdbea";

let weather = {
    fetchWeather: async function (city) {
        await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            apiKey
        ).then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        }).then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        // let date = new Date(data.dt * 1000 - (data.timezone * 1000));
        // let newDate = date.toLocaleTimeString().split(" ");
        let currentDate = new Date();
        let newDate = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let todayDay = cDay + "-" + cMonth + "-" + cYear;
        // let todayDay = date.toDateString().split(" ");
        const { name } = data;
        const { description } = data.weather[0];
        const temp = data.main.temp.toLocaleString().split(".");
        switch (todayDay[0]) {
            case 'Fri':
                document.querySelector(".day").innerText = "Friday";
                document.querySelector(".dayTwo").innerText = "Sat";
                document.querySelector(".dayThree").innerText = "Sun";
                document.querySelector(".dayFour").innerText = "Mon";
                document.querySelector(".dayFive").innerText = "Tue";
                document.querySelector(".daySix").innerText = "Wed";
                document.querySelector(".daySeven").innerText = "Thu";
                break;
            case 'Sat':
                document.querySelector(".day").innerText = "Saturday";
                document.querySelector(".dayTwo").innerText = "Sun";
                document.querySelector(".dayThree").innerText = "Mon";
                document.querySelector(".dayFour").innerText = "Tue";
                document.querySelector(".dayFive").innerText = "Wed";
                document.querySelector(".daySix").innerText = "Thu";
                document.querySelector(".daySeven").innerText = "Fri";
                break;
            case 'Sun':
                document.querySelector(".day").innerText = "Sunday";
                document.querySelector(".dayTwo").innerText = "Mon";
                document.querySelector(".dayThree").innerText = "Tue";
                document.querySelector(".dayFour").innerText = "Wed";
                document.querySelector(".dayFive").innerText = "Thu";
                document.querySelector(".daySix").innerText = "Fri";
                document.querySelector(".daySeven").innerText = "Sat";
                break;
            case 'Mon':
                document.querySelector(".day").innerText = "Monday";
                document.querySelector(".dayTwo").innerText = "Tue";
                document.querySelector(".dayThree").innerText = "Wed";
                document.querySelector(".dayFour").innerText = "Thu";
                document.querySelector(".dayFive").innerText = "Fri";
                document.querySelector(".daySix").innerText = "Sat";
                document.querySelector(".daySeven").innerText = "Sun";
                break;
            case 'Tue':
                document.querySelector(".day").innerText = "Tuesday";
                document.querySelector(".dayTwo").innerText = "Wed";
                document.querySelector(".dayThree").innerText = "Thu";
                document.querySelector(".dayFour").innerText = "Fri";
                document.querySelector(".dayFive").innerText = "Sat";
                document.querySelector(".daySix").innerText = "Sun";
                document.querySelector(".daySeven").innerText = "Mon";
                break;
            case 'Wed':
                document.querySelector(".day").innerText = "Wednesday";
                document.querySelector(".dayTwo").innerText = "Thu";
                document.querySelector(".dayThree").innerText = "Fri";
                document.querySelector(".dayFour").innerText = "Sat";
                document.querySelector(".dayFive").innerText = "Sun";
                document.querySelector(".daySix").innerText = "Mon";
                document.querySelector(".daySeven").innerText = "Tue";
                break;
            case 'Thu':
                document.querySelector(".day").innerText = "Thursday";
                document.querySelector(".dayTwo").innerText = "Fri";
                document.querySelector(".dayThree").innerText = "Sat";
                document.querySelector(".dayFour").innerText = "Sun";
                document.querySelector(".dayFive").innerText = "Mon";
                document.querySelector(".daySix").innerText = "Tue";
                document.querySelector(".daySeven").innerText = "Wed";
                break;

            default:
                break;
        }
        document.querySelector(".city").innerText = name;
        // document.querySelector(".date").innerText = todayDay[2] + " - " + todayDay[1] + " - " + todayDay[3];
        document.querySelector(".date").innerText = todayDay;
        // document.querySelector(".time").innerText = newDate[0];
        document.querySelector(".time").innerText = newDate;
        document.querySelector(".description").innerText = description;
        document.querySelector(".windSpeed").innerText = "Wind Speed: " + windSpeed;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity;
        document.querySelector(".temp").innerHTML = temp[0] + "°C";
        document.querySelector(".dayOne").innerText = cDay;
        document.querySelector(".tempOne").innerHTML = "<strong>" + temp[0] + "°C</strong>";
        document.querySelector(".humidity-1").innerText = "Humidity: " + humidity;
        document.querySelector(".weather-1").innerText = description;
        document.body.style.backgroundImage =
            "url(https://source.unsplash.com/1600x900/?" + name + ")";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

let forecast = {
    fetchForecast: async function (city) {
        await fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            city +
            "&cnt=7&units=metric&appid=" +
            apiKey
        ).then((res) => {
            if (!res.ok) {
                alert("No forecast found.");
                throw new Error("No forecast found.");
            }
            return res.json();
        }).then((data7days) => this.displayForecast(data7days));
    },

    displayForecast: function (data7days) {
        let i;
        const tempTwo = data7days.list[1].main.temp.toLocaleString().split(".");
        const tempThree = data7days.list[2].main.temp.toLocaleString().split(".");
        const tempFour = data7days.list[3].main.temp.toLocaleString().split(".");
        const tempFive = data7days.list[4].main.temp.toLocaleString().split(".");
        const tempSix = data7days.list[5].main.temp.toLocaleString().split(".");
        const tempSeven = data7days.list[6].main.temp.toLocaleString().split(".");

        for (i = 1; i < 7; i++) {
            let humidity = data7days.list[i].main.humidity;
            let weather = data7days.list[i].weather[0].main;
            document.querySelector(`.humidity-${i + 1}`).innerText = "Humidity: " + humidity;
            document.querySelector(`.weather-${i + 1}`).innerText = weather;
        }

        document.querySelector(".tempTwo").innerHTML = "<strong>" + tempTwo[0] + "°C</strong>";
        document.querySelector(".tempThree").innerHTML = "<strong>" + tempThree[0] + "°C</strong>";
        document.querySelector(".tempFour").innerHTML = "<strong>" + tempFour[0] + "°C</strong>";
        document.querySelector(".tempFive").innerHTML = "<strong>" + tempFive[0] + "°C</strong>";
        document.querySelector(".tempSix").innerHTML = "<strong>" + tempSix[0] + "°C</strong>";
        document.querySelector(".tempSeven").innerHTML = "<strong>" + tempSeven[0] + "°C</strong>";
    },

    search: function () {
        this.fetchForecast(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    forecast.search();
});

document.querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
            forecast.search();
        }
    });

weather.fetchWeather("Delhi");
forecast.fetchForecast("Delhi");
