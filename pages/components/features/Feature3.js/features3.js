import Feature3Styled from "@/pages/components/features/Feature3.js/features3.styled"

const Features3 = () => {
    return (
        <Feature3Styled>
            <div className="description3">
                <h2>Your Users</h2>
                <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>

            <div className="illustration3">
                <img src="/assets/images/illustration-your-users.svg" alt="illustration" />
            </div>
        </Feature3Styled>             
    )
}

export default Features3