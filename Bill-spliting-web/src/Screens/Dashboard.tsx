import LineCharty from "../components/Chart";
import Table from "../components/Table";

const Dashboard = () => {
    const headers = ['ID', 'Name', 'Age'];
    const rows = [
        { ID: 1, Name: 'Alice', Age: 25 },
        { ID: 2, Name: 'Bob', Age: 30 },
        { ID: 3, Name: 'Charlie', Age: 22 },
    ];
    return (<>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                    This week
                </button>
            </div>
        </div>

        <LineCharty></LineCharty>
        <h2>Section title</h2>
        <Table headers={headers} rows={rows} />
    </>)
}

export default Dashboard