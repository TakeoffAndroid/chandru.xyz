import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Person4Rounded from "@mui/icons-material/Person4Rounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import { NavLink } from "react-router-dom";

export enum DrawerType {
    ABOUT,
    EXPERIENCE,
    EDUCATION,
    ACHIEVEMENTS,
    CONTACTS
}

export const renderDrawerIcon = (drawerType: DrawerType) => {
    switch (drawerType) {
        case DrawerType.ABOUT:
            return <Person4Rounded fontSize="small"/>;
        case DrawerType.EXPERIENCE:
            return <WorkRoundedIcon fontSize="small"/>;
        case DrawerType.EDUCATION:
            return <SchoolRoundedIcon fontSize="small"/>;
        case DrawerType.ACHIEVEMENTS:
            return <EmojiEventsRoundedIcon fontSize="small"/>;
        case DrawerType.CONTACTS:
            return <AlternateEmailRoundedIcon fontSize="small"/>;
    }
};

export const renderDrawerText = (drawerType: DrawerType) => {
    switch (drawerType) {
        case DrawerType.ABOUT:
            return "About";
        case DrawerType.EXPERIENCE:
            return "Experience";
        case DrawerType.EDUCATION:
            return "Education";
        case DrawerType.ACHIEVEMENTS:
            return "Achievements";
        case DrawerType.CONTACTS:
            return "Contacts";
    }
};

export const getRoutes = (drawerType: DrawerType) => {
    switch (drawerType) {
        case DrawerType.ABOUT:
            return "/about";
        case DrawerType.EXPERIENCE:
            return "/experience";
        case DrawerType.EDUCATION:
            return "/education";
        case DrawerType.ACHIEVEMENTS:
            return "/achievement";
        case DrawerType.CONTACTS:
            return "/contacts";
    }
};

type DrawerItemProps = {
    drawerType: DrawerType,
}

const DrawerItem = ({drawerType}: DrawerItemProps) => {
    return (
        <NavLink
          to={getRoutes(drawerType)} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <MenuItem
            sx={{p: "16px"}}
        >
            <ListItemIcon sx={{color: "rgba(255, 255, 255, 1)"}}>
                {renderDrawerIcon(drawerType)}
            </ListItemIcon>
            <Typography
                sx={{
                    color: "rgba(255, 255, 255, 1)",
                    opacity: "0.6",
                    fontSize: "16"
                }}
                variant="inherit"
            > {renderDrawerText(drawerType)}
            </Typography>
        </MenuItem>
        </NavLink>
    );
};

export default DrawerItem;
