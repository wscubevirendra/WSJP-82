import React from 'react'

export default function Display(props) {

    return (
        <ul className="list-group">
            {
                props.Tudo.map((item,i) => {
                   
                    return (
                        <li key={i} className="list-group-item my-1 d-flex justify-content-between align-items-center">
                           {item}
                            <span onClick={()=>{
                                props.removeHandler(i)
                            }} className="badge text-bg-primary rounded-pill">Delete</span>
                        </li>
                    )
                })
            }

        </ul>
    )
}
