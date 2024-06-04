import FooterStyled from "@/pages/components/footer/footer.styled"

const Footer = () => {
    return (
        <FooterStyled>
            <div className="brand-logo">
                <img src="/assets/images/logo-white.svg" alt="logo" />
            </div>

            <div className="brand-info">
                <div className="contacts">
                    <div className="location">
                        <img src="/assets/images/icon-location.svg" alt="location icon" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                    <div className="contact-number">
                        <img src="/assets/images/icon-phone.svg" alt="contact number icon"/>
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="email">
                        <img src="/assets/images/icon-email.svg" alt="email icon" />
                        <p>example@huddle.com</p>
                    </div>
                </div>

                <div className="buttons">
                    <a href="">About Us</a>
                    <a href="">What We Do</a>
                    <a href="">FAQ</a>
                    <a href="">Career</a>
                    <a href="">Blog</a>
                    <a href="">Contact Us</a>
                </div>

                <div className="affiliated-brands">
                    <img src="/assets/images/icon-facebook.svg" alt="facebook icon" />
                    <img src="/assets/images/icon-twitter.svg" alt="twitter icon" />
                    <img src="/assets/images/icon-instagram.svg" alt="instagram icon" />
                </div>
            </div>

            <div className="copyright">
                <p>© Copyright 2019 Huddle. All rights reserved.</p>
            </div>

        </FooterStyled>
    )
}

export default Footer