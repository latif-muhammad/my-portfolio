import './App.css';
import Nav from './components/nav/nav';
import TimeLine from './components/timeline/timeLine';


function App() {
  return (
    <div className="App">
      <Nav natItems = {["home", "about", "skills", "experience", "education", "contact"]} ></Nav>
      <section id="timeline" class="container section-margin position-relative">
      <div class="title mb-5">
        <h2 class="text-center mb-3">TimeLine</h2>
      </div>
      <TimeLine natItems = {["home", "about", "skills", "experience", "education", "contact"]}></TimeLine>
    </section>
    </div>
  );
}

export default App;
