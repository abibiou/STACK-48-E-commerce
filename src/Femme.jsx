import robe from "../src/img/robe.jpg"
import panier from "../src/img/panier.png"
import filtre from "../src/img/filtre.png"
import nb2 from "../src/img/nb2.jpeg"
import nb1 from "../src/img/nbfemme1.webp"
import jeanfemme from "../src/img/jeanfemme.jpg"
import jeanmeme3 from "../src/img/jeanfmeme3.jpg"
import jeanfemme2 from "../src/img/jeanfemme2.jpg"
import jeanfemme4 from "../src/img/jeanfemme4.jpg"
import jeanfemme5 from "../src/img/jeanfemme5.jpg"
import vestefemme4 from "../src/img/vestefemme4.jpg"
import vsetefemme2 from "../src/img/vsetefemme2.jpg"
import vestefemme3 from "../src/img/vestefemme3.jpg"
import niketechfemme from "../src/img/niketechfemme.jpg"
import niketechfemme3 from "../src/img/niketechfemme3.jpg"
import bonnet2 from "../src/img//bonnet2.jpg"
import bonnet from "../src/img/bonnet.jpg"
import bonnet3 from "../src/img/bonnet3$.jpg"
import bonnet4 from "../src/img/bonnet4.jpg"
import o1 from "../src/img/o1.jpg"
import o14 from "../src/img/o14.jpg"
import p2 from "../src/img/p2.jpg"
import o3 from "../src/img/o3.jpg"
function Homme() {
    return (

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
                                    <a class="nav-link mx-lg-2" href="#">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="Homme">Homme</a>
                                </li> <li class="nav-item">
                                    <a class="nav-link mx-lg-2 active" aria-current="page" href="Femme">Femme</a>
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
                    <a href="Achat" class="">
                    <img class="card-img-top panier ms-3" src={panier}></img>
                    </a>
                </div>
            </nav>

            <div class="container-fluid">
                <div class="row mt-3">
                    <div class="col-12 ">
                        <button type="button" class="btn btn-primary boutonn">Découvrir</button>
                        <img class="card-img-top gazelle" src={robe}></img>
                        <h1 class="card-title textegazelle">DÉCOUVREZ NOS ROBES D'ÉTÉ EN <br></br>PROMO : STYLE ET FRAÎCHEUR À PRIX LÉGER.</h1>

                    </div>
                    <button type="button" class="btn btn-primary boutonn">Découvrir</button>
                </div>
            </div>

            <section>
                <div class="container">
                    <div class="image-container mt-5">
                        <p>Filtrer</p>
                        <a href="#">
                            <img src={filtre} class="filtre mb-3"></img>
                        </a>
                    </div>
                </div>
                <div class="container">
                    <h6 class="tshirttitre mt-3"> Découvrez la nouvelle collection de New Balance jusqu'à -40%  </h6>
                </div>
                <div class="container-fluid ms-4 humg">
                    <div class="row mt-1">
                        <div class="col-sm-2 col-md-2 col-lg-2 rounded mb-5">
                            <div class="offcanvas-body mt-3">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <h4>Femme</h4>
                                        <h5>Soldes jusqu'à -50%</h5>
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#">Voir tout</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">À partir de 40%</a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">T-shirt et chemises</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Shorts et maillots de bain</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Pantalons et jeans</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Sweats à capuches et pulls</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-2  col-lg-5 rounded m-0 ">

                            <img src={nb2} class="card-img-top nb"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo ms-4">New balance 327</h5>
                                <p class="card-text mt-2 prix ms-4">107,99€ <span class="maclasse">180€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-2 col-lg-5  rounded m-0">
                            <img src={nb1} class="card-img-top nbb"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >New balance 327</h5>
                                <p class="card-text  mt-2 prix">107,99€ <span class="maclasse">180€</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container">
                    <h6 class="tshirttitre mt-5"> Nos lot de 2 shorts en promotions </h6>
                </div>
                <div class="container-fluid ms-4">
                    <div class="row mt-1">
                        <div class=" col-lg-2 rounded ">
                            <div class="offcanvas-body mb-5">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <h5>Marque</h5>
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#">Adidas</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Nike</a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Arte</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Corteiz</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Puma</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Voir tout</a>
                                    </li>
                                    <br></br>
                                    <h5>Nouveautés</h5>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Under Armour</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Asics</a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">New Balance</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Palms Angel</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class=" col-lg-2 mx-4 rounded ">
                            <img src={jeanfemme} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                        </div>
                        <div class=" col-lg-2  mx-4 rounded ">
                            <img  src={jeanmeme3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 ">
                            <img  src={jeanfemme2} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 ">
                            <img  src={jeanfemme4} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-4">
                    <h6 class="tshirttitre"> Les baskets en tendance </h6>
                </div>
                <div class="container-fluid ms-4 ">
                    <div class="row mt-1">
                        <div class="col-lg-2 mb-2 rounded ">
                            <div class="offcanvas-body mt-3">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <h5>Inspiration</h5>
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#">Voir tout</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">White summer</a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Tendances du moment</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Voir tout</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Polo </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">T-shirt</a>
                                    </li>
                                    <br></br>
                                    <h5>Nouveautés</h5>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Chemises</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Pantalons</a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Jeans</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Shorts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class=" col-lg-2 mx-4 rounded ">
                            <img src={jeanfemme5} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Dunk</h5>
                                <p class="card-text mt-2 prix">129,99€</p>
                            </div>
                        </div>
                        <div class="  col-lg-2 mx-4 rounded ">
                            <img src={vestefemme4}  class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >Air Max TN</h5>
                                <p class="card-text  mt-2 prix">169,99€</p>
                            </div>
                        </div>
                        <div class=" col-lg-2 mx-4">
                            <img  src={vsetefemme2} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Air max 90</h5>
                                <p class="card-text  mt-2 prix">159,99€</p>
                            </div>
                        </div>
                        <div class=" col-lg-2  mx-4">
                            <img  src={vestefemme3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Dunk</h5>
                                <p class="card-text  mt-2 prix">129,99€</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h6 class="tshirttitre mt-5">Nike Sportswear Tech Fleece Windrunner </h6>
                </div>
                <div class="container-fluid ms-4 ps-2">
                    <div class="row mt-1">

                        <div class="col-sm-6 col-md-6 col-lg-2  rounded ">
                            <div class="offcanvas-body mt-3">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#"></a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <br></br>
                                    <h5></h5>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        <div class="col-sm-5 col-md-2  col-lg-5 rounded m-0 ">

                            <img src={niketechfemme} class="card-img-top nb"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo ms-4">New balance 327</h5>
                                <p class="card-text mt-2 prix ms-4">107,99€ <span class="maclasse">180€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-5 col-md-2 col-lg-5  rounded m-0">
                            <img src={niketechfemme3} class="card-img-top nbb"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >New balance 327</h5>
                                <p class="card-text  mt-2 prix">107,99€ <span class="maclasse">180€</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h6 class="tshirttitre mt-5">Les meilleurs maillots du moment </h6>
                </div>
                <div class="container-fluid ms-4 ps-2">
                    <div class="row mt-1">

                        <div class="col-sm-6 col-md-6 col-lg-2  rounded ">
                            <div class="offcanvas-body mt-3">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#"></a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <br></br>
                                    <h5></h5>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 mt-3 rounded ">

                            <img src={bonnet2} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike France 2024</h5>
                                <p class="card-text mt-2 prix">107,99€ <span class="maclasse"></span></p>
                            </div>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mt-3  mx-4 rounded ">
                            <img src={bonnet} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >Maillot Adidas Mexique 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 mt-3 ">
                            <img src={bonnet3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-Bas 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4  mt-3">
                            <img src={bonnet4} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-De-Galles 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                    </div>
                </div>   <div class="container">
                    <h6 class="tshirttitre mt-5">Les meilleurs maillots du moment </h6>
                </div>
                <div class="container-fluid ms-4 ps-2">
                    <div class="row mt-1">

                        <div class="col-sm-6 col-md-6 col-lg-2  rounded ">
                            <div class="offcanvas-body mt-3">
                                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" aria-current="page" href="#"></a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li> <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <br></br>
                                    <h5></h5>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#"></a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 mt-3 rounded ">

                            <img src={o1} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike France 2024</h5>
                                <p class="card-text mt-2 prix">107,99€ <span class="maclasse"></span></p>
                            </div>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mt-3  mx-4 rounded ">
                            <img src={o14} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >Maillot Adidas Mexique 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 mt-3 ">
                            <img src={p2} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-Bas 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4  mt-3">
                            <img src={o3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-De-Galles 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
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
        </section>

    )
}

export default Homme 