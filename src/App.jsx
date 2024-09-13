import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import panier from "../src/img/panier.png"
import premier from "../src/img/first.jpg"
import veste from "../src/img/veste.jpg"
import  nike from "../src/img/nike.png"
import jeann from "../src/img/jeann.jpg"
import maillot from "../src/img/Maillot.jpg"
import sweat from "../src/img/sweat.png"
import shortnoir from "../src/img/shortnoir.png"
import camion from "../src/img/camion.png"
import support from "../src/img/support.png"
import satisfaction from "../src/img/satisfaction.png"
import securise from "../src/img/securise.png"
import haland from "../src/img/haland.png"
import nba from "../src/img/nba.png"
import lacoste from "../src/img/lacoste.png"
import casquette from "../src/img/casquette.png"
import timberland from "../src/img/timberland.png"
import arte from "../src/img/arte.jpg"
import paireasics from "../src/img/paireasics.png"
import psg from "../src/img/psg.png"
import palm from "../src/img/palm.png"
import newbalance from "../src/img/newbalance.png"
import homme from "../src/img/homme.jpg"
import femme from "../src/img/femme.jpg"
import enfant from "../src/img/enfant.jpg"
import nikelogo from "../src/img/nikelogo.png"
import adidos from "../src/img/adidos.png"
import nb from "../src/img/nb.png"
import asics from "../src/img/asics.png"
import jordanlogo from "../src/img/jordanlogo.png"
import lacostelogo from "../src/img/lacostelogo.png"

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
                                        <a class="nav-link mx-lg-2" href="Femme">Femme</a>
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
                        <a href="Panier" class="">
                    <img class="card-img-top panier ms-3" src={panier}></img>
                    </a>
                    </div>
                </nav>
            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-12 "> <img class="card-img premier" src={premier}></img>
                        </div>
                        <button type="button" class="btn btn-primary bouton">Découvrir</button>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={veste} class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonveste btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={nike} class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonnike btn-primary bouton">Voir</button>
                        <div class="col-sm-12 col-md-12 col-lg-6 mb-3">
                            <img src={jeann} class="exception card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonjean btn-primary bouton">Voir</button>
                    </div>
                </div>

            </section>
            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-6 mb-3 rounded ">
                            <img src={maillot} class="exception card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonmaillot btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={sweat} class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonsweat btn-primary bouton">Voir</button>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
                            <img src={shortnoir} class="card-img-top"></img>
                        </div>
                        <button type="button" class="bouttonshort btn-primary bouton">Voir</button>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row mt-5 g-0">
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={camion} class="img-fluid rounded-start quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text camion">Rapidité garantie : Livraison express, <br>
                            </br>satisfaction assurée !</p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={support} class="card-img-top quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text client">Service client d'excellence : Votre <br></br>satisfaction, notre priorité absolue !</p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={satisfaction} class="card-img-top quatre"></img>
                            <div class="col-md-6">
                            <div class="card-body">
                            <p class="card-text satisfait">Garantie de satisfaction : Des produits<br></br> qui répondent à toutes vos attentes ! </p>
                        </div>
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 rounded ">
                            <img src={securise} class="card-img-top quatre"></img>
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
                            <img src={haland} class="card-img-top deux"></img>
                            <div class="card-img-overlay">

                                <p class="textniketech">DÉCOUVREZ LE NOUVEAU MODÈLE NIKE TECH : L'EXCELLENCE DE LA PERFORMANCE ET DU CONFORT !</p>
                                <p class="card-text texteniketech2">Associant deux de leurs looks les plus emblématiques, ce sweat à capuche et zip Nike Tech Fleece
                                    s'inspire de la veste Windrunner intemporelle.
                                    Sa coupe sportive et décontractée au niveau des épaules, de la poitrine et du corps permet de la porter facilement
                                    par-dessus d'autres vêtements. Le Fleece premium lisse des deux côtés est encore plus chaud et
                                    doux qu'avant, sans sacrifier la légèreté</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary buttonhalaand">ACHETER</button>
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
                            <img src={nba} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Air Jordan T-shirt NBA</h5>
                                <p class="card-text mt-3 prix ">40€ <span class="maclasse">60€</span></p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={lacoste} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Lacoste zippé monogramme</h5>
                                <p class="card-text mt-3 prix">85€ <span class="maclasse">150€</span></p>
                            </div>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={casquette} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo" >Cortiez casquette rose</h5>
                                <p class="card-text mt-3 prix">25€ <span class="maclasse">45€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src={timberland} class="card-img-top habits"></img>
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
                            <img src={arte}  class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Arte veste</h5>
                                <p class="card-text mt-  prix ">80€ <span class="maclasse">130€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={paireasics} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Asics gel kayano 14 rose</h5>
                                <p class="card-text mt-3  prix ">110€ <span class="maclasse">170€</span> </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={psg} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">PSG Maillot rétro 2001</h5>
                                <p class="card-text mt-3  prix ">59€ <span class="maclasse">99€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src={palm} class="card-img-top habits"></img>
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
        <img src={newbalance} class="card-img-top newbalance" />
      </div>
      <p class="textnewbalance">
        TOUTE LA GAMME NEW BALANCE SOLDÉ <br></br>JUSQU'À -30% PROFITES-EN VITE !
      </p>
      <button type="button" class="btn btn-primary bouton">DÉCOUVRIR</button>
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
                        <div class="col-sm-4 mb-3 rounded position-relative">
                            <img src={homme} class="card-img-top  tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                            <p class="card-text texthomme">TENDANCE HOMME</p>
                        <button type="button" class="tendanceboutton btn-primary">DÉCOUVRIR</button>
                        </div>
                        </div>
                        <div class="col-sm-4  mb-3 rounded position-relative">

                            <img src={femme} class="card-img-top tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                            <p class=" card-text textfemme">TENDANCE FEMME  </p>
                            <button type="button" class="tendanceboutton btn-primary">DÉCOUVRIR</button>
                        </div>
                        </div>
                       
                        <div class="col-sm-4  mb-3 position-relative">
                            <img src={enfant} class="card-img-top tendance"></img>
                            <div class= "position-absolute bottom-0 start-0 ps-4 mb-5">
                        <p class="card-text textenfant">TENDANCE ENFANT </p>
                        <button type="button" class="tendanceboutton btn-primary">DÉCOUVRIR</button>
                    </div>
                </div>
                </div>
        </div >
            </section >
            <section>
                <div class="container-fluid grey margingris">
                    <div class="row">
                        <div class="col-2 rounded ">
                            <img src={nikelogo} class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src={adidos}  class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src={nb} class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src={asics} class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src={jordanlogo} class="card-img-top marque"></img>
                        </div>
                        <div class="col-2 rounded ">
                            <img src={lacostelogo} class="card-img-top marque"></img>
                        </div>
                    </div>
                </div>
            </section>
            <footer  class="footer mt-5">
                <div class="footer-content">
                    <img src="src/img/AbiSHOPfooter.png" class="lelogo"></img>
                    <p>Découvrez notre sélection unique de streetwear chez Abishop,
                         où le style rencontre l'attitude urbaine, pour des tenues qui vous démarqueront à chaque instant.</p>
                
                <div class="icons">
                    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-youtube'></i></a>
                </div>

                </div>
                <div class="footer-content">
                    <h4 class="titrefooter">SHOP</h4>
                    <li> <a href="#">Femme</a></li>
                    <li> <a href="#">Homme</a></li>
                    <li> <a href="#">Enfant</a></li>
                    <li> <a href="#">Collection</a></li>
                    <li> <a href="#">Marque</a></li>
                    <li> <a href="#">Promo</a></li>
                </div>
                <div class="footer-content">
                    <h4 class="titrefooter">ENTREPRISE</h4>
                    <li> <a href="#">À propos de ABISHOP</a></li>
                    <li> <a href="#">Actualités </a></li>
                    <li> <a href="#">Carrières</a></li>
                    <li> <a href="#">Mission</a></li>
                </div>
                <div class="footer-content">
                    <h4 class="titrefooter">HELP</h4>
                    <li> <a href="#">Service Clients</a></li>
                    <li> <a href="#">Mon compte</a></li>
                    <li> <a href="#">Magasins</a></li>
                    <li> <a href="#">Mentions légales et confidentialité</a></li>
                    <li> <a href="#">Contact</a></li>
                </div>
            </footer>
        </>
    )
}

export default App
