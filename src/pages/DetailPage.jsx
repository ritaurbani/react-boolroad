import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import viaggi from '../data/viaggi';
import partecipanti from '../data/partecipanti';
import CardPartecipanti from '../components/CardPartecipanti';

const DetailPage = () => {

    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [filteredParticipants, setFilteredParticipants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const selectedTrip = viaggi.find((curViaggio) => curViaggio.id === parseInt(id));
        setTrip(selectedTrip);

        if (selectedTrip) {
            setFilteredParticipants(
                partecipanti.filter((persona) => persona.id_trip === selectedTrip.id);
            )
        }
    }, [id])

    return (
        <>
            <Link to="/">← Home</Link>
            <h2 className='text-center mt-4'>Destinazione</h2>
            <h4>Partecipanti:</h4>
    
            {/* SEARCH BAR */}
            <div>
                <input
                    type="text"
                    placeholder="Cerca per nome o cognome..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            {/* LISTA CONTATTI */}
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3' >
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
            </div>
        </>
    )
}

export default DetailPage;























