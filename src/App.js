import './App.css';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav natItems = {["home", "about", "skills", "experience", "education", "contact"]} ></Nav>
    </div>
  );
}

export default App;
