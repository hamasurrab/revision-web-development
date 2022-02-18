const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");

  app.post("/", function (req, res) {
    const apiKey = "d8f6fdc14ae0b2a2136119b0ebc9a397";
    const query = req.body.cityName;
    const unit = "metric";

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&units=" +
      unit +
      "&appid=" +
      apiKey;
    https.get(url, function (response) {
      console.log(response);

      response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        console.log(weatherData);

        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;

        res.write(
          "<h1>temp of " + query + " is " + temp + " degree celcius.</h1>"
        );
        res.write("weather description is " + weatherDescription);
        res.send();
      });
    });

    //   console.log(req.body.cityName);
  });

  // res.send("weather web");
});

app.listen(3000, function () {
  console.log("port is running on 3000");
});
