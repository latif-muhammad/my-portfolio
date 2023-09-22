import { useEffect, useState } from "react";

const Navbar = (props) => {
    const [bgColor, setBgColor] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setBgColor('bg-dark'); 
            } else {
                setBgColor('bg-transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg  fixed-top navbar-dark py-3 ${bgColor}`}>
            <div className={"container"}>
                <a className={"navbar-brand"} href="#">Navbar</a>
                <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className={"navbar-nav ms-auto"}>
                        {
                            props.data.map((item) => (
                                <li key={item.id} className={"nav-item"}>
                                    <a className={"nav-link"} href="#">{item.title} </a>
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