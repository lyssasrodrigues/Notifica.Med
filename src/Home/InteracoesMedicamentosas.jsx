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
              <td>{interacao.medicamento}</td>
              <td>{interacao.efeitoClinico}</td>
              <td>{interacao.grauInteracao}</td>
              <td>{interacao.inicioAcao}</td>
              <td>{interacao.recomendacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InteracoesMedicamentosas;
