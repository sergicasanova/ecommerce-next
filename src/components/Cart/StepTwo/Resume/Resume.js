import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { forEach, map } from "lodash";
import { Cart } from "@/api";
import { useAuth, useCart } from "@/hooks";
import { fn } from "@/utils";
import styles from "./Resume.module.scss";

export function Resume(props) {
    const { games, addressSelected } = props;
    const [total, setTotal] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const stripe = useStripe();
    // const elements = useElements();
    // const { user } = useAuth();
    // const { deleteAllItems } = useCart();
    // const router = useRouter();

    //precio que vamos a pagar
    useEffect(() => {
        let totalTemp = 0;
    
        forEach(games, (game) => {
          const price = fn.calcDiscountedPrice(
            game.attributes.price,
            game.attributes.discount
          );
          totalTemp += price * game.quantity;
        });
    
        setTotal(totalTemp.toFixed(2));
    }, [games]);

    return (
        <div className={styles.resume}>
            <h2>RESUMEN</h2>

            <div className={styles.block}>
                <div className={styles.products}>
                    {map(games, (game) => (
                        <div key={game.id} className={styles.product}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <span>{game.attributes.platform.data.attributes.title}</span>
                            </div>
                            <span>
                                {game.quantity > 0 && `${game.quantity}x`}
                                {fn.calcDiscountedPrice(
                                    game.attributes.price,
                                    game.attributes.discount
                                )}
                                €
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.blockTotal}>
                <div>
                    <span>Total</span>
                    <span>{total}€</span>
                </div>

                <Button primary fluid disabled={!addressSelected}>
                    Pagar
                </Button>
            </div>
        </div>
    );
}
