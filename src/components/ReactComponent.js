import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfessorStructuralComponent from './SingleProf'; // Import your structural component
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ReactComponent = (props) => {
  const location = useLocation();
  // Assuming props.data is an array of objects
  return (
    <div class="container">
      <div class="untree_co-section bg-light">
        <div class="row">
          {props.data.map((prof, index) => (
            <div class="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={(index) * 100}>
              <div class="staff text-center">
                <div class="mb-4">< img src={prof.Image} alt="Image" class="img-fluid" /></div>
                <div class="staff-body">
                  <h3 class="staff-name">
<Link to={{ pathname: '/SingleProf', state: { prof: "Li Xiong" } }}> {prof.name} </Link></h3>
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
