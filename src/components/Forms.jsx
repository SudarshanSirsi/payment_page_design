import React from "react";
import FormField from "./FormField";

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
                    <FormField
                        style="expired"
                        offerTag="Offer Expired"
                        subscriptionDetails="12 Months subscription"
                    />

                    <FormField
                        style="valid"
                        offerTag="Recommended"
                        subscriptionDetails="12 Months subscription"
                    />

                    <FormField
                        style="valid"
                        offerTag="Recommended"
                        subscriptionDetails="6 Months subscription"
                    />

                    <FormField
                        style="valid"
                        offerTag="Recommended"
                        subscriptionDetails="3 Months subscription"
                    />


                </form>
            </div>
            <form action="">

            </form>
        </div>
    )
}