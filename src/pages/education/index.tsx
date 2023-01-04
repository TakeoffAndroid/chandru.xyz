import {Stack} from "@mui/material";
import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Education} from "../../component/models/profile_data";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {ChipList} from "../../component/common/chip";

type EducationProps = {
  education: Education
}

export const EducationPage = ({education}: EducationProps) => {
  return <>
    <PageRoot>
      <Margin top={ "48px" }/>
      <Banner image='/assets/images/banner_education.png'></Banner>
      <Margin top={ "24px" }/>
      <HeaderText text={education.header}/>
      <SubHeaderText text={education.subHeader}/>
      <Margin top={ "16px" }/>
      <ChipList items={ education.tags } ></ChipList>
    </PageRoot>
  </>

}
