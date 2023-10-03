import styles from "../core/SocialButton.module.css"
const SocialButton = (props) => {
    const redirect = () => {
        return window.location.href = props.link;
    }
    return (

        <div className= {`${styles.SocialButton} me-2`}>
            <button onClick={ redirect } className= {`${styles.SocialButton} transition`}><i className={`${props.icon} ${styles.icon}`}></i></button>
        </div>
    );
}

export default SocialButton;