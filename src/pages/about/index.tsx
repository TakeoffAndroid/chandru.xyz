import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {About} from "../../component/models/profile_data";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {ChipList} from "../../component/common/chip";

type AboutProps = {
    about: About
}

export const AboutPage = ({about}: AboutProps) => {
    return <>
        <PageRoot>
            <Margin top={ "48px" }/>
            <Banner image='/assets/images/banner_about.png'></Banner>
            <Margin top={ "24px" }/>
            <HeaderText text={about.header}/>
            <SubHeaderText text={about.subHeader}/>
            <Margin top={ "16px" }/>
            <ChipList items={ about.tags } ></ChipList>
        </PageRoot>
    </>

}