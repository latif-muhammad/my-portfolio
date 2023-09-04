import styles from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={`card ${styles.cardBackground} ${styles.borderRadius}`} >
            <div className={`${styles.overlayContainer}`}>
                <div className= { "card-body" }>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Card;
