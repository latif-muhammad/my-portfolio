import styles from "../base/projectCard.module.css"
const ProjectCard = (props) => {
    const redirect = () => {
        return window.location.href = props.link;
    }
    return (
        <div onClick={redirect} class={`item-box projects rounded transition bg-white overflow-hidden ${styles.projects}`}>
            <div class="body" >
                <div style={{ height: '27rem' }}>
                    <img class="item-container img-fluid mx-auto" src={require(`../../assets/projects_images/${props.image}`)} alt="1" height={'25rem'} width={'100%'} />
                </div>
                <div class="text-center">
                    <i data-feather="camera" class="fea icon-sm image-icon"></i>
                </div>
            </div>
            <div class="py-4 text-center">
                <h5 className="text-dark text-uppercase"> {props.title} </h5>
            </div>
        </div>
    );
}


export default ProjectCard;