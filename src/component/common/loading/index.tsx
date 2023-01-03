import {CircularProgress, Stack} from "@mui/material";
import * as React from "react";

export const ContentLoading = () => {
    return <>
        <Stack sx={{width: "90%", height: "100vh", p: "24px"}}
               direction={"column"}
               justifyContent="center"
               alignItems="center">
            <CircularProgress />
        </Stack>
    </>
}
