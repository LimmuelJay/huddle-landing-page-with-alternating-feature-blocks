import {styled} from "styled-components";

const Feature3Styled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 20px;
        row-gap: 40px;
    }

    .description3 {
        width: 40%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;

        @media screen and (max-width: 768px) {
            width: 50%;
            align-items: center;
        }

        @media screen and (max-width: 550px) {
            width: 90%;
        }

        h2 {
            color: hsl(192, 100%, 9%);
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1.8rem;

            @media screen and (max-width: 768px) {
                text-align: center;
                font-size: 2rem;
            }

            @media screen and (max-width: 550px) {
                font-size: 1.7rem;
            }

        }

        p {
            color: hsl(208, 11%, 55%);
            font-family: "Open Sans", sans-serif;
            font-weight: 400;
            font-size: 1rem;

            @media screen and (max-width: 768px) {
                text-align: center;
            }

            @media screen and (max-width: 550px) {
                font-size: 0.8rem;
                width: 70%;
            }
        }
    }

    .illustration3 {
        width: 30%;
        display: flex;

        @media screen and (max-width: 768px) {
            width: 60%;
        }

        img {
            width: 100%;
        }
    }
`

export default Feature3Styled