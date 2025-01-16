import s from "./main.module.scss";
import imagemAnoNovo from "../../assets/imagemAnoNovo.png";

export default function Main() {
  return (
    <main className={s.main}>
      <img
        src={imagemAnoNovo}
        alt="Imagem onde contém a frase 'Ano Novo 2025' rodeada de pisca-piscas amarelos e várias estrelas amarelas em volta"
      />

      <section className={s.textContainer}>
        <h1>Boas Festas!!!</h1>
        <h2>Felicidades!!!</h2>
        <p>Em 2025, vamos juntos programar,</p>
        <p>com mais código limpo e muito para alcançar!</p>
        <p>Que o ano novo traga só funções de felicidade,</p>
        <p>E que a paz seja nossa variável de realidade!</p>
        <p>Sem bugs, sem falhas, com muito amor,</p>
        <p>Vamos debugar os problemas com ardor!</p>
        <p>Que a vida seja sempre o output de alegria,</p>
        <p>o Vai Na Web te deseja um Ano Novo,</p>
        <p>que seja pura harmonia!</p>
      </section>
    </main>
  );
}
