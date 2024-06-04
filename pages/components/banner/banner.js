import BannerStyled from "@/pages/components/banner/banner.styled"
import Cards from "@/pages/components/custom/cards/Cards"

const Banner = () => {
    return (
        <BannerStyled>
            <div className="header">
                <div className="logo-wrapper">
                    <img src="/assets/images/logo.svg" alt="logo" />
                </div>

                <div className="header-actions-wrapper">
                    <button>Try It Free</button>
                </div>
            </div>

            <div className="feature">
                <div className="feature-text">
                    <div className="title">
                        <h2>Build The Community Your Fans Will Love</h2>
                    </div>
                    <div className="description">
                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    </div>
                    <div className="action">
                        <div className="get-started-button">
                            <button>Get Started For Free</button>   
                        </div>
                    </div>
                </div>

                <div className="device-illustration">
                    <img src="/assets/images/illustration-mockups.svg" alt="devices" />
                </div>
            </div>
        </BannerStyled>
    )
}

export default Banner