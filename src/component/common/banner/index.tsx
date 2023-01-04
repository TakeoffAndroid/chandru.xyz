import {Box} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {COLORS} from "../../../values/colors";

type BannerProps = {
    image: string
}

export const Banner = ({image}: BannerProps) => {
    return <img
            src={image} style={{width: 400, height: 300, objectFit: "contain", border: "1px solid #DCDCDC"}}></img>

}
