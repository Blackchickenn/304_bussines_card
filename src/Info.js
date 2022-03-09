import React from "react"
import PersonalPhoto from "./images/bussines_photo.jpg"



export default function Info(){
    return(
        <header>
            <img src={PersonalPhoto} alt="Personal-Photo" className="personal--photo" />
            <div className="personal--info">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laruasmith.webpage</p>
            </div>
            <div className="personal--buttons">
                <button className="personal--buttons--email"> <i className="fas fa-thumbs-up"></i>Email</button>
                <button className="personal--buttons--linkedin"><i className="fas fa-thumbs-down"></i>LinkedIn</button>
            </div>
        </header>
    )
}