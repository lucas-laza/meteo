import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Place extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    // @Column({ unique: true })
    // geoCodeApiId!: number;
    @Column({ nullable: true })
    latitude?: number;
    @Column({ nullable: true })
    longitude?: number;

    static async createNew(name: string, latitude: number, longitude: number,geoCodeApiId:number) {
        const place = new Place();
        place.name = name;
        // place.geoCodeApiId=geoCodeApiId;
        place.latitude = latitude;
        place.longitude = longitude;
        await place.save()
        return place
    }
    // static getALL(){}
}
