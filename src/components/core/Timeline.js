import TimeLineDetail from "../base/TimelineDetail";
import styles from "./Timeline.module.css";
const TimeLine = (props) => {
    return (
        <section id="timeline" className="container section-margin position-relative">
            <div className="title mb-5">
                <h2 className="text-center mb-3">TimeLine</h2>
                <hr style={{ width: "6%" }} class="text-center mx-auto m-0" />
            </div>

            <div className={`row container ${styles.separator} `}>
                <div className="col-12 d-flex justify-content-start justify-content-md-center ">
                    <div className="border border-top-0 border-bottom-0 border-end-0"></div>
                </div>
            </div>
            <div className="row body">
                {
                    props.timelineData.map((data) => (
                        <TimeLineDetail data={data}></TimeLineDetail>))
                }
            </div>

        </section>
    );
}
export default TimeLine;