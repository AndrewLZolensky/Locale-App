import axios from 'axios';
import './App.css';
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Forum from './Forum'


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
    })
}


function App() {
  return (
    <div className="App" style={{ margin:'auto auto', height:'100vh'}}>
      <Forum/>
    </div>
  );
}

export default App;
