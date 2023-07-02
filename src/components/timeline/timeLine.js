import './timeline.css';
const TimeLine = () =>{
    return(
        <section id="timeline" class="container section-margin position-relative">
        <div class="title mb-5">
        <h2 class="text-center mb-3">TimeLine</h2>
        <hr style="width: 6%;" class="text-center mx-auto m-0"></hr>
        </div>

        <div class="row seperator container">
        <div class="col-12 d-flex justify-content-start justify-content-md-center ">
            <div class="border border-top-0 border-bottom-0 border-end-0"></div>
        </div>
        </div>

        <div class="row body">
        <div class="timeline-details position-relative offset-0 offset-md-6 col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-3">
            <div style="left: -0.6rem;" class="dot position-absolute">
            <div class="bg-light"></div>
            </div>
            <div class="d-flex justify-content-start align-items-baseline">
            <h5 class="mb-2 pe-3">IBA, Karchi</h5>
            <span class="mb-0 align-bottom text-white-50" style="font-size: 0.9rem;">2020 - 2025</span>
            </div>
            <hr style="width: 10%; height: 0.05rem" class="mt-0 mb-3 p-0"></hr>
            <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex quibusdam
            exercitationem consequatur
            odio
            facilis odit eaque. Voluptates quaerat voluptatum, impedit, officiis eveniet ipsam perspiciatis
            suscipit,
            facere aliquam quisquam obcaecati.</p>
        </div>

        <div class="timeline-details position-relative col-12 col-md-6 ps-5 ps-md-0 pe-5 mb-3">
            <div style="right: -0.6rem;" class="dot position-absolute">
            <div class="bg-light"></div>
            </div>
            <div class="d-flex justify-content-start justify-content-md-end align-items-baseline">
            <h5 class="mb-2 pe-3">uConnect Technologies</h5>
            <span class="mb-0 align-bottom text-white-50" style="font-size: 0.9rem;">2020 - 2025</span>
            </div>
            <div class="sep width-100 m-auto d-flex justify-content-start justify-content-md-end">
            <hr style="width: 10%; height: 0.08rem" class="mt-0 text-end mb-3 p-0"></hr>
            </div>
            <p class="text-md-end">After College during my gap year, I interned at uConnect Technologies as a Flutter developer. </p>
        </div>

        {/* <div class="timeline-details position-relative offset-0 offset-md-6 col-12 col-md-6 ps-5 pb-0 pb-md-5 mb-3">
            <div style="left: -0.6rem;" class="dot position-absolute">
            <div class="bg-light"></div>
            </div>
            <div class="d-flex justify-content-start align-items-baseline">
            <h5 class="mb-2 pe-3">AKHSS, Gilgit</h5>
            <span class="mb-0 align-bottom text-white-50" style="font-size: 0.9rem;">2020 - 2025</span>
            </div>
            <hr style="width: 10%; height: 0.05rem" class="mt-0 mb-3 p-0"></hr>
            <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex quibusdam
            exercitationem consequatur
            odio
            facilis odit eaque. Voluptates quaerat voluptatum, impedit, officiis eveniet ipsam perspiciatis
            suscipit,
            facere aliquam quisquam obcaecati.</p>
        </div> */}
{/* 
        <div class="timeline-details position-relative col-12 col-md-6 ps-5 ps-md-0 pe-5 mb-3">
            <div style="right: -0.6rem;" class="dot position-absolute">
            <div class="bg-light"></div>
            </div>
            <div class="d-flex justify-content-start justify-content-md-end align-items-baseline">
            <h5 class="mb-2 pe-3">First line of code</h5>
            <span class="mb-0 align-bottom text-white-50" style="font-size: 0.9rem;">2020 - 2025</span>
            </div>
            <div class="sep width-100 m-auto d-flex justify-content-start justify-content-md-end">
            <hr style="width: 10%; height: 0.07rem" class="mt-0 text-end mb-3 p-0"></hr>
            </div>
            <p class="text-md-end">I wrote my first line code when I was 16, this started my journey into digital
            craftsmanship that I never could've imagined. Even thought it was just a print statment but it created a
            spark, which would later light up the path for me.</p>
        </div> */}
        </div>

    </section>
    )
} 
export default TimeLine;
