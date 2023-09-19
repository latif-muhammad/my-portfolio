import Navbar from '../components/core/Navbar';
import * as data from "../utilities/data";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
    return (
        <div>
            <section className={`header ${styles.header}`}>
                <div className="overlay">
                    <Navbar data = {data.navData}></Navbar>
                    <div class="intro text-white vh-100 d-flex container align-items-center justify-content-center flex-column">
                        <h1 class="mb-4 fw-bold">I am Muhammad Latif</h1>
                        <h3 class="fw-bold ">WEB /Mobile App developer</h3>
                    </div>
                </div>
            </section>
            <section className="about"></section>
            <section className="timelineSection"></section>
            <section className="projects"></section>
            <section className="contactSections"></section>

        </div>
    )
}
export default HomeScreen;