import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { SearchLocation } from "./types";
@Entity()
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column({ nullable: true })
  latitude?: number;
  @Column({ nullable: true })
  longitude?: number;
  @Column()
  user_id!: number;
  @Column()
  is_favorite!: boolean;

  static async createNew(name: string, latitude: number, longitude: number, user_id: number, is_favorite: boolean) {
    const place = new Place();
    place.name = name;
    place.latitude = latitude;
    place.longitude = longitude;
    place.user_id = user_id;
    place.is_favorite = is_favorite;
    await place.save()
    return place
  }
  static async getALL(){
    return await this.find();
  }
  static async toggleFavorite(id: number): Promise<Place | null> {
    const place = await this.findOne({ where: { id } });
    if (place) {
      place.is_favorite = !place.is_favorite;
      await place.save();
      return place;
    }
    return null;
  }

  static async getLocationsFromText(text: string): Promise<SearchLocation[]> {
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
