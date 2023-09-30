import styles from "../core/SocialButton.module.css"
const SocialButton = (props) => {
    return (

        <div className= {`${styles.SocialButton} me-2`}>
            <button className= {`${styles.SocialButton} transition`}><i className={`${props.icon} ${styles.icon}`}></i></button>
        </div>
    );
}

export default SocialButton;