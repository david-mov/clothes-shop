import "../../styles/styleHIView.css";
import "../../styles/HomePrincipal.css";
import { Link } from "react-router-dom";

export default function HomeIniView() {
  return (
    <div className="HomePrincipal">
      <div className="NavbarPaincipal">
        <Link to="/">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
        </Link>
        <div className="abaout">
          <Link className="spanHomePrincipal" to="/catalogue">
            <span>Catalogue</span>
          </Link>
          <Link className="spanHomePrincipal" to="/login">
            <span> Login</span>
          </Link>
          <Link className="spanHomePrincipal" to="/signup">
            <span> Signup</span>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="body_hiview">
          <ul className="c-accordion">
            <li id="joker" className="c-accordion__item">
              <a href="#joker" className="c-accordion__action">
                <div className="c-accordion__content">
                  <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                    Kike
                  </h2>
                  <p className="c-accordion__description">
                    In Gotham City, mentally troubled comedian Arthur Fleck is
                    disregarded and mistreated by society. He then embarks on a
                    downward spiral of revolution and bloody crime. This path
                    brings him face-to-face with his alter-ego: the Joker.
                  </p>
                </div>
                <div className="c-accordion__aside">
                  <h2 className="c-accordion__title c-accordion__title--hover-hide">
                    Nike
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
                    international assassins' guild, and with a $14 million price
                    tag on his head, he is the target of hit men and women
                    everywhere.
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
                    New Wallas
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
                    New Wallas
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
                    heroes when Earth is caught in the middle of a galactic war
                    between two alien races.
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
  );
}
