import Typography from "@mui/material/Typography";
import {COLORS} from "../../../values/colors";

type HeaderProps = {
    text: string,
}

export const HeaderText = ({text}: HeaderProps) => {
    return (
        <Typography
            sx={{
                color: COLORS.primaryText,
                fontSize: "36px",
            }}
            variant="inherit"
        >{text}</Typography>
    )
}