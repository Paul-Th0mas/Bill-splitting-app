type TableRow = { [key: string]: string | number };

type TableProps = {
    headers: string[];
    rows: TableRow[];
};

const Table = ({ headers, rows }: TableProps) => {
    return (
        <div className="table-responsive small">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table