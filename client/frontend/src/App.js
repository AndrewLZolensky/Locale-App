import axios from 'axios';
import './App.css';
import SignIn from './SignIn.js'

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
    })
}

/*
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make Api Call</button>
      </header>
    </div>
*/
function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
