import styles from "./Resume.module.scss";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forEach } from "lodash";
import { fn } from "@/utils";

export function Resume(props) {
    const { games } = props;
    const router = useRouter();
    const [totals, setTotals] = useState(null);

    useEffect(() => {
        let totals = {
          original: 0,
          discount: 0,
          price: 0,
        };
    
        forEach(games, (game) => {
          const price = fn.calcDiscountedPrice(
            game.attributes.price,
            game.attributes.discount
          );
    
          //por cada iteracion actualizamos los datos
          totals = {
            // precio original
            original: totals.original + game.attributes.price * game.quantity,
            // descuento
            discount:
              totals.discount + (game.attributes.price - price) * game.quantity,
            price: totals.price + price * game.quantity,
          };
        });
    
        setTotals(totals);
      }, [games]);

      const goToStepTwo = () => {
        router.replace({ query: { ...router.query, step: 2 } });
      };    

      //no mostrara nada hasta que esten los totales
      if (!totals) return null;

      return (
        <div className={styles.resume}>
          <h2>Resumen</h2>
    
          <div className={styles.block}>
            <div className={styles.prices}>
              <div>
                <span>Precio oficial</span>
                <span>{totals.original.toFixed(2)}€</span>
              </div>
              <div>
                <span>Descuento</span>
                <span>{totals.discount.toFixed(2)}€</span>
              </div>
              <div>
                <span>Subtotal</span>
                <span>{totals.price.toFixed(2)}€</span>
              </div>
            </div>
    
            {/* boton para pasar al siguiente paso, introducir datos personales */}
            <Button primary fluid onClick={goToStepTwo}>
              Proceder con el pago
            </Button>
    
            <Link href="/">Continuar comprando</Link>
          </div>
        </div>
      );
}
