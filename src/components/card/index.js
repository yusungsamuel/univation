import React from "react";
import "./style.css"

export default function Card (props){

    return (
        <div className="card animate__bounceIn animated">
            {props.quote}
        </div>
    )
}
