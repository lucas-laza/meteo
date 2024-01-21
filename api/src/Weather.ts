import { CoordinatesForCity, TemperatureUnit } from "./types";
import { WEATHER_CODES } from "./weather-codes";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { Place } from "./Place";


function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather {
  place: Place;
  temperatureCelsius?: number;
  temperatureFahrenheit?: number;
  weatherCode?: number;

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
  
 
}
