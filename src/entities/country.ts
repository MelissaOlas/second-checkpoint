import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import {
  BaseEntity,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id!: string;

  @Column()
  @Field()
  code!: string;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  emoji!: string;

  static async getCountry(code?: string): Promise<Country[]> {
    const countries = await Country.createQueryBuilder("country")
    .where("country.code = :code", { code })
    .getMany();

    return countries;
  }

  // static async getAdById(id: string): Promise<Ad> {
  //   const ad = await Ad.findOne({
  //     where: { id },
  //   });
  //   if (!ad) {
  //     throw new Error(`Ad with ID ${id} does not exist.`);
  //   }
  //   return ad;
  // }
} 

//   static async deleteAd(id: string): Promise<Ad> {
//     const ad = await Ad.getAdById(id);
//     await Ad.delete(id);
//     return ad;
//   }

//   static async updateAd(id: string, partialAd: CreateOrUpdateAd): Promise<Ad> {
//     const ad = await Ad.getAdById(id);
//     Object.assign(ad, partialAd);

//     if (partialAd.categoryId) {
//       ad.category = await Category.getCategoryById(partialAd.categoryId);
//     }
//     if (partialAd.tagIds) {
//       ad.tags = await Promise.all(partialAd.tagIds.map(Tag.getTagById));
//     }

//     await ad.save();
//     ad.reload();
//     return ad;
//   }

//   getStringRepresentation(): string {
//     return `${this.id} | ${this.title} | ${this.owner} | ${this.price} €`;
//   }
// }