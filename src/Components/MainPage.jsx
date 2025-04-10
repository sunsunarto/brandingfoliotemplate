import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../componentsStyles/MainPage.css"

gsap.registerPlugin(ScrollTrigger);

function MainPage (){
    const mainRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(".MainPageText", {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".MainPageText",
                start: "top 100%",           
            },
        });
    }, []);

    useEffect(() => {
    mainRef.current.forEach((el, index) => {
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
    }, []);
    return(
        <div className="mainPage">
            <div className="MainPageText">
                <h1>Main Pages</h1>
                <p>Take a look at the main pages included in the Brandingfolio X Template.</p>
            </div>
            <div className="mainContent" >
                <div className="content index1" ref={(el) => mainRef.current[0] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Home V1</p>
                </div>
                <div className="content index2" ref={(el) => mainRef.current[1] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f59_brandingfolio-x-home-v2-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Home V2</p>
                </div>
                <div className="content index3" ref={(el) => mainRef.current[2] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5b_brandingfolio-x-home-v3-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Home V3</p>
                </div>
                <div className="content index4" ref={(el) => mainRef.current[3] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f53_brandingfolio-x-about-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>About</p>
                </div>
                <div className="content index5" ref={(el) => mainRef.current[4] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f6f_brandingfolio-x-blog-v1-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Blog V1</p>
                </div>
                <div className="content index6" ref={(el) => mainRef.current[5] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f56_brandingfolio-x-blog-v2-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Blog V2</p>
                </div>
                <div className="content index7" ref={(el) => mainRef.current[6] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f54_brandingfolio-x-blog-v3-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>BLOG V3</p>
                </div>
                <div className="content index8" ref={(el) => mainRef.current[7] = el}>
                    <div className="elements">
                        <button>CMS</button>
                        <div className="img">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f51_brandingfolio-x-blog-posts-main-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    </div>
                    <p>Blog post</p>
                </div>
                <div className="content index9" ref={(el) => mainRef.current[8] = el}>
                <div className="elements">
                    <button>CMS</button>
                    <div className="img">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f52_brandingfolio-x-blog-category-main-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    </div>
                    <p>Blog category</p>
                </div>
                <div className="content index10" ref={(el) => mainRef.current[9] = el}>
                <div className="elements">
                    <button>CMS</button>
                    <div className="img">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f70_brandingfolio-x-team-member-main-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    </div>
                    <p>Team member</p>
                </div>
                <div className="content index11" ref={(el) => mainRef.current[10] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f6e_brandingfolio-x-portfolio-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Portfolio</p>
                </div>
                <div className="content index12" ref={(el) => mainRef.current[11] = el}>
                <div className="elements">
                    <button>CMS</button>
                    <div className="img">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5c_brandingfolio-x-portfolio-single-main-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    </div>
                    <p>Potfoilo single</p>
                </div>
                <div className="content index13" ref={(el) => mainRef.current[13] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5d_brandingfolio-x-packages-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Packages</p>
                </div>
                <div className="content index14" ref={(el) => mainRef.current[12] = el}>
                <div className="elements">
                    <button>CMS</button>
                    <div className="img">
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5e_brandingfolio-x-packages-single-main-page-branding-agency-webflow-template.png" alt="" />
                    </div>
                    </div>
                    <p>Packages single</p>
                </div>
                <div className="content index15" ref={(el) => mainRef.current[14] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f57_brandingfolio-x-contact-v1-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Contract V1</p>
                </div>
                <div className="content index16" ref={(el) => mainRef.current[15] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f55_brandingfolio-x-contact-v2-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Contact V2</p>
                </div>
                <div className="content index17" ref={(el) => mainRef.current[16] = el}>
                    <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f58_brandingfolio-x-contact-v3-main-page-branding-agency-webflow-template.png" alt="" />
                    <p>Contact V3</p>
                </div>
            </div>
            <button ref={(el) => mainRef.current[17] = el}>Buy templete</button>
        </div>
    )
}

export default MainPage