import { Weather } from "./Weather";
import express from "express";

const PORT = 3600;

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

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
