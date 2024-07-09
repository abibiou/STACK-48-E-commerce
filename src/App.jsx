import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    return (
        <>
            <head>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                </style>
            </head>
            <section>
                <nav class="navbar navbar-expand-lg fixed-top hum">
                    <div class="container-fluid">
                        <a class="navbar-brand me-auto" href="#">ABI SHOP</a>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Abi shop</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2 active" aria-current="page" href="#">Accueil</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="Homme">Homme</a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Femme</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Collection</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Marque</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Promo</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <a href="#" class="login-button">Login</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-12 "> <img class="card-img premier" src="img/first.jpg"></img>
                        </div>
                        <button type="button" class="btn btn-primary bouton">Découvrir</button>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/veste.jpg" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonveste btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/nike.png" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonnike btn-primary bouton">Voir</button>
                        <div class="col-sm-12 col-md-12 col-lg-6 mb-3 ">
                            <img src="img/jeann.jpg" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonjean btn-primary bouton">Voir</button>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-6 rounded ">
                            <img src="img/Maillot.jpg" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonmaillot btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/sweat.png" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonsweat btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
                            <img src="img/shortnoir.png" class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonshort btn-primary bouton">Voir</button>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row mt-5 g-0">
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/camion.png" class="img-fluid rounded-start quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text camion">Rapidité garantie : Livraison express, <br>
                            </br>satisfaction assurée !</p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/support.png" class="card-img-top quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text client">Service client d'excellence : Votre <br></br>satisfaction, notre priorité absolue !</p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/satisfaction.png" class="card-img-top quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text satisfait">Garantie de satisfaction : Des produits<br></br> qui répondent à toutes vos attentes ! </p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src="img/securise.png" class="card-img-top quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text securise">Votre sécurité, notre priorité : Paiement  <br></br> sécurisé, tranquillité assurée !
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-12 rounded ">
                            <img src="img/haland.png" class="card-img-top deux"></img>
                            <div class="card-img-overlay">

                                <p class="textniketech">DÉCOUVREZ LE NOUVEAU MODÈLE NIKE TECH : L'EXCELLENCE DE LA PERFORMANCE ET DU CONFORT !</p>
                                <p class="card-text texteniketech2">Associant deux de leurs looks les plus emblématiques, ce sweat à capuche et zip Nike Tech Fleece
                                    s'inspire de la veste Windrunner intemporelle.
                                    Sa coupe sportive et décontractée au niveau des épaules, de la poitrine et du corps permet de la porter facilement
                                    par-dessus d'autres vêtements. Le Fleece premium lisse des deux côtés est encore plus chaud et
                                    doux qu'avant, sans sacrifier la légèreté</p>
                                <button type="button" class="btn btn-primary bouton">ACHETER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="row mt-5">
                    <div class="text">
                        <h2> PROMO </h2>
                        <p class="textpromo"> Économisez aujourd'hui, profitez demain : Nos promos vont vous surprendre ! </p>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/nba.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Air Jordan T-shirt NBA</h5>
                                <p class="card-text mt-3 prix ">40€ <span class="maclasse">60€</span></p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/lacoste.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Lacoste zippé monogramme</h5>
                                <p class="card-text mt-3 prix">85€ <span class="maclasse">150€</span></p>
                            </div>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/casquette.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo" >Cortiez casquette rose</h5>
                                <p class="card-text mt-3 prix">25€ <span class="maclasse">45€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src="img/timberland.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Timberland 6 INCH PREMIUM</h5>
                                <p class="card-text mt-3 prix">110€ <span class="maclasse">160€</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/arte.jpg" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Arte veste</h5>
                                <p class="card-text mt-  prix ">80€ <span class="maclasse">130€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/paireasics.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Asics gel kayano 14 rose</h5>
                                <p class="card-text mt-3  prix ">110€ <span class="maclasse">170€</span> </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/psg.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">PSG Maillot rétro 2001</h5>
                                <p class="card-text mt-3  prix ">59€ <span class="maclasse">99€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src="img/palm.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Jean</h5>
                                <p class="card-text mt-3  prix ">250€ <span class="maclasse">550€</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>

  <div class="container">
    <div class="row mt-3">
      <div class="col-12 rounded">
        <img src="img/newbalance.png" class="card-img-top newbalance" />
      </div>
      <p class="textnewbalance">
        TOUTE LA GAMME NEW BALANCE SOLDÉ <br></br>JUSQU'À -30% PROFITES-EN VITE !
      </p>
      <button type="button" class="btn btn-primary bouton">Découvrir</button>
    </div>
  </div>
</section>

            <section>
                <section>
                    <div class="row mt-5">
                        <div class="text">
                            <h2> TENDANCE</h2>
                            <p class="textpromo"> Soyez à la pointe de la mode : Adoptez les dernières tendances dès aujourd'hui ! </p>
                        </div>
                    </div>

                </section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-4 mb-3 mb-sm-0 rounded position-relative">
                            <img src="img/homme.jpg" class="card-img-top  tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                            <p class="card-text texthomme">TENDANCE HOMME</p>
                        <button type="button" class="tendanceboutton btn-primary">Découvrir</button>
                        </div>
                        </div>
                        <div class="col-sm-4  mb-3 rounded position-relative">

                            <img src="img/femme.jpg" class="card-img-top tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                            <p class=" card-text textfemme">TENDANCE FEMME  </p>
                            <button type="button" class="tendanceboutton2 btn-primary">Découvrir</button>
                        </div>
                        </div>
                       
                        <div class="col-sm-4  mb-3 position-relative">
                            <img src="img/enfant.jpg" class="card-img-top tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                        <p class="card-text textenfant">TENDANCE ENFANT </p>
                        <button type="button" class="tendanceboutton3 btn-primary">Découvrir</button>
                    </div>
                </div>
                </div>
        </div >
            </section >
            <section>
                <div class="container-fluid grey margingris">
                    <div class="row">
                        <div class="col-2 rounded ">
                            <img src="img/nikelogo.png" class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src="img/adidos.png" class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src="img/nb.png" class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src="img/asics.png" class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src="img/jordanlogo.png" class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src="img/lacostelogo.png" class="card-img-top marque"></img>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-dark py-5 mt-5">
                <div class="container text-light text-center">
                    <p class="display-5 mb-3">ABI SHOP</p>
                    <small class="text-white-50">&copy; Abishop by Abibi. All rights reserved.</small>
                    <div class="container">
                        <div class="row mt-3">
                            <div class="col-3 rounded ">
                                <p>Abi Shop </p>
                                <p class="textfooter">Votre destination ultime pour des produits tendance, des promos incroyables, et un service client inégalé</p>
                            </div>
                            <div class="col-3 rounded ">
                                <p>Liens rapide</p>
                                <div class="offcanvas-body mt-3">
                                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link mx-lg-2" aria-current="page" href="#">Accueil</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link mx-lg-2" href="#">Homme</a>
                                        </li> <li class="nav-item">
                                            <a class="nav-link mx-lg-2" href="#">Femme</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link mx-lg-2" href="#">Collection</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link mx-lg-2" href="#">Marque</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link mx-lg-2" href="#">Promo</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-3 rounded mt-3 ">
                                <p>Nous contacter</p>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <p class="textfooter" >+06576557102</p>
                                        </li> <li class="nav-item">
                                            <p class="textfooter" >4 rue du Général Leclerl 75014 Paris</p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="textfooter" >abishop@commerce.fr</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div class="col-3 rounded ">
                                <p>Abonnez-vous à notre mail</p>
                                <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default App
