// interactionMessage.jsx
import React from 'react';
import { BsArrowRight, BsExclamationTriangle, BsCheckCircle } from 'react-icons/bs';

function InteractionMessage({ message }) {
  return (
    <div className="interaction-message">
      {message.map((interacao, index) => (
        <div key={index}>
          <p><strong>Interage com?</strong></p>
          <p><BsArrowRight className="arrow-right-icon" /> {interacao.medicamento}</p>
          <p><strong>O que pode causar?</strong></p>
          <p><BsExclamationTriangle className="exclamation-icon" /> {interacao.efeitoClinico}</p>
          <p><strong>O que fazer?</strong></p>
          <p><BsCheckCircle className="check-icon" /> {interacao.recomendacao}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default InteractionMessage;
