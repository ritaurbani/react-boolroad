import React from 'react'
import { useState } from 'react';

const CardPartecipanti = ({ partecipante }) => {
  return (
    <div className="accordion" id="accordionParticipant">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${partecipante.id}`} aria-expanded="true" aria-controls={`collapse${partecipante.id}`}>
            {`${partecipante.nome} ${partecipante.cognome}`}
          </button>
        </h2>
        <div id={`collapse${partecipante.id}`} className="accordion-collapse collapse show" data-bs-parent="#accordionParticipant">
          <div className="accordion-body">
            <p>{`Email: ${partecipante.email}`}</p>
            <p>{`Phone: ${partecipante.telefono}`}</p>
            <p>{`CF: ${partecipante.codice_fiscale}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPartecipanti