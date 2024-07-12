import panier from "../src/img/panier.png"
import premier from "../src/img/first.jpg"
import veste from "../src/img/veste.jpg"
import  nike from "../src/img/nike.png"
import jeann from "../src/img/jeann.jpg"
import maillot from "../src/img/Maillot.jpg"
import tshirtbeige from "../src/img/tshirtbeige.jpg"
import plus from "../src/img/buttonplus.png"
import moin from "../src/img/buttonmoin.png"
import klarna from "../src/img/klarna.png"
import paypall from "../src/img/paypall.png"
import maestro from "../src/img/maestro.png"
import visa from "../src/img/visa.png"
import mastercard from "../src/img/mastercard.webp"
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
                                    <a class="nav-link mx-lg-2" href="#">Homme</a>
                                </li> <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Femme</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Collection</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="Achat.jsx">Marque</a>
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
                    <a aria-current="page" href="Panier" class="">
                    <img class="card-img-top panier ms-3" src={panier}></img>
                    </a>
                </div>
            </nav>

    <div class="container ">
        <h1 class="titrepanier">Panier</h1>
        <div class="row">
            <div class="col-md-8 mt-3">
                <div class="cart-item d-flex">
                    <div class="arrireplan">
                        <img src={tshirtbeige} class="img-fluid mt-3"></img>
                    </div>
                    <div class="ms-3 mt-5">
                        <p class="title">T-SHIRT COULEUR UNIE<span class="vert mx-3">En stock</span></p>
                        <p class="card-text mt-3  prixxx">12,99€ <span class="maclasssee">17,99€</span></p>
                        <div class="container élement">
                        <p class="ms-0 mx-4">Couleur :</p>
                        <p class="ms-0 mx-4">Beige clair</p>
                        <p class="mx-4">Taille : </p>
                        <p class="ms-0 mx-4">M</p>
                        </div>
                        <div class="container élement">
                        <p class="ms-0 mx-4">Référence :</p>
                        <p class="ms-0 mx-4"> 148741</p>
                        <p class=" mx-4">Total :</p>
                        <p class="ms-0 mx-4"> 12,99€</p>
                        </div>
                        <div class="container élementt">
                        <img src={plus} class="img-fluid plusetmoin mt-3"></img>
                        <input class="nombre " type="number" id="" name=""></input>
                        <img src={moin} class="img-fluid plusetmoin mt-3 "></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-3">
                <div class="coterprix">
                    <h5 class="remise">Remises</h5>
                    <p class="connectezvous">Connectez-vous pour utiliser vos offres personalisées ! </p>
                    <a href="Panier" class="">
                <button type="button" class=" ms-2 btn btn-outline-dark connexionoffre">CONNEXION</button>
             </a>
            <hr class="fine-linee"></hr>
            <div class="containermt-5">
        <div class="row aa">
            <div class="col-6">
                <p class="mb-0 connectezvous  ">Sous-total</p>
            </div>
            <div class="col-6">
                <p class="mb-0 adroite ">12,99€</p>
            </div>
        </div>
        
        <div class="row aa">
            <div class="col-6">
                <p class="mb-0 connectezvouss mt-2">Tu as économisé</p>
            </div>
            <div class="col-6 ">
                <p class="mb-0 adroitee mt-2">4,99 €</p>
            </div>
        </div>

            <hr class="fine-line"></hr>
        <div class="row aa">
            <div class="col-6">
                <p class="mb-0 totaldelacommande ">Total de la commande :</p>
            </div>
            <div class="col-6 ">
                <p class="mb-0 adroiteee ">12,99€</p>
            </div>
        </div>
            </div>
            <a href="Panier" class="">
                <button type="button" class=" ms-2 btn btn-outline-dark terminermacommande">TERMINER MA COMMANDE</button>
             </a>
             <p class="text-danger ">Soldes : jusqu'à -70% avec nouveaux articles soldés.</p>
             <p class="connectezvous" >Nous acceptons:</p>
             <div class="container mb-2 cerclecouleur">
                            <img  src={klarna} class="card-img-top cercle"></img>
                            <img  src={paypall} class="card-img-top cercle mx-2"></img>
                            <img src={maestro} class="card-img-top cercle mx-2"></img>
                            <img  src={visa}  class="card-img-top cercle mx-2"></img>
                            <img  src={mastercard} class="card-img-top cercle mx-2"></img>
                            </div>
            <p class="Inforsurlesprixetlesfraisdelivraison">Les prix et les frais de livraison ne sont validés que durant la finalisation de la commande.
                <br></br>Délai de rétraction de 30jours. Lisez à propos des retour et remboursement. 
            </p>
        </div>
    </div>
    </div>
    </div>

            </section>
    )
}

export default Homme 