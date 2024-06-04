import FeatureMainStyled from "@/pages/components/features/featureMain/FeatureMain.styled"
import Cards from "@/pages/components/custom/cards/Cards"
import Features1 from "@/pages/components/features/Feature1/features1"
import Features2 from "@/pages/components/features/Feature2.js/features2"
import Features3 from "@/pages/components/features/Feature3.js/features3"

const FeatureMain = (props) => {
    return (
        <FeatureMainStyled>
            <Cards width="80%" minheight="400px">
                <Features1/>
            </Cards>

            <Cards width="80%" minheight="400px">
                <Features2/>
            </Cards>

            <Cards width="80%" minheight="400px">
                <Features3/>
            </Cards> 
        </FeatureMainStyled>
    )
}

export default FeatureMain