import React from 'react'

const CardPartecipanti = ({ partecipante }) => {
  return (
    <div className="accordion mb-3" id="accordionParticipant">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${partecipante.id}`} aria-expanded="false" aria-controls={`collapse${partecipante.id}`}>
            {`${partecipante.nome} ${partecipante.cognome}`}
          </button>
        </h2>
        <div id={`collapse${partecipante.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionParticipant">
          <div className="accordion-body">
            <p> <i className="fa-solid fa-envelope me-1"></i>Email: 
              <a href=""> {partecipante.email}</a>
            </p>
            <p><i class="fa-solid fa-phone me-1"></i>{`Phone: ${partecipante.telefono}`}</p>
            <p><i class="fa-solid fa-database me-1"></i>{`CF: ${partecipante.codice_fiscale}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPartecipanti