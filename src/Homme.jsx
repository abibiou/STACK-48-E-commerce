
import gazelle from "../src/img/gazelle.jpg"
import panier from "../src/img/panier.png"
import filtre from "../src/img/filtre.png"
import tshirtnoir from "../src/img/tshirtnoir.jpg"
import tshirtrouge from "../src/img//tshirtrouge.jpg"
import tshirtbleu from "../src/img/tshirtbleu.jpg"
import tshirtbeige from "../src/img/tshirtbeige.jpg"
import short1 from "../src/img/short1.jpg"
import short2 from "../src/img/short2.jpg"
import short3 from "../src/img/short3.jpg"
import short4 from "../src/img/short 4.jpg"
import dunk1 from "../src/img/dunk1.png"
import tnblack from "../src/img/tnblack.jpg"
import airmax90 from "../src/img/airmax90.png"
import dunk3 from "../src/img/dunk3.png"
import maillotfr from "../src/img/maillotfr.png"
import maillotmexico from "../src/img/maillotmexico.webp"
import maillotpb from "../src/img/maillotpb.png"
import maillotpdg from "../src/img/maillotpdg.webp"
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
                                    <a class="nav-link mx-lg-2 active" aria-current="page" href="Homme">Homme</a>
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

            <div class="container-fluid">
                <div class="row mt-3">
                    <div class="col-12 ">
                    <button type="button" class="btn btn-primary boutonn">Découvrir</button>
                         <img class="card-img-top gazelle" src={gazelle}></img>
                            <h1 class="card-title textegazelle">ADIDAS GAZELLE : L'ICÔNE INTEMPORELLE  DE STYLE <br></br> ET DE CONFORT EST DE RETOUR</h1>
                           
                        </div>
                        <button type="button" class="btn btn-primary boutonn">Découvrir</button>
                    </div>
                </div>

            <section>
                <div class="container">
                    <div class="image-container mt-5">
                        <p class="filtrer">Filtrer</p>
                        <a href="#">
                            <img src={filtre} class="filtre mb-3"></img>
                        </a>
                    </div>
                </div>
                <div class="container">
                    <h6 class="tshirttitre mt-3"> Sortez avec les meilleurs t-shirt à couleur unique pour l'été  </h6>
                </div>
                <div class="lemenu container-fluid ms-4">
                    <div class="row mt-1">
                        <div class="col-sm-2 col-md-2 col-lg-2 rounded mb-5">
                            <div class="offcanvas-body mt-3">
                                <ul class="zizou navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <h4>Homme</h4>
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

                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Voir tout</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Basiques</a>
                                    </li><li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Accessoires</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-lg-2" href="#">Chaussures</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sx-6 col-sm-6 col-md-5  col-lg-2 mx-4 rounded  ">
                           <div class="bleu">
                            <img src={tshirtbleu} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <a href="Achattshirtbleu">
                                <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                                 </a>
                                <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sx-6 col-sm-6 col-md-5 col-lg-2  mx-4 rounded ">
                        <div class="nwar">
                            <img src={tshirtnoir} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >T-shirt couleur unie noir</h5>
                                <p class="card-text  mt-2 prix">12,99€ <span class="maclasse">17,99€</span></p>
                            </div>
                         </div>
                        </div>
                        <div class="col-sx-6 col-sm-6 col-md-5 col-lg-2 mx-4 ">
                            <div class="red">
                            <img src={tshirtrouge} class="card-img-top habitss"></img>
                            <div class="card-body">
                            <a href="Achat">
                                <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie rouge</h5>
                                </a>
                                <p class="card-text  mt-2 prix">12,99€ <span class="maclasse">17,99€</span></p>
                            </div>
                            
                             </div>
                        </div>
                        <div class="col-sx-6 col-sm-6 col-md-5 col-lg-2 mx-4 ">
                            <div class="bbeige">
                        <a href="Achat">
                            <img src={tshirtbeige} class="card-img-top habitss"></img>

                            </a>
                            <div class="card-body">
                                <a href="Achat">
                                <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie beige</h5>
                                </a>
                                <p class="card-text  mt-2 prix">12,99€ <span class="maclasse">17,99€</span></p>
                            </div>
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
                                <ul class="zizou navbar-nav justify-content-center flex-grow-1 pe-3">
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
                        <div class="shortun">
                            <img src={short1} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                              </div>
                        </div>
                        <div class=" col-lg-2  mx-4 rounded ">
                             <div class="shortdeux">
                            <img src={short2} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                              </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 ">
                             <div class="shorttrois">
                            <img src={short3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
                              </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 ">
                             <div class="shortquatre">
                            <img src={short4} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Lot de 2 shorts Regular Fit en molleton</h5>
                                <p class="card-text  mt-2 prix ">22,99€ <span class="maclasse">27,99€</span></p>
                            </div>
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
                                <ul class="zizou navbar-nav justify-content-center flex-grow-1 pe-3">
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
                            <img  src={dunk1} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Dunk</h5>
                                <p class="card-text mt-2 prix">129,99€</p>
                            </div>
                        </div>
                        <div class="  col-lg-2 mx-4 rounded ">
                            <img src={tnblack} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >Air Max TN</h5>
                                <p class="card-text  mt-2 prix">169,99€</p>
                            </div>
                        </div>
                        <div class=" col-lg-2 mx-4">
                            <img src={airmax90} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Air max 90</h5>
                                <p class="card-text  mt-2 prix">159,99€</p>
                            </div>
                        </div>
                        <div class=" col-lg-2  mx-4">
                            <img src={dunk3} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Dunk</h5>
                                <p class="card-text  mt-2 prix">129,99€</p>
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
                                <ul class="zizou navbar-nav justify-content-center flex-grow-1 pe-3">
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

                            <img src={maillotfr} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike France 2024</h5>
                                <p class="card-text mt-2 prix">107,99€ <span class="maclasse"></span></p>
                            </div>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mt-3  mx-4 rounded ">
                            <img src={maillotmexico} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo" >Maillot Adidas Mexique 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4 mt-3 rounded ">
                            <img src={maillotpb} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-Bas 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-2 mx-4  mt-3 rounded">
                            <img src={maillotpdg} class="card-img-top habitss"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromoo">Maillot Nike Pays-De-Galles 2024</h5>
                                <p class="card-text  mt-2 prix">102,99€</p>
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