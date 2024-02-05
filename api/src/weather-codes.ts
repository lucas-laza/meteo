export type WeatherCodes = {
  [code: number]: { text: string; icon: string };
};
// type WeatherCodes = Record<number, { text: string; icon: string }>;

// TODO : define narrow type for weather code number

export const WEATHER_CODES: WeatherCodes = {
  0: { text: "Ciel dégagé", icon: "☀️" },
  1: { text: "Principalement dégagé", icon: "☁️" },
  2: { text: "Partiellement nuageux", icon: "⛅" },
  3: { text: "Couvert", icon: "☁️" },
  45: { text: "Brouillard", icon: "🌫️" },
  48: { text: "Brouillard givrant", icon: "🌫️" },
  51: { text: "Bruine légère", icon: "🌧️" },
  52: { text: "Bruine modérée", icon: "🌧️" },
  53: { text: "Bruine d'intensité dense", icon: "🌧️" },
  56: { text: "Bruine verglaçante légère", icon: "❄️" },
  57: { text: "Bruine verglaçante d'intensité dense", icon: "❄️" },
  61: { text: "Pluie légère", icon: "🌧️" },
  63: { text: "Pluie modérée", icon: "🌧️" },
  65: { text: "Pluie d'intensité forte", icon: "🌧️" },
  66: { text: "Pluie verglaçante légère", icon: "❄️" },
  67: { text: "Pluie verglaçante d'intensité forte", icon: "❄️" },
  71: { text: "Chute de neige légère", icon: "❄️" },
  73: { text: "Chute de neige modérée", icon: "❄️" },
  75: { text: "Chute de neige d'intensité forte", icon: "❄️" },
  77: { text: "Grains de neige", icon: "❄️" },
  80: { text: "Averses de pluie légères", icon: "🌧️" },
  81: { text: "Averses de pluie modérées", icon: "🌧️" },
  82: { text: "Averses de pluie violentes", icon: "🌧️" },
  85: { text: "Légères averses de neige", icon: "❄️" },
  86: { text: "Averses de neige fortes", icon: "❄️" },
  95: { text: "Orage léger ou modéré", icon: "⚡" },
  96: { text: "Orage avec grêle légère", icon: "⚡❄️" },
  99: { text: "Orage avec grêle forte", icon: "⚡❄️" },
};

type WeatherDetails = {
  [key: number]: { svg: string; description: string };
};

