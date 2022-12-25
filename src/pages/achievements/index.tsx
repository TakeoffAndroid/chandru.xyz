import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {Achievement} from "../../component/models/profile_data";

type AchievementProps = {
  achievement: Achievement
}

export const AchievementPage = ({achievement}: AchievementProps) => {
  return <>
    <Banner image='/assets/images/banner_achievement.png'></Banner>
    <PageRoot>
      <Margin top='24px'></Margin>
      <HeaderText text={achievement.header}/>
      <Margin top='24px'></Margin>
      <SubHeaderText text={achievement.subHeader}/>
    </PageRoot>
  </>

}
