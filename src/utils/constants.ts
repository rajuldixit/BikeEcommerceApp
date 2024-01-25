import {
  IFilter,
  FilterTypes,
  IBikeTypes,
  PriceRange,
  IProduct,
  BikeTypes
} from "./types";

export const filterOptions: IFilter[] = [
  {
    name: "Types",
    type: FilterTypes.LIST,
    subOptions: BikeTypes,
    key: "bikeType"
  },
  {
    name: "Price",
    type: FilterTypes.LIST,
    subOptions: PriceRange,
    key: "priceRange"
  }
];

export const products: IProduct[] = [
  {
    id: "1",
    name: "Mountain Bike 1",
    imageUrl: "mountain_bikes/81DPZ3XfrwL.jpg",
    description:
      "A mountain bike (MTB) or mountain bicycle is a bicycle designed for off-road cycling.",
    price: 1000,
    ratings: 4,
    bikeType: IBikeTypes.MOUNTAIN,
    priceRange: PriceRange[1].value
  },
  {
    id: "2",
    name: "Mountain Bike 2",
    imageUrl: "mountain_bikes/House-of-solid-gold.jpg",
    description:
      "A mountain bike (MTB) or mountain bicycle is a bicycle designed for off-road cycling.",
    price: 1500,
    ratings: 5,
    bikeType: IBikeTypes.MOUNTAIN,
    priceRange: PriceRange[1].value
  },
  {
    id: "3",
    name: "Mountain Bike 3",
    imageUrl: "mountain_bikes/MY22TranceAdvancedPro290_ColorAPulpGray.jpg",
    description:
      "A mountain bike (MTB) or mountain bicycle is a bicycle designed for off-road cycling.",
    price: 1000,
    ratings: 3,
    bikeType: IBikeTypes.MOUNTAIN,
    priceRange: PriceRange[1].value
  },
  {
    id: "4",
    name: "Cruiser Bike 1",
    imageUrl: "cruiser_bikes/main2020shiny.webp",
    description:
      "A cruiser bicycle, also known as a beach cruiser or (formerly) motobike",
    price: 1000,
    ratings: 4,
    bikeType: IBikeTypes.CRUISER,
    priceRange: PriceRange[1].value
  },
  {
    id: "5",
    name: "Cruiser Bike 2",
    imageUrl: "cruiser_bikes/Top10CruiserPrice_thumb.webp",
    description:
      "A cruiser bicycle, also known as a beach cruiser or (formerly) motobike",
    price: 3000,
    ratings: 5,
    bikeType: IBikeTypes.CRUISER,
    priceRange: PriceRange[1].value
  },

  {
    id: "6",
    name: "Bike Electric 1",
    imageUrl: "electric_bikes/Image1LQ_00000_x800.webp",
    description:
      "An electric bike, is a bicycle equipped with an motor to assist you .",
    price: 4000,
    ratings: 4,
    bikeType: IBikeTypes.ELECTRIC,
    priceRange: PriceRange[1].value
  },
  {
    id: "7",
    name: "Folding Bike 1",
    imageUrl:
      "folding_bikes/single-speed-folding-bikehummingbird-bike-ltd-129904_2048x.webp",
    description:
      "A folding bike is a bicycle designed to fold into a compact form, for easy transportation and storage.",
    price: 2000,
    ratings: 5,
    bikeType: IBikeTypes.FOLDABLE,
    priceRange: PriceRange[1].value
  },
  {
    id: "8",
    name: "Folding Bike 2",
    imageUrl: "folding_bikes/arc-ii-electric-folding-bike-p216-4752_zoom.jpg",
    description:
      "A folding bike is a bicycle designed to fold into a compact form, for easy transportation and storage.",
    price: 900,
    ratings: 3,
    bikeType: IBikeTypes.FOLDABLE,
    priceRange: PriceRange[0].value
  }
];

export const appColors = {
  primaryColor: "#15C421"
};
