import styles from "../core/projectCard.module.css"
const ProjectCard = (props) => {
    const redirect = () => {
        return window.location.href = props.link;
    }
    return (
        <div onClick={redirect} className={`item-box projects rounded transition bg-white overflow-hidden ${styles.projects}`}>
            <div className="body" >
                <div style={{ height: '27rem' }}>
                    <img className="item-container img-fluid mx-auto" src={require(`../../assets/projects_images/${props.image}`)} alt="1" height={'25rem'} width={'100%'} />
                </div>
                <div className="text-center">
                    <i data-feather="camera" className="fea icon-sm image-icon"></i>
                </div>
            </div>
            <div className="py-4 text-center">
                <h5 className="text-dark text-uppercase"> {props.title} </h5>
            </div>
        </div>
    );
}


export default ProjectCard;