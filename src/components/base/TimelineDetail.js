import styles from "./TimelineDetail.module.css";

const TimeLineDetail = (props) => {
    return (
        <div key={props.data.id} className={`timeline-details position-relative 
        offset-0  col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-3 ${props.data.id % 2 === 0 ? "offset-md-6" : ""}`}>
            <div className={`${styles.dot} position-absolute`} style={props.data.id % 2 === 0 ? { left: -9 } : { right: -9 }}>
                <div className="bg-dark"></div>
            </div>
            <div className="d-flex justify-content-start align-items-baseline">
                <h5 className="mb-2 pe-3">{props.data.title}</h5>
                <span className="mb-0 align-bottom" >{props.data.year}</span>
            </div>
            <hr style={{ width: "10%", height: "0.05rem" }} class="mt-0 mb-3 p-0" />
            <p className="text-start">{props.data.detail}</p>
        </div>
    );
}

export default TimeLineDetail;