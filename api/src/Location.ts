import fetch from 'node-fetch';
import dotenv from 'dotenv';

type SearchLocation = {
  "name": string,
  "latitude": number,
  "longitude": number
  "country": string,
  "population": number,
  "is_capital": boolean
}

export class Location {

  async getLocationsFromTextOld(text: string): Promise<any[]> {
    dotenv.config();
    const apiKey = process.env.GEOCODE_KEY;
    if (!apiKey) {
      console.error("La clé API n'est pas définie.");
      process.exit(1);
    }
  
    const apiUrl = `https://geocode.maps.co/search?q=${text}&api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
  
      const data = await response.json();
      const result: any[] = [];
  
      data.forEach((loc: any) => {
        console.log(loc);
        
        if (loc.class == 'boundary') {
          result.push({
            name: loc.display_name,
            lat: loc.lat,
            lon: loc.lon,
            importance: loc.importance,
            type: loc.type,
            gmap: `https://www.google.com/maps?q=${loc.lat},${loc.lon}`,
          });
        }
      });
  
      return result;
    } catch (error) {
      console.error('Erreur lors de la requête fetch :', error);
      throw error; 
    }
  }

  async getLocationsFromText(text: string): Promise<SearchLocation[]> {
    dotenv.config();
    const apiKey = process.env.NINJA_KEY;
    if (!apiKey) {
      console.error("La clé API n'est pas définie.");
      process.exit(1);
    }
  
    const apiUrl = `https://api.api-ninjas.com/v1/city?name=${text}&limit=10`; 
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
  
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Erreur lors de la requête fetch :', error);
      throw error; 
    }
  }
}
