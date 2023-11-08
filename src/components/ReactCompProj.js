import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const ReactCompProj = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="container">
      <div class="untree_co-section bg-light">
        <div class="row justify-content-between">
          {props.data.map((proj, index) => (
            <div class="col-lg-6 mb-5">

              <div className="d-flex justify-content-around" data-aos="fade-up" data-aos-delay="0">
                <Card style={{ width: '50rem' }}>
                  <Card.Img variant="top" src="images/staff_2.jpg" data-aos="fade-up" data-aos-delay="0"/>
                  <Card.Body>
                    <div class="section-title mb-3" data-aos="fade-up" data-aos-delay="100">
                      <h2 class="line-bottom mb-4">{proj.name}</h2>
                    </div>
                    <div class="small mr-3 mb-2" data-aos="fade-up" data-aos-delay="200">
                      <span class="uil uil-user mr-2"></span>
                      <span class="d-none d-lg-inline-block">{proj.instructor}</span>
                    </div>
                    <div class="small mr-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                      <span class="uil uil-envelope mr-2"></span> 
                      <span class="d-none d-lg-inline-block">{proj.email}</span>
                    </div>
                    <Button variant="primary" size="sm" data-aos="fade-up" data-aos-delay="300" onClick={handleShow}>More Information</Button>
                  </Card.Body>
                </Card>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>More Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>{proj.introduction}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Continue Browsing</Button>
                  <Button variant="primary" onClick={handleClose}>Exit</Button>
                </Modal.Footer>
              </Modal>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactCompProj;
