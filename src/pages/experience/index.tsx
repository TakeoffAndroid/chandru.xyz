import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {Experience} from "../../component/models/profile_data";

type ExperienceProps = {
  experience: Experience
}

export const ExperiencePage = ({experience}: ExperienceProps) => {
  return <>
    <Banner image='/assets/images/banner_experience.png'></Banner>
    <PageRoot>
      <Margin top='24px'></Margin>
      <HeaderText text={experience.header}/>
      <Margin top='24px'></Margin>
      <SubHeaderText text={experience.subHeader}/>
    </PageRoot>
  </>

}
