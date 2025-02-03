import { useState } from "react";

const FormViaggi = ({ array, setArray }) => {
    
    const initialFormData = {
        destinazione: "",
        data_inizio: "",
        data_fine: "",
        img: "",
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const newData = { ...formData, [key]: value }

        setFormData(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newObj = { ...formData, id: Date.now() }
        const newList = [...array, newObj]
        setArray(newList)
        setFormData(initialFormData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="destinazione" className="form-label">Destinazione</label>
                        <input
                            id="destinazione"
                            type="text"
                            placeholder="Inserisci destinazione"
                            name="destinazione"
                            value={formData.destinazione}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="data_inizio" className="form-label">Data inizio</label>
                        <input
                            id="data_inizio"
                            type="date"
                            name="data_inizio"
                            value={formData.data_inizio}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="data_fine" className="form-label">Data fine</label>
                        <input
                            id="data_fine"
                            type="date"
                            name="data_fine"
                            value={formData.data_fine}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="img" className="form-label">Immagine</label>
                        <input
                            id="img"
                            type="text"
                            placeholder="Inserisci immagine"
                            name="img"
                            value={formData.img}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="text-end me-3 mt-3">
                        <button type="Submit" className="btn green" data-bs-dismiss="modal">Salva</button>
                    </div>
                </div >
            </form >
        </>
    )
}


export default FormViaggi