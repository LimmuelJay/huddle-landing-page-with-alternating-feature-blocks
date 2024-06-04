import MainStyled from "@/pages/components/main/main.styled";
import Banner from "@/pages/components/banner/banner"
import Footer from "@/pages/components/footer/footer"
import SignUp from "@/pages/components/signUpCard/signUpCard"
import FeatureMain from "@/pages/components/features/featureMain/FeatureMain"

const Main = () => {
    return (
        <MainStyled>
            <Banner />
            <FeatureMain />             
            <SignUp />
            <Footer />
        </MainStyled>
    )
}

export default Main