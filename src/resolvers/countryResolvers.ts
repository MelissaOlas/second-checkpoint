import { Resolver, Query, Arg } from "type-graphql";
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
}
