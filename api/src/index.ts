import { Location } from "./Location";
import { Weather } from "./Weather";
import express from "express";

const PORT = 3700;

async function main() {
  const server = express();
  server.use(express.json());

  server.get("/", (request, response) => {
    return response.send("Hello world!");
  });

  server.post("/weather", async (request, response) => {

    try {
      const { city, unit } = request.body;
      
      if (!city || !unit) {
        return response.status(400).json({ error: "Les paramètres 'city' et 'unit' sont nécessaires." });
      }
  
      const weather = new Weather(city);
      await weather.setCurrent();
      
      const coucou = weather.print(unit);

      return response.json(coucou);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erreur serveur" });
    }
  });

  server.get("/location/search", async (request, response) => {

    try {
      const { text } = request.body;
      
      if (!text) {
        return response.status(400).json({ error: "Le param text est requis" });
      }
  
      const location = new Location();
      
      const coucou = await location.getLocationsFromText(text);

      return response.json(coucou);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erreur serveur" });
    }
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
