import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AboutPage } from "../about";
import ExperiencePage from "../experience";
import EducationPage from "../education";
import AchievementPage from "../achievements";
import ContactPage from "../contacts";
import {Route, Routes, Navigate} from "react-router-dom"
import {ProfileData} from "../about/profile_data";
import NavigationDrawer from "../../component/drawer";
import {COLORS} from "../../values/colors";

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function HomePage(props: Props) {
    const json = `{ "about": {
        "header": "About",
        "subHeader": "Chandrasekar has vast experience in Tech Leadership, Engineering Management, Developer Evangelism, Product Development and Product Management. Throughout his career, he has been advising and evangelising companies to help with his tech expertise in Blockchain, Mobile and Web apps. As an Evangelist, he has taken live sessions, contributed to community open sources and spoken at International tech conferences, hackathons, meetups representing Mobile, Web and Blockchain tech.",
        "tags": ["android", "ios", "solidity", "flutter", "react"]}
        }`
    const profileData: ProfileData = JSON.parse(json);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <NavigationDrawer />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: COLORS.white,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: COLORS.black }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="/about"/>}/>
                    <Route path="/about" element={<AboutPage about={ profileData.about } />}/>
                    <Route path="/achievement" element={<AchievementPage/>}/>
                    <Route path="/experience" element={<ExperiencePage/>}/>
                    <Route path="/education" element={<EducationPage/>}/>
                    <Route path="/contacts" element={<ContactPage/>}/>
                </Routes>
            </Box>
        </Box>
    );
}
