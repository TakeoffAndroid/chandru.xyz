import {Stack} from "@mui/material";
import {HeaderText} from "../../component/common/headerText";
import {SubHeaderText} from "../../component/common/subHeaderText";
import { About } from "./profile_data";
import {Margin} from "../../component/common/margin";

type AboutProps = {
    about: About
}

export const AboutPage = ({ about } : AboutProps) => {
    return <Stack sx={{height: "100vh", p: "24px"}}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}>
        <HeaderText text={ about.header }/>
        <Margin top='24px'></Margin>
        <SubHeaderText text={about.subHeader}/>
    </Stack>;
}
