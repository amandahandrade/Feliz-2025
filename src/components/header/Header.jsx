import logoHeader from "../../assets/logoHeader.png";
import s from "./header.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <img
        src={logoHeader}
        alt="Imagem onde contem uma garrafa de vinho e uma taça brilhante, além de estar escrito 'Feliz 2025'."
      />

      <nav>
        <ul>
          <li>
            <a href="">Paz</a>
          </li>
          <li>
            <a href="">Saúde</a>
          </li>
          <li>
            <a href="">Alegria</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
