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
    <Banner image='/assets/images/banner_education.png'></Banner>
    <PageRoot>
      <Margin top='24px'></Margin>
      <HeaderText text={education.header}/>
      <Margin top='24px'></Margin>
      <SubHeaderText text={education.subHeader}/>
      <Margin top='24px'></Margin>
      <ChipList items={ education.tags } ></ChipList>
    </PageRoot>
  </>

}
