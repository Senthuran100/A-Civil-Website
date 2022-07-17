import { Link } from "react-scroll";

function Header() {
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }
  return (
    <header>
      <video src="/video1.mp4" loop autoPlay muted></video>
      <h1>Solid Foundations for a Brighter Future</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          <Link
            onClick={openBar}
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
          >
            Contact Us
          </Link>
        </button>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
