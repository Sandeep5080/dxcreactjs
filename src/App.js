import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';




function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    <Greet name = "sandeep" college = "IIT"/>
    <p>this is children property</p>
    <Greet/>
    <Greet name = "Reddy" college = "Bharath"/>

    <Welcome/>
    </div>
  );
}
export default App;
