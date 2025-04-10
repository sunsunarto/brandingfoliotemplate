import {useState} from "react";
import "../componentsStyles/footer.css";

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with email: ${email}`);
        setEmail(""); 
      };

    return (
        <div className="footer">
            <div className="contactSection">
                <div className="leftSide">
                    <h1>Contact us today!</h1>
                    <p>
                        Nunc tortor aliquam nec sed nunc convallis tincidunt quam felis
                        volutpat ut consequat turpis risus lacus hendrerit.
                    </p>
                </div>
                <div className="rightSide">
                    <button className="contactButton">Contact us</button>
                    <button className="projectsButton">Our projects</button>
                </div>
            </div>
            <div className="bottomSection">
                <div className="left">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed6_logo-web-white-brandingfolio-x-webflow-template.svg" alt="" />
                    <p>Copyright © Brandingfolio X | Designed by<br/><span className="underlineText">BRIX Templates</span> - Powered by <span className="underlineText">Webflow</span></p>
                    <form onSubmit={handleSubscribe}>
                        <div className="newsletterContainer">
                            <h6>Subscribe to our newsletter</h6>
                            <div className="inputGroup">
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <ul>
                        <li className="title">Pages</li><br/>
                        <li>Preview</li>
                        <li>Home V1</li>
                        <li>Home V2</li>
                        <li>Home V3</li>
                        <li>About</li>
                        <li>Blog V1</li>
                        <li>Blog V2</li>
                        <li>Blog V3</li>
                        <li>Blog post</li>
                        <li>Blog category</li>
                        <li>Packages</li>
                    </ul>
                    <ul>
                        <br/><br/>
                        <li>Packages single</li>
                        <li>Contact V1</li>
                        <li>Contact V2</li>
                        <li>Contact V3</li>
                        <li>portfolio</li>
                        <li>portfolio single</li>
                        <li>team mamber</li>
                    </ul>
                    <ul>
                        <li className="title">Utility pages</li><br/>
                        <li>Style guide</li>
                        <li>Start here</li>
                        <li>404 not found</li>
                        <li>Password protected</li>
                        <li>License</li>
                        <li>Changelog</li>
                        <li>More webflow template</li>
                    </ul>
                    <ul>
                        <li className="title">Follow us</li><br/>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

