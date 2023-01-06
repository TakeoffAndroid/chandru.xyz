import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import DrawerItem, {DrawerType} from "../drawerItem";
import Avatar from "@mui/material/Avatar";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {COLORS} from "../../values/colors";

export default function NavigationDrawer() {

  const renderDrawerItems = () => {
      return [
        DrawerType.ABOUT,
        DrawerType.EXPERIENCE,
        DrawerType.EDUCATION,
        DrawerType.ACHIEVEMENTS,
        DrawerType.CONTACTS,
        DrawerType.BLOG
    ].map((element: DrawerType) =>
        <DrawerItem
            drawerType={element}
        ></DrawerItem>
    );
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: COLORS.black
      }}
    >
      <MenuList sx={{ backgroundColor: "transparent" }}>
        <Stack direction="column" alignItems="center">
          <Avatar
            alt="profileimage"
            sx={{ width: 56, height: 56, mt: "36px" }}
            src="https://avatars.githubusercontent.com/u/11768239?v=4"
            style={{
              border: "2px solid white"
            }}
          />
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: "20",
              mt: "24px"
            }}
            variant="inherit"
          >
            Chandrasekar Kuppusamy
          </Typography>
        </Stack>

        <Divider
          sx={{
            backgroundColor: "white",
            mt: "24px",
            opacity: "0.2",
            borderBottomWidth: 0.5
          }}
          variant="fullWidth"
        />
        <Stack sx={{ mt: "24px" }} direction="column">
            { renderDrawerItems() }
        </Stack>
      </MenuList>
    </Box>
  );
}
