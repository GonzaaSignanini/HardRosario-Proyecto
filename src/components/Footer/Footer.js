import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <div className="footer">
            <div className="container visible-when-content-ready">
                        <div className="row-fluid">
                            <div className="span2 pull-left-xs ulNav">
                                <div className="col-foot">
                                    <h4 className="footer-title font-body text-uppercase">Navegación</h4>
                                    <ul>
                                        <li className="wrap-list-xs">
                                            <Link to="/inicio">Inicio</Link>
	                                    </li>
                                        <li className="wrap-list-xs">
                                            <Link to="/productos">Productos</Link>
                                        </li>
                                        <li className="wrap-list-xs">
                                            <Link to="/category/equipos-armados">Equipos Armados</Link>
                                        </li>
                                        <li className="wrap-list-xs">
                                            <Link to="/category/hardware">Hardware</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="span3 pull-left-xs">
                                <div className="col-foot">
                                    <h4 className="footer-title font-body text-uppercase">Medios de pago</h4>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="footer-payship-img card-img lazyloaded" alt="visa" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="footer-payship-img card-img lazyloaded" alt="mastercard" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="footer-payship-img card-img lazyloaded" alt="amex" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" className="footer-payship-img card-img lazyloaded" alt="diners" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_banelco" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_cabal" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_tarjeta-naranja" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_tarjeta-shopping" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className="footer-payship-img card-img lazyloaded" alt="mercadopago" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_argencard" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png" className="footer-payship-img card-img lazyloaded" alt="nativa" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png" className="footer-payship-img card-img lazyloaded" alt="ar_cencosud" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" className="footer-payship-img card-img lazyloaded" alt="pagofacil" width="40" height="25"/>
                                    <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" className="footer-payship-img card-img lazyloaded" alt="rapipago" width="40" height="25"/>
                                </div>
                            </div>
                            <div className="span4 pull-left-xs ulDates">
                                <div className="col-foot">
                                    <h4 className="footer-title font-body text-uppercase">Contactanos</h4>
                                    <ul>
                                        <li>
                                            <svg className="svg-inline--fa footer-icon fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"></path></svg><a href="tel:0341-4310455" className="text-wrap">0341-4310455</a>
                                        </li>
                                        <li>
                                            <svg className="svg-inline--fa footer-icon fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 232C504 95.751 394.053 8 256 8 118.94 8 8 118.919 8 256c0 137.059 110.919 248 248 248 52.926 0 104.681-17.079 147.096-48.321 5.501-4.052 6.423-11.924 2.095-17.211l-15.224-18.597c-4.055-4.954-11.249-5.803-16.428-2.041C339.547 442.517 298.238 456 256 456c-110.28 0-200-89.72-200-200S145.72 56 256 56c109.469 0 200 65.02 200 176 0 63.106-42.478 98.29-83.02 98.29-19.505 0-20.133-12.62-16.366-31.463l28.621-148.557c1.426-7.402-4.245-14.27-11.783-14.27h-39.175a12.005 12.005 0 0 0-11.784 9.735c-1.102 5.723-1.661 8.336-2.28 13.993-11.923-19.548-35.878-31.068-65.202-31.068C183.412 128.66 120 191.149 120 281.53c0 61.159 32.877 102.11 93.18 102.11 29.803 0 61.344-16.833 79.749-42.239 4.145 30.846 28.497 38.01 59.372 38.01C451.467 379.41 504 315.786 504 232zm-273.9 97.35c-28.472 0-45.47-19.458-45.47-52.05 0-57.514 39.56-93.41 74.61-93.41 30.12 0 45.471 21.532 45.471 51.58 0 46.864-33.177 93.88-74.611 93.88z"></path></svg><a href="mailto:ventas@hardrosario.com">ventas@hardrosario.com</a>
                                        </li>
                                        <li>
                                            <svg className="svg-inline--fa footer-icon fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"></path></svg><a href="https://www.google.com/maps/place/Rosario,+Santa+Fe/data=!4m2!3m1!1s0x95b6539335d7d75b:0xec4086e90258a557?sa=X&ved=2ahUKEwirpcjN49nzAhVFJLkGHdiGAJAQ8gF6BAgWEAE">Rosario, Santa Fe.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="span2 pull-left-xs">
                                <div className="col-foot clearfix">
                                    <h4 className="footer-title font-body text-uppercase">Redes Sociales</h4>
                                    <a className="footer-icon rounded-icon ig-icon" href="http://instagram.com/hard_rosario" aria-label="Seguinos en instagram">
                                        <svg className="svg-inline--fa svg-icon-foot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                    </a>
                                    <a className="footer-icon rounded-icon" href="https://www.facebook.com/hardrosarioo" aria-label="Seguinos en facebook">
                                        <svg className="svg-inline--fa svg-icon-foot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                                    </a>                             
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
)
}

export default Footer