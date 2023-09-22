import Navbar from '../components/core/Navbar';
import styles from "./HomeScreen.module.css";
import Timeline from '../components/core/Timeline';
import * as data from "../utilities/data";

const HomeScreen = () => {
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
                        <img src={require ('../assets/ab-img.png')} className="pt-5 mt-5" alt="Not Found" height="auto" width="100%" />
                    </div>
                    <div className="col-md-5">
                        <div className="mb-4 about-me">
                            <div className="title mb-3">
                                <h2 className="mb-2">ABOUT</h2>
                                <hr className="m-0" />
                            </div>
                            <p>Hello! Iam Muhammad Latif, Currently a student at IBA Karachi and passionate about exploring the fascinating world of AI and development. With expertise in Flutter, React, React Native, and Python, I enjoy building innovative solutions and pushing the boundaries of technology. Let's explore my creative journey together!</p>
                        </div>

                        <div class="tech-skills">
                            <div class="title mb-4">
                                <h4>Technical Skills</h4>
                                <hr class="m-0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-margin timelineSection">
                <Timeline timelineData={data.timelineData}></Timeline>
            </section>
            <section className="projects"></section>
            <section className="contactSections"></section>

        </div>
    )
}
export default HomeScreen;