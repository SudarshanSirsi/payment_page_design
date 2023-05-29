import React from "react";

export default function FormField(props) {
    function handleClick(){
        
    }
    return (
        <div className="form--field--container">
            <div className={`form--field--outer--${props.style}`} onClick={handleClick}>
                <div className={`form--fields--tag--${props.style}`}>
                    <p>{props.offerTag}</p>
                </div>
                <div className="radio--container">
                    <input type="radio" name="subscription" />
                    <div className={`form--radio--text--${props.style}`}>
                        <h5>{props.subscriptionDetails}</h5>
                        <div className="right--text--content">
                            <div className="content--top"><p>Total <span>₹{props.total}</span></p></div>
                            <div className="content--bottom">₹{props.permonth} <span> /mo</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}