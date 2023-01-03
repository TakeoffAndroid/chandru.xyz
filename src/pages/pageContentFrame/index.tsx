import * as React from 'react';
import {AboutPage} from "../about";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "../../component/models/profile_data";
import {ExperiencePage} from "../experience";
import {EducationPage} from "../education";
import {AchievementPage} from "../achievements";
import {ContactPage} from "../contacts";
import {useFetch} from "../../component/hooks/useFetch";
import {PageRoot} from "../../component/common/page";
import {CircularProgress} from "@mui/material";
import {ContentLoading} from "../../component/common/loading";

const PageContentFrame = () => {
    const [isLoaded, error, result] = useFetch("https://unifront.proxy.beeceptor.com/chandru/aboutme")
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
            <Route path="/about" element={<AboutPage about={profileData.about}/>}/>
            <Route path="/experience" element={<ExperiencePage experience={profileData.experience}/>}/>
            <Route path="/education" element={<EducationPage education={profileData.education}/>}/>
            <Route path="/achievement" element={<AchievementPage achievement={profileData.achievement}/>}/>
            <Route path="/contact" element={<ContactPage contact={profileData.contact}/>}/>
        </Routes>;
    }

}
export default PageContentFrame;