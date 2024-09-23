// import React from "react"
import Card from "./Cards"
import Data from "./Data"
export default function Hero() {
    return (
        <>
        <section className="hero">
            <img src="\photo-grid.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
        <div className="cardCona">
            {Data.map((Item, index) => (
            <Card
                key={index}
                Reasons={Item.Reason}
                ratings={Item.ratings}
                Country={Item.Country}
                Amount={Item.Amount}
                Image={Item.Image}
            />
            ))}
        </div>
        </>
    )
}