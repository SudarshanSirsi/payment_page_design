import React from "react";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="nav--leftside">
                <img src="LOGOedyodalogo.png" alt="" className="img"/>
                <select name="course" id="" className="middle--left">
                    <option value="Courses">Courses</option>
                </select>
                
               <select name="course" id="" className="middle--left">
                    <option value="programs">Programs</option>
                </select>
                
            </div>
            <div className="nav--rightside">
                <img src="Vectorsearch.png" alt="" />
                
                <a href="" className="middle--right">Log in</a>
                <a href=""><div className="btn">JOIN NOW</div></a>
            </div>
        </div>
    )
}