import styles from "../core/Social_button.module.css"
const SocialButton = (props) => {
    return (

        <div className= {`${styles.SocialButton} "me-4" `}>
            <button className= {`${styles.SocialButton}`}><i className={`${props.icon}`}></i></button>
        </div>
    );
}

export default SocialButton;