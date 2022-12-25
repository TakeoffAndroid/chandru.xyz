import {Stack} from "@mui/material";
import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {About} from "../../component/models/profile_data";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";

type AboutProps = {
    about: About
}

export const AboutPage = ({about}: AboutProps) => {
    return <>
        <Banner image='/assets/images/banner_about.png'></Banner>
        <PageRoot>
            <Margin top='24px'></Margin>
            <HeaderText text={about.header}/>
            <Margin top='24px'></Margin>
            <SubHeaderText text={about.subHeader}/>
        </PageRoot>
    </>

}
