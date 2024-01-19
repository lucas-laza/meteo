import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  email?: string;

  static async createNew(name: string, email: string) {
      const user = new User();
      user.name = name;
      user.email = email;
      await user.save()
      return user
  }
  static async getALL(){
    return await this.find();
  }
}
