import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <form>
          <lable>
          Name : <input type="text"></input><br></br>
          Reg no : <input type="text"></input><br></br>
          Email Id : <input type="text"></input>
           <button onClick="submit">submit</button>
        </lable>
        </form>
    </div>
  );
}

export default App;