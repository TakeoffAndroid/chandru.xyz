import * as React from 'react';
import {PageContent} from "../about";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "../../component/models/profile_data";
import {useFetch} from "../../component/hooks/useFetch";
import {PageRoot} from "../../component/common/page";
import {ContentLoading} from "../../component/common/loading";
import {API_URL} from "../../utils/constants";

const PageContentFrame = () => {
    const [isLoaded, error, result] = useFetch(API_URL.ABOUT_ME)
    if (error) {
        return <PageRoot>
            <div> Error:</div>;
        </PageRoot>
    } else if (!isLoaded) {
        return <ContentLoading></ContentLoading>
    } else {
        const profileData: ProfileData = JSON.parse(JSON.stringify(result));
        return <Routes>
            <Route path="/" element={<Navigate to="/about"/>}/>
            <Route path="/about" element={<PageContent bannerUrl={"/assets/images/banner_about.png"} pageData={profileData.about}/>}/>
            <Route path="/experience" element={<PageContent bannerUrl={"/assets/images/banner_experience.png"} pageData={profileData.experience}/>}/>
            <Route path="/education" element={<PageContent bannerUrl={"/assets/images/banner_education.png"} pageData={profileData.education}/>}/>
            <Route path="/achievement" element={<PageContent bannerUrl={"/assets/images/banner_achievement.png"} pageData={profileData.achievement}/>}/>
            <Route path="/contact" element={<PageContent bannerUrl={"/assets/images/banner_contact.png"} pageData={profileData.contact}/>}/>
        </Routes>;
    }

}
export default PageContentFrame;