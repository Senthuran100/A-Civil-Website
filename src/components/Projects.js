import Card from "./Card";
function Project() {
  return (
    <div className="container projects">
      <h2 className="main-title text-center">PROJECTS</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="PRELIMINARY PLANNING AND DEVELOPMENT"
                img="civil1.jpg"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="STRUCTURAL ANALYSIS AND DESIGN" img="civil2.jpg" />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="PROJECT MANAGEMENT AND SUPERVISION"
                img="civil3.jpg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="PRELIMINARY PLANNING AND DEVELOPMENT"
                img="civil1.jpg"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="STRUCTURAL ANALYSIS AND DESIGN" img="civil2.jpg" />
            </div>

            <div className="col-md-4 mb-2">
              <Card
                title="CONSTRUCTION SUPERVISION AND DETAILING"
                img="civil4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
