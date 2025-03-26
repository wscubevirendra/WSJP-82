import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const About = () => {
    return (
        <>
           
            <div className="container mt-5">
                <h2 className="text-center mb-4">About Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p className="lead">
                            Welcome to MyWebsite! We are dedicated to providing the best services
                            and products to our customers. Our mission is to create an amazing
                            experience through innovation and quality.
                        </p>
                        <p>
                            Our team is passionate about delivering value and ensuring customer
                            satisfaction. Thank you for visiting our page, and we hope you have a
                            great experience with us!
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default About;