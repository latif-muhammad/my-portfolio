import './App.css';
import Card from './components/base_components/Card';
import Navbar from './components/Navbar';



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

        <Card>
          <h1>this is inside the card</h1>
          <p>this is not the world we had in mind but we got time. </p>

          <p>this is not the world we had in mind but we got time. </p>
          
        </Card>
        <Card>
          <h1>this is inside the card</h1>
          <p>this is not the world we had in mind but we got time. </p>

          <p>this is not the world we had in mind but we got time. </p>
          
        </Card>
      </div>
    </div>
  );
}

export default App;
