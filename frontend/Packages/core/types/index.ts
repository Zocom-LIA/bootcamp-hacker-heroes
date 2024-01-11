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
    PK:string,
    SK:string,
    name: string,
    price: number,
    desc: string,
    ingredients: string[],
}

export type dipItemType = Omit<wontonsItemType, 'ingidients'>; // dipItem type without ingidients property

export type menu = {
    wontons: wontonsItemType[],
    dip: dipItemType[],
}
export type cartItemType = {
    item: wontonsItemType;
    quantity: number;
  };
  