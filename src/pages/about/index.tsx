import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import {PageData} from "../../component/models/profile_data";
import {Margin} from "../../component/common/margin";
import {Banner} from "../../component/common/banner";
import {PageRoot} from "../../component/common/page";
import {ChipList} from "../../component/common/chip";

type PageContentProps = {
    bannerUrl: string,
    pageData: PageData
}

export const PageContent = ({bannerUrl, pageData}: PageContentProps) => {
    return <>
        <PageRoot>
            <Margin top={"24px"}/>
            <Banner image={bannerUrl}></Banner>
            <Margin top={"24px"}/>
            <HeaderText text={pageData.header}/>
            <SubHeaderText text={pageData.subHeader}/>
            <Margin top={"16px"}/>
            <ChipList items={pageData.tags}></ChipList>
        </PageRoot>
    </>

}
