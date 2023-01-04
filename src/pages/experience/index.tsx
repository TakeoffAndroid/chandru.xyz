import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {Experience} from "../../component/models/profile_data";
import {ChipList} from "../../component/common/chip";

type ExperienceProps = {
  experience: Experience
}

export const ExperiencePage = ({experience}: ExperienceProps) => {
  return <>
    <Banner image='/assets/images/banner_experience.png'></Banner>
    <PageRoot>
      <HeaderText text={experience.header}/>
      <SubHeaderText text={experience.subHeader}/>
      <Margin top={ "16px" }/>
      <ChipList items={ experience.tags } ></ChipList>
    </PageRoot>
  </>

}
