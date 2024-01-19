import { CoordinatesForCity, TemperatureUnit } from "./types";
import { WEATHER_CODES } from "./weather-codes";
import fetch from 'node-fetch';

const COORDINATES_FOR_CITIES: CoordinatesForCity[] = [
  { city: "Lille", latitude: 50.6365654, longitude: 3.0635282 },
  { city: "Paris", latitude: 48.8534951, longitude: 2.3483915 },
  { city: "Reims", latitude: 49.2577886, longitude: 4.031926 },
];

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather {
  city: string;
  temperatureCelsius?: number;
  weatherCode?: number;

  constructor(city: string) {
    this.city = city;
  }

  /**
   * Get current weather for this.city
   * Define the class variables with the results
   */
  async setCurrent(): Promise<void> {
    const coordinates = COORDINATES_FOR_CITIES.find(
      (_coordinates) => _coordinates.city === this.city
    );
    if (!coordinates) {
      throw new Error(`No coordinates found for city ${this.city}.`);
    }

    const { latitude, longitude } = coordinates;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    );
    const weather = (await weatherResponse.json()) as {
      current: { temperature_2m: number; weather_code: number };
    };   

    this.temperatureCelsius = weather.current.temperature_2m;
    this.weatherCode = weather.current.weather_code;    
  }

  /**
   * Print weather information for the current city in a readable way
   * @param temperatureUnit
   * @returns 
   */
  print(temperatureUnit: TemperatureUnit = "C"): string {
    if (this.temperatureCelsius === undefined || this.weatherCode === undefined) {
      throw new Error(
        `No weather data found for city ${this.city}: run \`setCurrent\` on Weather object.`
      );
    }

    const icon: string = WEATHER_CODES[this.weatherCode].icon;
    const text: string = WEATHER_CODES[this.weatherCode].text;

    const temperature = Math.round(
      temperatureUnit === "C"
        ? this.temperatureCelsius
        : getTemperatureFahrenheit(this.temperatureCelsius)
    );
    const shortTemperatureUnit = temperatureUnit === "C" ? "C" : "F";

    return `${this.city} : ${temperature}°${shortTemperatureUnit} | ${icon} ${text}`;
  }

 
}
