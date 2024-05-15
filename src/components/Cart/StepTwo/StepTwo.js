import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import styles from "./StepTwo.module.scss";

export function StepTwo(props) {
    const { games } = props;

  return (
    <div className={styles.stepTwo}>
        <div className={styles.center}>
            <Addresses/>
            <Separator height={50} />
            <p>PAYMENT</p>
        </div>

        <div className={styles.right}>
            <p>RESUMEN</p>
        </div>
    </div>
  )
}
