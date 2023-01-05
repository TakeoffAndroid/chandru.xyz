import {Stack} from "@mui/material";

export const PageRoot = ({ children }: any) => {
    return <>
        <Stack sx={{width: "100%", height: '100vh', p: "24px"}}
               direction={"column"}
               alignItems={"flex-start"}>
            {children}
        </Stack>
    </>

}
