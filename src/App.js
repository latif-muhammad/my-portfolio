import './App.css';
import Card from './components/base/Card';
import Navbar from './components/core/Navbar';
import Timeline from './components/core/Timeline';
import * as data from "./utilities/data";
import SocialButton from "./components/core/SocialButton";
import ContactForm from './components/UI/ContactForm';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container d-flex justify-content-around">

        <Card>
          <h1>this is inside the card</h1>
          <p>this is not the world we had in mind but we got time. </p>

          <p>this is not the world we had in mind but we got time. </p>

        </Card>
      </div>

      <Timeline timelineData={data.timelineData}></Timeline>


      <SocialButton icon = "fa fa-facebook"></SocialButton>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
