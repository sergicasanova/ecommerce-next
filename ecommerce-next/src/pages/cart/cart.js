import { CartLayout } from "@/layouts";
import { useRouter } from "next/router";



export default function CartPage() {
    const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);
  const [games, setGames] = useState(null);


  return (
    <>
        <CartLayout>
            {currentStep === 1 && <p>Step ONE</p>}
            {currentStep === 2 && <p>Step Dos</p>}
            {currentStep === 3 && <p>Step Tres</p>}
        </CartLayout>
    </>
  )
}
