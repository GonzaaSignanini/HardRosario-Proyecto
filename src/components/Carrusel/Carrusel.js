import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './carrusel.css'

const Carrusel = () => {

    return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="./images/tforce.jpg" className="d-block w-100" alt="tforce"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/coolerm.png" className="d-block w-100" alt="coolerm"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/asus.png" className="d-block w-100" alt="asus"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/be-quiet.jpg" className="d-block w-100" alt="quiet"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/geil.jpg" className="d-block w-100" alt="geil"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/kolink.jpg" className="d-block w-100" alt="kolink"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/mother.jpg" className="d-block w-100" alt="asrock"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="./images/wd.jpg" className="d-block w-100" alt="wd"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
    )
}

export default Carrusel