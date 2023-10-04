import styles from "./TimelineDetail.module.css";

const TimeLineDetail = (props) => {
    return (
        <div>
            <div key={props.data.id} className={`timeline-details position-relative 
        offset-0  col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-5 mb-md-0 ${props.data.id % 2 === 0 ? "offset-md-6" : "pe-5"}`}>
                <div className={`${styles.dot} position-absolute`} style={props.data.id % 2 === 0 ? { left: -10 } : { right: -10 }}>
                    <div className="bg-dark"></div>
                </div>

                <div className="d-flex justify-content-start align-items-baseline">
                    <h3 className="mb-2 pe-3" style={{ color: 'var(--primary)' }}>{props.data.title}</h3>
                    <span  className = "d-none d-md-block"><h5 className="me-2">{props.data.role}</h5></span>
                    <span className="mb-0 align-bottom" >{props.data.year}</span>
                </div>
                <hr style={{ width: "5rem", height: "0.09rem" }} className="mt-0 mb-3 p-0" />
                <p className="text-start">{props.data.detail}</p>
            </div>
        </div>
    );
}

export default TimeLineDetail;