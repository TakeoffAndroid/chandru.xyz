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
      <Margin top='24px'></Margin>
      <HeaderText text={contact.header}/>
      <Margin top='24px'></Margin>
      <SubHeaderText text={contact.subHeader}/>
      <Margin top='24px'></Margin>
      <ChipList items={ contact.tags } ></ChipList>
    </PageRoot>
  </>
}
