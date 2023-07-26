import React, { useState } from 'react';
import './styles.css';
import InteracoesMedicamentosas from './InteracoesMedicamentosas';

function Home() {
  const [medicamento, setMedicamento] = useState('');
  const [interacoes, setInteracoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setMedicamento(event.target.value);
  };

  const handlePesquisar = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulação de chamada a uma API para buscar interações medicamentosas
      const exemploInteracoes = getInteracoesMedicamento(medicamento);
      setInteracoes(exemploInteracoes);
      setIsLoading(false);
    }, 2000);
  };

  // Função de simulação de interações medicamentosas
  const getInteracoesMedicamento = (medicamento) => {
    const medicamentoLowerCase = medicamento.toLowerCase();

    // Simulando as respostas para o medicamento "Aciclovir"
    if (medicamentoLowerCase === 'aciclovir') {
      return [
        {
          medicamento: 'Tenofovir',
          efeitoClinico: 'Tontura; diarréia; vômito; neuropatia',
          grauInteracao: 'Moderada',
          inicioAcao: 'Não especificado',
          recomendacao: 'Monitorar aumento dos efeitos tóxicos do tenofovir (tontura; diarréia; neuropatia; vômito).',
        },
        {
          medicamento: 'Zidovudina',
          efeitoClinico: 'Letargia e fadiga grave',
          grauInteracao: 'Moderada',
          inicioAcao: 'Rápido',
          recomendacao: 'Observar a ocorrência de letargia e fadiga.',
        },
      ];
      if (medicamentoLowerCase === 'Ácido épsilon aminocapróico') {
        return [
          {
            medicamento: 'Tretinoína',
            efeitoClinico: '↑ risco de trombose;',
            grauInteracao: 'Grave',
            inicioAcao: 'Não especificado',
            recomendacao: 'Monitorar aumento dos efeitos tóxicos do tenofovir (tontura; diarréia; neuropatia; vômito).',
          },
        ]
    }
  }

  else if (medicamento === '') {
      // Retorno para quando nenhum medicamento é inserido
      return [
        {
          medicamento: 'Medicamento não encontrado. Digite novamente.',
          efeitoClinico: '-',
          grauInteracao: '-',
          inicioAcao: '-',
          recomendacao: '-',
        },
      ];
    } else {
      // Retorno para medicamento não encontrado
      return [
        {
          medicamento: `Nenhum resultado encontrado para "${medicamento}".`,
          efeitoClinico: '-',
          grauInteracao: '-',
          inicioAcao: '-',
          recomendacao: '-',
        },
      ];
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
      <input
        type="text"
        placeholder="Nome do medicamento"
        value={medicamento}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handlePesquisar} disabled={isLoading}>
        {isLoading ? 'Pesquisando...' : 'Pesquisar'}
      </button>
      {interacoes.length > 0 && <InteracoesMedicamentosas interacoes={interacoes} />}
    </div>
    </div>
  );
}

export default Home;
