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
                title="TWO STOREY HOUSE - WAHROONGA"
                img="Wahroonga house_Final_180122_01 (1).jpg"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="QUAKERS HILL- DOUBLE STOREY HOUSE"
                img="QUAKERS%20HILL-%20DOUBLE%20STOREY%20HOUSE.jpg"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="NORTH KELLYVILLE- DOUBLE STOREY HOUSE"
                img="NORTH KELLYVILLE- DOUBLE STOREY HOUSE.jpg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="BLACKTOWN- DETTACHED DUAL OCCUPANCY"
                img="59%20Davis%20Rd%20MARAYONG_High%20Res_280122_View_01.jpg"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="MELONBA - SINGLE STOREY HOUSE"
                img="Screenshot (34).png"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="BOX HILL - DUAL OCCUPANCY (DETACHED)"
                img="BOX HILL - DUAL OCCUPANCY (DETACHED) .png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
