const Card = (props: { title: string, description: string, lastUpdated: number }) => {

    return (<>
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                    </div>
                    <small className="text-body-secondary">{props.lastUpdated} mins</small>
                </div>
            </div>
        </div>
    </>)
}

export default Card