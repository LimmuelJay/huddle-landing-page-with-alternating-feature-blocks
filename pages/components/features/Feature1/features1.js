import Feature1Styled from "@/pages/components/features/Feature1/features1.styled"

const Features1 = (props) => {
    return (
        <Feature1Styled>
            <div className="description1">
                <h2>Grow Together</h2>
                <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>

            <div className="illustration1">
                <img src="/assets/images/illustration-grow-together.svg" alt="illustration" />
            </div>
        </Feature1Styled>
    )
}

export default Features1
