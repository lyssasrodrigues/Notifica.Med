// src/Home.js

import React, { useState } from 'react';
import './styles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import InteractionMessage from './InteractionMessage';

function Home() {
  const [medicamento, setMedicamento] = useState('');
  const [mensagem, setMensagem] = useState([]);

  const handleInputChange = (event) => {
    setMedicamento(event.target.value);
  };

  const handlePesquisar = () => {
    // Simulação de chamada a uma API para buscar interações medicamentosas
    const exemploInteracoes = getInteracoesMedicamento(medicamento);
    setMensagem(exemploInteracoes);
  };

  // Função de simulação de interações medicamentosas
  const getInteracoesMedicamento = (medicamento) => {
    const medicamentoLowerCase = medicamento.toLowerCase();

    // Simulando as respostas para o medicamento "AAS" ou "Ácido acetilsalicílico"
    if (medicamentoLowerCase === 'aas' || medicamentoLowerCase === 'ácido acetilsalicílico') {
      return [
        {
          medicamento: 'Insulina ',
          efeitoClinico: 'Aumento no risco de hipoglicemia',
          recomendacao: ' Monitorar os níveis de glicose no sangue quando usado em combinação com insulina.',
        },
        {
          medicamento: 'Warfarin/ Varfarina (é um anticoagulante que age na inibição dos fatores de coagulação dependentes da vitamina K.)',
          efeitoClinico: 'Risco de sangramento aumentado.',
          recomendacao: 'Monitorar sinais de sangramento quando usado em combinação com warfarin.',
        },
      ];
    } else {
      return [{ medicamento: `Nenhum resultado encontrado para "${medicamento}".`, efeitoClinico: '-', recomendacao: '-' }];
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Notifica.Med</div>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Sistema de Notificação de Interações Medicamentosas</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Digite o nome do medicamento"
            value={medicamento}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handlePesquisar}>
            <AiOutlineSearch />
          </button>
        </div>
        {mensagem.length > 0 && <InteractionMessage message={mensagem} />}
      </div>
    </div>
  );
}

export default Home;
