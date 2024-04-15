import { Resolver, Query, Arg,Mutation } from "type-graphql";
import { Country } from "../entities/country";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async allCountries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async countryByCode(
    @Arg("code") code: string
  ): Promise<Country | undefined> {
    const country = await Country.findOne({ where: { code } });
    if (!country) {
      return undefined;
    }
    return country;
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return await Country.find({ where: { continentCode } });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continentCode") continentCode: string
  ): Promise<Country> {
    const country = Country.create({ code, name, emoji, continentCode });
    await country.save();
    return country;
  }
}
