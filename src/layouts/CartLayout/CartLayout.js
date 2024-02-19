import { Container } from "semantic-ui-react";
import { Footer, HeaderCart  } from "@/components/Layout";
import { Separator } from "@/components/Shared";
import { Children } from "react";



export function CartLayout(props) {
    const { children } = props;

    return (
        <>
            <HeaderCart/>
            <Separator height={150}/>
            <Container>{children}</Container>
            <Separator height={70}/>
            <Footer/>
        </>
    )
}
