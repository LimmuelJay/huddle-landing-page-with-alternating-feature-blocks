import { styled } from "styled-components";

const BannerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/assets/images/bg-hero-desktop.svg');
    background-color: hsl(193, 100%, 96%);
    /* margin-bottom: 100px; */

    @media screen and (max-width: 450px) {
        row-gap: 50px;
    }

    .header {
        width: 90%;
        display: flex;
        min-height: 150px;
        justify-content: space-between;
        align-items: center;

        .logo-wrapper {
            width: 20%;
            /* height: 100%; */
            display: flex;

            img {
                width: 100%;
                height:100%;
            }

            @media screen and (max-width: 768px) {
                width: 30%;
            }

            @media screen and (max-width: 425px) {
                width: 40%;
            }
        }

        .header-actions-wrapper {
            width: 20%;
            height: 43px;
            display: flex;

            @media screen and (max-width: 768px) {
                width: 25%;
            }

            @media screen and (max-width: 425px) {
                width: 40%;
            }

            button {
                font-size: 15px;
                width: 100%;
                height: 100%;
                color: hsl(192, 100%, 9%);
                font-weight: bold;
                border-width: 0px;
                border-radius: 28px;
                background: white;
            }

            button:hover {
                background: grey;
            }
        }
    }

    .feature {
        width: 90%;
        display: flex;
        min-height: 600px;
        align-items: center;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            row-gap: 50px;
        }

        .feature-text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 20px;

            @media screen and (max-width: 768px) {
                align-items: center;
            }

            .title {
                width: 80%;

                h2 {
                    width: 100%;
                    font-family: "Poppins", sans-serif;
                    color: hsl(192, 100%, 9%);
                    font-weight: 600;
                    font-size: 2rem;
                    line-height: 1.4;
                    
                    @media screen and (max-width: 768px) {
                        text-align: center;
                    }
                }
            }

            .description {
                width: 90%;

                p {
                    width: 100%;
                    font-family: "Open Sans", sans-serif;
                    font-weight: 400;
                    font-size: 1.1rem;
                    line-height: 1.4;

                    @media screen and (max-width: 768px) {
                        text-align: center;
                    }
                }
            }

            .action {
                width: 100%;
                display: flex;

                @media screen and (max-width: 768px) {
                    justify-content: center;
                }

                .get-started-button {
                    width: 50%;
                    display: flex;

                    @media screen and (max-width: 425px) {
                        width: 60%;
                    }

                    button {    
                        font-size:15px;
                        width:100%;
                        height:45px;
                        color: white;
                        font-weight:bold;
                        border-width: 0px;
                        border-radius: 28px;
                        background: hsl(322, 100%, 66%);
                    }

                    button:hover {
                        background: grey;
                    }
                }
            }
        }

        .device-illustration {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;

                @media screen and (max-width: 768px) {
                    width: 80%;
                }
            }
        }
    }

`

export default BannerStyled;