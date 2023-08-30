import './App.css';
import Card from './components/base_components/Card';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Card> 
        <h1>this is inside the card</h1>
      </Card>
    </div>
  );
}

export default App;
