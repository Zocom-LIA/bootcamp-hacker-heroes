export type MenuType = {
    PK: string | number,
    SK: string,
    name: string,
    desc: string,
    ingredients: string[],
    price: number
  }
  
  export type OrderType = {
    PK: string,
    SK: string,
    orderItems: {
      name: string,
      desc: string,
      ingredients?: string[],
      price: number,
    }[],
    customerName: string,
    orderPlaced: string,
    status: string,
    orderNr: number,
    userId: string,
    orderId: string,
  }

