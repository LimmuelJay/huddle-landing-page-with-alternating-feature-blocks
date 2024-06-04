import {styled} from "styled-components"

const SignUpStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .colored {
        width: 100%;
        height: 200px;
        background-color: hsl(192, 100%, 9%);
    }

    .card-div {
        width: 60%;
        display: flex;
        position: relative;
        top: 130px;

        @media screen and (max-width: 768px) {
            width: 80%;
        }
    }

    .sign-up-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 30px;

        
        .sign-up-card-title {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {
                color: hsl(192, 100%, 9%);
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 1.7rem;
                text-align: center;

                @media screen and (max-width: 375px) {
                    font-size: 1.4rem;
                }
            }
        }

        .action {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 40px;
            align-items: center;

            button {
                font-size:18px;
                width:280px;
                height:60px;
                color: white;
                border-width: 0px;
                font-weight: 600;
                border-radius: 28px;
                background: hsl(322, 100%, 66%);

                @media screen and (max-width: 375px) {
                    font-size: 16px;
                    width: 220px;
                    height: 50px;
                }
            }

            button:hover {
                background: grey;
            }
        }
    }
`

export default SignUpStyled