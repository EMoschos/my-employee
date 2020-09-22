import React from 'react';
import List from './components/List'
import employees from './utils/employees.json'
import './App.css';

function App() {
  return <List employees={employees} />;
}

export default App;
