import './marca.css'


const MarcaSponsors = () => {

    return (
        <div id="iniciadorMarcas" className="ng-scope">
            <div className="container">
                <div className="row ng-isolate-scope">
                    <div className="cintaCarruselMarcas ng-animate izquierda-add  izquierda izquierda-add-active" ng-click="prueba()" data-ng-animate="2">
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'0px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_322_9_634.png" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope"  ng-repeat="marca in marcas" style={{'left':'150px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_358_9_837.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope"  ng-repeat="marca in marcas" style={{'left':'300px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_316_9_548.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'450px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_303_9_984.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'600px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_343_9_306.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'750px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_319_9_458.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'900px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_360_9_931.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'1050px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_359_9_526.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope"  ng-repeat="marca in marcas" style={{'left':'1200px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_331_9_645.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope"  ng-repeat="marca in marcas" style={{'left':'1350px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_308_9_583.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope"ng-repeat="marca in marcas" style={{'left':'1500px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_320_9_411.jpg" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'1650px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_312_9_695.png" alt="marcas"/>
                        </div>
                        <div className="itemMarca ng-scope" ng-repeat="marca in marcas" style={{'left':'1800px'}}>
                            <img loading="lazy" src="https://compragamer.net/imagenes_marcas/imagen_marca_314_9_380.jpg" alt="marcas"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarcaSponsors