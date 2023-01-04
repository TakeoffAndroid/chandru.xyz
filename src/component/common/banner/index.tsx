import {Box} from "@mui/material";

type BannerProps = {
    image: string
}

export const Banner = ({image}: BannerProps) => {
    return <Box
        sx={{width: "100hw", height: "350px", display: "flex", alignItems: 'flex-start', justifyContent: "center"}}><img
        src={image} style={{width: "auto", height: 350}}></img></Box>
}
