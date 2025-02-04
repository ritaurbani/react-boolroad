import React from 'react'
import viaggi from "../data/viaggi"
import CardViaggi from '../components/CardViaggi'
import AppModal from '../components/AppModal'
import FormViaggi from '../components/FormViaggi'
import {useState} from "react"

const HomePage = () => {
  const [trip, setTrip] = useState(viaggi)

  return (
    <div className='container mt-5 pt-5'>
      <h2 className='mb-4 text-center'>I nostri viaggi<i className="fa-solid fa-plane green-2 ms-2"></i></h2>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-5' >
        {trip.map((curViaggio) => (
          <div key={curViaggio.id} className="col">
            <CardViaggi viaggio={curViaggio} />
          </div>
        ))}
      </div>
      <AppModal testo="viaggio" form={<FormViaggi array={trip} setArray={setTrip}/>}/>
    </div>
  )
}

export default HomePage