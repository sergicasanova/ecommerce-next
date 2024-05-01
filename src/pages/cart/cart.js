import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Game } from "@/api";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";
import { Cart } from "@/components/Cart"



export default function CartPage() {
  // si el step es vacio es igual a 1
    const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);
  const { cart } = useCart();
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        //recogemos y almacenamos los juegos en el carrito
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
        <CartLayout>
            {currentStep === 1 && <Cart.StepOne games={games}/>}
            {currentStep === 2 && <p>Step Dos</p>}
            {currentStep === 3 && <p>Step Tres</p>}
        </CartLayout>
    </>
  )
}
