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
                                    <a class="nav-link mx-lg-2" href="App">Accueil</a>
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
                    <img class="card-img-top panier ms-3" src="img/panier.png"></img>
                    </a>
                </div>
            </nav>
            <div class="container leproduit bordered">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-7">
                        <img src="img/tshirtbeige.jpg" class="img-fluid m-0 photoshirt"></img>
                        <div class="row">
                            <div class="col-3 p-0">
                            <img src="img/beige1.jpg" class="img-fluid photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0">
                            <img src="img/beige2.jpg" class="img-fluid photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0">
                            <img src="img/beige3.jpg" class="img-fluid  photoshirtt"></img>
                            </div>
                            <div class="col-3 p-0 ">
                            <img src="img/beige4.jpg" class="img-fluid photoshirtt"></img>
                            </div>
                    </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h2 class="card-title texteachat mt-5">T-SHIRT COULEUR UNIE </h2>
                            <p class="card-text color ms-3 ">Couleur / Beige</p>
                            <div class="container mb-2 cerclecouleur">
                            <img src="img/beige.png" class="card-img-top cercle"></img>
                            <img src="img/cerclebleu.png" class="card-img-top cercle"></img>
                            <img src="img/cerclenoir.png" class="card-img-top cercle"></img>
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
                <img src="img/livraison.png" class="card-img-top livr mx-5 mt-2"></img>
                <img src="img/retour.png" class="card-img-top livr mx-5 mt-2"></img>
                <img src="img/paypal.png" class="card-img-top livr mx-5 mt-2"></img>
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
                            <img src="img/tshirtbleu.jpg" class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/tshirtorange.jpg" class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3 rounded ">
                            <img src="img/tshirtrouge.jpg" class="card-img-top habitss"></img>
                            <div class="card-body">
                            <h5 class="card-title mt-3 produitpromoo">T-shirt couleur unie bleu</h5>
                            <p class="card-text mt-2 prix">17,99€ <span class="maclasse"></span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <img src="img/tshirtnoir.jpg" class="card-img-top habitss"></img>
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
                            <img src="img/arte.jpg" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Arte veste</h5>
                                <p class="card-text mt-  prix ">80€ <span class="maclasse">130€</span></p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 rounded ">
                            <img src="img/paireasics.png" class="card-img-top habits"></img>
                            <div class="card-body">
                                <h5 class="card-title mt-3 produitpromo">Asics gel kayano 14 rose</h5>
                                <p class="card-text mt-3  prix ">110€ <span class="maclasse">170€</span> </p>
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