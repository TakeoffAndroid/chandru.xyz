import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {Contact} from "../../component/models/profile_data";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {ChipList} from "../../component/common/chip";

type ContactProps = {
  contact: Contact
}

export const ContactPage = ({contact}: ContactProps) => {
  return <>
    <Banner image='/assets/images/banner_contact.png'></Banner>
    <PageRoot>
      <HeaderText text={contact.header}/>
      <SubHeaderText text={contact.subHeader}/>
      <ChipList items={ contact.tags } ></ChipList>
    </PageRoot>
  </>
}
