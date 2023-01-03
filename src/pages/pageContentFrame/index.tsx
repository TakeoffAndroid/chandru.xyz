import * as React from 'react';
import {AboutPage} from "../about";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "../../component/models/profile_data";
import {ExperiencePage} from "../experience";
import {EducationPage} from "../education";
import {AchievementPage} from "../achievements";
import {ContactPage} from "../contacts";
import { useState, useEffect } from "react";

const PageContentFrame = () =>  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://unifront.proxy.beeceptor.com/chandru/aboutme")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("data loaded success")
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    console.log("data loaded with error")

                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div> Error: </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const profileData: ProfileData = JSON.parse(JSON.stringify(data));
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