import React, { useState } from 'react';
import './styles.css';
import InteracoesMedicamentosas from './InteracoesMedicamentosas';

function Home() {
  const [medicamento, setMedicamento] = useState('');
  const [interacoes, setInteracoes] = useState([]);

  const handleInputChange = (event) => {
    setMedicamento(event.target.value);
  };

  const handlePesquisar = () => {
    // Aqui você pode realizar uma chamada a uma API ou um serviço que
    // retorne as interações medicamentosas com base no nome do medicamento.
    // Por enquanto, vou apenas simular algumas interações de exemplo:
    const exemploInteracoes = ['Interacao 1', 'Interacao 2', 'Interacao 3'];
    setInteracoes(exemploInteracoes);
  };

  return (
    <div className="container">
      <h1>Sistema de Notificação de Interações Medicamentosas</h1>
      <input
        type="text"
        placeholder="Nome do medicamento"
        value={medicamento}
        onChange={handleInputChange}
      />
     
      
      <button type="button" onClick={handlePesquisar}>
        Pesquisar
      </button>
      {interacoes.length > 0 && <InteracoesMedicamentosas interacoes={interacoes} />}
    </div>
  );
}

export default Home;
