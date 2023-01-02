import Typography from "@mui/material/Typography";
import {COLORS} from "../../../values/colors";

type SubHeaderProps = {
    text: string[],
}

export const SubHeaderText = ({text}: SubHeaderProps) => {
    return <ul>
        {renderSubHeaderList({text})}
    </ul>
}

const renderSubHeaderList = ({text}: SubHeaderProps) => {
    return text.map((data) =>
        <li>
            <Typography
                sx={{
                    color: COLORS.secondaryText,
                    fontSize: "16px",
                }}
                variant="inherit"
            >{data}
            </Typography>
        </li>
    );
}