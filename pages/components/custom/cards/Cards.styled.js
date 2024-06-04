import { styled } from "styled-components";

const CardsStyled = styled.div`
    width: ${props => (props.width ? props.width : 'auto')};
    min-height: ${props => (props.minheight ? props.minheight : 'auto')};
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: -3px -3px 10px grey;
    row-gap: 50px;
    background-color: white;
`

export default CardsStyled