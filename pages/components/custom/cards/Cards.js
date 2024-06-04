import CardsStyled from "@/pages/components/custom/cards/Cards.styled"

const Cards = (props) => {
    return (
        <CardsStyled width={props.width} minheight={props.minheight}>
            {props.children}
        </CardsStyled>
    )
}

export default Cards