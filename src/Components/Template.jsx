import { useEffect, useRef} from "react";
import gsap from "gsap";
import "../componentsStyles/Template.css"
function Template() {

    const tempateRef = useRef([]);
    const buttonRef = useRef([]);

    useEffect(() => {
        buttonRef.current.forEach((el, index) => {
            gsap.fromTo(el, 
              { opacity: 0, scale: 0.5, y: 50 },
              {
                opacity: 1, scale: 1, y: 0, duration: 1,
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
    useEffect(() => {
        gsap.fromTo(".templateText", {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".templateText",
                start: "top 100%",           
            },
        });
    }, []);

    useEffect(() => {
        tempateRef.current.forEach((el, index) => {
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

    return(
        <div className="templateCon">
            <div className="templateText">
            <h1>The Brandingfolio X Webflow<br/>Template also comes with<br/>more surprises...</h1>
            </div>
            <div className="templateContent">
                <div className="content index1" ref={(el) => tempateRef.current[0] = el}>
                    <div className="left">
                        <h1>3 Headers and Footers</h1>
                        <p>With a total of 3 different headers and footers, you<br/>can easily customize the Brandingfolio X Webflow<br/>Template to fit your company needs<br/>and requirements.</p>
                        <button ref={(el) => buttonRef.current[0] = el}>Buy template</button>
                    </div>
                    <div className="right">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f75_brandingfolio-x-3-headers-and-footers-branding-agency-webflow-template.png" alt="" />
                    </div>
                </div>
                <div className="content index2" ref={(el) => tempateRef.current[1] = el}>
                    <div className="left">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f73_brandingfolio-x-3-notification-bars-branding-agency-webflow-template.png" alt="" />
                    </div>
                    <div className="right">
                        <h1>3 Notification Bars</h1>
                        <p>If you are looking to get more sales, use one of our 3<br/>notification bars included in the Brandingfolio X<br/>Webflow Template, and start promoting your<br/>products or services.</p>
                        <button ref={(el) => buttonRef.current[1] = el}>Buy template</button>
                    </div>
                </div>
                <div className="content index3" ref={(el) => tempateRef.current[2] = el}>
                    <div className="left">
                        <h1>Custom Icon Set</h1>
                        <p>The Brandingfolio X Webflow Template includes 3<br/>sets of custom icons (rounded, square and filled), so<br/>you can easily use more icon fonts in your template.<br/><br/>No matter if you are looking to add another social<br/>media icon in the footer, or change the cart icon in<br/>the header, we got you covered.</p>
                        <div className="buttons">
                            <button ref={(el) => buttonRef.current[2] = el}>Buy template</button>
                            <button className="download" ref={(el) => buttonRef.current[3] = el}>download icon set</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f74_brandingfolio-x-custom-icon-set-branding-agency-webflow-template.png" alt="" />
                    </div>
                </div>
                <div className="content index4" ref={(el) => tempateRef.current[3] = el}>
                    <div className="left">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f77_brandingfolio-x-social-media-assets-branding-agency-webflow-template.png" alt="" />
                    </div>
                    <div className="right">
                        <h1>Social Media Assets</h1>
                        <p>Our Brandingfolio X Webflow Template Figma file<br/>includes a collection of social media covers that<br/>match with the Webflow Template design (for<br/>Facebook, Twitter and LinkedIn), so you can easily<br/>edit, customize, and use them for your own social<br/>media profiles.</p>
                        <button ref={(el) => buttonRef.current[4] = el}>Buy template</button>
                    </div>
                </div>
                <div className="content index5" ref={(el) => tempateRef.current[4] = el}>
                    <div className="left">
                        <h1>Email Signature</h1>
                        <p>Our Brandingfolio X Webflow Template Figma file<br/>includes 2 custom email signature templates that<br/>match with the Webflow template, and you can use<br/>them to impress your customers with an amazing<br/>email signature.</p>
                        <button ref={(el) => buttonRef.current[5] = el}>Buy template</button>
                    </div>
                    <div className="right">
                        <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f78_brandingfolio-x-email-signature-branding-agency-webflow-template.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;