import { useState } from "react"

const FormPartecipanti = () => {
    const initialFormData = {
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        codice_fiscale: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const newData = { ...formData, [key]: value }

        setFormData(newData)
    }

    return (
        <>
            <form>
                <div className="row">
                    <div className="col-6 mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            placeholder="Inserisci nome"
                            name="nome"
                            value={formData.nome}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="cognome" className="form-label">Cognome</label>
                        <input
                            type="text"
                            placeholder="Inserisci cognome"
                            name="cognome"
                            value={formData.cognome}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="text"
                            placeholder="Inserisci email"
                            name="email"
                            value={formData.email}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input
                            type="text"
                            placeholder="Inserisci telefono"
                            name="telefono"
                            value={formData.telefono}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="nome" className="form-label">Codice fiscale</label>
                        <input
                            type="text"
                            placeholder="Inserisci il codice fiscale"
                            name="codice_fiscale"
                            value={formData.codice_fiscale}
                            className="form-control"
                            onChange={handleChange} />
                    </div>
                    <button type="button" className="btn btn-primary">Salva</button>
                </div >
            </form >
        </>

    )
}

export default FormPartecipanti