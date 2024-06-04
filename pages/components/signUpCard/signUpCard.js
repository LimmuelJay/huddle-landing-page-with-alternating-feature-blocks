import SignUpStyled from "@/pages/components/signUpCard/signUpCard.styled"
import Cards from "@/pages/components/custom/cards/Cards"

const SignUp = (props) => {
    return (
        <SignUpStyled>
            <div className="card-div">
                <Cards width='100%' minheight="300px">
                    <div className="sign-up-content">
                        <div className="sign-up-card-title">
                            <h2>Ready To Build Your Community?</h2>
                        </div>
                        <div className="action">
                            <button>Get Started For Free</button>
                        </div>
                    </div>
                </Cards>
            </div>
            <div className="colored"></div>
        </SignUpStyled>
    )
}

export default SignUp