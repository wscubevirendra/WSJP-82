import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Item = ({ data }) => {
    const [toggle, Settoggle] = useState(true);
    function toggleHandler() {
        Settoggle(!toggle)
    }

    return (
        <div className='col-3'>
            <div className="card" >
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6>{data.name}</h6>
                    {
                        toggle == true ?
                            <FcLike className='fs-4' onClick={toggleHandler} />
                            :
                            <FcDislike className='fs-4' onClick={toggleHandler} />

                    }

                </div>
            </div>
        </div>
    )
}


export default Item