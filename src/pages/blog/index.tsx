import * as React from 'react';
import {useFetch} from "../../component/hooks/useFetch";
import {PageRoot} from "../../component/common/page";
import {ContentLoading} from "../../component/common/loading";
import {API_URL} from "../../utils/constants";
import {Post} from "../../component/models/blog_post";
import {Margin} from "../../component/common/margin";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";

const BlogPage = () => {
    const [isLoaded, error, result] = useFetch(API_URL.BLOG)
    if (error) {
        return <PageRoot>
            <div> Error:</div>
            ;
        </PageRoot>
    } else if (!isLoaded) {
        return <ContentLoading></ContentLoading>
    } else {
        const posts: [Post] = JSON.parse(JSON.stringify(result));
        return <PageRoot>
            <Margin top={"48px"}/>
            <Grid container spacing={{xs: 4, sm: 4, md: 6, lg: 6, xl: 6}}>
                {posts.map((post) =>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <CardActionArea href={"https://chandrudotxyz.hashnode.dev/".concat(post.slug)} target="_blank">
                            <Card sx={{maxWidth: 345, height: 250}}>
                                <CardContent>
                                    <CardMedia
                                        sx={{objectFit: "cover"}}
                                        component="img"
                                        height="140"
                                        image={post.coverImage ? post.coverImage : "/assets/images/thumbnail_blog.jpg"}
                                    />
                                    <Margin top={ "16px" }/>
                                    <Typography sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                    }}gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>

                    </Grid>
                )}
            </Grid>
        </PageRoot>
    }

}
export default BlogPage;