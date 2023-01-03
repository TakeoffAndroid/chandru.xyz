import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {Achievement} from "../../component/models/profile_data";
import {ChipList} from "../../component/common/chip";

type AchievementProps = {
  achievement: Achievement
}

export const AchievementPage = ({achievement}: AchievementProps) => {
  return <>
    <Banner image='/assets/images/banner_achievement.png'></Banner>
    <PageRoot>
      <HeaderText text={achievement.header}/>
      <SubHeaderText text={achievement.subHeader}/>
      <ChipList items={ achievement.tags } ></ChipList>
    </PageRoot>
  </>

}
