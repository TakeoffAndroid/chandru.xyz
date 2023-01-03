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
    const [items, setItems] = useState([]);

    const json = `{ "about": {
        "header": "About",
        "subHeader": ["Chandrasekar has vast experience in Tech Leadership, Engineering Management, Developer Evangelism, Product Development and Product Management", "Throughout his career, he has been advising and evangelising companies to help with his tech expertise in Blockchain, Mobile and Web apps", "As an Evangelist, he has taken live sessions, contributed to community open sources and spoken at International tech conferences, hackathons, meetups representing Mobile, Web and Blockchain tech."],
        "tags": ["tech-leadership", "engineering-management", "developer-relations", "developer-advocate", "developer-marketing", "product-management", "product-development"]
        },
  "experience": {
        "header": "Experience",
        "subHeader": ["Experience in Hands on development, people management and project management of client facing user apps"],
        "tags": ["android", "ios", "solidity", "flutter", "react", "node.js", "golang"]
}, "education": {
        "header": "Education",
        "subHeader": ["BS in Electrical Engineering", "MBA in Consultancy Management", "MS in Blockchain and Digital Currency"],
        "tags": ["bachelors", "management", "masters"]
}, "achievement": {
        "header": "Achievements",
        "subHeader": ["First person to present a talk on Mastering Android Studio Templates @ Chicago Roboto, Chicago", "Live sessions on Flutter Test Pyramids @ Google Developer Group, India", "Dev Hiring bootcamp to hire top notch engineers through a week training program", "Workshop on Mobile Engineering practices and development", "Talk on Cracking the crypto apps @ Avalanche summit, Barcelona"],
        "tags": ["conference", "meetup", "hackathon", "hiring", "bootcamp"]
},
  "contact": {
        "header": "Contacts",
        "subHeader": ["Catchup with me on Twitter, LinkedIn, Gmail"],
        "tags": ["connect", "learn", "establish", "network", "tech", "knowledge", "share"]
}
}
`
    const profileData: ProfileData = JSON.parse(json);

    useEffect(() => {
        fetch("https://unifront.proxy.beeceptor.com/chandru/aboutme")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("data loaded success")
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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