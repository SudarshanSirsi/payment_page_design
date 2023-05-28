import React from "react";
import PointersContainer from "./PointersContainer";
import Forms from "./Forms";

export default function Main(){
    return (
        <div className="main">
        <div className="main--container">
            <div className="heading">
                <h2>Access cureted courses worth</h2>
                <div className="sec--head">
                    <div className="heading"><h2>₹  18,500 at Just  ₹ 99 per year!</h2></div>
                   
                </div>
                <PointersContainer 
                    image="Iconbook.png"
                    colortext="100+"
                    text="Job relavent courses"
                />

                 <PointersContainer 
                    image="Icon Clockclock.png"
                    colortext="20000+"
                    text="Hours of content"
                />

                 <PointersContainer 
                    image="Iconlive.png"
                    colortext="Exclusive"
                    text="webinar access"
                />

                 <PointersContainer 
                    image="Iconeducation.png"
                    colortextlast="₹94,500"
                    text="Scholarship worth "
                />

                 <PointersContainer 
                    image="Iconadfree.png"
                    colortext="Ad Free"
                    text="learning experience"
                />
            </div>
        </div>
        <Forms />
        </div>
    )
}