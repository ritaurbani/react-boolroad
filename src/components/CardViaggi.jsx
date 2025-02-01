import React from 'react'
import viaggi  from '../data/viaggi'; 
const CardViaggi = () => {
  return (
	<div className="accordion" id="accordionTravel">
    {viaggi.map((viaggio, index) => (
      <div key={viaggio.id} className="accordion-item">
      <h2 className="accordion-header" id={`heading${viaggio.id}`}>
        <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${viaggio.id}`}
        aria-expanded="true"
        aria-controls={`collapse${viaggio.id}`}
        >
        {`${viaggio.destinazione} - ${viaggio.data_inizio}`}
        </button>
      </h2>
      <div
        id={`collapse${viaggio.id}`}
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionTravel"
      >
        <div className="accordion-body">
        <p>{`Data di inizio: ${viaggio.data_inizio}`}</p>
        <p>{`Data di fine: ${viaggio.data_fine}`}</p>
        </div>
      </div>
      </div>
    ))}
  </div>
  )
}

export default CardViaggi