import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Body />
      </Container>
    </div>
  );
}

export default App;
