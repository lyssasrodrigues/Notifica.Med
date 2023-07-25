import React from 'react';

function InteracoesMedicamentosas({ interacoes }) {
  return (
    <div>
      <h2>Possíveis Interações:</h2>
      <ul>
        {interacoes.map((interacao, index) => (
          <li key={index}>{interacao}</li>
        ))}
      </ul>
    </div>
  );
}

export default InteracoesMedicamentosas;
