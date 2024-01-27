import axios from 'axios';
import './App.css';
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Forum from './Forum'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
    })
}


function App() {
  return (
    <div className="App" style={{ margin: 'auto auto', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ThemeProvider theme={theme}>
        <div style={{backgroundColor:theme.palette.secondary.dark, flexGrow: 1}}>
          <Forum/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
