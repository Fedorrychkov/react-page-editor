import React from 'react';
import { DefaultText } from '@react-page-constructor/components'

function ExampleScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DefaultText />
      </header>
    </div>
  );
}

export default ExampleScreen;
