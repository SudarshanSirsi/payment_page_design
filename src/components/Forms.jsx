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
                        <input type="radio" />
                        <div className="form--fields--text">
                            <h5>12 Months subscription</h5>
                        </div>
                    </div>
                </form>
            </div>
            <form action="">

            </form>
        </div>
    )
}