const AppModal = ({testo, form}) => {
    return (
        <>
            <div className="text-center"><button type="button" className="btn blue mt-4 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa-solid fa-globe"></i> {` Aggiungi ${testo}`}
            </button></div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuovo {testo}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           {form}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AppModal