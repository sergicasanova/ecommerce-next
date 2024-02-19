import { Game } from "@/api";

export { default } from "./game";

export async function getServerSideProps(context) {
    //constante utilizada para recuperar la pagina del juego
  const {
    params: { game },
  } = context;

  const gameCtrl = new Game();
  //recuperamos los parametros del juego, todos sus datos
  const response = await gameCtrl.getBySlug(game);

  return {
    props: {
      game: response,
    },
  };
}