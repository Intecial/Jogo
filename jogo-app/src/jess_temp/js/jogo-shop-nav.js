const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = ''
        <div class="shop-nav"> 
            <img src="images/jogo-logo.PNG" class="jogo-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="  what do you want to buy ?"></>
                </div>
                <a href="#"><img src="images/user.png" alt=""></></a>
                <a href="#"><img src="images/cart.png" alt=""></></a>
                <a href="#"><img src="images/seller.png" alt=""></></a>
            </div>
        <div class="sub-shop-nav">
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">recycled</a></li>
                <li class="link-item"><a href="#" class="link">eco</a></li>
                </ul>
            </div>
        </div>';
}

createNav();