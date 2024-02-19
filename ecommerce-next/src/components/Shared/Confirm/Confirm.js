import { Confirm as ConfirmSU } from "semantic-ui-react";

export function Confirm(props) {
    //...rest todos los props no controlados
    const { ...rest } = props;

    return <ConfirmSU className="confirm" size="mini" {...rest} />;
}