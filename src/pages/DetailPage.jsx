import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import viaggi from '../data/viaggi';
import partecipanti from '../data/partecipanti';
import CardPartecipanti from '../components/CardPartecipanti';
import AppModal from '../components/AppModal';
import FormPartecipanti from '../components/FormPartecipanti';

const DetailPage = () => {

    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [filteredParticipants, setFilteredParticipants] = useState([]);
    const [search, setSearch] = useState("");
    const [listPartecipanti, setListPartecipanti] = useState(partecipanti)

    useEffect(() => {
        console.log(listPartecipanti)
        const selectedTrip = viaggi.find((curViaggio) => curViaggio.id === parseInt(id));
        setTrip(selectedTrip);
        console.log(selectedTrip)
        if (selectedTrip) {
            console.log(selectedTrip)
            //filtro dei partecipanti in base al viaggio selezionato
            setFilteredParticipants(
                listPartecipanti.filter((persona) => persona.id_trip === selectedTrip.id)
            )
        }
        console.log(listPartecipanti)
    }, [id, listPartecipanti])


    return (
        <>
            <div className="container">
                <h2 className='text-center mt-4 mb-3'>{trip && trip.destinazione}</h2>
                <h4 className='text-center mb-4'>Partecipanti:</h4>

                {/* SEARCH BAR */}
                <div>
                    <input
                        className='input-group-text form-control'
                        type="text"
                        placeholder="Cerca per nome o cognome"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}

                    />
                </div>

                {/* LISTA CONTATTI */}
                <div className='container mt-5'>
                    <div className='row row-cols-1' >
                        {filteredParticipants.filter((persona) => {
                            if (search === "") {
                                return persona
                            } else if (persona.nome.toLowerCase().includes(search.toLowerCase()) || persona.cognome.toLowerCase().includes(search.toLowerCase())) {
                                return persona
                            }
                        }).map((curPartecipante) => (
                            <div key={curPartecipante.id} className="col">
                                <CardPartecipanti partecipante={curPartecipante} />
                            </div>
                        ))}
                    </div>
                    {/* MODALE */}
                    <AppModal testo="partecipante" form={<FormPartecipanti array={listPartecipanti} setArray={setListPartecipanti} tripId={id} />} />
                    {/* MODALE */}
                </div>
            </div>
        </>
    )
}

export default DetailPage;