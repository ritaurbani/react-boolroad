import React from 'react'
import viaggi from "../data/viaggi"
import CardViaggi from '../components/CardViaggi'
import AppModal from '../components/AppModal'
import FormViaggi from '../components/FormViaggi'

const HomePage = () => {
  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>Informazione Viaggi</h2>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-5' >
        {viaggi.map((curViaggio) => (
          <div className="col">
            <CardViaggi viaggio={curViaggio} />
          </div>
        ))}
      </div>
      <AppModal testo="viaggio" form={<FormViaggi />}/>
    </div>
  )
}

export default HomePage