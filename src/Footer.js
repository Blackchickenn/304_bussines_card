import React from "react"
import FacebookIcon from "./icons/facebook-icon.png"
import InstagramIcon from "./icons/instagram-icon.png"
import TwitterIcon from "./icons/twitter-icon.png"
import GithubIcon from "./icons/github-icon.png"



export default function Footer(){
    return(
        <footer>
            <a href="">
                <img src={FacebookIcon} alt="Facebook-icon" className="icon--facebook" />
            </a>
            <a href="">
                <img src={InstagramIcon} alt="Instagram-icon" className="icon--instagram" />
            </a>
            <a href="">
                <img src={TwitterIcon} alt="Instagram-icon" className="icon--twitter" />
            </a>
            <a href="">
                <img src={GithubIcon} alt="Github-icon" className="icon--github" />
            </a>
        </footer>
    )
}