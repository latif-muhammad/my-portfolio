import styles from "./SkillCard.module.css";
const SkillCard = (props) => {
    return (
            <div class={`${styles.skillCard} shadow-sm transition bg-light position-relative rounded`} >
                <div class="d-flex align-items-center">
                    <div class={`${styles.iconBox} text-center me-4  px-2 py-2` }>
                        <i class={`${props.icon} colored px-2 py-3 fs-1`}></i>
                    </div>
                    <div class="content">
                        <h6 class="title mb-0 fs-5 text-capitalize">{props.children}</h6>
                    </div>
                </div>
            </div>
    )
}


export default SkillCard