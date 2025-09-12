import React from 'react';
import './App.css';
import LifecycleEx from './R006_LifecycleEx'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx
        prop_value = 'FromAppaa.js'
      />
    </div>
  );
}

export default App;