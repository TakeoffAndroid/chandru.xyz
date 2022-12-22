import {Stack} from "@mui/material";

export const PageRoot = ({ children }: any) => {
    return <>
        <Stack sx={{width: "90%", p: "24px"}}
               direction={"column"}
               justifyContent={"flex-start"}>
            {children}
        </Stack>
    </>

}
