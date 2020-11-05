import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App(props) {
  return (
    <div>
      <strong>HEllo Wajahat Abbas</strong>
      <br/>
      <p>There are 5 subjects in {props.name}</p>
      <ol>
        <li>Maths</li>
        <li>Sst</li>
        <li>Science</li>
        <li>English</li>
        <li>Urdu</li>
      </ol>
      <Hello name="SWAZ"></Hello>
    </div>
  );
}

export default App;
