import React from 'react';
import Header from '@components/Header';
import CreateTask from '@components/CreateTask';
import ListTask from '@components/ListTask';
import './App.css';

function App() {

  return (
    <div className="container" style={{backgroundColor: '#282a35', height: '100vh', padding: '20px', }}>
      <Header />
      <CreateTask />
      <ListTask />     

    </div>
  );
}

export default App;
