import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import EducationPage from "./pages/education";
import AchievementPage from "./pages/achievements";
import ContactPage from "./pages/contacts";
import {DrawerType} from "./component/drawerItem";
import NavigationDrawer from "./component/drawer";

export default function App() {
  const [drawerType, setPage] = useState<DrawerType>();

  const renderPage = () => {
    if (drawerType === DrawerType.ABOUT) {
      return <AboutPage/>;
    } else if (drawerType === DrawerType.EXPERIENCE) {
      return <ExperiencePage/>;
    } else if (drawerType === DrawerType.EDUCATION) {
      return <EducationPage/>;
    } else if (drawerType === DrawerType.ACHIEVEMENTS) {
      return <AchievementPage/>;
    } else if (drawerType === DrawerType.CONTACTS) {
      return <ContactPage/>;
    } else {
      return <AboutPage/>;
    }
  };

  return (
      <div className="App">
        <CssBaseline></CssBaseline>
        <Grid container>
          <Grid item xs={1.5}>
            <NavigationDrawer
                onDrawerItemClicked={(drawerType: DrawerType) => {
                  console.log("The drawer type value is " + drawerType);
                  setPage(drawerType);
                }}
            ></NavigationDrawer>
          </Grid>
          <Grid item xs={10.5} padding={2}>
            {renderPage()}
          </Grid>
        </Grid>
      </div>
  );
}
