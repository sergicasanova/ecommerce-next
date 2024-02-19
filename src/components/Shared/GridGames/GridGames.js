import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridGames.module.scss";
import {ENV} from '../../../utils';

export function GridGames(props) {
  const { games } = props;
  const enlaceurlServer=`${ENV.API_URL}`;

  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        //Con el link envolvemos todo el componente para ir al enlace correspondiente
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <img src={game.attributes.cover.data.attributes.url} />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div>
            <span>{game.attributes.title}</span>
            <span className={styles.price}>
              {fn.calcDiscountedPrice(
                game.attributes.price,
                game.attributes.discount
              )}
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}