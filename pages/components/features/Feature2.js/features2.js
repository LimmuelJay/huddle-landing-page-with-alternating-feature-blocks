import Feature2Styled from "@/pages/components/features/Feature2.js/features2.styled"

const Features2 = (props) => {
    return (
        <Feature2Styled>
            <div className="description2">
                <h2>Flowing Conversations</h2>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
            </div>

            <div className="illustration2">
                <img src="/assets/images/illustration-flowing-conversation.svg" alt="illustration" />
            </div>
        </Feature2Styled>     
    )
}

export default Features2