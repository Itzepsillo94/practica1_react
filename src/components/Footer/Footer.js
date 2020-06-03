import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
        <div>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"/>        
                <div class="container">
                    <h3>Multi-Coloured</h3>
                        
                        <div class="text-center center-block">
                            <p class="txt-railway"> Nombre app</p>
                            <br />
                            <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                        <hr/>
                        <div className="col-md-12 text-right">
                        <p>Prueba1 @2020.<br /> Todos los derechos reservados.</p>
                        </div>
                        
                </div>
        </div>
        </footer>
    )
}

export default Footer


/*

<footer>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 text-left">
                                        <h6 className="text-muted lead">CONTACTO:</h6>
                                        <h6 class="text-muted">
                                            Kevin Itzep<br />
                        Melvin Calel<br />
                                        </h6>
                                    </div>
                                    <div className="col-xs-12 col-md-6 text-right">
                                        <h6 className="text-muted lead">ENCUENTRANOS EN LAS REDES</h6>
                                        <div className="redes-footer">
                                            <a href="https://www.facebook.com/"><img src={facebook} /></a>
                                            <a href="https://twitter.com/">h</a>
                                            <a href="https://www.youtube.com/">h</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <p className="text-muted small">Prueba1 @2020.<br /> Todos los derechos reservados.</p>
                                    </div>
                                </div>

                            </div>
                        </footer>
*/