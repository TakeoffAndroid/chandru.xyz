import {CssBaseline, Grid} from "@mui/material";
import { AboutPage } from "./pages/about";
import ExperiencePage from "./pages/experience";
import EducationPage from "./pages/education";
import AchievementPage from "./pages/achievements";
import ContactPage from "./pages/contacts";
import NavigationDrawer from "./component/drawer";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "./pages/about/profile_data";

export default function App() {
    const json = `{ "about": {
        "header": "Chandrasekar Kuppusamy",
        "subHeader": "Chandrasekar has vast experience in Tech Leadership, Engineering Management, Developer Evangelism, Product Development and Product Management. Throughout his career, he has been advising and evangelising companies to help with his tech expertise in Blockchain, Mobile and Web apps. As an Evangelist, he has taken live sessions, contributed to community open sources and spoken at International tech conferences (Avalanche summit - Barcelona, Chicago Roboto - Chicago), hackathons, meetups representing Mobile, Web and Blockchain tech.",
        "tags": ["android", "ios", "solidity", "flutter", "react"]}
        }`
    const profileData: ProfileData = JSON.parse(json);
    return (
        <>
            <CssBaseline></CssBaseline>
            <Grid container>
                <Grid item xs={1.5}>
                    <NavigationDrawer/>
                </Grid>
                <Grid item xs={10.5} padding={2}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/about"/>}/>
                        <Route path="/about" element={<AboutPage about={ profileData.about } />}/>
                        <Route path="/achievement" element={<AchievementPage/>}/>
                        <Route path="/experience" element={<ExperiencePage/>}/>
                        <Route path="/education" element={<EducationPage/>}/>
                        <Route path="/contacts" element={<ContactPage/>}/>
                    </Routes>
                </Grid>
            </Grid>
        </>
    );
}
