import {cartItemType,wontonsItemType} from "@zocom/types";



export const orderItemsFormatted: cartItemType[] = [
    {
      name: "testing",
      desc: "description",
      ingredients: [
        { name: "kantarell" },
        { name: "scharlottenlök" },
        { name: "morot" },
        { name: "bladpersilja" },
      ],
      price: 10,
    },
  ];
  

export const cartItemSend = () => {
    const HOST = import.meta.env.VITE_HOST;
    return{
    async SendOrder(cartItems: cartItemType[]): Promise<void> {
        try {
            const userId = localStorage.getItem('userId');
            const orderId = Date.now().toString();

            const data = {
                PK: `User#${userId}`,
                SK: `Order#${orderId}`,
                cartItems: cartItems,
                customerName: localStorage.getItem('customerName') || 'guest',
            };

            const response = await fetch(HOST + 'api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    },
};
}
cartItemSend().SendOrder(orderItemsFormatted);