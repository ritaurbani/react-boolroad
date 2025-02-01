import React from 'react'
import { Link } from 'react-router-dom'

const CardViaggi = ({ viaggio }) => {
  return (
    <div className="card h-100">
      <img src={viaggio.img} className="card-img-top h-100" alt={`Foto di ${viaggio.destinazione}`}/>
        <div className="card-body">
          <h5 className="card-title">{viaggio.destinazione}</h5>
          <p className="card-text">{`${viaggio.data_inizio} - ${viaggio.data_fine}`}</p>
          <Link to={`/viaggi/${viaggio.id}/detail`} class="btn btn-primary">Dettagli</Link>
        </div>
    </div>
  )
}

export default CardViaggi