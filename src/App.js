import React from 'react';

const App = () =>{
  return (<div className="container">
    
    <div className="valid-keys">
    <span className="matched">Kev</span>
    <span className="remainder">in</span>
    </div>
    <div className="typed-keys"></div>
    <div className="completed-words">
      <ol>
        <li>Cidade</li>
        <li>Cidadão</li>
        <li>Cidadania</li>
      </ol>
    </div>
  </div>)
};

export default App;