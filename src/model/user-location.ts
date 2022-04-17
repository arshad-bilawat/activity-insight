export class UserLocation{
    accuracyRadius!: string;
    latitude!: string;
    longitude!: string;
    postalCode!: string;
    timezone!: string;
    city!: City;
    country!: Country;
    continent!: Continent;
    subdivisions!: SubDivision;
}

export class City{
    name!: string;
}
export class Country{
    code!:string;
    name!: string;
}

export class Continent{
    code!: string;
    name!: string;
}

export class SubDivision{
    isoCode!: string;
    name!: string;
}