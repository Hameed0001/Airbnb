// import React from "react";

export default function Card(){
    return(
        <div className="cardHold">
            <div className="imagehold">
                <img className="imAger" src="/katie-zaferes.png" alt="" />
                <div className="tag">SOLD OUT </div>
            </div>
            <div className="details">
                <div className="FirstLine_OF-Details">
                    <img className="star" src="/star.png" alt="" />
                    <span>5.0</span>
                    <span>(6)USA</span>
                </div>
                <div className="SecondLine">Life Lessons with Katie zaferes</div>
                <div className="ThirdLine">From $136 <span>/Person</span></div>
            </div>
        </div>
    )
}