import TimeLineDetail from "../base/TimelineDetail";
import styles from "./Timeline.module.css";
const TimeLine = (props) => {
    return (
        <div id="timeline">

            <div className={`row container ${styles.separator} `}>
                <div className="col-12 d-flex justify-content-start justify-content-md-center ">
                    <div className="border border-3 border-top-0 border-bottom-0 border-end-0"></div>
                </div>
            </div>
            <div className="row body">
                {
                    props.timelineData.map((data) => (
                        <TimeLineDetail key={data.id} data={data}></TimeLineDetail>))
                }
            </div>

        </div>
    );
}
export default TimeLine;