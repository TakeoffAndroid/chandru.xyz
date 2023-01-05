type BannerProps = {
    image: string
}

export const Banner = ({image}: BannerProps) => {
    return <img
            src={image} style={{width: '100%', height: '35%', objectFit: "contain", border: "1px solid #DCDCDC"}}></img>

}
