import { useEffect, useState } from "react";
import { CreateTransaction, CreateTransactionDto } from "../module/createTransaction.Module";
import axios from "../api/axios";

const TransactionScreen = () => {

    const [newTransaction, setNewTransaction] = useState(new CreateTransaction())
    const [userList, setuserList] = useState<UserSummary[]>([])

    let debitors: number[] = []

    type UserSummary = {
        id: number;
        firstName: string;
    }

    useEffect(() => {
        const response = axios.get('/user', {
            headers: { "Content-Type": 'application/json' },
        })
            .then((res) => setuserList(res.data))
            .catch(err => {
                console.log(err.message);
            })
    }
        , [])

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(e.target)
        setNewTransaction((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        ;

    };

    const handleDebitor = (e: any) => {
        const { value } = e.target;
        debitors.push(value);
        console.log(debitors)
    }


    const HandleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post("/transaction/CreateNewTransaction",
                {
                    NewTransaction: newTransaction,
                    Debitors: debitors
                })

        } catch (err) { }
    }

    return (<div>
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="yo" width="72" height="57" />
                    <h2>Add New Payment</h2>
                    <p className="lead">Add Payment Details</p>
                </div>
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Payment Details</h4>
                        <form className="needs-validation" onSubmit={HandleSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-12">
                                    <label htmlFor="firstName" className="form-label">Purchase Name</label>
                                    <input type="text" name="Name" className="form-control" onChange={handleInputChange} value={newTransaction.Name} />
                                    <div className="invalid-feedback">
                                        Valid Name is required.
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <label htmlFor="lastName" className="form-label">Description</label>
                                    <textarea className="form-control" name="Description" onChange={handleInputChange} value={newTransaction.Description} />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Total Paid</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input type="Number" className="form-control" name="TotalPaid" onChange={handleInputChange} value={newTransaction.TotalPaid} placeholder="Total Paid" required />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label" >Select Additional People</label>
                                    <select className="form-select" id="country" onChange={handleDebitor} required>
                                        {userList.map((x, index) => {
                                            return (<option key={index} value={x.id}>{x.firstName}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                            <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="my-5 pt-5 text-body-secondary text-center text-small">
                <p className="mb-1">&copy; 2017–2023 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </div>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>

        <script src="checkout.js"></script></div>)
}

export default TransactionScreen;



