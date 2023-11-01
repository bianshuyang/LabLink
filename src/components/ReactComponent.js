import React from "react";

const ReactComponent = (props) => {
  // Assuming props.data is an array of objects
  return (
    <div class="container">
      <div class="untree_co-section bg-light">
        <div class="row">
          {props.data.map((prof, index) => (
            <div class="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={(index) * 100}>
              <div class="staff text-center">
                <div class="mb-4">< img src="images/staff_1.jpg" alt="Image" class="img-fluid" /></div>
                <div class="staff-body">
                  <h3 class="staff-name">{prof.name}</h3>
                  <span class="d-block position mb-4">{prof.title}</span>
                  <p class="mb-5">{prof.researchInterest}</p >
                </div>
              </div>
            </div>       
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactComponent;
