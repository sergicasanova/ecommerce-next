import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { ENV } from "@/utils";
import { Payment } from "./Payment";
import styles from "./StepTwo.module.scss";

//traemos el token de constants
const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo(props) {
    const { games } = props;
    const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
        <div className={styles.stepTwo}>
            <div className={styles.center}>
                <Addresses
                    addressSelected={addressSelected}
                    setAddressSelected={setAddressSelected}
                />
                <Separator height={50} />
                {addressSelected && <Payment/>}
            </div>

            <div className={styles.right}>
                <p>RESUMEN</p>
            </div>
        </div>
    </Elements>
  )
}
