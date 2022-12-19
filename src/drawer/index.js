import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import DrawerItem, { DrawerType } from "../drawerItem";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function NavigationDrawer({ onDrawerItemClicked }) {
  // const renderDrawerItems = () => {
  //   const drawerItems = [
  //     DrawerType.ABOUT,
  //     DrawerType.EXPERIENCE,
  //     DrawerType.EDUCATION,
  //     DrawerType.ACHIEVEMENTS,
  //     DrawerType.CONTACTS
  //   ];
  //   drawerItems.forEach((element) => (
  //     <DrawerItem
  //       drawerType={drawerItems[element]}
  //       onItemMenuClicked={(drawerType) => onDrawerItemClicked(drawerType)}
  //     ></DrawerItem>
  //   ));
  // };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "rgba(35, 35, 35, 1)"
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
          <DrawerItem
            drawerType={DrawerType.ABOUT}
            onDrawerItemClicked={(drawerType) =>
              onDrawerItemClicked(drawerType)
            }
          ></DrawerItem>
          <DrawerItem
            drawerType={DrawerType.EXPERIENCE}
            onDrawerItemClicked={(drawerType) =>
              onDrawerItemClicked(drawerType)
            }
          ></DrawerItem>
          <DrawerItem
            drawerType={DrawerType.EDUCATION}
            onDrawerItemClicked={(drawerType) =>
              onDrawerItemClicked(drawerType)
            }
          ></DrawerItem>
          <DrawerItem
            drawerType={DrawerType.ACHIEVEMENTS}
            onDrawerItemClicked={(drawerType) =>
              onDrawerItemClicked(drawerType)
            }
          ></DrawerItem>
          <DrawerItem
            drawerType={DrawerType.CONTACTS}
            onDrawerItemClicked={(drawerType) =>
              onDrawerItemClicked(drawerType)
            }
          ></DrawerItem>
        </Stack>
      </MenuList>
    </Box>
  );
}
