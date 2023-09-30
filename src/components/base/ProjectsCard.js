import styles from "../base/projectCard.module.css"
const ProjectCard = (props) => {
    return (
        <div class={`item-box projects rounded transition bg-white overflow-hidden ${styles.projects}`}>
            <div class="project-img position-relative overflow-hidden d-flex" >
                <img class="item-container img-fluid mx-auto" src={require("../../assets/projects_images/Portfolio.jpg")} alt="1" height={'85%'} width={'85%'} />
                <div class="overlay-work">
                    <div class="work-content text-center">
                        <a href="#" class="lightbox text-light work-icon bg-dark d-inline-block rounded-pill "><i data-feather="camera" class="fea icon-sm image-icon"></i></a>
                    </div>
                </div>
            </div>
            <div class="gallary-title py-4 text-center">
                <h5 className=" text-dark text-uppercase">{ props.title } </h5>
                <span className="badge bg-info px-3 py-2">sad</span>
            </div>
        </div>
    );
}


export default ProjectCard;