import './index.scss';
import { Header } from '@zocom/header';
import { Button, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom';
import logo from '../../../shared/logo.png';
import logoRed from '../../../shared/logo-red.png';
import { PriceBox } from '@zocom/price-box';
import { useEffect, useState } from 'react';
import { CartItem, ItemParent } from '@zocom/cart-item';

type OrderItem = {
    name: string;
    desc: string;
    ingredients: string[];
    price: number;
  };
  
  export const ReceiptPage = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const navigate = useNavigate();
    const price: number = 120;
  
    async function getOrder(orderId: object) {
      const HOST = import.meta.env.VITE_HOST;
      const body = orderId;
  
      try {
        const response = await fetch(`${HOST}/api/orders/kvitto`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      async function listOrderItems() {
        const orderId = {
          orderId: "2024-01-12T00:49:56:0170",
        };
  
        try {
          const allItems = await getOrder(orderId);
          setOrderItems(allItems.orderItems);
        } catch (error) {
          console.log(error);
        }
      }
      listOrderItems();
    }, []);
  
    const countProducts = (products: OrderItem[]) => {
      let count: Record<string, number> = {};
      for (const product of products) {
        const title = product.name;
        count[title] = (count[title] || 0) + 1;
      }
      return count;
    };
  
    const renderItems = () => {
      const productCount = countProducts(orderItems);
  
      return Object.entries(productCount).map(([title, quantity]) => (
        <CartItem key={title} title={title} quantity={quantity} price={price} parentElem={ItemParent.RECEIPT} />
      ));
    };
  
    return (
      <div className='receipt-page'>
        <Header logo={logo} />
        <main className='receipt-container'>
          <img className='logo-red' src={logoRed} alt="logoRed" />
          <section className='receipt-container-header'>
            <h1 className='receipt-title'>KVITTO</h1>
            <p className='order-nr'>#4kjwsdf234k</p>
          </section>
          <section className='receipt-items'>
            {renderItems()}
          </section>
          <PriceBox price={price} parentElem={ItemParent.RECEIPT} />
        </main>
        <Button size={ButtonSize.STRETCH} onClick={() => navigate('/')}>
          GÖR EN NY BESTÄLLNING
        </Button>
      </div>
    );
  };