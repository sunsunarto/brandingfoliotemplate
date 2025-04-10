import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../componentsStyles/About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {

    const aboutRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(".aboutText", {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".aboutText",
                start: "top 100%",           
            },
        });
    }, []);

    useEffect(() => {
    aboutRef.current.forEach((el, index) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",           
            },
          }
        );
      });
    }, []);

    return (
        <div className="mainAbout">
            <div className="aboutCon">
                <div className="aboutText">
                    <h1>What is included in<br/>Brandingfolio X</h1>
                    <p><span className="boldtext">Brandingfolio X Webflow</span> Template includes over <span className="boldText">19<br/>pages</span> in total, with more than <span className="boldText">35 sections</span>.</p>
                </div>
                <div className="picCon">
                    <div className="table table1" ref={(el) => aboutRef.current[0] = el}>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc4_brandingfolio-x-10-pages-included-branding-agency-webflow-template.png" alt="" />
                        <h6>19+ pages</h6>
                    </div>
                    <div className="table table2" ref={(el) => aboutRef.current[1] = el}>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3d_brandingfolio-x-35-sections-included-branding-agency-webflow-template.png" alt="" />
                        <h6>35+Sections</h6>
                    </div>
                    <div className="table table2" ref={(el) => aboutRef.current[2] = el}>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f50_brandingfolio-x-35-styles-and-symbols-included-branding-agency-webflow-template.png" alt="" />
                        <h6>25+ Styles & Symbols</h6>
                    </div>
                </div>
                <div className="figmaCon" ref={(el) => aboutRef.current[3] = el}>
                    <div className="figmaConText">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fba_figma-icon-brandingfolio-x-webflow-template.svg" alt="" />
                        <h1>Figma file included</h1>
                        <p>Send us an email to <br/><span className="underlineText">brandingfoliox@brixtemplates.com</span> with your<br/>purchase receipt, and we will send you the editable<br/>Figma file for the Brandingfolio X template.</p>
                        <button>Request figma file</button>
                    </div>
                    <div className="figmaConImg">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc2_brandingfolio-x-figma-included-branding-agency-webflow-template.png" alt="" />
                    </div>
                </div>
                <div className="browser"ref={(el) => aboutRef.current[4] = el}>
                    <div className="browserImg">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f4f_brandingfolio-x-brix-included-branding-agency-webflow-template.png" alt="" />
                    </div>
                    <div className="browserText">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fbd_brix-templates-icon-brandingfolio-x-webflow-template.svg" alt="" />
                        <h1>Looking for more amazing<br/>Webflow Templates?</h1>
                        <p>Take a look at our collection of 100+ premium<br/>Webflow Templates at BRIX Templates.</p>
                        <button>Browse templates</button>
                    </div>
                </div>
            </div>
            <button ref={(el) => aboutRef.current[5] = el}>Buy template</button>
        </div>
    )
}

export default About
