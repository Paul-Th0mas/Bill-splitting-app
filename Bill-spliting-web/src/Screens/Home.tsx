import { Link, Outlet } from "react-router-dom";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";
import LineChart from "../components/Chart";
import LineCharty from "../components/Chart";
import GroupScreen from "./Group";

const Home = () => {
    const headers = ['ID', 'Name', 'Age'];
    const rows = [
        { ID: 1, Name: 'Alice', Age: 25 },
        { ID: 2, Name: 'Bob', Age: 30 },
        { ID: 3, Name: 'Charlie', Age: 22 },
        // ... other rows
    ];

    const sideNavbar = [
        { Link: "My Dashboard", url: "Dashboard" },
        { Link: "My Groups", url: "Groups" }
    ]





    return (<>

        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="https://getbootstrap.com/docs/5.3/examples/dashboard/#">Company name</a>

            <ul className="navbar-nav flex-row d-md-none">
                <li className="nav-item text-nowrap">
                    <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                        <svg className="bi"><use xlinkHref="#search"></use></svg>
                    </button>
                </li>
                <li className="nav-item text-nowrap">
                    <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <svg className="bi"><use xlinkHref="#list"></use></svg>
                    </button>
                </li>
            </ul>

            <div id="navbarSearch" className="navbar-search w-100 collapse">
                <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
            </div>
        </header>

        <div className="container-fluid">
            <div className="row">
                <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                    <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                            <ul className="nav flex-column">
                                {sideNavbar.map((sidenav, index) => {
                                    return (<li key={index} className="nav-item">
                                        <Link className="nav-link d-flex align-items-center gap-2 active" aria-current="page" to={sidenav.url}>
                                            {sidenav.Link}
                                        </Link>
                                    </li>)
                                })}
                            </ul>

                          

                            <hr className="my-3" />

                            <ul className="nav flex-column mb-auto">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="https://getbootstrap.com/docs/5.3/examples/dashboard/#">
                                        Settings
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="https://getbootstrap.com/docs/5.3/examples/dashboard/#">
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <main className="col-md-9 ms-sm-auto col-lg-10 ">
                    <Outlet />
                </main>
            </div>
        </div>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    </>)
}
export default Home