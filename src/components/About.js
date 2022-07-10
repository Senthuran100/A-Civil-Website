function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            We are an Engineering Company providing Civil, Structural, Piping and Mechanical design and
            detailed engineering services as well as Solar power plant design and installation services 
            ensuring safety, accuracy, sustainability and optimized solutions. Hands on experience of 
            Civil & Structural, Piping and Mechanical engineering design using software's like STAAD Pro, 
            CAESAR II, Solidegde and Detailing/ Fabrication drawings using Tekla, Revit Structures, 
            CadWorx in the following industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
