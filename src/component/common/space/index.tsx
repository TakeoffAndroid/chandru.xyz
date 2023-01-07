import {Box} from "@mui/material";

type MarginParams = {
    height: string;
}

export const SizeBox = ({ height }: MarginParams) => {
    return (
        <Box sx={{ height: height }}></Box>
    )
}