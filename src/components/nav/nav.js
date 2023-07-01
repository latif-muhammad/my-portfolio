import './nav.css';
const Nav = (props) => {
    return(
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-transparent fixed-top shadow-sm transition">
        <div class="container">
          <a class="navbar-brand fw-bolder fs-3" href="#">Latif</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul class="navbar-nav mb-2 mb-lg-0">
            {props.natItems.map((item, index) => (
              <li class="nav-item mx-1" >
                <a class="nav-link nav-item-cus text-white" aria-current="page" href="#df" key={index}> {item.toUpperCase()}</a>
            </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
