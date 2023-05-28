import React from "react";

export default function PointersContainer(props){
    return(
        <div className="pointers--container">
                    <div className="pointers--item">
                        <img src={`${props.image}`} alt="" />
                        <div><span>{props.colortext}</span> {props.text} <span>{props.colortextlast}</span></div>
                    </div>

                </div>
    )
}