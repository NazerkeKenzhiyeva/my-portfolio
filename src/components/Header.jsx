import portrait from "../assets/me.jpg";

function Header() {
  return (
    <header className="hero">
      <p className="hero-kicker">Personal portfolio · Kenzhiyeva Nazerke</p>

      <h1 className="hero-title" aria-label="Nazerke">
        NAZ
      </h1>

      <figure className="hero-portrait">
        <img src={portrait} alt="Portrait of Nazerke" />
      </figure>

      <div className="hero-details" aria-hidden="true">
        <span>IT Student</span>
        <span>Music &amp; Books</span>
      </div>
    </header>
  );
}

export default Header;
