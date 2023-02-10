import React, { useState } from 'react';
import "./home.css";
const Data = ({ users }) => {
    const [show, setShow] = useState(false);
    const [id1, setId1] = useState(1);
    const [showVal, setShowVal] = useState("View Details");
    const showDetails = (id,e) => {
        e.preventDefault();
        setId1(id);

        setShow(!show);

        if (show === true) {
            setShowVal("View Details");
        }
        else {
            setShowVal("Hide Details");
        }
    }

    return (
        <>
            {

                users.map((curElem) => {
                    return (
                        <div className="container_content" key={curElem.id}>
                            <div className="container_content1">
                                <div className="name">
                                    <h5>{curElem.company.name}</h5>
                                </div>
                                <div className="contact">
                                    <h5 className='upper'>Contact</h5>
                                    <h4>{curElem.name}</h4>
                                </div>
                                <div className="city">
                                    <h5 className='upper'>City</h5>
                                    <h4>{curElem.address.city}</h4>
                                </div>
                                <div className="state">
                                    <h5 className='upper'>Street</h5>
                                    <h4>{curElem.address.street}</h4>
                                </div>
                                <div className="view_details">
                                    <a href="#" className="view" onClick={(e) => {  showDetails(curElem.id,e) }}>{id1 === curElem.id ? showVal : "View Details"}</a>
                                </div>

                            </div>
                            <div className={((show === true) && (id1 === curElem.id)) ? "extended_content show" : "extended_content"}>
                                <div className="description">
                                    <h5>Description</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet, voluptate rem delectus error, cupiditate at reprehenderit quaerat nemo ipsa tenetur, adipisci deleniti neque dolore labore enim! Odio iure quisquam eaque error et, sapiente, fuga accusamus provident, quo enim minima!</p>
                                </div>
                                <div className="extended_content_detail">
                                    <div className='extended_content_detail_left'>
                                        <div >
                                            <h4>Contact Person</h4>
                                            <p>{curElem.name}</p>
                                        </div>
                                        <div>
                                            <h4>Website</h4>
                                            <p>{curElem.website}</p>
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>{curElem.email}</p>
                                        </div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>{curElem.phone}</p>
                                        </div>

                                    </div>
                                    <div className='extended_content_detail_right'>
                                        <div>
                                            <h4>Address</h4>
                                            <p>{curElem.address.street} {curElem.address.suite} {curElem.address.city} {curElem.address.zipcode}</p>
                                        </div>
                                        <div>
                                            <h4>City</h4>
                                            <p>{curElem.address.city}</p>
                                        </div>
                                        <div>
                                            <h4>State</h4>
                                            <p>Gujarat</p>
                                        </div>
                                        <div>
                                            <h4>Country</h4>
                                            <p>India</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )

                })
            }
        </>
    );
}

export default Data;
