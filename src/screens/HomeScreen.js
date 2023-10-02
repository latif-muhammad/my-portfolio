import Navbar from '../components/core/Navbar';
import Timeline from '../components/core/Timeline';
import * as data from "../utilities/data";
import ContactForm from "../components/UI/ContactForm";
import SocialButton from "../components/core/SocialButton";
import ProjectsCard from "../components/base/ProjectsCard"
import SkillCard from '../components/core/SkillCard';

const HomeScreen = () => {
    const icons = ["fa fa-facebook", "fa fa-twitter", "fa fa-linkedin", "fa fa-github"];
    return (
        <div>
            <section className={`section-margin header bg-light`}>
                <Navbar data={data.navData}></Navbar>
                <div className="container px-5">
                    <div className="row" style={{ height: '83vh' }}>
                        <div className="col-md col-sm-12 intro d-flex container center justify-content-center flex-column ">
                            <h5 class="sub-title fw-bold fs-2">Hello !</h5>
                            <h1 class="heading mb-3" style={{ color: 'var(--primary)' }}>I'm Muhammad Latif</h1>
                            <p class="para-desc text-muted fs-5">I'm a Flutter and React Developer. Experienced with all stages of the development cycle for dynamic projects.</p>
                        </div>
                        <div className="col-md display-sm-hidden intro text-white d-flex container center justify-content-center flex-column ">
                            <img src={require('../assets/ab-img.png')} className="pt-5 mt-5" alt="Not Found" height="auto" width="100%" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="About" className="container section-margin bg-white">
                <div className="row">
                    <div id="ab-img" className="d-none d-md-block col-md-5 me-5">
                        <img src={require('../assets/about.jpg')} alt="Not Found" height="auto" width="90%" />
                    </div>
                    <div className="col-md-5">
                        <div className="mb-4 pt-5 about-me">
                            <div className="title mb-3">
                                <h2 className="mb-2">ABOUT</h2>
                                <hr className="m-0" />
                            </div>
                            <p className="mb-5">Hello! Iam Muhammad Latif, Currently a student at IBA Karachi and passionate about exploring the fascinating world of AI and development. With expertise in Flutter, React, React Native, and Python, I enjoy building innovative solutions and pushing the boundaries of technology. Let's explore my creative journey together!</p>

                            <div className="flex">
                                <button onClick={() => { window.location.href = 'https://github.com/latif-muhammad' }} className="btn btn-outline-danger px-3 py-2 me-3">Download CV</button>
                                <button onClick={() => { window.location.href = 'https://github.com/latif-muhammad' }} className="btn btn-danger px-3 py-2">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-margin timelineSection bg-light section-top-padding">
                <div id="timeline" className="container section-margin position-relative">
                    <div className="title mb-5 pb-3">
                        <h2 className="text-center mb-2">TimeLine</h2>
                        <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                    </div>
                    <Timeline timelineData={data.timelineData}></Timeline>
                </div>
            </section>

            <section id="skills">
                <div id="timeline" className="container section-margin">
                    <div className="title mb-2 pb-3">
                        <h2 className="text-center mb-2">What I Know</h2>
                        <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                    </div>
                    <div className="row">
                        {
                            data.skills.map((skill)=> (
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                                <SkillCard icon = {skill.icon} >{skill.name}</SkillCard>
                            </div> 
                            ))
                        }                        
                    </div>
                </div>
            </section>


            <section className="projects container section-margin">
                <div className="title mb-5 pb-3">
                    <h2 className="text-center mb-2">PROJECTS</h2>
                    <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                </div>
                <div className="row mb-5">
                    {
                        data.projects.map((data) => (
                            <div key={data.id} class="col-lg-4 col-md-3 mt-4 picture-item" data-groups='["photography"]'>
                                <ProjectsCard title={data.name} ></ProjectsCard>
                            </div>
                        ))
                    }

                </div>

                <div className="d-flex justify-content-center ">
                    <button onClick={() => { window.location.href = 'https://github.com/latif-muhammad' }} className="btn btn-outline-danger px-3 py-2">View Work</button>


                </div>
            </section>

            <section className="contactSections bg-dark text-light section-top-padding">
                <div className="container mb-4">
                    <div className="row">

                        <div className="title mb-0 mb-md-5">
                            <h2 className="text-center mb-">CONTACT ME</h2>
                            <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                        </div>

                        <div className="col-12 col-md-6 pt-3 m-md-0 m-5">

                            <div className="info-details mb-5">
                                <div className="address d-flex mb-4">
                                    <i className="fa fa-map-marker align-bottom fs-3 me-4"></i>
                                    <span>
                                        <h5>Address</h5>
                                        <p className="mb-3">Gulshan e Iqbal, IBA Boys Hostel Karachi</p>
                                    </span>
                                </div>
                                <div className="address d-flex">
                                    <i className="fa fa-phone align-bottom fs-3 me-4"></i>
                                    <span>
                                        <h5>Phone Number</h5>
                                        <p>+923169306176</p>
                                    </span>
                                </div>
                            </div>


                            <div className="title mb-5">
                                <h5 className="mb-2">You can contact me on</h5>
                                <hr style={{ width: '10%' }} className="m-0" />
                            </div>
                            <div className="social-links d-flex">
                                {
                                    icons.map((icon) => {
                                        var key = icons.indexOf(icon);
                                        return <SocialButton key={key} icon={icon}></SocialButton>
                                    })
                                }
                            </div>
                        </div>


                        <div className="title mb-5 mt-2 d-md-none">
                            <h2 className="text-center mb-3">Contact From</h2>
                            <hr style={{ width: "6%" }} className="text-center mx-auto m-0" />
                        </div>
                        <div className="col-12 col-md-6 mb-5">
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ backgroundColor: 'var(--bs-gray-dark)' }}>
                    <p className='m-0 p-2'>Made by .....</p>
                </div>
            </section>

        </div>
    )
}
export default HomeScreen;