import styles  from "./Timeline.module.css";
const TimeLine = (props) => {
    return (
        <section id="timeline" class="container section-margin position-relative">
            <div class="title mb-5">
                <h2 class="text-center mb-3">TimeLine</h2>
                {/* <hr style="width: 6%;" class="text-center mx-auto m-0" /> */}
            </div>

            <div className = {`row container ${styles.separator} `}>
                <div class="col-12 d-flex justify-content-start justify-content-md-center ">
                    <div class="border border-top-0 border-bottom-0 border-end-0"></div>
                </div>
            </div>

            <div class="row body">
                <div class="timeline-details position-relative offset-0 offset-md-6 col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-3">
                    <div className ={`${styles.dot} position-absolute`}>
                        <div class="bg-dark"></div>
                    </div>
                    <div class="d-flex justify-content-start align-items-baseline">
                        <h5 class="mb-2 pe-3">IBA, Karchi</h5>
                        <span class="mb-0 align-bottom text-white-50" >2020 - 2025</span>
                    </div>
                    {/* <hr style="width: 10%; height: 0.05rem" class="mt-0 mb-3 p-0" /> */}
                        <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex quibusdam
                            exercitationem consequatur
                            odio
                            facilis odit eaque. Voluptates quaerat voluptatum, impedit, officiis eveniet ipsam perspiciatis
                            suscipit,
                            facere aliquam quisquam obcaecati.</p>
                </div>





            </div>

        </section>
    );
}
export default TimeLine;