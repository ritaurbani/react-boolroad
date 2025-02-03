import React from 'react'
import { Link } from 'react-router-dom'

const CardViaggi = ({ viaggio }) => {
  let imgPath = "https://placehold.co/300x300"; 
  if (viaggio.img) {
    imgPath = viaggio.img
  }

  return (
    <div className="card h-100">
      <img src={imgPath} className="card-img-top h-100" alt={`Foto di ${viaggio.destinazione}`} />
      <div className="card-body">
        <h5 className="card-title">{viaggio.destinazione}</h5>
        <p className="card-text">{`${viaggio.data_inizio} - ${viaggio.data_fine}`}</p>
        <Link to={`/viaggi/${viaggio.id}/detail`} className="btn green"><i className="fa-solid fa-eye"></i> Dettagli</Link>
      </div>
    </div>
  )
}

export default CardViaggi