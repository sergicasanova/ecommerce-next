import { useState, useEffect } from "react";
import { add, map } from "lodash";
import classNames from "classnames";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./Addresses.module.scss";

const addressCtrl = new Address();

export function Addresses(props) {
    const { addressSelected, setAddressSelected } = props;
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();
    console.log(addresses);

    useEffect(() => {
        (async () => {
          try {
            const response = await addressCtrl.getAll(user.id);
            setAddresses(response);
          } catch (error) {
            console.error(error);
          }
        })();
      }, []);

    return (
        <div>
            <h2>Addresses</h2>
        </div>
    )
}
