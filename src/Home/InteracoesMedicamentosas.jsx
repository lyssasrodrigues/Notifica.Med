import React from 'react';

function InteracoesMedicamentosas({ interacoes }) {
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Interage com</th>
            <th>Efeito clínico</th>
            <th>Grau de Interação</th>
            <th>Início de ação</th>
            <th>Recomendação</th>
          </tr>
        </thead>
        <tbody>
          {interacoes.map((interacao, index) => (
            <tr key={index}>
              <td>Medicamento 1</td>
              <td>Efeito exemplo</td>
              <td>Grau exemplo</td>
              <td>Início exemplo</td>
              <td>Recomendação exemplo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InteracoesMedicamentosas;
