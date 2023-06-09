function Footer() {
    return (
        <div className="footer">
            <div className="m-10">
                <nav className="navbar navbar-expand-lg navbar-dark navItems">
                    <div className="container-fluid nav-container">
                        <h1 className="logo">PEPE<span>CHAIN</span></h1>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon navBar-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="#home" className="nav-item nav-link ">HOME</a>
                                <a href="#about" className="nav-item nav-link">ABOUT</a>
                                <div className="navbar--button">
                                    <button className="twitterBtn"><i className="fab fa-twitter"></i>TWITWER</button>
                                    <button className="telegramBtn"><i className="fab fa-telegram-plane"></i>TELEGRAM</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <p>Our Email: uiatiqurrahman@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer