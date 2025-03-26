import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Contact = () => {
    return (
        <>
           

            <div className="container mt-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
         
        </>
    );
};

export default Contact;
