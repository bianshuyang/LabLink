import React from 'react';
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <>
            <nav className="site-nav mb-5">
                <div className="container position-relative">
                    <div className="site-navigation text-center">
                        <Link to={'/'} className="logo">LabLink!<span className="text-primary">.</span></Link>
                        <ul className="site-menu">
                            {/* ... other menu items ... */}
                            <li className="active"><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="contact-info container">
                <h1>Contact Us</h1>
                <p>Welcome to the LabLink Contact Page! Whether you're a student looking to join a research project, a professor eager to showcase your work, or someone with a general inquiry, we're here to help.</p>

                <section className="for-students">
                    <h2>For Students:</h2>
                    <p>Interested in getting involved in a specific research project or need more information? Drop us a message and we'll guide you to the right path.</p>
                </section>

                <section className="for-professors">
                    <h2>For Professors:</h2>
                    <p>If you want to feature your research or update current listings, let us know. We're committed to showcasing the diverse and groundbreaking research happening on our campus.</p>
                </section>

                <section className="general-inquiries">
                    <h2>General Inquiries:</h2>
                    <p>For any other questions or feedback, feel free to reach out.</p>
                </section>

                <div className="contact-details">
                    <p><strong>Email:</strong> <a href="mailto:info@lablink.domain">info@lablink.domain</a></p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Address:</strong> LabLink, University Department, 123 University Way, City, Zip Code</p>
                </div>

                <footer className="footer">
                    <p>Our team aims to respond to all queries within 48 hours. Thank you for your interest in LabLink. Together, we're bridging the gap between research and student participation.</p>
                </footer>
            </div>
        </>
    );
}

export default ContactUs;
