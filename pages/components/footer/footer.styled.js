import {styled} from "styled-components";

const FooterStyled = styled.div `
    width: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 40px;
    background-color: hsl(192, 100%, 9%);
    padding: 20px;

    .brand-logo {
        width: 90%;
        display: flex;
        /* margin-top: 250px; */
    }

    .copyright {
        width: 90%;
        display: flex;
        justify-content: flex-end;

        p {
            color: white;
            font-family: "Open Sans", sans-serif;
            font-weight: 400; 
            font-size: 0.7rem;       
        }

        @media screen and (max-width: 768px) {
            justify-content: center;
            align-items: center;
        }
    }

    .brand-info {
        width: 90%;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            row-gap: 40px;
        }
        
        .contacts {
            width: 40%;
            display: flex;
            flex-direction: column;
            row-gap: 35px;

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            .location {
                width: 100%;
                display: flex;
                column-gap: 25px;

                img {
                    width: 13px;
                    height: 18px;
                }

                p {
                    width: 70%;
                    color: white;
                    font-family: "Open Sans", sans-serif;
                    font-weight: 400;
                }
            }

            .contact-number {
                width: 100%;
                display: flex;
                column-gap: 20px;

                img {
                    width: 18px;
                    height: 18px;
                }

                p {
                    color: white;
                    font-family: "Open Sans", sans-serif;
                    font-weight: 400;
                }                                
            }

            .email {
                width: 100%;
                display: flex;
                column-gap: 20px;

                img {
                    width: 20px;
                    height: 16px;
                }

                p {
                    color: white;
                    font-family: "Open Sans", sans-serif;
                    font-weight: 400;
                }                
            }
        }

        .buttons {
            width: 40%;
            max-height: 128px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            row-gap: 20px;

            @media screen and (max-width: 768px) {
                width: 100%;
                flex-wrap: nowrap;
                align-items: flex-start;
                max-height: none;
            }

            a {
                color: white;
                font-family: "Open Sans", sans-serif;
                font-weight: 400;
                width: 100px;
                text-decoration: none;
            }
        }

        .affiliated-brands {
            width: 20%;
            display: flex;
            justify-content: center;
            column-gap: 20px;

            @media screen and (max-width: 768px) {
                width: 100%;
                align-items: center;
                margin-bottom: 30px;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }
    }
`

export default FooterStyled