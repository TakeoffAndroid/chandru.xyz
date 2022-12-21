import { CssBaseline, Grid } from "@mui/material";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import EducationPage from "./pages/education";
import AchievementPage from "./pages/achievements";
import ContactPage from "./pages/contacts";
import NavigationDrawer from "./component/drawer";
import { Route, Routes, Navigate } from "react-router-dom"

export default function App() {

  return (
      <>
        <CssBaseline></CssBaseline>
        <Grid container>
          <Grid item xs={1.5}>
            <NavigationDrawer />
          </Grid>
          <Grid item xs={10.5} padding={2}>
              <Routes>
                  <Route path="/" element={<Navigate to="/about" />} />
                  <Route path="/about" element={ <AboutPage /> } />
                  <Route path="/achievement" element={ <AchievementPage /> } />
                  <Route path="/experience" element={ <ExperiencePage /> } />
                  <Route path="/education" element={ <EducationPage /> } />
                  <Route path="/contacts" element={ <ContactPage /> } />
              </Routes>
          </Grid>
        </Grid>
      </>
  );
}
