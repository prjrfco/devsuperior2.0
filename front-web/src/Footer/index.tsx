import "./styles.css";
import { ReactComponent as GitHubIcon } from "../gitHub.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a aula de Projeto Integrado 2
      <div className="footer-icons">
        <a href="https://prjrfco.github.io/" target="_new">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-paes-ramos-junior-870b85183/"
          target="_new"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://www.instagram.com/francisco.junior.9828/"
          target="_new"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
