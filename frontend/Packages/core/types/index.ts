export enum SizeTypes {
    small = "small",
    medium = "medium",
    large = "large",
    default = "default",
}

export enum StyleTypes {
    "DEFAULT" = "default",
    "DARK" = "dark",
    "LIGHT" = "light",
}


export type wontonsItemType = {
    name: string,
    price: number,
    desc: string,
    ingredients: string[],
}

export type dipItemType = Omit<wontonsItemType, 'ingidients'>; // dipItem type without ingidients property

export type cartItemType = {
    id: string;
    name: string;
    price: number;
    desc: string;
    quantity: number;
  };
  