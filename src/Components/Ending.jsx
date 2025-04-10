import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../componentsStyles/Ending.css"

gsap.registerPlugin(ScrollTrigger);

function Ending() {

    useEffect(() => {
        gsap.fromTo(".mainEndingCon", {
            opacity: 0,
            y: 200
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".mainEndingCon",
                start: "top 100%",           
            },
        });
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll(".buyContent, .templates");
        elements.forEach(el => {
            gsap.to(el, {
                scale: 0.8,
                duration: 0.5,
                ease: "power3.out",
                paused: true,
            });

            el.addEventListener("mouseover", () => {
                gsap.to(el, {
                    scale: 0.9,
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
    }, []);

    return (
        <div className="mainEndingCon">
            <div className="buyContent context">
                <img className="logo" src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e8c_webflow-logo-brix-blocks.svg" alt="" />
                <h1>Buy now on Webflow</h1>
                <p>Get the Brandingfolio X webflow Template today, and take your website disign to the next level.</p>
                <button>Buy template</button>
                <img className="banner" src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc5_brandingfolio-x-brandingfolio-banner-branding-agency-webflow-template.png" alt="" />
            </div>
            <div className="templates context">
                <img className="logo" src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e4d_brix-templates-icon-square-brix-templates.png" alt="" />
                <h1>Browse all templates</h1>
                <p>looking for more templates? Browse our collection of 100+ webflow templates on BRIXTTemplates.com</p>
                <button>View templates</button>
                <img className="banner" src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f4f_brandingfolio-x-brix-included-branding-agency-webflow-template.png" alt="" />
            </div>
        </div>
    )
}

export default Ending