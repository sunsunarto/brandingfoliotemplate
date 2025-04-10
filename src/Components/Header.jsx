import {useState} from "react";
import "../componentsStyles/Header.css";
function Header() {
    return (
        <div className="headerCon">
            <div className="header">
                <div className="headerLeft">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed7_logo-web-brandingfolio-x-webflow-template.svg" alt="" />
                    <div className="nav">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">pages</a></li>
                            <li><a href="">cart ()</a></li>
                        </ul>
                    </div>
                </div>
                <div className="headerRigth">
                    <a href="">Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default Header;