import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const [bgColor, setBgColor] = useState('transparent');
    const [shadow, setShadow] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setBgColor('bg-white');
                setShadow('shadow');
            } else {
                setBgColor('bg-transparent');
                setShadow('');

            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg transition fixed-top py-3 navbar-light ${bgColor} ${shadow}`}>
            <div className={"container py-1"}>
                <a className={"navbar-brand"} href="#">{"</Latif>"}</a>
                <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className={"navbar-nav ms-auto"}>
                        {
                            props.data.map((item) => (
                                <li key={item.id} className={"nav-item mx-1"}>
                                    <a className={`nav-link text-uppercase text-secondary fs-1 ${styles.link}`} href="#">{item.title} </a>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;