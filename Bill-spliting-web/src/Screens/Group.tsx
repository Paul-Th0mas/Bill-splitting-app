import Card from "../components/Cards"


const GroupScreen = () => {
    const cardsData = [
        {
            title: "Card 1",
            description: "This is the first card description.",
            lastUpdated: 15, // Last updated 15 minutes ago
        },
        {
            title: "Card 2",
            description: "Description for the second card.",
            lastUpdated: 30, // Last updated 30 minutes ago
        },
        {
            title: "Card 3",
            description: "Description for the third card.",
            lastUpdated: 60, // Last updated 1 hour ago
        },
        {
            title: "Card 4",
            description: "Description for the fourth card.",
            lastUpdated: 120, // Last updated 2 hours ago
        },
        {
            title: "Card 5",
            description: "Description for the fifth card.",
            lastUpdated: 240, // Last updated 4 hours ago
        },
        {
            title: "Card 6",
            description: "Description for the sixth card.",
            lastUpdated: 480, // Last updated 8 hours ago
        },
    ]
    return (
        <>
            {/* <header data-bs-theme="dark">
                <div className="collapse text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p className="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                            <strong>Groups</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header> */}

            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Groups</h1>
                            <p className="lead text-body-secondary">Here are all the groups you are assigned toolbar</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Create new Groups</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {cardsData.map((x, index) => {
                                return (<div className="col-4" key={index}>
                                    <Card
                                        title={x.title}
                                        description={x.description}
                                        lastUpdated={x.lastUpdated}
                                    />
                                </div>)
                            })}
                        </div>
                    </div>
                </div>

            </main>

            <footer className="text-body-secondary py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </>
    )
}

export default GroupScreen;