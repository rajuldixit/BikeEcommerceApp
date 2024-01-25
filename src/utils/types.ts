export enum FilterTypes {
  LIST = "LIST",
  RANGE = "RANGE"
}
export interface ISubOptions {
  key: string;
  value: string;
  min?: number;
  max?: number;
}
export const PriceRange: ISubOptions[] = [
  {
    key: "Under1000",
    value: "Under $1000",
    min: 0,
    max: 999
  },
  {
    key: "1000to5000",
    value: "$1000 - $5000",
    min: 1000,
    max: 5000
  }
];
export enum IBikeTypes {
  MOUNTAIN = "Mountain Bikes",
  CRUISER = "Cruiser Bikes",
  ELECTRIC = "Electric Bikes",
  FOLDABLE = "Foldable Bikes"
}
export const BikeTypes: ISubOptions[] = [
  {
    key: "MOUNTAIN",
    value: IBikeTypes.MOUNTAIN
  },
  {
    key: "CRUISER",
    value: IBikeTypes.CRUISER
  },
  {
    key: "ELECTRIC",
    value: IBikeTypes.ELECTRIC
  },
  {
    key: "FOLDABLE",
    value: IBikeTypes.FOLDABLE
  }
];

export interface IFilter {
  name: string;
  type: string;
  subOptions: ISubOptions[];
  key: string;
}

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  ratings: number;
  bikeType: string;
  priceRange?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
