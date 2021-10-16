import "../../styles/styleHIView.css";
import "../../styles/HomePrincipal.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/products/barras.svg";

export default function HomeIniView() {
  return (
    <div>
      <header class="site-header inicio">
        <div className="contenedor contenido-header">
          <div className="barra">
            <Link to="/">
              <img
                className="img"
                src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
                alt="clothes-Shop"
                border="0"
              />
            </Link>
            <div className="mobile-menu">
              <Link to="#navegacion">
                <img src={Logo} alt="icono menu" />
              </Link>
            </div>
            <nav id="navegacion" className="navegacion">
              <Link to="/catalogue">Catalogue</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="contenedor seccion">
        <div className="container">
          <div className="body_hiview">
            <ul className="c-accordion">
              <li id="joker" className="c-accordion__item">
                <a href="#joker" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      Jocker
                    </h2>
                    <p className="c-accordion__description">
                      In Gotham City, mentally troubled comedian Arthur Fleck is
                      disregarded and mistreated by society. He then embarks on
                      a downward spiral of revolution and bloody crime. This
                      path brings him face-to-face with his alter-ego: the
                      Joker.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      Jocker
                    </h2>
                  </div>
                </a>
              </li>
              <li id="john-wick" className="c-accordion__item">
                <a href="#john-wick" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      John Wick
                    </h2>
                    <p className="c-accordion__description">
                      John Wick is on the run after killing a member of the
                      international assassins' guild, and with a $14 million
                      price tag on his head, he is the target of hit men and
                      women everywhere.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      John Wick
                    </h2>
                  </div>
                </a>
              </li>
              <li id="black-panther" className="c-accordion__item">
                <a href="#black-panther" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      Black Panther
                    </h2>
                    <p className="c-accordion__description">
                      T'Challa, heir to the hidden but advanced kingdom of
                      Wakanda, must step forward to lead his people into a new
                      future and must confront a challenger from his country's
                      past.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      Black Panther
                    </h2>
                  </div>
                </a>
              </li>
              <li id="marvel-captain" className="c-accordion__item">
                <a href="#marvel-captain" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      Marvel Captain
                    </h2>
                    <p className="c-accordion__description">
                      Carol Danvers becomes one of the universe's most powerful
                      heroes when Earth is caught in the middle of a galactic
                      war between two alien races.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      Marvel Captain
                    </h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="container_about">
            <h1>uuu</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
