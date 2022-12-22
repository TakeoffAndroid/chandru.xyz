import Typography from "@mui/material/Typography";
import {COLORS} from "../../../values/colors";

type SubHeaderProps = {
    text: string,
}

export const SubHeaderText = ({text}: SubHeaderProps) => {
    return (
        <Typography
            sx={{
                color: COLORS.secondaryText,
                fontSize: "18px",
            }}
            variant="inherit"
        >{text}</Typography>
    )
}