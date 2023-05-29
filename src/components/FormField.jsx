import React from "react";

export default function FormField(props) {
    return (
        <div className="form--field--container">
            <div className={`${props.style}`}>
                <div className="form--fields--tag">
                    <p>{props.offerTag}</p>
                </div>
                <div className="radio--container">
                    <input type="radio" name="subscription" />
                    <div className="form--radio--text">
                        <h5>{props.subscriptionDetails}</h5>
                        <div className="right--text--content">
                            <div className="content--top"><p>Total <span>₹99</span></p></div>
                            <div className="content--bottom">₹8 <span> /mo</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}