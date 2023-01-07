import * as React from 'react';
import {PageContent} from "../about";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "../../component/models/profile_data";
import {useFetch} from "../../component/hooks/useFetch";
import {PageRoot} from "../../component/common/page";
import {ContentLoading} from "../../component/common/loading";
import {API_URL, ROUTE_PATH} from "../../utils/constants";
import BlogPage from "../blog";

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
            <Route path={ROUTE_PATH.ABOUT} element={<PageContent bannerUrl={"/assets/images/banner_about.png"} pageData={profileData.about}/>}/>
            <Route path={ROUTE_PATH.EXPERIENCE} element={<PageContent bannerUrl={"/assets/images/banner_experience.png"} pageData={profileData.experience}/>}/>
            <Route path={ROUTE_PATH.EDUCATION} element={<PageContent bannerUrl={"/assets/images/banner_education.png"} pageData={profileData.education}/>}/>
            <Route path={ROUTE_PATH.ACHIEVEMENT} element={<PageContent bannerUrl={"/assets/images/banner_achievement.png"} pageData={profileData.achievement}/>}/>
            <Route path={ROUTE_PATH.CONTACT} element={<PageContent bannerUrl={"/assets/images/banner_contact.png"} pageData={profileData.contact}/>}/>
            <Route path={ROUTE_PATH.BLOG} element={ <BlogPage />}/>
        </Routes>;
    }

}
export default PageContentFrame;