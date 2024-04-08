
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';
export default function FooterComponent() {
  return (
    <footer className="pt-4 md:text-center md:pt-3 text-md-left bg-blue-800">
        <div className="container">
            <div className="flex justify-around md:justify-content-center">
                <div className="col-12 col-md-3">
                    <img src="https://istad.co/resources/img/logo_md.png" alt="CSTAD - Advanced IT Center in Cambodia" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
                    <p className="mt-3 text-white md:text-center">Start your IT career with CSTAD</p>
                </div>
                <div className="col-12 col-md-3">
                    <p className="text-white font-bold">Learn More</p>
                    <ul className="footer-ul">
                        <li><a href="/page/course" className="text-white">Course</a></li>
                        <li><a href="/page/content" className="text-white">IT News</a></li>
                        <li><a href="/page/job-opportunity" className="text-white">Job Opportunity</a></li>
                        <li><a href="/page/privacy-policy" className="text-white">Privacy Policy</a></li>
                        <li><a href="/page/faq" className="text-white">FAQ</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-3">
                    <p className="text-white font-bold">Contact Us</p>
                    <ul className="footer-ul">
                        <li>(+855) 95-990-910</li>
                        <li>(+855) 93-990-910</li>
                        <br />
                        <li><a href="https://t.me/istadkh" target="_blank" className="text-white"><i className="fab fa-telegram i-style pr-1"></i>Telegram</a></li>
                        <li><a href="https://www.youtube.com/channel/UCUaq9S8Gu4zteE-x77JT-kA" target="_blank" className="text-white"><i className="fab fa-youtube i-style pr-1"></i>Youtube</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <p className="text-white font-bold">Follow Us</p>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&amp;tabs&amp;width=255&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=536767018150991" width="255" height="130" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>

            </div>
            <hr className="border-white opacity-50" />
            <p className="text-white mt-4">
                © 2024 Center of Science and Technology Advanced Development | All Rights Reserved
            </p>
        </div>
    </footer>
);
}
