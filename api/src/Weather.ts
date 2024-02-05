import { CoordinatesForCity, TemperatureUnit } from "./types";
import { WEATHER_CODES } from "./weather-codes";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { Place } from "./Place";
import { getWeatherIconAndDescription } from './weather-codes';

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather {
  place: Place;
  temperatureCelsius?: number;
  temperatureFahrenheit?: number;
  weatherCode?: number;
  weatherIconSVG?:string;
  weatherDescription?:string;
  forecastHourly?: {
    time: string;
    temperatureCelsius: number;
    temperatureFahrenheit: number;
    weatherCode: number;
  }[] = [];
  forecastDaily?: {
    time: string;
    temperatureMaxCelsius: number;
    temperatureMaxFahrenheit: number;
    temperatureMinCelsius: number;
    temperatureMinFahrenheit: number;
    weatherCode: number;
  }[] = [];

  constructor(place: Place) {
    this.place = place;
  }

  /**
   * Get current weather for this.city
   * Define the class variables with the results
   */
  async setCurrent(): Promise<any> {

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.place.latitude}&longitude=${this.place.longitude}&current=temperature_2m,weather_code`
    );
    const weather = (await weatherResponse.json()) as {
      current: { temperature_2m: number; weather_code: number };
    };   

    this.temperatureCelsius = weather.current.temperature_2m;
    this.temperatureFahrenheit = getTemperatureFahrenheit(weather.current.temperature_2m);

    this.weatherCode = weather.current.weather_code;   
    const { svg, description } = getWeatherIconAndDescription(this.weatherCode);
    this.weatherIconSVG = svg;
    this.weatherDescription = description;
    return this;
  }

  async setForecast(): Promise<any> {

    const hourlyResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.place.latitude}&longitude=${this.place.longitude}&hourly=temperature_2m,weather_code&forecast_days=1`
    );

    const dailyResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.place.latitude}&longitude=${this.place.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`
    );

    const weatherHourly = (await hourlyResponse.json()) as {
      hourly: { time: string[]; temperature_2m: number[]; weather_code: number[] };
    };
    
    const weatherDaily = (await dailyResponse.json()) as {
      daily: { time: string[]; temperature_2m_max: number[]; temperature_2m_min: number[]; weather_code: number[] };
    };

    // Process hourly forecast
    this.forecastHourly = weatherHourly.hourly.time.map((time, index) => {
      const weatherCode = weatherHourly.hourly.weather_code[index];
      const { svg, description } = getWeatherIconAndDescription(weatherCode);
  
      return {
        time,
        temperatureCelsius: weatherHourly.hourly.temperature_2m[index],
        temperatureFahrenheit: getTemperatureFahrenheit(weatherHourly.hourly.temperature_2m[index]),
        weatherCode,
        svg,
        description,
      };
    });

    // Process daily forecast
    this.forecastDaily = weatherDaily.daily.time.map((time, index) => {
      const weatherCode = weatherDaily.daily.weather_code[index];
      const { svg, description } = getWeatherIconAndDescription(weatherCode);
  
      return {
        time,
        temperatureMaxCelsius: weatherDaily.daily.temperature_2m_max[index],
        temperatureMaxFahrenheit: getTemperatureFahrenheit(weatherDaily.daily.temperature_2m_max[index]),
        temperatureMinCelsius: weatherDaily.daily.temperature_2m_min[index],
        temperatureMinFahrenheit: getTemperatureFahrenheit(weatherDaily.daily.temperature_2m_min[index]),
        weatherCode,
        svg,
        description,
      };
    });

    return this;
}


  // /**
  //  * Print weather information for the current city in a readable way
  //  * @param temperatureUnit
  //  * @returns 
  //  */
  // print(temperatureUnit: TemperatureUnit = "C"): string {
  //   // if (this.temperatureCelsius === undefined || this.weatherCode === undefined) {
  //   //   throw new Error(
  //   //     `No weather data found for city ${this.city}: run \`setCurrent\` on Weather object.`
  //   //   );
  //   // }

  //   // const icon: string = WEATHER_CODES[this.weatherCode].icon;
  //   // const text: string = WEATHER_CODES[this.weatherCode].text;

  //   // const temperature = Math.round(
  //   //   temperatureUnit === "C"
  //   //     ? this.temperatureCelsius
  //   //     : getTemperatureFahrenheit(this.temperatureCelsius)
  //   // );
  //   // const shortTemperatureUnit = temperatureUnit === "C" ? "C" : "F";

  //   // return `${this.city} : ${temperature}°${shortTemperatureUnit} | ${icon} ${text}`;
  // }

  static async getCurrentWeatherForUserPlaces(): Promise<any[]> {
    const places = await Place.getAllForCurrentUser();
    const result: any[] = [];
  
    await Promise.all(
      places.map(async (place: Place) => {
        const weather = new Weather(place);
        result.push(await weather.setCurrent());
      })
    );
  
    return result;
  }

  static async getForecastWeatherForPlace(id: number): Promise<Weather> {
    const place = await Place.getOnePlaceForCurrentUser(id);
  
    const weather = new Weather(place);
    await weather.setForecast()
  
    return weather;
  }
  

  static async getWeatherForPlace(id: number): Promise<Weather> {
    const place = await Place.getOnePlaceForCurrentUser(id);
    const weather = new Weather(place);
    await weather.setCurrent()
    return weather;
  }
 
}
