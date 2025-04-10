import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../componentsStyles/UtilityPages.css"

gsap.registerPlugin(ScrollTrigger);

function UtilityPages() {

    const UtilityRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(".utilityText", {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".utilityText",
                start: "top 100%",           
            },
        });
    }, []);

    useEffect(() => {
        UtilityRef.current.forEach((el, index) => {
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
            gsap.to(el, {
                scale: 0.8,
                duration: 0.5,
                ease: "power3.out",
                paused: true,
            });
            el.addEventListener("mouseover", () => {
                gsap.to(el, {
                    scale: 0.8,
                    duration: 0.5,
                    ease: "power3.out",
                });
            });
            el.addEventListener("mouseout", () => {
                gsap.to(el, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power3.out",
                });
            });
          });
    })
    return (
        <div className="utilityPagesCon">
            <div className="utilityText">
            <h1>Utility Pages</h1>
            <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
            </div>
            <div className="errorPages">
                <div className="content index1" ref={(el) => UtilityRef.current[0] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f72_brandingfolio-x-404-not-found-utility-page-branding-agency-webflow-template.png" alt="" />
                    <p>404 Not found</p>
                </div>
                <div className="content index2" ref={(el) => UtilityRef.current[1] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f71_brandingfolio-x-password-protected-utility-page-branding-agency-webflow-template.png" alt="" />
                    <p>Password proctected</p>
                </div>
            </div>
            <button ref={(el) => UtilityRef.current[2] = el}>Buy template</button>
        </div>
    )
}

export default UtilityPages