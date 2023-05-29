import React from "react";

export default function Forms() {
    return (
        <div >
            <div className="form--container">
                <div className="form--top">
                    <div className="top--content">
                        <div className="number">1</div>
                        <div className="content--text">Sign Up</div>
                    </div>
                    <div className="top--content">
                        <div className="number">2</div>
                        <div className="content--text">Subscribe</div>
                    </div>
                </div>

                <div className="form--top--text"><h3>Select your subscription plan</h3></div>
                <form className="form--fields">
                    <div className="form--field--outer">
                        <div className="form--fields--tag">
                            <p>Offer Expired</p>
                        </div>
                        <div className="radio--container">
                            <input type="radio" name="subscription" />
                            <div className="form--radio--text">
                                <h5>12 Months subscription</h5>
                                <div className="right--text--content">
                                    <div className="content--top"><p>Total <span>₹99</span></p></div>
                                    <div className="content--bottom">₹8 <span> /mo</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <form action="">

            </form>
        </div>
    )
}