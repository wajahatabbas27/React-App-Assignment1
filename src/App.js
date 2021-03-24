import './App.css';
import Hello from './Hello.js';
import Navbar from "@bit/wajahataz110.firstpracticebit.navbar";

function App(props) {
  return (
    <div>
      <strong>HEllo Wajahat Abbas</strong>
      <br />
      <p>There are 5 subjects in {props.name}</p>
      <ol>
        <li>Maths</li>
        <li>Sst</li>
        <li>Science</li>
        <li>English</li>
        <li>Urdu</li>
      </ol>
      <Hello name="SWAZ"></Hello>
      <Navbar />

    </div>
  );
}

export default App;
