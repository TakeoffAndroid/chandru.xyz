import {Box} from "@mui/material";

type MarginParams = {
    top: string;
}

export const Margin = ({ top }: MarginParams) => {
    return (
        <Box sx={{ mt: top }}></Box>
    )
}