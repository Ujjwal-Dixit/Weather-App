# Weather App

The Weather App is a simple web application that allows users to search for the weather information of a specific city. It utilizes the OpenWeatherMap API to fetch the weather data and display it on the webpage.

## Features

- **Weather Data Retrieval**: Fetches weather data from the OpenWeatherMap API based on the user's input city.
- **Display Weather Information**: Displays the name of the city, country, current temperature, weather description, and an icon representing the weather condition.
- **Timezone Conversion**: Converts the UTC time received from the API response to the local time of the searched city.

## Usage

1. Enter the name of the city in the input field.
2. Submit the form by clicking the "Submit" button or pressing the Enter key.
3. The application will fetch the weather data from the OpenWeatherMap API and display it on the webpage.
4. The displayed weather information includes the city name, country, current temperature, weather description, and an icon representing the weather condition.
5. If an error occurs during the data retrieval process, an error message will be displayed.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

To run the Weather App locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the project folder in a code editor.
3. Open the `index.html` file in a web browser.
4. Enter the name of a city in the input field and submit the form to see the weather information.

Note: The Weather App requires an internet connection to fetch data from the OpenWeatherMap API.

## API Key

The Weather App uses the OpenWeatherMap API to retrieve weather data. To use the application, you need to provide your own API key. Follow these steps to add your API key:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for an account.
2. Generate an API key by creating a new API key in your OpenWeatherMap account.
3. Replace the `apiKey` variable in the JavaScript code with your own API key.

```javascript
const apiKey = "YOUR_API_KEY";
```

Ensure that your API key is kept confidential and not shared publicly.
