import styles from "./SkillCard.module.css";
const SkillCard = (props) => {
    return (
            <div className={`${styles.skillCard} shadow-sm transition bg-light position-relative rounded`} >
                <div className="d-flex align-items-center">
                    <div className={`${styles.iconBox} text-center me-4  px-2 py-2` }>
                        <i className={`${props.icon} colored px-2 py-3 fs-1`}></i>
                    </div>
                    <div className="content">
                        <h6 className="title mb-0 fs-5 text-capitalize">{props.children}</h6>
                    </div>
                </div>
            </div>
    )
}


export default SkillCard