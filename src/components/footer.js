import "./style.css"

function Footer() {

    return(
        <div className="footer" id="contacts">
            <div className="footer__contact">
                <a href="">
                    <img src="../img/logo.png" alt="" />
                </a>
                <a href="">
                    <img src="../img/instagram.png" alt="" />
                </a>
                <a href=""> <img src="../img/facebook.png" alt="" />
                </a>
                <a href="">
                <img src="../img/twitter.png" alt="" />
                </a>
            </div>
            <div className="footer__text">
                <p>Our job is to filling your tummy with delicious food and with fast and free delivery.</p>
            </div>
        </div>
    )
}


export default Footer