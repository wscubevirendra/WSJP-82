import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Building responsive and dynamic websites tailored to your needs.",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Creating seamless mobile applications for both Android and iOS.",
        },
        {
            id: 3,
            title: "SEO Optimization",
            description: "Enhancing your website's visibility on search engines.",
        },
    ];

    return (
        <>
          
            <div className="container my-5 mt-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-4">
                            <div className="card p-3 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </>

    );
};

export default Services;