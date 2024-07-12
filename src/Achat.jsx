import panier from "../src/img/panier.png"
import tshirtbeige from "../src/img/tshirtbeige.jpg"
import beige1 from "../src/img/beige1.jpg"
import beige2 from "../src/img/beige2.jpg"
import beige3 from "../src/img/beige3.jpg"
import beige4 from "../src/img/beige4.jpg"
import beige from "../src/img/beige.png"
import cerclebleu from "../src/img/cerclebleu.png"
import cerclenoir from "../src/img/cerclenoir.png"
import tshirtnoir from "../src/img/tshirtnoir.jpg"
import tshirtrouge from "../src/img/tshirtrouge.jpg"
import tshirtbleu from "../src/img/tshirtbleu.jpg"
import tshirtorange from "../src/img/tshirtorange.jpg"
import livraison from "../src/img/livraison.png"
import retour from "../src/img/retour.png"
import paypal from "../src/img/paypal.png"
import arte from "../src/img/arte.jpg"
import paireasics from "../src/img/paireasics.png"
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
                                    <a class="nav-link mx-lg-2" href="Femme">Femme</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Collection</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2 active" aria-current="page" href="Achat.jsx">Marque</a>
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
            <div class="container leproduit bordered">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-7">
                        <img src={tshirtbeige} class="img-fluid m-0 photoshirt"></img>
                        <div class="row g-0">
                            <div class="col-3 p-0">
                            <img src={beige1} class="img-fluid photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0">
                            <img src={beige2} class="img-fluid photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0">
                            <img src={beige3} class="img-fluid  photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0 ">
                            <img src={beige4} class="img-fluid photoshirtt"></img>
                            </div>
                    </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h2 class="card-title texteachat mt-5">T-SHIRT COULEUR UNIE </h2>
                            <p class="card-text color ms-3 ">Couleur / Beige</p>
                            <div class="container mb-2 cerclecouleur">
                            <img src={beige} class="card-img-top cercle"></img>
                            <img src={cerclebleu} class="card-img-top cercle"></img>
                            <img src={cerclenoir} class="card-img-top cercle"></img>
                            </div>
                            <p class="card-text mt-3  ms-3  prixx">12,99€ <span class="maclassse">17,99€</span></p>
                            <div class="container">
                            <button type="button" class=" ms-2 btn btn-outline-dark boutonnn">S</button>
                            <button type="button" class=" ms-2  btn btn-outline-dark boutonnnn">M</button>
                            <button type="button" class=" ms-2  btn btn-outline-dark boutonnnnn">L</button>
                            <button type="button" class=" ms-2 btn btn-outline-dark boutonnnnnn">XL</button>
                            <button type="button" class=" ms-2 btn btn-outline-dark boutonnnnnnn">XXL</button>
                            </div>
                            <div class="container">
                            <a href="Panier" class="">
                            <button type="button" class=" ms-2 btn btn-outline-dark ajtpanier">AJOUTER AU PANIER</button>
                            </a>
                            </div>
                            <p class="descriptionmt ms-3">Description</p>
                            <p class="card-text  mt-2 ms-3 descriptionn ">Lorem ipsum dolor sit amet, consectetur
                            dolor sit amet, consectetur adipisicing elit. Autem earum ea harum laudantium 
                            doloribus, magnam, error sed modi,
                            dolor sit amet, consectetur adipisicing elit. Autem earum ea harum laudantium 
                            doloribus, magnam, error sed modi, et maxime consequatur fugiat placeat vitae
                             eaque a incidunt ex. Est, pariatur!</p>
                             <p class="ms-3">Matière</p>
                            <p class="card-text  mt-2  ms-3 descriptionn">100% cotton / Matière Recyclable</p>
                            <p class="ms-3">Fabrication</p>
                            <p class="card-text  mt-2  ms-3 descriptionn">Fabriqué en Italie</p>
                            <div class="container">
            <hr class="fine-line"></hr>
            </div>
            <div class="container livraison">
                <img src={livraison} class="card-img-top livr mx-5 mt-2"></img>
                <img src={retour} class="card-img-top livr mx-5 mt-2"></img>
                <img src={paypal} class="card-img-top livr mx-5 mt-2"></img>
            </div>
            <div class="container livraison">
            <p class="textlivraison mx-4 mt-1">Livraison offerte sous 3 à 4 jours</p>
            <p class="textlivraison mx-4 mt-1">Retours gratuits sous 30 jours</p>
            <p class="textlivraison mx-4 mt-1">Payez en 4X sans frais avec PayPal</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="container">
            <hr class="fine-line"></hr>
            </div>
            <section>
                <div class="container">
                    <p>NOUS VOUS CONSEILLONS ÉGALEMENT</p>
                    <div class="row mt-3">
                        
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={tshirtbleu} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={tshirtorange} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src={tshirtrouge} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src={tshirtnoir} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                <p>CONSULTÉ RÉCEMMENT</p>
                    <div class="row mt-3">
                        
                        <div class="col-sm-6 col-md-6 col-lg-6 rounded ">
                            <img src={arte} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Arte veste</h5>
                                <p class="card-text mt-  prix ">80€ <span class="maclasse">130€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 rounded ">
                            <img src={paireasics} class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Asics gel kayano 14 rose</h5>
                                <p class="card-text mt-3  prix ">110€ <span class="maclasse">170€</span> </p>
                            </div>
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
        </section>

    )
}

export default Homme 