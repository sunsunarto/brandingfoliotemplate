import {use, useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../componentsStyles/Opening.css";

gsap.registerPlugin(ScrollTrigger);

function Opening() {
    const group1Ref = useRef(null);
    const group2Ref = useRef(null);

    useEffect(() => {//text
        gsap.fromTo(".text", {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".opening",
                start: "top center",
                end: "bottom center",
            },
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(".groupPic", {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".groupPic",
                start: "top center",
                end: "bottom center",
            },
        })
    }, []);

    useEffect(() => {
        const group1 = group1Ref.current;
        const group2 = group2Ref.current;

        if (window.innerWidth <= 768) {
            gsap.fromTo(group1, { x: 0, y: 0 }, { 
                x: -100, y: -100, 
                scrollTrigger: { trigger: group1, start: "top center", end: "bottom center", scrub: true}
            });

            gsap.fromTo(group2, { x: 0, y: 0 }, { 
                x: 100, y: 100, 
                scrollTrigger: { trigger: group2, start: "top center", end: "bottom center", scrub: true }
            });
        } else {
            gsap.fromTo(group1, { y: 0 }, { 
                y: -200, scrollTrigger: { trigger: group1, start: "top center", end: "bottom center", scrub: true }
            });

            gsap.fromTo(group2, { y: -300 }, { 
                y: 0, scrollTrigger: { trigger: group2, start: "top center", end: "bottom center", scrub: true }
            });
        }
    }, []);
    
    return (
        <div className="openingCon">
            <div className="opening">
                <div className="text">
                    <h1>Brandingfolio X <br/>Webflow Template</h1>
                    <p>Presenting Brandingfolio X, the ultimate Branding<br/>Agency Webflow Template.</p>
                    <div className="buttons">
                        <button>Buy template</button>
                        <button>Explore Pages</button>
                    </div>
                </div>
                <div className="groupPic">
                    <div className="group1" ref={group1Ref}>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f37_brandingfolio-x-about-page-branding-agency-webflow-template.png" alt="" />
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc6_brandingfolio-x-home-v1-page-branding-agency-webflow-template.png" alt="" />
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3b_brandingfolio-x-blog-posts-page-branding-agency-webflow-template.png" alt="" />
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    <div className="group2" ref={group2Ref}>
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3a_brandingfolio-x-packages-page-branding-agency-webflow-template.png" alt="" />
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png" alt="" />
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f38_brandingfolio-x-team-member-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opening;

