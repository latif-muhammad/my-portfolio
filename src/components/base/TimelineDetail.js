import styles from "./TimelineDetail.module.css";

const TimeLineDetail = (props) => {
    return (
        <div>
            <div key={props.data.id} className={`timeline-details position-relative 
        offset-0  col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-3 ${props.data.id % 2 === 0 ? "offset-md-6" : ""}`}>
                <div className={`${styles.dot} position-absolute`} style={props.data.id % 2 === 0 ? { left: -8 } : { right: -8 }}>
                    <div className="bg-dark"></div>
                </div>

                <div className="d-flex justify-content-start align-items-baseline">
                    <h4 className="mb-2 pe-3" style={{ color : 'var(--primary)'}}>{props.data.title}</h4>
                    <span className="mb-0 align-bottom" >{props.data.year}</span>
                </div>
                {/* <P>ROLE</P> */}
                <hr style={{ width: "5rem", height: "0.09rem" }} className="mt-0 mb-3 p-0" />

                <p className="text-start">{props.data.detail}</p>
            </div>
        </div>
    );
}

export default TimeLineDetail;