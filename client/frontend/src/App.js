import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forum from './Forum';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/forum" /> : <SignUp onAuthenticated={() => setIsAuthenticated(true)} />} />
          <Route path="/signin" element={isAuthenticated ? <Navigate to="/forum" /> : <SignIn onAuthenticated={() => setIsAuthenticated(true)} />} />
          <Route path="/forum" element={!isAuthenticated ? <Navigate to="/signin" /> : <Forum />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;