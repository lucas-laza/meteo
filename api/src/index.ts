import { Weather } from "./Weather";
import express from "express";
import "reflect-metadata"
import { DataSource } from "typeorm";
import { Place } from "./Place";
const dataSource = new DataSource({
  type: "sqlite",
  database: "./sqlite.db",
  entities: [Place],
  synchronize: true,

});
const PORT = 3600;

async function main() {
  await dataSource.initialize();
  console.log("Successfuly connected");

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

  // test pour la bdd
  //const paris = await Place.createNew("Paris",123, 1, 2)
  //console.log(paris);

}

main();
