function Header() {
  return (
    <header>
      <video src="/video1.mp4" loop autoPlay muted></video>
      <h1>Name of the Company</h1>
      <h2> Vision and Mission Statement</h2>
      {/* <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div> */}

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
