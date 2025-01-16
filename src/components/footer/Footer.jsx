import s from "./footer.module.scss";
import LinkedIn from "../../assets/logos/logoLinkedin.png";
import Facebook from "../../assets/logos/logoFacebook.png";
import Instagram from "../../assets/logos/logoInstagram.png";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.infoFooter}>
        <p>Aluna: Amanda Andrade</p>
        <p>Instrutor: Fernanda Corrêa</p>
        <p>Facilitador: João Pedro Belo</p>
        <p>Layout criado para fins de estudos na Escola Vai na Web - jan. 2025</p>
      </section>

      <nav className={s.socialLinks}>
        <ul>
          <li>
            <a href="#">
              <img src={LinkedIn} alt="Logo da plataforma LinkedIn" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Facebook} alt="Logo da plataforma Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Instagram} alt="Logo da plataforma Instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
