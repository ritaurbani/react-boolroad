import React from 'react'
import viaggi from "../data/viaggi"
import CardViaggi from '../components/CardViaggi'

const HomePage = () => {
  return (
    <div>
      <h2>Informazione Viaggi</h2>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3' >
        {/* {viaggi.map((curViaggio) => (
          <div className="col">
            <CardViaggi viaggio={curViaggio} />
          </div>
        ))} */}

        <CardViaggi/>
      </div>
    </div>
  )
}

export default HomePage