export const WEATHER_DETAILS: WeatherDetails = {
  0: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FFD700"/></svg>`, // Soleil
    description: "Ciel dégagé"
  },
  1: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,12h18M12,3v18M19.071,4.929l-14.142,14.142M4.929,4.929l14.142,14.142" stroke="#B0C4DE" stroke-width="2"/></svg>`, // Principalement dégagé
    description: "Principalement dégagé"
  },
  2: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2a10,10 0 1,0 10,10A10,10 0 0,0 12,2Zm0,18a8,8 0 1,1 8-8A8,8 0 0,1 12,20Z" fill="#B0C4DE"/><path d="M16,10a4,4 0 1,0 -4,4A4,4 0 0,0 16,10Z" fill="#F0F8FF"/></svg>`, // Partiellement nuageux
    description: "Partiellement nuageux"
  },
  3: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" fill="#B0C4DE"/></svg>`, // Couvert
    description: "Couvert"
  },
  45: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><path d="M12.5 11H11v2h1.5v-2z"/></svg>`,
    description: "Brouillard"
  },
  48: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.37 3.29C18.57 2.75 17.62 2.5 16.65 2.5c-1.55 0-3.04.62-4.13 1.74a5.668 5.668 0 0 0-4.13-1.74c-.97 0-1.92.25-2.72.79C4.07 3.92 3.5 5.02 3.5 6.25V19c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6.25c0-1.23-.57-2.33-1.63-2.96zM18.5 17.5h-13V6.25c0-.41.34-.75.75-.75.22 0 .42.1.55.26.27.33.67.5 1.08.5.84 0 1.59-.52 1.92-1.31.09-.22.29-.37.52-.37s.43.15.52.37c.33.79 1.08 1.31 1.92 1.31s1.59-.52 1.92-1.31c.09-.22.29-.37.52-.37s.43.15.52.37c.33.79 1.08 1.31 1.92 1.31.41 0 .81-.17 1.08-.5.13-.16.33-.26.55-.26.41 0 .75.34.75.75V17.5z"/></svg>`,
    description: "Brouillard givrant"
  },
  51: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 11h2v2h-2z"/><path d="M11 15h2v2h-2z"/></svg>`,
    description: "Bruine légère"
  },
  52: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 11h2v2h-2z"/><path d="M11 15h2v2h-2z"/><path d="M11 7h2v2h-2z"/></svg>`,
    description: "Bruine modérée"
  },
  53: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 11h2v2h-2z"/><path d="M11 15h2v2h-2z"/><path d="M11 7h2v2h-2z"/><path d="M11 19h2v2h-2z"/></svg>`,
    description: "Bruine d'intensité dense"
  },
  56: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#ADD8E6"/><path d="M6 12l12 0" stroke="#888" stroke-width="2"/><path d="M12 6l0 12" stroke="#888" stroke-width="2"/></svg>`,
    description: "Bruine verglaçante légère"
  },
  57: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#ADD8E6"/><path d="M6 12l12 0" stroke="#888" stroke-width="2"/><path d="M12 6l0 12" stroke="#888" stroke-width="2"/><path d="M9 9l6 6" stroke="#888" stroke-width="2"/><path d="M15 9l-6 6" stroke="#888" stroke-width="2"/></svg>`,
    description: "Bruine verglaçante d'intensité dense"
  },
  61: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 16h2v2h-2z"/><path d="M11 12h2v2h-2z"/><path d="M11 8h2v2h-2z"/></svg>`,
    description: "Pluie légère"
  },
  63: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 17h2v2h-2z"/><path d="M11 13h2v2h-2z"/><path d="M11 9h2v2h-2z"/><path d="M11 5h2v2h-2z"/></svg>`,
    description: "Pluie modérée"
  },
  65: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 18h2v2h-2z"/><path d="M11 14h2v2h-2z"/><path d="M11 10h2v2h-2z"/><path d="M11 6h2v2h-2z"/><path d="M11 2h2v2h-2z"/></svg>`,
    description: "Pluie d'intensité forte"
  },
  66: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 18h2v2h-2z"/><path d="M11 14h2v2h-2z"/><path d="M11 10h2v2h-2z"/><path d="M11 6h2v2h-2z"/><path d="M7 14h2v2H7z"/><path d="M15 14h2v2h-2z"/></svg>`,
    description: "Pluie verglaçante légère"
  },
  67: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 18h2v2h-2z"/><path d="M11 14h2v2h-2z"/><path d="M11 10h2v2h-2z"/><path d="M11 6h2v2h-2z"/><path d="M7 16h2v2H7z"/><path d="M15 16h2v2h-2z"/><path d="M7 12h2v2H7z"/><path d="M15 12h2v2h-2z"/></svg>`,
    description: "Pluie verglaçante d'intensité forte"
  },
  71: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M10 17h4v1h-4z"/><path d="M10 14h4v1h-4z"/><path d="M10 11h4v1h-4z"/></svg>`,
    description: "Chute de neige légère"
  },
  73: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M9 17h6v1H9z"/><path d="M9 14h6v1H9z"/><path d="M9 11h6v1H9z"/><path d="M9 8h6v1H9z"/></svg>`,
    description: "Chute de neige modérée"
  },
  75: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 18h8v1H8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M8 9h8v1H8z"/><path d="M8 6h8v1H8z"/></svg>`,
    description: "Chute de neige d'intensité forte"
  },
  77: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M11 16h2v2h-2z"/><path d="M11 12h2v2h-2z"/><path d="M11 8h2v2h-2z"/><path d="M8 14h2v2H8z"/><path d="M14 14h2v2h-2z"/></svg>`,
    description: "Grains de neige"
  },
  80: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M10 17h4v1h-4z"/><path d="M10 14h4v1h-4z"/><path d="M10 11h4v1h-4z"/><path d="M7 14h1v1H7z"/><path d="M16 14h1v1h-1z"/></svg>`,
    description: "Averses de pluie légères"
  },
  81: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M9 17h6v1H9z"/><path d="M9 14h6v1H9z"/><path d="M9 11h6v1H9z"/><path d="M6 14h1v1H6z"/><path d="M18 14h1v1h-1z"/></svg>`,
    description: "Averses de pluie modérées"
  },
  82: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 18h8v1H8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M8 9h8v1H8z"/><path d="M5 15h1v1H5z"/><path d="M18 15h1v1h-1z"/></svg>`,
    description: "Averses de pluie violentes"
  },
  85: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M10 17h4v1h-4z"/><path d="M10 14h4v1h-4z"/><path d="M10 11h4v1h-4z"/><path d="M7 14h1v1H7z"/><path d="M16 14h1v1h-1z"/><circle cx="12" cy="8" r="1"/></svg>`,
    description: "Légères averses de neige"
  },
  86: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 18h8v1H8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M8 9h8v1H8z"/><path d="M5 15h1v1H5z"/><path d="M18 15h1v1h-1z"/><circle cx="12" cy="6" r="1"/></svg>`,
    description: "Averses de neige fortes"
  },
  95: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M8 9h8v1H8z"/><path d="M12 6l-4 4h8z"/></svg>`,
    description: "Orage léger ou modéré"
  },
  96: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 18h8v1H8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M12 6l-4 4h8z"/><circle cx="16" cy="8" r="1"/></svg>`,
    description: "Orage avec grêle légère"
  },
  99: {
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 18h8v1H8z"/><path d="M8 15h8v1H8z"/><path d="M8 12h8v1H8z"/><path d="M12 6l-4 4h8z"/><circle cx="16" cy="8" r="1"/><circle cx="8" cy="8" r="1"/></svg>`,
    description: "Orage avec grêle forte"
  },
};

export function getWeatherIconAndDescription(weatherCode: number): { svg: string, description: string } {
  const weatherDetail = WEATHER_DETAILS[weatherCode];
  if (!weatherDetail) {
    throw new Error(`No details found for weather code ${weatherCode}.`);
  }
  return weatherDetail;
}