import Navbar from '../components/core/Navbar';
import styles from "./HomeScreen.module.css";
import Timeline from '../components/core/Timeline';
import * as data from "../utilities/data";
import ContactForm from "../components/UI/ContactForm";
import SocialButton from "../components/core/SocialButton";


const HomeScreen = () => {
    const icons = ["fa fa-facebook", "fa fa-twitter", "fa fa-linkedin", "fa fa-github"];
    return (
        <div>
            <section className={`section-margin header ${styles.header}`}>
                <div className="overlay">
                    <Navbar data={data.navData}></Navbar>
                    <div className="intro text-white vh-100 d-flex container align-items-center justify-content-center flex-column">
                        <h1 className="mb-4 fw-bold">I am Muhammad Latif</h1>
                        <h3 className="fw-bold ">WEB /Mobile App developer</h3>
                    </div>
                </div>
            </section>
            <section id="About" className="container section-margin">
                <div className="row">
                    <div id="ab-img" className="d-none d-md-block col-md-6 me-5">
                        <img src={require('../assets/ab-img.png')} className="pt-5 mt-5" alt="Not Found" height="auto" width="100%" />
                    </div>
                    <div className="col-md-5">
                        <div className="mb-4 about-me">
                            <div className="title mb-3">
                                <h2 className="mb-2">ABOUT</h2>
                                <hr className="m-0" />
                            </div>
                            <p>Hello! Iam Muhammad Latif, Currently a student at IBA Karachi and passionate about exploring the fascinating world of AI and development. With expertise in Flutter, React, React Native, and Python, I enjoy building innovative solutions and pushing the boundaries of technology. Let's explore my creative journey together!</p>
                        </div>

                        <div className="tech-skills">
                            <div className="title mb-4">
                                <h4>Technical Skills</h4>
                                <hr className="m-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-margin timelineSection">
                <Timeline timelineData={data.timelineData}></Timeline>
            </section>
            <section className="projects container section-margin"></section>

            <section className="contactSections container section-margin">
                <div className="row">
                    <div className="title mb-0 mb-md-5">
                        <h2 className="text-center mb-">Contact Me</h2>
                        <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                    </div>

                    <div className="col-12 col-md-6 pt-3 m-md-0 m-5">

                        <div className="info-details mb-5">
                            <div className="address d-flex mb-4">
                                <i className="fa fa-map-marker align-bottom fs-3 me-4"></i>
                                <span>
                                    <h5>Address</h5>
                                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </span>
                            </div>
                            <div className="address d-flex">
                                <i className="fa fa-phone align-bottom fs-3 me-4"></i>
                                <span>
                                    <h5>Phone Number</h5>
                                    <p>+928751496357</p>
                                </span>
                            </div>
                        </div>


                        <div className="title mb-5">
                            <h5 className="mb-2">You can also contact me on</h5>
                            <hr style={{ width: '10%' }} className="m-0" />
                        </div>
                        <div className="social-links d-flex">
                            {
                                icons.map((icon) => {
                                    var key = icons.indexOf(icon);
                                    return <SocialButton key={ key } icon={icon}></SocialButton>
                                })
                            }
                        </div>
                    </div>

                    <div className="title mb-5 mt-2 d-md-none">
                        <h2 className="text-center mb-3">Contact From</h2>
                        <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                    </div>


                    <div className="col-12 col-md-6">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HomeScreen;